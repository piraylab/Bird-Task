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

    // Infrequency item
    "I have never gambled in my life."
  ],
  scale: [
    "1 - Yes",
    "2 - No"
  ],
  reverse: [true, true, true],
  instructions: '<h2>Lie-Bet</h2><p>Please indicate your responses to the following questions.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [2],
  data: { survey: 'lbt2' },
  on_finish: function(data) {
    // Score response on infrequency item.
    const scores = [0, 1];
    data.infrequency = scores[data.responses['3']];
  }
}
