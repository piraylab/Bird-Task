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
    "I have never experienced any negative emotions or thoughts in my life."
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
  instructions: '<h2><b>BIS-B</b></h2> Rate each statement based on how often you exhibit the described behavior.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 9,

  infrequency_items: [8],
  data: {survey: 'bis8'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1];
    data.infrequency = scores[data.responses['Q9']];
  }
}