Bird Task 
=============

Project Overview
----------------

**Brief introduction**:

The Bird Task aims to investigate human adaptive learning under uncertainty by systematically manipulating two types of environmental noise: volatility (random changes in a latent cause) and stochasticity (random, moment-to-moment observation noise). Participants observe outcomes influenced by both sources of noise and must adapt their predictions accordingly. The general structure of the task involves participants controlling a bucket to catch bags dropped by an invisible bird. The bird’s movement represents volatility, and the variability in where bags land, due to wind conditions, represents stochasticity. The task is structured into four blocks following a 2x2 factorial design, each block systematically varying levels of volatility and stochasticity to measure their distinct influences on learning rate adjustments.

**Intended usage**:

This task is intended for researchers interested in human learning and decision-making under uncertainty, especially those studying reinforcement learning, Bayesian inference, and computational psychiatry. Researchers can reuse and adapt this task to examine how participants discriminate different sources of uncertainty, measure individual differences in adaptive learning, or investigate maladaptive learning patterns associated with psychiatric conditions such as anxiety. The task design allows precise control over noise characteristics and provides data amenable to both model-agnostic and model-based analyses, facilitating investigations of the underlying computational processes in adaptive learning.

Setup and Installation
----------------------

**Requirements**:

- Python (version >= 3.6)
- Flask==1.1.2
- Gunicorn
- Numpy

This task is developed using jspsych library. Please refer to https://www.jspsych.org/latest/ for detailed function explanation. 
Additionally, this task uses the NivTurk platform for online behavioral experiments. For detailed installation instructions and the user manual on how to develop and serve experiments, please refer to the official NivTurk documentation: https://nivlab.github.io/nivturk/

**Installation steps**:

  git clone https://github.com/piraylab/Bird-Task-Demo.git
  cd Bird-Task-Demo
  pip install -r requirements.txt

Task Structure
--------------

**File organization**:

Clearly document the directory structure, describing the main files and their purpose::

  Bird-Task-Demo/
    ├── app/
    │   ├── app.ini (Contains configuration settings; toggle debug mode, and alter CODE_SUCCESS and CODE_REJECT according to Prolific settings)
    │   ├── static/
    │   │   ├── img/ (Contains images used in the task)
    │   │   ├── js/
    │   │   ├── lib/ (Contains Jspsych library)
    │   │   ├── mine/ (Contains files for task design, comprehension checks, and instructions)
    │   │   ├── new/ (Contains additional questionnaires)
    │   │   ├── rpm/ (Contains Raven's Progressive Matrices task files)
    │   │   └── surveys/ (Contains individual survey files in JavaScript)
    │   └── templates/
    │       └── experiment.html (Main HTML file running the task)
    ├── data/ (Directory where participant data are saved)
    ├── metadata/ (Directory for metadata files)
    ├── reject/ (Directory for rejected data files)
    ├── analysis_code/ (Contains code for raw data extraction and preprocesssing)
    ├── README.rst
    └── requirements.txt 

**Task flow**:

Participants complete the task in four blocks, each consisting of 50 trials. Each trial involves moving a bucket horizontally to catch bags dropped by an invisible bird. Participants cannot move the bucket once the bag appears. The bag’s drop position varies according to two factors:

- **Volatility**: Represents the bird's unpredictable horizontal movement (diffusion noise).
- **Stochasticity**: Represents the randomness due to external factors (observation noise, e.g., wind conditions).

The task systematically manipulates these two factors across blocks in a 2x2 factorial design:

1. Low volatility, low stochasticity
2. Low volatility, high stochasticity
3. High volatility, low stochasticity
4. High volatility, high stochasticity

Participants are unaware of the exact volatility and stochasticity levels. Each block begins with an announcement about a new bird and new wind conditions. Participants must use previous bag-drop locations to infer and adjust to the underlying factors, updating their predictions accordingly.

Following the main task, participants complete additional questionnaires and comprehension checks included in the experiment. (Not shown in the demos for simplicity)


Running the Task
----------------

**Local testing**:

Visit Nivturk user manual (Developing experiments): https://nivlab.github.io/nivturk/docs/basic-usage/development/)

**Online deployment**:

Visit Nivturk user manual (Serving experiments): https://nivlab.github.io/nivturk/docs/basic-usage/serving/

Data Structure
--------------

Participant data is initially saved as JSON files containing detailed trial-level information. After processing, data are structured into clearly formatted CSV files containing the following variables:

- **Participant identifiers**: `subId`, `workerId`
- **Trial details**: `block`, `trial`, `bird_position`, `bag_position`, `bucket_position`, `completed`, `stayed`
- **Task parameters**: `randomized` (record the order of blocks, indicating combination of volatility and stochasticity)
- **Response metrics**: `reaction_time`, positional data
- **Survey and Questionnaire data**: Individual questionnaire items (e.g., `bis_Q01`, `audit_Q02`, etc.), demographic information (`demo_age`, `demo_sex`, `demo_race`), and calculated total scores (e.g., `bis_total_score`, `audit_total_score`).

Data Analysis
--------------

Data analysis involves scripts provided for processing raw JSON data and preparing them for analysis. Python scripts (`csv_edit_toolbox_bird.py`, Jupyter notebooks `data_extraction.ipynb`, and `csv_edit.ipynb`) perform:

- Extraction and cleaning of trial-level data, computation of bucket positions and catch accuracy.
- Calculation of total scores from psychological questionnaires and handling of inattentive responses.
- Merging and cleaning of demographic data (e.g., age, gender, ethnicity).
- Data visualization for exploratory analysis of trial responses, behavioral patterns, and survey outcomes using matplotlib and seaborn.

Example analysis includes plotting individual trial data to observe participant behavior across task conditions and summarizing questionnaire responses to assess psychological correlates of task performance.

Ethical Considerations
----------------------

Researchers adapting this task for their studies should ensure that they obtain appropriate ethical approvals (e.g., Institutional Review Board, IRB) before collecting data involving human participants. It is important to clearly communicate task details, potential risks, and benefits to participants during the consent process.


Reporting Issues
----------------

If you encounter issues or bugs, have questions, or wish to request new features, please report these directly by opening an issue or commenting in the GitHub repository for this task.


Reference
-------

Please cite 2024 paper if use this task
