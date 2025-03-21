Project Title
=============

Project Overview
----------------

**Brief introduction**:

Explain the purpose, context, and general structure of the online task.

**Intended usage**:

Clearly state who might benefit from this task and how they might adapt it for their experiments.


Setup and Installation
----------------------

**Requirements**:

List dependencies such as Python version, required packages, JavaScript frameworks, or external libraries.

**Installation steps**:

Provide clear, step-by-step instructions for setup::

  git clone https://github.com/your_username/your_task_repo.git
  cd your_task_repo
  pip install -r requirements.txt


Task Structure
--------------

**File organization**:

Clearly document the directory structure, describing the main files and their purpose::

  your_task_repo/
  ├── scripts/
  │   └── experiment_logic.js
  ├── templates/
  │   └── task_template.html
  ├── data_templates/
  │   └── example_data.csv
  ├── README.rst
  └── requirements.txt

**Task flow**:

Describe how the task is structured, including blocks, trials, stimuli presentation, participant interaction, and questionnaires.


Running the Task
----------------

**Local testing**:

Instructions on how to run the task locally for development or testing purposes.

**Online deployment**:

Guidelines for deploying the task online (e.g., GitHub Pages, Heroku).


Data Structure
--------------

**Output data**:

Clearly describe the format of data collected from participants (CSV, JSON) and each key variable:

- Participant identifiers (``subjectkey``, ``workerId``)
- Demographics (``age``, ``sex``, ``race``)
- Response variables (``reaction_time``, ``choices``)
- Questionnaire data (BIS, AUDIT, GAD, PHQ)

Provide an example data file and explain each column clearly.


Data Analysis
-------------

**Example scripts**:

Provide or link to scripts for preliminary data analysis.

**Recommended analyses**:

Briefly discuss recommended analytical approaches or cite relevant resources.


Customization
-------------

Guide users on how to modify or extend the task to fit their own experimental designs, including stimuli, blocks, conditions, or questionnaires.


Ethical Considerations
----------------------

Remind users to obtain appropriate ethical approvals (IRB) if adapting the task for research involving human participants.


Contributing and Issues
-----------------------

**Contribution guidelines**:

Instructions for contributing improvements or fixes.

**Reporting issues**:

Explain how users can report bugs, ask questions, or request new features.


License
-------

State the license under which your task is released (e.g., MIT, GPL), clarifying how it can be used, modified, or distributed.
