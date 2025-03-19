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