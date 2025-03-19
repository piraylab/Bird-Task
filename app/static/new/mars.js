/** 
* Mathematics Anxiety Rating Scale (MARS-R)
* 
* PsycTESTS Citation:
* Plake, B. S., & Parker, C. S. (1982). Mathematics Anxiety Rating Scale—Revised [Database record]. 
* Retrieved from PsycTESTS. doi: http://dx.doi.org/10.1037/t06004-000
* 
* Source:
* Plake, Barbara S., & Parker, Claire S. (1982). The development and validation of a revised version 
* of the Mathematics Anxiety Rating Scale. Educational and Psychological Measurement, Vol 42(2), 551-557. 
* doi: 10.1177/001316448204200218, © 1982 by SAGE Publications. Reproduced by Permission of SAGE Publications.
* 
**/

var mars16 = {
  type: 'survey-template',
  items: [
  // Factor 1. Learning Mathematics Anxiety
    "Watching a teacher work an algebraic equation on the blackboard.", 
    "Buying a math textbook.",
    "Reading and interpreting graphs or charts.",
    "Signing up for a course in Statistics.",
    "Listening to another student explain a math formula.",
    "Walking into a math class.",
    "Looking through the pages on a math text.",
    "Starting a new chapter in a math book.",
    "Walking on campus and thinking about a math course.",
    "Picking up a math textbook to begin working on a homework assignment.",
    "Reading the word \"Statistics\".",
    "Working on an abstract mathematical problem, such as: \“if x = outstanding bills, and y = total income, calculate how much you have left for recreational expenditures.\”",
    "Reading a formula in chemistry.", // *** reverse?
    "Listening to a lecture in a math class.",
    "Having to use the tables in the back of a math book.",
    "Being told how to interpret probability statements.",

  // Infrequency item
    "Thinking about puppy olympic scores."
  ],
  scale: [
    "1",
    "2",
    "3",
    "4",
    "5"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, 
    false, false, false, false, true, false, false, false, false
  ],
  instructions: 'Read each statement and then choose the answer to indicate how you generally feel. <br> On a scale of 1 to 5, where 1 is not anxious and 5 is most anxious.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 9,

  infrequency_items: [16],
  data: {survey: 'mars24'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [1,1,1,0.5,0,0];
    data.infrequency = scores[data.responses['Q17']];
  }
}

var mars8 = {
  type: 'survey-template',
  items: [
  // Factor 2. Mathematics Evaluation Anxiety
    "Being given a homework assignment of many difficult math problems which is due the next class meeting.", 
    "Thinking about an upcoming math test one day before.",
    "Solving square root problem.",
    "Taking an examination (quiz) in a math course.",
    "Getting ready to study for a math test.",
    "Being given a \“pop\” quiz in a math class.",
    "Waiting to get a math test returned in which you expected to do well.", 
    "Taking an examination (final) in a math course."
  ],
  scale: [
    "1",
    "2",
    "3",
    "4",
    "5"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, 
  ],
  instructions: 'Read each statement and then choose the answer to indicate how you generally feel. <br> On a scale of 1 to 5, where 1 is not anxious and 5 is most anxious.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 9
}

var mars24 = [];
mars24 = mars24.concat(mars16);
mars24 = mars24.concat(mars8);

