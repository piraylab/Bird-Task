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

Additionally, this task uses the NivTurk platform for online behavioral experiments. For detailed installation instructions and the user manual on how to develop and serve experiments, please refer to the official NivTurk documentation: https://nivlab.github.io/nivturk/

**Installation steps**:

Provide clear, step-by-step instructions for setup::

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
    │   │   ├── mine/ (Contains files for task design, comprehension checks, and instructions)
    │   │   ├── new/ (Contains additional questionnaires)
    │   │   ├── rpm/ (Contains Raven's Progressive Matrices task files)
    │   │   └── surveys/ (Contains individual survey files in JavaScript)
    │   └── templates/
    │       └── experiment.html (Main HTML file running the task)
    ├── data/ (Directory where participant data are saved)
    ├── metadata/ (Directory for metadata files)
    ├── reject/ (Directory for rejected data files)
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

conda activate nivturk (activate virtual env)
cd task_folder_name
(for more detail on Flask server: https://nivlab.github.io/nivturk/docs/basic-usage/development/)
export FLASK_APP=app.py
export FLASK_ENV=development
export FLASK_RUN_PORT=9999
flask run --host=0.0.0.0 

**Online deployment**:
Visit Nivturk user manual (Serving experiments): https://nivlab.github.io/nivturk/docs/basic-usage/serving/

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
