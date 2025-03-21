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

# Calculate the total score for each survey per participant
def calculate_total_score(df_surveys):
    df = df_surveys.copy()
    # List column names with _Q01
    Q01_columns = [col for col in df.columns if '_Q01' in col]
    # Sepparate the string before the first underscore
    survey_names = [col.split('_')[0] for col in Q01_columns]
    # Remove duplicates
    survey_names = list(set(survey_names))
    print("Survey names: ", survey_names)

    # Find columns with "_Q" in the name (pvp9 and lbt2 are binary)
    items = []
    for i in df.columns:
        if "_Q" in i:
            items.append(i)

    # Calculate the total score for each survey per participant
    for survey_name in survey_names:
        # List the column names for the current survey
        survey_columns = [col for col in items if survey_name in col]
        if survey_name == 'whodas12':
            survey_columns = survey_columns[:-3]
        print(survey_columns)
        print(len(survey_columns))
        # Calculate the total score for the current survey
        df[survey_name + '_total_score'] = df[survey_columns].sum(axis=1)

    return df

# Add inattentive column per survey
# 'total_inattentive' records the total number of inattentive answers for each participant
# (excluding the '_command' inattentive answers)
# *** When importing the data, filter according to:
# excluded = (total_inattentive>2) | (sum(col with '_command')>0)
def add_inattentive_column(df_surveys):
    df = df_surveys.copy()
    # Find the columns with 'infrequency' in it
    infrequency_cols = df_surveys.columns[df_surveys.columns.str.contains('infrequency')]
    # count the number of inattentive answers for each infrequency question
    # gad7, gbq21, pswq8, pvp9, cbs7, ius12, audit10, yboc_cb10, lbt2,
    # cape15, eat26, audit10, bis8, phq9, dass21, dsm23, whodas12
    for col in infrequency_cols:
        n = col.split('_')[0]
        new_col = n + '_inattentive'
        print("From js: ", df[col].value_counts())
        if n == 'gad7' or n == 'pswq8':
            df[new_col] = df[col].apply(lambda x: 0 if x == 0 else 1)
        elif n == 'gbq21':
            df[new_col] = df[col].apply(lambda x: 0 if x == 6 else 1)
        elif n == 'pvp9' or n == 'lbt2' or n == 'bis8':
            df[new_col] = 0
        elif n == 'cbs7':
            df[new_col] = df[col].apply(lambda x: 0 if x == 4 else 1)
        elif n == 'ius12':
            df[new_col] = df[col].apply(lambda x: 0 if x == 0 or x == 1 else 1)
        elif n == 'audit10':
            df[new_col] = df[col].apply(lambda x: 0 if x == 1 else 1)
        elif n == 'yboc':
            new_col = 'yboc_command'
            df[new_col] = df[col].apply(lambda x: 0 if x == 1 else 1)
        elif n == 'cape15':
            new_col = 'cape15_command'
            df[new_col] = df[col].apply(lambda x: 0 if x == 4 else 1)
        elif n == 'eat26':
            df[new_col] = df[col].apply(lambda x: 1 if x == 5 else 0)
        elif n == 'phq9':
            df[new_col] = df[col].apply(lambda x: 0 if x == 1 else 1)
        elif n == 'dass21':
            df[new_col] = df[col].apply(lambda x: 0 if x == 3 else 1)
        elif n == 'dsm23':
            df[new_col] = df[col].apply(lambda x: 0 if x == 4 else 1)
        elif n == 'whodas12':
            new_col = 'whodas12_command'
            df[new_col] = df[col].apply(lambda x: 0 if x == 4 or x==0 else 1)

        print("From response: ", df[new_col].value_counts())
    df['total_inattentive'] = df[[col for col in df.columns if 'inattentive' in col]].sum(axis=1)

    return df

# Metadata validation (match workerId and subId)
# ### Goals
# - match 'workerId' with 'subId' (some participants may have multiple subId)
# - extract 'interview_date' for NDA data submission
# ### Used files and folders
# - from saved '_subID.pkl' extract subject Ids that have valid data (folderpath + processed/)
# - from metadata folder match 'workerId' and extract date information (folderpath + metadata/)
# ### Outputs
# - '_matched_data.csv' with headers ['workerId', 'subId', 'interview_date'] (folderpath + processed/)
# Function to convert timestamp to MM/DD/YYYY format
def format_date(timestamp):
    date_object = datetime.strptime(timestamp, '%Y-%m-%d %H:%M:%S')
    return date_object.strftime('%m/%d/%Y')

# Function to match workerId with subId and extract interview date from metadata
# save the matched workerId and subId in a CSV file
def match_workerId_subId(df_surveys, label, output_path):
    # Step 1: Read subIDs from the csv file into a set
    subIDs = set(df_surveys['subId'])

    # Step 2: Read metadata from the files in the folder
    metadata_folder = 'metadata/' + label
    metadata_files = [file for file in os.listdir(metadata_folder) if not file.startswith(".")]

    # Step 3 & 4: Match subIDs from metadata and save in CSV
    # List to hold matched data
    matched_data = []
    for file_name in metadata_files:
        with open(os.path.join(metadata_folder, file_name), 'r') as file:
            metadata = {}
            # print(f"Processing {file_name}")
            for line in file:
                if len(line.strip().split('\t')) == 3:
                    date, key, value = line.strip().split('\t')
                if key not in metadata.keys():
                    metadata[key] = [value]
                else:
                    metadata[key].append(value)
            sub_id = metadata.get('subId')
            worker_id = metadata.get('workerId')
            if sub_id:  # check if sub_id is empty (some metadata does not have subID)
                for _id in sub_id:
                    if _id in subIDs:
                        date_info = format_date(date)
                        matched_data.append({'workerId': worker_id[0], 'subId': _id, 'interview_date': date_info})
    print(f"Total number of metadata matched subjects ({label}): {len(matched_data)}")

    # Write matched data to CSV
    output_csv = output_path + label + '_matched_Id.csv'
    with open(output_csv, 'w', newline='') as csvfile:
        fieldnames = ['workerId', 'subId', 'interview_date']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for data in matched_data:
            writer.writerow(data)


# Function to fill missing values in the demographic data using the Prolific demographic data
def fill_missing_demos(df_surveys, df_prolific):
    # Extract columns with 'demographics' in the column name
    demographic_cols = df_surveys.filter(like='demographics').columns
    # Extract the 'workerId' column with 'demographics' columns into a new df
    survey_demo = df_surveys[['workerId'] + demographic_cols.tolist()]
    # Drop the demographic columns from the survey data
    df_surveys.drop(columns=demographic_cols, inplace=True)

    # Extract the demographic columns from the Prolific data
    prolific_demo = df_prolific[['Participant id', 'Age', 'Sex', 'Ethnicity simplified', 'Employment status']]

    # Merge the demographic data with the prolific data
    df_demo_merged = survey_demo.merge(prolific_demo, left_on='workerId', right_on='Participant id', how='left')
    if df_demo_merged.shape[0] != survey_demo.shape[0]:
        print("Mismatch in the number of rows")
    # print("Merged df shape: ", df_demo_merged.shape)
    # print("Original df shape: ", survey_demo.shape)

    # Match Age, Sex, Ethnicity
    df_demo_merged['demographics_gender-categorical'] = df_demo_merged['demographics_gender-categorical'].fillna(
        df_demo_merged['Sex'])
    df_demo_merged['demographics_race'] = df_demo_merged['demographics_race'].fillna(df_demo_merged['Ethnicity simplified'])
    df_demo_merged['demographics_age'] = df_demo_merged['demographics_age'].fillna(df_demo_merged['Age'])
    df_demo_merged['demographics_age'] = pd.to_numeric(df_demo_merged['demographics_age'], errors='coerce')

    # add age_months column
    age_month = df_demo_merged['demographics_age']*12
    df_demo_merged['demographics_age_month'] = age_month.astype('Int64')

    # add sex abbreviation column
    gender_mapping = {'Female': 'F', 'Male': 'M', 'Other': 'O', 'Rather not say': 'NR'}
    # Create the new 'sex' column based on the mapping
    df_demo_merged['demographics_sex'] = df_demo_merged['demographics_gender-categorical'].map(gender_mapping)

    # drop excess columns
    df_demo_merged = df_demo_merged.drop(['Participant id', 'Sex', 'Ethnicity simplified', 'Age'], axis=1)

    # Rename the columns
    df_demo_merged.rename(columns={'Employment status': 'demographics_employment_status'}, inplace=True)
    # Replace 'demographics' with 'demo' in the dictionary keys to avoid value length issues
    df_demo_merged.columns = [col.replace('demographics', 'demo') for col in df_demo_merged.columns]
    # print(df_demo_merged.columns)

    # Clean data type
    # numerical columns to 'Int64'
    num_cols = ['demo_age', 'demo_height_feet', 'demo_height_inches', 'demo_weight',
                'demo_age_month']
    for col in num_cols:
        df_demo_merged[col] = pd.to_numeric(df_demo_merged[col], errors='coerce')

    # Merge the demographic data with the survey data
    df_surveys_demo_edited = df_surveys.merge(df_demo_merged, on='workerId', how='left')

    return df_surveys_demo_edited

# Function to clean the survey time elapsed data
def clean_survey_time(df_surveys, df_trials):
    # Extract the time_elapsed before surveys (after last trial)
    time_elapsed_trials = pd.DataFrame(df_trials.groupby('subId')['time_elapsed'].max()).reset_index()
    # Extract subject_id, survey name, and time_elapsed data
    time_cols = df_surveys.columns[df_surveys.columns.str.contains('time_elapsed')]
    survey_time = df_surveys[pd.Index(['subId'] + time_cols.tolist())]
    # Merge two dataframes
    survey_time = pd.merge(time_elapsed_trials, survey_time, on='subId')

    # Process the time as difference between two surveys
    cols_to_process = survey_time.columns[survey_time.columns.str.contains('_time_elapsed')]
    survey_time_df = survey_time[['subId', 'time_elapsed']].copy()
    col_temp = 'time_elapsed'
    for col in cols_to_process:
        survey_time_df[col] = survey_time[col] - survey_time[col_temp]
        col_temp = col
    survey_time_df = survey_time_df.set_index('subId')
    survey_time_df = (survey_time_df / 60000).round(2)  # convert to minutes

    # Add surveys with two parts together
    survey_time_df['cbs7_part1_time_elapsed'] += survey_time_df['cbs7_part2_time_elapsed']
    survey_time_df['whodas12_part1_time_elapsed'] += survey_time_df['whodas12_part2_time_elapsed']

    survey_time_df.rename(columns={'time_elapsed': 'task_time_elapsed',
                                   'cbs7_part1_time_elapsed': 'cbs7_time_elapsed',
                                   'whodas12_part1_time_elapsed': 'whodas12_time_elapsed'}, inplace=True)
    survey_time_df.drop(columns=['cbs7_part2_time_elapsed', 'whodas12_part2_time_elapsed'], inplace=True)

    # Identify columns to drop in df_surveys
    columns_to_drop = [col for col in df_surveys.columns if '_time_elapsed' in col]
    # Drop columns containing '_time_elapsed'
    df_surveys.drop(columns=columns_to_drop, inplace=True)

    # Merge the dataframes on 'subID'
    cleaned_all = pd.merge(df_surveys, survey_time_df, on='subId', how='left')

    return cleaned_all
def survey_time_plot(df_surveys):
    time_cols = df_surveys.columns[df_surveys.columns.str.contains('time_elapsed')]
    survey_time_df = df_surveys[time_cols]
    survey_time_df.columns = survey_time_df.columns.str.replace('_time_elapsed', '')
    # Calculate the average time_elapsed for each survey
    average_time = survey_time_df.mean()

    # Create a box plot with outliers labeled and scatter the data from each participant
    plt.figure(figsize=(16, 8))
    sns.boxplot(data=survey_time_df.drop('task', axis=1))

    # Plot the average time_elapsed for each survey
    for idx, avg_time in enumerate(average_time[1:]):
        plt.text(idx, avg_time, f'{avg_time:.2f}', ha='center', va='bottom', fontsize=12, color='blue')

    # Label outliers with subject_id and survey name
    for survey_column in survey_time_df.columns:
        small_outliers = survey_time_df[survey_column][survey_time_df[survey_column] <
                                                       survey_time_df[survey_column].quantile(0.25) -
                                                       1.5 * (survey_time_df[survey_column].quantile(0.75) -
                                                              survey_time_df[survey_column].quantile(0.25))]
        #     large_outliers = survey_time_df[survey_column][survey_time_df[survey_column] >
        #                                              survey_time_df[survey_column].quantile(0.75) +
        #                                              1.5 * (survey_time_df[survey_column].quantile(0.75) -
        #                                                     survey_time_df[survey_column].quantile(0.25))]
        for index in small_outliers.index:
            print(
                f'Small Outlier: Subject ID {index}, Survey Name {survey_column}, Time Elapsed {small_outliers[index]}')
    #     for index in large_outliers.index:
    #         print(f'Large Outlier: Subject ID {index}, Survey Name {survey_column}, Time Elapsed {large_outliers[index]}')

    # Customize plot
    plt.xticks(rotation=15, fontsize=14)
    plt.xlabel('Survey Name', fontsize=20)
    plt.ylabel('Time Elapsed', fontsize=20)
    plt.title('Time Elapsed for Each Survey', fontsize=28)
    plt.ylim(0, 7)
    plt.grid(True)
    plt.tight_layout()

    # Show plot
    plt.show()


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


# # Function to save the data to pickle
# def save_trials_to_pickle(trials_df, label):
#     trials_folder = 'processed_all/' + label + '_bird_trials/'
#     # Check if the folder exists, if not, create it
#     if not os.path.exists(trials_folder):
#         os.makedirs(trials_folder)
#         print(f"Folder '{trials_folder}' created successfully.")
#     else:
#         print(f"Folder '{trials_folder}' already exists.")
#
#     df = trials_df.copy()
#
#     # Group the DataFrame by subject_id and randomized
#     grouped = df.groupby(['subId'])
#
#     # Loop through each group
#     for subject_id, group_df in grouped:
#         bucket_pos_mat = np.zeros((50, 4))
#         # Extract bucket_position for the current subject_id
#         for i in range(4):  # loop through 0-3 randomized blocks
#             bucket_pos = group_df[group_df['randomized'] == i]['bucket_position'].values
#             bucket_pos_mat[:, i] = bucket_pos
#         # save matrix
#         subject_id = subject_id[0][1:-1]
#         with open(trials_folder + f'{subject_id}_bucket_position.pkl', 'wb') as f:
#             pickle.dump(bucket_pos_mat, f)
#
#     bird_pos_mat = np.zeros((50, 4))
#     bag_pos_mat = np.zeros((50, 4))
#     for i in range(4):  # loop through 0-3 randomized blocks
#         bird_pos = group_df[group_df['randomized'] == i]['bird_position'].values
#         bird_pos_mat[:, i] = bird_pos
#         bag_pos = group_df[group_df['randomized'] == i]['bag_position'].values
#         bag_pos_mat[:, i] = bag_pos
#     with open(trials_folder + label + '_bird_position.pkl', 'wb') as f:
#         pickle.dump(bird_pos_mat, f)
#     with open(trials_folder + label + '_bag_position.pkl', 'wb') as f:
#         pickle.dump(bag_pos_mat, f)