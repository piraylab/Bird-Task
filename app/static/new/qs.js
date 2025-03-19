/**
* Generalized Anxiety Disorder Scale (GAD-7)
*
* Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). A brief measure
* for assessing generalized anxiety disorder: the GAD-7. Archives of internal
* medicine, 166(10), 1092-1097.
*
**/
var gad7 = {
  type: 'survey-template',
  items: [
    // General anxiety
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen",

    // Infrequency item
    "Worrying too much about the canine olympics"
  ],
  scale: [
    "Not at all",
    "Several days",
    "Over half the days",
    "Nearly every day"
  ],
  reverse: [
    false, false, false, false, false, false, false, false
  ],
  instructions: 'Over the <b>last 2 weeks</b>, how often have you been bothered by the following problems?',
  survey_width: 950,
  item_width: 40,

  infrequency_items: [7],
  data: {survey: 'gad7'},
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re);
    }
    data.totalScore = totalScore;

    if (totalScore <= 4){
      interpretation += 'Minimal anxiety';
    } 
    else if (totalScore <= 9){
      interpretation += 'Mild anxiety';
    }
    else if (totalScore <= 14){
      interpretation += 'Moderate anxiety';
    }
    else {
      interpretation += 'Severe anxiety';
    }

    // Score response on infrequncy item.
    const scores = [0,1,2,3];
    data.infrequency = scores[data.responses['Q08']]; // need to be number for attention check
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += ', Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Penn State Worry Questionnaire (PSWQ-8)
*
* See Kertz et al. (2014) for details on these shortened versions.
*
* Meyer, T. J., Miller, M. L., Metzger, R. L., & Borkovec, T. D. (1990).
* Development and validation of the penn state worry questionnaire.
* Behaviour research and therapy, 28(6), 487-495.
*
* Kertz, S. J., Lee, J., & Björgvinsson, T. (2014). Psychometric properties of
* abbreviated and ultra-brief versions of the Penn State Worry Questionnaire.
* Psychological Assessment, 26(4), 1146.
*
**/
var pswq8 = {
  type: 'survey-template',
  items: [
    // Worry symptoms
    "My worries overwhelm me.",                                                              // Q2; included in 8-item and full version
    "Many situations make me worry.",                                                        // Q4; included in 3-item, 8-item, and full version
    "I know I should not worry about things, but I just can't help it.",                     // Q5; included in 8-item and full version
    "When I'm under pressure I worry a lot.",                                                // Q6; included in 8-item and full version
    "I'm always worrying about something.",                                                  // Q7; included in 8-item and full version
    "As soon as I finish one task, I start to worry about everything else I have to do.",    // Q9; included in 8-item and full version
    "I have been a worrier all my life.",                                                    // Q12; included in 8-item and full version
    "I notice that I have been worrying about things.",                                      // Q13; included in 8-item and full version

    // Infrequency item
    "I worry that the Earth's gravity will reverse."
  ],
  scale: [
    "Not at all<br>typical",
    "Not very<br>typical",
    "Somewhat<br>typical",
    "Fairly<br>typical",
    "Very<br>typical"
  ],
  reverse: [
    false, false, false, false,
    false, false, false, false, false
  ],
  instructions: 'Select the option that best describes how typical or characteristic each item is of you.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 10,

  infrequency_items: [8],
  data: {survey: 'pswq8'},
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re)+1; // score range 1-5
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [0,1,2,3,4];
    data.infrequency = scores[data.responses['Q09']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Intolerance of Uncertainty Questionnaire (IUS-12)
*
* Carleton, R. N., Norton, M. P. J., & Asmundson, G. J. (2007). Fearing the unknown:
* A short version of the Intolerance of Uncertainty Scale. Journal of anxiety disorders,
* 21(1), 105-117.
*
* Bottesi et al. (2020). A short-form version of the Intolerance of Uncertainty Scale:
* Initial development of the IUS-5. 10.31234/osf.io/b62wf
*
**/
var ius12 = {
  type: 'survey-template',
  items: [
    "Unforeseen events upset me greatly.",
    "It frustrates me not having all the information I need.",
    "Uncertainty keeps me from living a full life.",
    "One should always look ahead so as to avoid surprises.",
    "A small unforeseen event can spoil everything, even with the best of planning.",
    "When it's time to act, uncertainty paralyses me.",
    "When I am uncertain I can't function very well.",
    "I always want to know what the future has in store for me.",
    "I can't stand being taken by surprise.",
    "The smallest doubt can stop me from acting.",
    "I should be able to organize everything in advance.",
    "I must get away from all uncertain situations.",

    // Infrequency item
    "I get angry when I can't predict next week's lottery numbers."
  ],
  scale:[
    "Not at all<br>characteristic<br>of me",
    "A little<br>characteristic<br>of me",
    "Somewhat<br>characteristic<br>of me",
    "Very<br>characteristic<br>of me",
    "Entirely<br>characteristic<br>of me"
  ],
  reverse: [
    false, false, false, false, false, false,
    false, false, false, false, false, false, false
  ],
  instructions: 'Read each statement carefully and select which best describes you.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [12],
  data: {survey: 'ius12'},
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re)+1;
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [0,1,2,3,4];
    data.infrequency = scores[data.responses['Q13']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/** 
* Community Assessment of Psychic Experiences Positive Scale (CAPE-15)
* 
* Capra, C., Kavanagh, D. J., Hides, L., & Scott, J. (2013). Brief screening for
* psychosis-like experiences. Schizophrenia research, 149(1-3), 104-107.
* 
**/
var cape15 = {
  type: 'survey-template',  
  items: [

    // PI = persecutory ideation
    "Have you ever felt as if people seem to drop hints about you or say things with a double meaning?",
    "Have you ever felt as if some people are not what they seem to be?",
    "Have you ever felt that you are being persecuted in anyway?",
    "Have you ever felt as if there is a conspiracy against you?",
    "Have you ever felt that people look at you oddly because of your appearance?",

    // BE = bizarre experiences
    "Have you ever felt as if electrical devices such as computers can influence the way you think?",
    "Have you ever felt as if the thoughts in your head are being taken away from you?",
    "Have you ever felt as if the thoughts in your head are not your own?",
    "Have your thoughts ever been so vivid that you were worried other people would hear them?",
    "Have you ever heard your thoughts being echoed back at you?",
    "Have you ever felt as if you are under the control of some force or power other than yourself?",
    "Have you ever felt as if a double has taken place of a family member, friend or acquaintance?",

    // PA = perceptual abnormalities
    "Have you ever heard voices when you are alone?",
    "Have you ever heard voices talking to each other when you are alone?",
    "Have you ever seen objects, people or animals that other people can't see?",

    // Infrequency item
    "Have you ever felt hot in summer under the sun when its above 90 degrees (you should choose Nearly Always)?"

  ],
  scale: [
    "0 - Never",
    "1 - Occasionally",
    "2 - Sometimes",
    "3 - Often",
    "4 - Nearly Always"
  ],
  reverse: [
    false, false, false, false, false,
    false, false, false, false, false, false, false,
    false, false, false,
    false
  ],
  instructions: 'Responses to items range from 0 \- never, through sometimes and often, to 4 \- nearly always.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [15],
  data: {survey: 'cape15'},
  on_finish: function(data) {
    var totalScore = {'PA':0, 'BE':0, 'PI':0, 'total':0};
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];

      if (i <= 5){
        totalScore['PI'] += Number(re);
      }
      else if (i <= 12){
        totalScore['BE'] += Number(re);
      }
      else {
        totalScore['PA'] += Number(re);
      }
      totalScore['total'] += Number(re);
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [4,3,2,1,0];
    data.infrequency = scores[data.responses['Q16']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Eating Attitudes Test (EAT-26)
*
* Garner, D. M., Olmsted, M. P., Bohr, Y., & Garfinkel, P. E. (1982). The eating
* attitudes test: psychometric features and clinical correlates. Psychological
* medicine, 12(4), 871-878.
*
**/
var eat26 = {
  type: 'survey-template',
  items: [
    "Am terrified about being overweight.",
    "Avoid eating when I am hungry.",
    "Find myself preoccupied with food.",
    "Have gone on eating binges where I feel that I may not have be able to stop.",
    "Cut my food into small pieces.",
    "Aware of the calorie content of foods that I eat.",
    "Particularly avoid food with a high carbohydrate content (i.e. bread, rice, potatoes, etc).",
    "Feel that others would prefer if I ate more.",
    "Vomit after I have eaten.",
    "Feel extremely guilty after eating.",
    "Am preoccupied with a desire to be thinner.",
    "Think about burning up calories when I exercise.",
    "Other people think that I am too thin.",
    "Am preoccupied with the thought of having fat on my body.",
    "Take longer than others to eat my meals.",
    "Avoid foods with sugar in them.",
    "Eat diet foods.",
    "Feel that food controls my life.",
    "Display self-control around food.",
    "Feel that others pressure me to eat.",
    "Give too much time and thought to food.",
    "Feel uncomfortable after eating sweets.",
    "Engage in dieting behavior.",
    "Like my stomach to be empty.",
    "Have the impulse to vomit after meals.",
    "Enjoy trying new rich foods.",

    // Infrequency item
    "Eat no food at all."
  ],
  scale: [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Usually",
    "Always"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false
  ],
  instructions: 'Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 9,

  infrequency_items: [26],
  data: {survey: 'eat26'},
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      if (re == 6){
        totalScore += 3;
      }
      else if (re == 5){
        totalScore += 2;
      }
      else if (re == 4){
        totalScore += 1;
      }
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [0,0,2,3,4,5];
    data.infrequency = scores[data.responses['Q27']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* AUDIT questionnaire: screen for alcohol misuse (AUDIT-10)
* 
* Saunders JB, Aasland OG, Babor TF et al. Development of the alcohol use disorders identification test (AUDIT): 
* WHO collaborative project on early detection of persons with harmful alcohol consumption — II. Addiction 1993, 88: 791–803. 
*
**/
var audit10 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: 'How often do you have a drink containing alcohol?',
      name: 'Q01',
      options: ['Never', 'Monthly or less', '2−4 times a month', '2−3 times a week', '4 or more times a week'],
      required: true
    },
    {
      prompt: 'How many standard drinks containing alcohol do you have on a typical day when drinking?',
      name: 'Q02',
      options: ['2 or less', '3 or 4', '5 or 6', '7 to 9', '10 or more'],
      required: true
    },
    {
      prompt: 'How often do you have six or more drinks on one occasion?',
      name: 'Q03',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you found that you were not able to stop drinking once you had started?',
      name: 'Q04',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you failed to do what was normally expected of you because of drinking?',
      name: 'Q05',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you needed a drink in the morning to get yourself going after a heavy drinking session?',
      name: 'Q06',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you had a feeling of guilt or remorse after drinking?',
      name: 'Q07',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, have you been unable to remember what happened the night before because you had been drinking?',
      name: 'Q08',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'Have you or someone else been injured as a result of your drinking?',
      name: 'Q09',
      options: ['No', 'Yes, but not in the past year', 'Yes, during the past year'],
      required: true
    },
    {
      prompt: 'Has a relative or friend, doctor or other health worker been concerned about your drinking or suggested you cut down?',
      name: 'Q10',
      options: ['No', 'Yes, but not in the past year', 'Yes, during the past year'],
      required: true
    },
    // Infrequency item
    {
      prompt: 'Have you read all questions in this experiment before answering them?',
      name: 'Q11',
      options: ['No', 'Yes, all of them', 'Yes, but only some of them'],
      required: true
    }
  ],
  randomize_question_order: true,
  preamble: 'Please answer the following questions by selecting the option that best applies to you.',
  data: { survey: 'audit10' },

  on_finish: function(data) {
    // Define the scoring for each question.
    const scoreOptions1 = {
      'Never': 0, 
      'Monthly or less': 1, 
      '2−4 times a month': 2, 
      '2−3 times a week': 3, 
      '4 or more times a week': 4
    };
    const scoreOptions2 = {
      '2 or less': 0, 
      '3 or 4': 1, 
      '5 or 6': 2, 
      '7 to 9': 3, 
      '10 or more': 4
    };
    const scoreOptions3_8 = {
      'Never': 0,
      'Less than monthly': 1,
      'Monthly': 2,
      'Weekly': 3,
      'Daily or almost daily': 4
    };
    const scoreOptions9_10 = {
      'No': 0, 
      'Yes, but not in the past year': 2, 
      'Yes, during the past year': 4
    };
    const scoreOptions11 = {
      'No': 0, 
      'Yes, all of them': 1, 
      'Yes, but only some of them': 2
    };

    // Calculate the total score.
    var totalScore = 0;
    var responses = {};
    for (let i = 1; i < Object.keys(data.response).length+1; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.response[questionName];

      if (i === 1){
        totalScore += scoreOptions1[re];
        responses[questionName] = scoreOptions1[re];
      }
      else if (i === 2){
        totalScore += scoreOptions2[re];
        responses[questionName] = scoreOptions2[re];
      }
      else if (i < 9){
        totalScore += scoreOptions3_8[re];
        responses[questionName] = scoreOptions3_8[re];
      }
      else if (i <= 10){
        totalScore += scoreOptions9_10[re];
        responses[questionName] = scoreOptions9_10[re];
      }
      else {
        responses[questionName] = scoreOptions11[re];
        infrequencyScore = 0;
        if (responses[questionName] != 1){
          interpretation += 'Not paying attention';
          infrequencyScore = 1;
        }
      }
    }
    data.responses = responses;

    var interpretation = '';
    if (totalScore >= 15) {
      interpretation = 'Likely alcohol dependence (men), ';
    } 
    else if (totalScore >= 13) {
      interpretation = 'Likely alcohol dependence (women), ';
    }
    else if (totalScore >= 8) {
      interpretation = 'Harmful or hazardous drinking, ';
    };

    // Add to the data object.
    data.infrequency = infrequencyScore;
    data.totalScore = totalScore;
    data.interpretation = interpretation;

    // console.log(data.totalScore);
    console.log(data.interpretation);
  }
}


/**
* Barratt Impulsiveness Scale–Brief (BIS-8)
*
* Steinberg et al., 2013.
*
**/
var bis8 = {
  type: 'survey-template',
  items: [
    // Impulsiveness items
    "I plan tasks carefully.",
    "I do things without thinking.",
    "I don't pay attention.",
    "I am self-controlled.",
    "I concentrate easily.",
    "I am a careful thinker.",
    "I say things without thinking.",
    "I act on the spur of the moment.",

    // Infrequency item
    "I drink at least one glass of water every week."
  ],
  scale: [
    "Rarely/Never",
    "Occasionally",
    "Often",
    "Almost Always"
  ],
  reverse: [
    true, false, false, true, true, true, false, false, false
  ],
  instructions: 'Rate each statement based on how often you exhibit the described behavior.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 9,

  infrequency_items: [8],
  data: {survey: 'bis8'},
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re)+1;
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [3,2,1,0];
    data.infrequency = scores[data.responses['Q09']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Compulsive Buying Scale (CBS-7)
*
* Farber & O’Guinn, 1992
*
**/
var cbs7_part1 = {
  type: 'survey-template',
  items: [
    "If I have any money left at the end of the pay period, I just have to spend it.",
  ],
  scale: [
    "1 - Strongly agree",
    "2 - Somewhat agree",
    "3 - Neither agree nor disagree",
    "4 - Somewhat disagree",
    "5 - Strongly disagree"
  ],
  reverse: [true],
  instructions: '<p>Please indicate how much you agree or disagree with each of the statements below. Select which best indicates how you feel about each statement.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [],
  data: {survey: 'cbs7_part1'} // TODO: check how data are recorded???
}
var cbs7_part2 = {
  type: 'survey-template',
  items: [
    "Felt others would be horrified if they knew of my spending habits.",
    "Bought things even though I couldn’t afford them.",
    "Wrote a check when I knew I didn’t have enough money in the bank to cover it.",
    "Bought myself something in order to make myself feel better.",
    "Felt anxious or nervous on days I didn’t go shopping.",
    "Made only the minimum payments on my credit cards.",

    // Infrequency item
    "I buy things for my future alien friend."
  ],
  scale: [
    "1 - Very often",
    "2 - Often",
    "3 - Sometimes",
    "4 - Rarely",
    "5 - Never"
  ],
  reverse: [
    true, true, true, 
    true, true, true, false
  ],
  instructions: '<p>Please indicate how often you have done each of the following things.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [6],
  data: {survey: 'cbs7_part2'},
  on_finish: function(data) {
    var interpretation = '';

    // Score response on infrequncy item.
    const scores = [4,3,2,1,0];
    data.infrequency = scores[data.responses['Q07']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}
var cbs7 = []
cbs7 = cbs7.concat(cbs7_part1)
cbs7 = cbs7.concat(cbs7_part2)


/**
* Problem Video Game Playing Scale (PVP-9)
*
* Tejeiro Salguero & Bersabé Morán, 2002
*
**/
var pvp9 = {
  type: 'survey-template',
  items: [
    "When I am not playing with the video games, I keep thinking about them (e.g., remembering games, planning the next game, etc.)",
    "I spend an increasing amount of time playing video games",
    "I have tried to control, cut back or stop playing, or I usually play with the video games over a longer period than I intended",
    "When I can't use the video games I get restless or irritable",
    "When I feel bad, e.g. nervous, sad, or angry, or when I have problems, I use the video games more often",
    "When I lose in a game or I have not obtained the desired results, I need to play again to achieve my target",
    "Sometimes I conceal my video game playing from others (e.g., my parents, friends, teachers…)",
    "In order to play video games I have skipped classes or work, or lied, or stolen, or had an argument or a fight with someone",
    "Because of the video game playing I have reduced my homework or schoolwork, or I have not eaten, or I have gone to bed late, or I spent less time with my friends and family",
    
    // Infrequency item
    "I played with an actual ball before."
  ],
  scale: [
    "Yes",
    "No"
  ],
  reverse: [
    true, true, true, true, true, true, true, true, true, false
  ],
  instructions: '<p>Please indicate whether each statement applies to you by selecting "Yes" or "No" for each statement below.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [9],
  data: { survey: 'pvp9' },
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re);
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [0,1];
    data.infrequency = scores[data.responses['Q10']];
    var interpretation = '';
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Gambler’s Belief Questionnaire (GBQ-21)
*
* Steenbergh et al., 2002
*
**/
var gbq21 = {
  type: 'survey-template',
  items: [
    "I think of gambling as a challenge.",
    "My knowledge and skill in gambling contribute to the likelihood that I will make money.",
    "My choices or actions affect the game on which I am betting.",
    "If I am gambling and losing, I should continue because I don’t want to miss a win.",
    "I should keep track of previous winning bets so that I can figure out how I should bet in the future.",
    "When I am gambling, “near misses” or times when I almost win remind me that if I keep playing I will win.",
    "Gambling is more than just luck.",
    "My gambling wins are evidence that I have skill and knowledge related to gambling.",
    "I have a “lucky” technique that I use when I gamble.",
    "In the long run, I will win more money than I will lose gambling.",
    "Even though I may be losing with my gambling strategy or plan, I must maintain that strategy or plan because I know it will eventually come through for me.",
    "There are certain things I do when I am betting (for example, tapping a certain number of times, holding a lucky coin in my hand, crossing my fingers, etc.) which increase the chances that I will win.",
    "If I lose money gambling, I should try to win it back.",
    "Those who don’t gamble much don’t understand that gambling success requires dedication and a willingness to invest some money.",
    "Where I get money to gamble doesn’t matter because I will win and pay it back.",
    "I am pretty accurate at predicting when a “win” will occur.",
    "Gambling is the best way for me to experience excitement.",
    "If I continue to gamble, it will eventually pay off, and I will make money.",
    "I have more skills and knowledge related to gambling than most people who gamble.",
    "When I lose at gambling, my losses are not as bad if I don’t tell my loved ones.",
    "I should keep the same bet even when it hasn’t come up lately because it is bound to win.",
    
    // Infrequency item
    "Sometimes I eat rocks just to see what they taste like."
  ],
  scale: [
    "1 - Strongly Agree",
    "2 - Agree",
    "3 - Somewhat Agree",
    "4 - Neither Agree nor Disagree",
    "5 - Somewhat Disagree",
    "6 - Disagree",
    "7 - Strongly Disagree"
  ],
  reverse: [
    true, true, true, true, true, true, true, true, true, true, 
    true, true, true, true, true, true, true, true, true, true, true, false
    ], // Reverse array for all 21 questions set to true
  instructions: '<p>Read each of the following statements carefully. Rate to what extent you agree or disagree with each statement from 1 (strongly agree) to 7 (strongly disagree).</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,

  infrequency_items: [21], // Specify the infrequency item(s) by index (in this case, it's the 21st item)
  data: { survey: 'gbq21' },
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re)+1;
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [6,5,4,3,2,1,0];
    data.infrequency = scores[data.responses['Q22']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Yale-Brown Obsessive-Compulsive Scale modified for compulsive buying (YBOC-CB-10)
*
* Monahan et al., 1996
*
**/
var yboc_cb10 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Time occupied by thoughts about shopping.\nHow much of your time is occupied by thoughts about shopping?",
      name: 'Q01',
      options: [
        '0 - None',
        '1 - Mild, < 1 h/day or occasional intrusion',
        '2 - Moderate, 1-3 h/day, or frequent intrusion',
        '3 - Severe, > 3 and up to 8 h/day or very frequent intrusion',
        '4 - Extreme, > 8 h/day or near constant intrusion'
      ],
      required: true
    },
    {
      prompt: "Interference due to thoughts about shopping.\nHow much do your thoughts about shopping interfere with your social, work, or role functioning? Is there anything you don’t do because of them?",
      name: 'Q02',
      options: [
        '0 - None',
        '1 - Mild, slight interference with social or occupational activities but overall performance not impaired',
        '2 - Moderate, definite interference with social or occupational performance, but still manageable',
        '3 - Severe, causes substantial impairment in social or occupational performance',
        '4 - Extreme, incapacitating'
      ],
      required: true
    },
    {
      prompt: "Distress associated with thoughts about shopping.\nHow much distress do your thoughts about shopping cause you?",
      name: 'Q03',
      options: [
        '0 - None',
        '1 - Mild, not too disturbing',
        '2 - Moderate, disturbing but still manageable',
        '3 - Severe, very disturbing',
        '4 - Extreme, near constant and disabling distress'
      ],
      required: true
    },
    {
      prompt: "Resistance against thoughts about shopping.\nHow much of an effort do you make to resist thoughts about shopping? How often do you try to disregard or turn your attention away from these thoughts as they enter your mind?",
      name: 'Q04',
      options: [
        '0 - Always makes an effort to resist, or symptoms so minimal that active resistance not needed',
        '1 - Tries to resist most of the time',
        '2 - Makes some effort to resist',
        '3 - Yields to all thoughts without attempting to control them, but does so with some resistance',
        '4 - Completely and willingly yields to all thoughts about shopping'
      ],
      required: true
    },
    {
      prompt: "Degree of control over thoughts about shopping.\nHow much control do you have over your thoughts about shopping? How successful are you in stopping or diverting your thoughts about shopping? Can you dismiss them?",
      name: 'Q05',
      options: [
        '0 - Complete control',
        '1 - Much control, usually able to stop or divert thoughts with some effort and concentration',
        '2 - Moderate control, sometimes able to stop or divert thinking',
        '3 - Little control, rarely successful in stopping or dismissing thinking, can only divert attention with difficulty',
        '4 - No control, experience is completely involuntary, rarely able even momentarily to alter thoughts about shopping'
      ],
      required: true
    },
    {
      prompt: "Time spent shopping.\nHow much time do you spend shopping? How much time do you spend compulsively shopping?",
      name: 'Q06',
      options: [
        '0 - None',
        '1 - Mild, spends < 1 h/day shopping',
        '2 - Moderate, spends 1-3 h/day shopping',
        '3 - Severe, spends > 3 and up to 8 h/day shopping',
        '4 - Extreme, spends > 8 h/day shopping or near constant shopping episodes'
      ],
      required: true
    },
    {
      prompt: "Interference due to shopping behavior.\nHow much does your shopping behavior interfere with your social, work, or role functioning? Is there anything you don’t do because of the shopping?",
      name: 'Q07',
      options: [
        '0 - None',
        '1 - Mild, slight interference with social or occupational activities but overall performance not impaired',
        '2 - Moderate, definite interference with social or occupational performance, but still manageable',
        '3 - Severe, causes substantial impairment in social or occupational performance',
        '4 - Extreme, incapacitating'
      ],
      required: true
    },
    {
      prompt: "Distress associated with compulsive shopping behavior.\nHow would you feel if prevented from shopping? How anxious would you become?",
      name: 'Q08',
      options: [
        '0 - None',
        '1 - Mild, only slightly anxious if shopping prevented, or only slightly anxious',
        '2 - Moderate, reports that anxiety would mount but remains manageable',
        '3 - Severe, prominent, and very disturbing increase in anxiety if shopping interrupted',
        '4 - Extreme, incapacitating anxiety from any intervention aimed at modifying activity, or incapacitating anxiety develops during performance of shopping'
      ],
      required: true
    },
    {
      prompt: "Resistance against compulsive shopping.\nHow much of an effort do you make to resist the compulsion?",
      name: 'Q09',
      options: [
        '0 - Always makes an effort to resist, or symptoms so minimal that active resistance not needed',
        '1 - Tries to resist most of the time',
        '2 - Makes some effort to resist',
        '3 - Yields to almost all compulsions without attempting to control them, but does so with some reluctance',
        '4 - Completely and unwillingly yields to almost all compulsions'
      ],
      required: true
    },
    {
      prompt: "Degree of control over compulsive shopping.\nHow strong is the drive to shop? How much control do you have over the compulsion?",
      name: 'Q10',
      options: [
        '0 - Complete control',
        '1 - Much control, experiences pressure to perform the behavior but usually able to exercise voluntary control over it',
        '2 - Moderate control, strong pressure to perform behavior, can control it only with difficulty',
        '3 - Little control, very strong drive to perform behavior, must be carried to completion, can only delay with difficulty',
        '4 - No control, drive to perform behavior experienced as completely involuntary and overpowering, rarely able even momentarily to delay activity'
      ],
      required: true
    },
    {
      prompt: "Degree of attention over time. \nSelect 'I experience this rarely' for this question.",
      name: 'Q11',
      options: [
        '0 - None. I always pay close attention to instructions',
        '1 - I experience this rarely. I carefully read and follow instructions',
        '2 - Sometimes. I occasionally pay attention to instructions',
        '3 - Often. I frequently ignore instructions',
        '4 - All the time. I rarely follow instructions correctly'
      ],
      required: true
    }
  ],
  randomize_question_order: true,
  preamble: 'For each of the following statements, please indicate the degree to which it applies to you:',
  data: {survey: 'yboc_cb10'},

  on_finish: function(data) {
    // Converst response to score responses
    var responses = {};
    for (let i = 1; i < Object.keys(data.response).length+1; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.response[questionName];
      responses[questionName] = re.charAt(0);
    }
    data.responses = responses;

    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re);
    }
    data.totalScore = totalScore;

    // Access the response to the infrequency question
    const infrequencyResponse = data.response['Q11'];
    var infrequencyScore = 0;
    if (infrequencyResponse.charAt(0) != 1){
      infrequencyScore = 1;
    }
    // Calculate the score for the infrequency question
    data.infrequency = Number(infrequencyScore);
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* Patient Health Questionnaire (PHQ-9)
*
**/
var phq9 = {
  type: 'survey-template',
  items: [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    'Trouble concentrating on things, such as reading the newspaper or watching television',
    'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
    'Thoughts that you would be better off dead or of hurting yourself',  // suicide pop-up window
    
    //Infrequency item
    'Have felt an intense urge to wear mismatched shoes every day.'
  ],
  scale: [
    'Prefer not to answer',
    'Not at all',
    'Several days',
    'Over half the days',
    'Nearly every day'
  ],
  reverse: [
    false, false, false, false, false,
    false, false, false, false, false
  ],
  instructions: '<p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [9],
  data: {survey: 'phq9'},
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re);
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [1,0,2,3,4];
    data.infrequency = scores[data.responses['Q10']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
    console.log(data.responses['Q09'])
  }
}


/**
* Depression, Anxiety and Stress Scale - 21 Items (DASS-21)
* grouped_numbers = {
    's': ['Q01', 'Q06', 'Q08', 'Q11', 'Q12', 'Q14', 'Q18'],
    'a': ['Q02', 'Q04', 'Q07', 'Q09', 'Q15', 'Q19', 'Q20'],
    'd': ['Q03', 'Q05', 'Q10', 'Q13', 'Q16', 'Q17', 'Q21']
  } 
**/
var dass21 = {
  type: 'survey-template',
  items: [
    "I found it hard to wind down",
    "I was aware of dryness of my mouth",
    "I couldn’t seem to experience any positive feeling at all",
    "I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion)",
    "I found it difficult to work up the initiative to do things",
    "I tended to over-react to situations",
    "I experienced trembling (e.g., in the hands)",
    "I felt that I was using a lot of nervous energy",
    "I was worried about situations in which I might panic and make a fool of myself",
    "I felt that I had nothing to look forward to",
    "I found myself getting agitated",
    "I found it difficult to relax",
    "I felt down-hearted and blue",
    "I was intolerant of anything that kept me from getting on with what I was doing",
    "I felt I was close to panic",
    "I was unable to become enthusiastic about anything",
    "I felt I wasn’t worth much as a person",
    "I felt that I was rather touchy",
    "I was aware of the action of my heart in the absence of physical exertion (e.g., sense of heart rate increase, heart missing a beat)",
    "I felt scared without any good reason",
    "I felt that life was meaningless", 
    
    // Infrequency item
    "I always used my mouth for eating."
  ],
  scale: [
    "0 - Did not apply to me at all",
    "1 - Applied to me to some degree, or some of the time",
    "2 - Applied to me to a considerable degree or a good part of time",
    "3 - Applied to me very much or most of the time"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false,
    false
  ],
  instructions: '<p>Rate how often each statement applied to you <b>over the past week</b> on a scale of 0 to 3, where 0 means "Did not apply to me at all" and 3 means "Applied to me very much or most of the time." <br>There are no right or wrong answers. Do not spend too much time on any statement.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [21],
  data: { survey: 'dass21' },
  on_finish: function(data) {
    var totalScore = {'Stress':0, 'Anxiety':0, 'Depression':0, 'total':0};
    var interpretation = '';

    grouped_numbers = {
    'Stress': ['Q01', 'Q06', 'Q08', 'Q11', 'Q12', 'Q14', 'Q18'],
    'Anxiety': ['Q02', 'Q04', 'Q07', 'Q09', 'Q15', 'Q19', 'Q20'],
    'Depression': ['Q03', 'Q05', 'Q10', 'Q13', 'Q16', 'Q17', 'Q21']
    } 

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];

      for (elem in grouped_numbers){
        if (grouped_numbers[elem].indexOf(questionName) != -1){
          totalScore[elem] += Number(re)*2;
        }
      }
      totalScore['total'] += Number(re);
    }
    data.totalScore = totalScore;    

    // Score response on infrequency item.
    const scores = [3,2,1,0];
    data.infrequency = scores[data.responses['Q22']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}


/**
* “Lie-Bet:” Two-Question Screening for Problem Gambling (LBT-2)
*
* Johnson et al., 1988
* References: Johnson, E.E., Hamer,R., Nora, R.M., Tan, B., Eistenstein, N., & Englehart, C. (1988). The lie/bet questionnaire for screening pathological gamblers. Psychological Reports, 80, 83-88.
* Götestam, K.G., Johansson, A., Wenzel, H.G., Simonsen, I.E. (2004). Validation of the lie/bet screen for pathological gambling on two normal population data sets. Psychological Reports, 95, 1009-13.
*
**/
var lbt2 = {
  type: 'survey-template',
  items: [
    "Have you ever felt the need to bet more and more money?",
    "Have you ever had to lie to people important to you about how much you gambled?",
  ],
  scale: [
    "Yes",
    "No"
  ],
  reverse: [true, true],
  instructions: '<p>Please indicate your responses to the following questions.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [],
  data: { survey: 'lbt2' },
  on_finish: function(data){
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re);
    }
    data.totalScore = totalScore;
  }
}

// ----------NIH NEW SURVEYS----------
/**
* DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure—Adult (DSM-23)
*
**/
var dsm23 = {
  type: 'survey-template',
  items: [
    // I.
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    // II.
    "Feeling more irritated, grouchy, or angry than usual?",
    // III.
    "Sleeping less than usual, but still have a lot of energy?",
    "Starting lots more projects than usual or doing more risky things than usual?",
    // IV.
    "Feeling nervous, anxious, frightened, worried, or on edge?",
    "Feeling panic or being frightened?",
    "Avoiding situations that make you anxious?",
    // V.
    "Unexplained aches and pains (e.g., head, back, joints, abdomen, legs)?",
    "Feeling that your illnesses are not being taken seriously enough?",
    // VI.
    "Thoughts of actually hurting yourself?",
    // VII.
    "Hearing things other people couldn't hear, such as voices even when no one was around?",
    "Feeling that someone could hear your thoughts, or that you could hear what another person was thinking?",
    // VIII. 
    "Problems with sleep that affected your sleep quality over all?",
    // IX.
    "Problems with memory (e.g., learning new information) or with locaiton (e.g., finding your way home)?",
    // X. 
    "Unpleasant thoughts, urges, or images that repeatedly enter your mind?",
    "Feeling driven to perform certain behaviors or mental acts over and over agian?",
    // XI. 
    "Feeling detached or distant from yourself, your body, your physical surroundings, or your memories?",
    // XII.
    "Not knowing who you really are or what you want out of life?",
    "Not feeling close to other people or enjoying your relationships with them?",
    // XIII.
    "Drinking at least 4 drinks of any kind of alcohol in a single day?",
    "Smoking any cigarettes, a cigar, or pipe, or using snuff or chewing tobacco?",
    "Using any of the following medicines ON YOUR OWN, that is, without a doctor’s prescription, in greater amounts or longer than prescribed [e.g., painkillers (like Vicodin), stimulants (like Ritalin or Adderall), sedatives or tranquilizers (like sleeping pills or Valium), or drugs like marijuana, cocaine or crack, club drugs (like ecstasy), hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or methamphetamine (like speed)]? ",

    // Infrequency item
    "Most of the time I can see with my eyes."
  ],
  scale: [
    "<br>None</br> Not at all",
    "<br>Slight</br> Rare, less than a day or two",
    "<br>Mild</br> Several days",
    "<br>Moderate</br> More than half the days",
    "<br>Severe</br> Nearly every day"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false
    ], 
  instructions: '<p>The questions below ask about things that might have bothered you. For each question, circle the number that best describes how much (or how often) you have been bothered by each problem during the <b> past TWO (2) WEEKS </b>.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,

  infrequency_items: [23], // Specify the infrequency item(s) by index (in this case, it's the 21st item)
  data: { survey: 'dsm23' },
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re)+1;
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [4,3,2,1,0];
    data.infrequency = scores[data.responses['Q24']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}

/**
* WHODAS 2.0 (WHODAS-12)
*
**/
var whodas12_part1 = {
  type: 'survey-template',
  items: [
    "Standing for long periods such as 30 minutes?",
    "Taking care of your household responsibilities?",
    "Learning a new task, for example, learning how to get to a new place?",
    "How much of a problem did you have joining in community activities (for example, festivities, religious or other activities) in the same way as anyone else can?",
    "How much have you been emotionally affected by your health problems?",
    "Concentrating on doing something for ten minutes?",
    "Walking a long distance such as a kilometre [or equivalent]?",
    "Washing your whole body?",
    "Getting dressed?",
    "Dealing with people you do not know?",
    "Maintaining a friendship?",
    "Your day-to-day work?",

    // Infrequency item
    "Flying in the sky using a pair of wings (we suppose that is not capable by human, select cannot do)?"
  ],
  scale: [
    "None",
    "Mild",
    "Moderate",
    "Severe",
    "Extreme or cannot do"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false
    ], 
  instructions: '<p>This questionnaire asks about <b>difficulties due to health conditions</b>. Health conditions include diseases or illnesses, other health problems that may be short or long lasting, injuries, mental or emotional problems, and problems with alcohol or drugs.</p> <p>Think back over the <b>past 30 days</b> and answer these questions, thinking about how much difficulty you had doing the following activities. For each question, please indicate only <b>one</b> response.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 7,

  infrequency_items: [12], // Specify the infrequency item(s) by index (in this case, it's the 21st item)
  data: { survey: 'whodas12_part1' },
  on_finish: function(data) {
    var totalScore = 0;
    var interpretation = '';

    // Calculate the total score.
    for (let i = 1; i < Object.keys(data.responses).length; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.responses[questionName];
      totalScore += Number(re)+1;
    }
    data.totalScore = totalScore;

    // Score response on infrequncy item.
    const scores = [4,3,2,1,0];
    data.infrequency = scores[data.responses['Q13']];
    // Check the infrequency question response.
    if (data.infrequency != 0) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += 'Not paying attention';
    }

    data.interpretation = interpretation;
    console.log(data.interpretation);
  }
}
var whodas12_part2 = {
  type: 'survey-text',
  questions: [
    {prompt: 'Overall, in the past 30 days, how many days were these difficulties present?', 
    name: "Q01",
    required: true},
    {prompt: 'In the past 30 days, for how many days were you totally unable to carry out your usual activities or work because of any health condition?', 
    name: "Q02",
    required: true},
    {prompt: 'In the past 30 days, not counting the days that you were totally unable, for how many days did you cut back or reduce your usual activities or work because of any health condition?', 
    name: "Q03",
    required: true}
  ],
  randomize_question_order: true,
  preamble: '<b>Record number of days</b>',
  data: { survey: 'whodas12_part2' },
  on_finish: function(data) {
    var responses = '';
    data.responses = data.response; // ***check data record***

  }
}


var whodas12 = []
whodas12 = whodas12.concat(whodas12_part1)
whodas12 = whodas12.concat(whodas12_part2)
