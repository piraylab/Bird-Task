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
  instructions: '<h2><b>CBS</b></h2> <p>Please indicate how much you agree or disagree with each of the statements below. Select which best indicates how you feel about each statement.</p>',
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
    "I have never bought anything impulsively in my life."
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
  instructions: '<h2><b>CBS</b></h2> <p>Please indicate how often you have done each of the following things.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [6],
  data: {survey: 'cbs7_part2'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [1,1,1,1,0];
    data.infrequency = scores[data.responses['Q7']];
  }
}
var cbs7 = []
cbs7 = cbs7.concat(cbs7_part1)
cbs7 = cbs7.concat(cbs7_part2)
