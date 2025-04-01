import os
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression


def model_neutral_lr(df):
    """
    Calculate per-block learning rates for each subject from a CSV file containing all participant data.

    The CSV file should contain at least the following columns:
      - subId           : subject identifier
      - trial           : trial number
      - block           : block identifier (e.g., 1, 2, 3, 4)
      - randomized      : randomized sequence order for blocks
      - bag_position    : bag position for each trial
      - bucket_position : bucket position for each trial

    For each subject, this function:
      1. Groups the data by block.
      2. For each block:
         - Sorts the trials by the 'trial' column.
         - Computes the update: Δbucket = bucket_position[t+1] - bucket_position[t].
         - Computes the prediction error: PE = bag_position[t] - bucket_position[t] (for t=1...N-1).
         - Fits a linear regression: Δbucket = α + β * PE.
         - Extracts β as the learning rate.
         - Records the block's randomized order (using the first value from the 'randomized' column).
      3. Sorts the block results based on the randomized value.
      4. Returns a dictionary per subject with:
             'subId': subject ID,
             'block': list of block indices (0-indexed, e.g., [0,1,2,3]),
             'randomized': list of randomized sequence values,
             'learning_rate': list of per-block learning rates.

    Parameters:
      df (dataframe): Dataframe containing all subject trial data.

    Returns:
      list of dict: Each dict corresponds to one subject's results.
    """
    subject_results = []

    # Group data by subject ID
    for sub_id, sub_df in df.groupby('subId'):
        per_block = []  # to store (block, randomized, learning_rate) for each block

        # Group data by block within the subject
        for block_id, block_df in sub_df.groupby('block'):
            # Ensure trials are in proper order
            block_df = block_df.sort_values(by='trial')

            # Get bucket and bag positions
            bucket_pos = block_df['bucket_position'].values
            bag_pos = block_df['bag_position'].values

            # If there are fewer than 2 trials, we cannot compute a change
            if len(bucket_pos) < 2:
                lr_coeff = np.nan
            else:
                # Compute trial-to-trial bucket update
                lr_update = bucket_pos[1:] - bucket_pos[:-1]
                # Compute prediction error for each trial (except the last one)
                lr_pred_error = bag_pos[:-1] - bucket_pos[:-1]

                # Fit linear regression: Δbucket = α + β * (PE)
                X = lr_pred_error.reshape(-1, 1)
                y = lr_update
                model = LinearRegression()
                model.fit(X, y)
                lr_coeff = model.coef_[0]

            # Retrieve the randomized order value (assuming it's constant within a block)
            randomized_val = block_df['randomized'].iloc[0]

            per_block.append((block_id, randomized_val, lr_coeff))

        # Sort the block results by the randomized order
        per_block_sorted = sorted(per_block, key=lambda x: x[1])

        # Extract sorted block ids, randomized values, and learning rates.
        # Convert block id to 0-indexed: if block ids start at 1, subtract 1.
        blocks_sorted = [int(block) - 1 if int(block) > 0 else int(block) for block, _, _ in per_block_sorted]
        randomized_sorted = [rand for _, rand, _ in per_block_sorted]
        learning_rates_sorted = [lr for _, _, lr in per_block_sorted]

        subject_results.append({
            'subId': sub_id,
            'block': blocks_sorted,
            'randomized': randomized_sorted,
            'learning_rate': learning_rates_sorted
        })

    return subject_results


# Observation visualization
# - randomized = 0: low volatility (bird position), low stochasticity (bag position)
# - randomized = 1: high volatility, low stochasticity
# - randomized = 2: low volatility, high stochasticity
# - randomized = 3: high volatility, high stochasticity
def trials_plot(df_trials):
    # Get the index of subject_id
    subject_id = df_trials['subId'].value_counts().index
    sub_0_df = df_trials[df_trials['subId'] == subject_id[0]]
    # sub_1_df = df_trials[df_trials['subId'] == subject_id[1]]

    # Define the blocks
    blocks = [1, 2, 3, 4]

    # Set up the subplot grid
    fig, axes = plt.subplots(nrows=2, ncols=2, figsize=(18, 12))

    # Flatten the axes array for easier iteration
    axes = axes.flatten()

    # Iterate over each block and plot the positions
    for i, block in enumerate(blocks):
        # Filter the DataFrame for the current block
        df_block = sub_0_df[sub_0_df['block'] == block]

        # Get the randomized value for the current block
        randomized = df_block['randomized'].iloc[0]

        # Plot bird position, bag position, and bucket position
        ax = axes[i]
        ax.plot(df_block['trial'], df_block['bird_position'], label='Bird Position', marker='o')
        ax.plot(df_block['trial'], df_block['bag_position'], label='Bag Position', marker='s')
        ax.plot(df_block['trial'], df_block['bucket_position'], label='Bucket Position', marker='^')

        ax.set_ylim(0, 100)
        ax.set_xlabel('Trial', fontsize=12)
        ax.set_ylabel('Position', fontsize=12)
        ax.set_title(f'Block {block} (randomized={randomized})', fontsize=14)
        ax.legend()
        ax.grid(True)

    # Adjust layout and display the plot
    plt.tight_layout()
    plt.show()


# Helper functions for data processing & plotting
# === Global Plot Settings ===
TITLE_FONTSIZE = 12
LABEL_FONTSIZE = 12
TICK_FONTSIZE = 10
LEGEND_FONTSIZE = 11
BAR_COLORS = ['blue', 'orange']
EFFECT_COLORS = ['red', 'cyan']
HIST_COLOR = 'grey'
ALPHA_BAR = 0.5
ALPHA_HIST = 0.5
XLIM_EFFECT = [-1, 1]

LINE_ALPHA = 0.3
LINE_WIDTH = 2

save_path = "../saved_figures/"
if not os.path.exists(save_path):
    os.makedirs(save_path)

def serr(x, dim=0):
    """Calculate the standard error of the mean."""
    x = np.asarray(x)  # Convert the input to a NumPy array
    s = np.std(x, axis=dim, ddof=1)  # Standard deviation
    n = x.shape[dim]  # Number of samples along the given dimension
    return s / np.sqrt(n)

def plot_bar(data_mean, data_se=None, ylabel='', xlabel='', legend_title='',
             title=None, ylim=None, show_legend=False, show_error=True, save_path=None):
    labels = ['Small', 'Large']
    x = np.arange(len(labels))
    width = 0.35

    fig, ax = plt.subplots(figsize=(3.5, 3))

    # Left bars
    ax.bar(
        x - width / 3, data_mean[:2], width / 2,
        yerr=data_se[:2] if (show_error and data_se is not None) else None,
        color=BAR_COLORS[0], label='Small'
    )

    # Right bars
    ax.bar(
        x + width / 3, data_mean[2:], width / 2,
        yerr=data_se[2:] if (show_error and data_se is not None) else None,
        color=BAR_COLORS[1], label='Large'
    )

    ax.set_xlabel(xlabel, fontsize=LABEL_FONTSIZE)
    ax.set_ylabel(ylabel, fontsize=LABEL_FONTSIZE)
    ax.set_xticks(x)
    ax.set_xticklabels(labels, fontsize=TICK_FONTSIZE)
    ax.tick_params(axis='y', labelsize=TICK_FONTSIZE)

    if title:
        ax.set_title(title, fontsize=TITLE_FONTSIZE)
    if ylim:
        ax.set_ylim(ylim)

    if show_legend:
        ax.legend(title=legend_title, fontsize=LEGEND_FONTSIZE, title_fontsize=LEGEND_FONTSIZE)

    ax.grid(False)
    plt.tight_layout()

    if save_path:
        plt.savefig(save_path, dpi=300, bbox_inches='tight')
    plt.show()
