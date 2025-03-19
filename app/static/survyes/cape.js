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