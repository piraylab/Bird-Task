import os
import pandas as pd
# Metadata time format
from datetime import datetime
# Data saving
import pickle
import os
import csv
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np


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
    s = np.std(x, axis=dim, ddof=1)  # Standard deviation
    n = x.shape[dim]  # Number of samples
    return s / np.sqrt(n)

def preprocess_effect_data(lr):
    """Preprocess data for effect size calculation."""
    transformation_matrix = np.array([[-1, -1, 1, 1], [-1, 1, -1, 1]]).T
    f = np.dot(lr, transformation_matrix)
    mf = np.mean(f, axis=0)
    ef = serr(f)
    return mf, ef, f[:, 0], f[:, 1]  # bs, bv

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

def plot_effect_size(mf, ef, bs, bv, save_path=None):
    fig, ax = plt.subplots(figsize=(8, 3))
    np.random.seed(42)

    for bsi, bvi in zip(bs, bv):
        y_coords = np.array([1, 2]) + np.random.randn(2) * 0.05
        ax.plot([bsi, bvi], y_coords, color='gray', alpha=0.3, linewidth=0.5)
        ax.scatter([bsi], [y_coords[0]], color='black', s=1)
        ax.scatter([bvi], [y_coords[1]], color='black', s=1)

    # Mean bars
    ax.barh(0.7, mf[0], xerr=ef[0], color=EFFECT_COLORS[0], alpha=ALPHA_BAR, height=0.2, label='True Stochasticity')
    ax.barh(2.3, mf[1], xerr=ef[1], color=EFFECT_COLORS[1], alpha=ALPHA_BAR, height=0.2, label='True Volatility')

    # Aesthetics
    ax.axvline(0, color='black', linestyle='--', linewidth=1)
    ax.set_yticks([1, 2])
    ax.set_yticklabels(['True \nStochasticity', 'True \nVolatility'], fontsize=LABEL_FONTSIZE)
    ax.tick_params(axis='y', length=0)
    ax.set_xlabel('Effect Size', fontsize=LABEL_FONTSIZE)
    ax.set_xlim(XLIM_EFFECT)
    ax.set_ylim([0.3, 2.7])
    ax.grid(False)
    plt.tight_layout()

    if save_path:
        plt.savefig(save_path, dpi=300, bbox_inches='tight')
    plt.show()