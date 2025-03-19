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
  instructions: '<h2><b>GAD</b></h2> Over the <b>last 2 weeks</b>, how often have you been bothered by the following problems?',
  survey_width: 950,
  item_width: 40,

  infrequency_items: [7],
  data: {survey: 'gad7'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1];
    data.infrequency = scores[data.responses['Q08']];
  }
}


/**
* Penn State Worry Questionnaire (PSWQ)
*
* Contains three versions of the PSWQ:
* - the full version (16 items; default)
* - abbreviated version (8 items)
* - 3-item version
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

// 16-item version
var pswq16 = {
  type: 'survey-template',
  items: [

    // Worry symptoms
    "If I don't have enough time to do everything, I do not worry about it.",                // Q1; to be reverse-scored; included in full version
    "My worries overwhelm me.",                                                              // Q2; included in 8-item and full version
    "I do not tend to worry about things.",                                                  // Q3; to be reverse-scored; included in full version
    "Many situations make me worry.",                                                        // Q4; included in 3-item, 8-item, and full version
    "I know I should not worry about things, but I just can't help it.",                     // Q5; included in 8-item and full version
    "When I'm under pressure I worry a lot.",                                                // Q6; included in 8-item and full version
    "I'm always worrying about something.",                                                  // Q7; included in 8-item and full version
    "I find it easy to dismiss worrisome thoughts.",                                         // Q8; to be reverse-scored; included in full version
    "As soon as I finish one task, I start to worry about everything else I have to do.",    // Q9; included in 8-item and full version
    "I never worry about anything.",                                                         // Q10; to be reverse-scored; included in full version
    "When there's nothing more I can do about a concern, I don't worry about it any more.",  // Q11; to be reverse-scored; included in full version
    "I have been a worrier all my life.",                                                    // Q12; included in 8-item and full version
    "I notice that I have been worrying about things.",                                      // Q13; included in 8-item and full version
    "Once I start worrying, I can't stop.",                                                  // Q14; included in 3-item and full version
    "I worry all the time.",                                                                 // Q15; included in 3-item and full version
    "I worry about projects until they are done.",                                            // Q16; included in full version

    // Infrequency item
    "I am usually able to remember my own name."

  ],
  scale: [
    "Not at all<br>typical",              // scored as 0
    "Not very<br>typical",                // scored as 1
    "Somewhat<br>typical",                // scored as 2
    "Fairly<br>typical",                  // scored as 3
    "Very<br>typical"                     // scored as 4
  ],
  reverse: [
    true, false, true, false, false, false, false, true, 
    false, true, true, false, false, false, false, false, false
  ],
  instructions: '<h2><b>PSWQ</b></h2> Select the option that best describes how typical or characteristic each item is of you.',
  survey_width: 950,
  item_width: 40,

  infrequency_items: [16],
  data: {survey: 'pswq16'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q17']];
  }
}


// 8-item version
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
    "I am usually not able to remember my own name."
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
  instructions: '<h2><b>PSWQ</b></h2> Select the option that best describes how typical or characteristic each item is of you.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 10,

  infrequency_items: [8],
  data: {survey: 'pswq8'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q09']];
  }
}


// // 3-item version
// var pswq_v3 = {
//   type: jsPsychSurveyTemplate,
//   items: [
//     "Many situations make me worry.",                                                        // Q4; included in 3-item, 8-item, and full version
//     "Once I start worrying, I can't stop.",                                                  // Q14; included in 3-item and full version
//     "I worry all the time.",                                                                 // Q15; included in 3-item and full version
//   ],
//   scale: [
//     "Not at all<br>typical of me",              // scored as 0
//     "Not very<br>typical of me",                // scored as 1
//     "Somewhat<br>typical of me",                // scored as 2
//     "Fairly<br>typical of me",                  // scored as 3
//     "Very<br>typical of me"                     // scored as 4
//   ],
//   reverse: [
//     false, false, false
//   ],
//   instructions: 'Select the option that best describes how typical or characteristic each item is of you.',
//   survey_width: 950,
//   item_width: 40,
//   scale_repeat: 8,
// }


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
    "Worrying too much about the canine olympics"
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
  instructions: '<h2><b>IUS</b></h2> Read each statement carefully and select which best describes you.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [12],
  data: {survey: 'ius12'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q13']];
  }
}


/**
* Obsessive-Compulsive Inventory (OCI)
*
* Foa, E. B., Huppert, J. D., Leiberg, S., Langner, R., Kichic, R., Hajcak, G.,
* & Salkovskis, P. M. (2002). The Obsessive-Compulsive Inventory: development and
* validation of a short version. Psychological assessment, 14(4), 485.
*
**/

var oci18 = {
  type: 'survey-template',
  items: [

    "I have saved up so many things that they get in the way.",
    "I check things more often than necessary.",
    "I get upset if objects are not arranged properly. ",
    "I feel compelled to count while I am doing things.",
    "I find it difficult to touch an object when I know it has been touched by strangers or certain people.",
    "I find it difficult to control my own thoughts.",
    "I collect things I don't need.",
    "I repeatedly check doors, windows, drawers, etc.",
    "I get upset if others change the way I have arranged things.",
    "I feel I have to repeat certain numbers.",
    "I sometimes have to wash or clean myself simply because I feel contaminated.",
    "I am upset by unpleasant thoughts that come into my mind against my will.",
    "I avoid throwing things away because I am afraid I might need them later.",
    "I repeatedly check gas and water taps and light switches after turning them off.",
    "I need things to be arranged in a particular way.",
    "I feel that there are good and bad numbers.",
    "I wash my hands more often and longer than necessary",
    "I frequently get nasty thoughts and have difficulty in getting rid of them.",

    // Infrequency item
    "I find it difficult to not think about the doggy olympics."
  ],
  scale: [
    "Not at all",
    "A little",
    "Moderately",
    "A lot",
    "Extremely"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false
  ],
  instructions: '<h2><b>OCI</b></h2> The following statements refer to experiences that many people have in their everyday lives. Select the description that best describes how much that experience has distressed or bothered you during the past month.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 10,

  infrequency_items: [18],
  data: {survey: 'oci18'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q19']];
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
    "Feel impossible to stop thinking about puppy olympics."
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
    false, false, false, false, false, false, false, true, false
  ],
  instructions: '<h2><b>EAT</b></h2> Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 9,

  infrequency_items: [26],
  data: {survey: 'eat26'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1,1];
    data.infrequency = scores[data.responses['Q27']];
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

    // PA = perceptual abnormalities
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

    // PA = persecutory ideation
    "Have you ever heard voices when you are alone?",
    "Have you ever heard voices talking to each other when you are alone?",
    "Have you ever seen objects, people or animals that other people can't see?",

    // Infrequency item
    "Have you ever felt like going to a canine olympic when you are alone?"

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
  instructions: '<h2><b>CAPE</b></h2> Responses to items range from 0 \- never, through sometimes and often, to 4 \- nearly always.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [15],
  data: {survey: 'cape15'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q16']];
  }
}




