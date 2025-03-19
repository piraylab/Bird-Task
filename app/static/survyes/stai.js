/**
* Spielberger State-Trait Anxiety Inventory (STAI)
*
* Spielberger, C. D. (2010). State‐Trait anxiety inventory. The Corsini encyclopedia
* of psychology, 1-1.
*
* Knowles KA, Olatunji BO (2020) Specificity of trait anxiety in anxiety and depression:
* Meta-analysis of the State-Trait Anxiety Inventory. Clin Psychol Rev:101928.
*
**/

var stai20 = {
  type: 'survey-template',
  items: [
    "I feel pleasant.",
    "I feel nervous and restless.",
    "I feel satisfied with myself.",
    "I wish I could be as happy as others seem to be.",
    "I feel like a failure.",
    "I feel rested.",
    'I am "calm, cool, and collected".',
    "I feel that difficulties are piling up so that I cannot overcome them.",
    "I worry too much over something that doesn't really matter.",
    "I am happy.",
    "I have disturbing thoughts.",
    "I lack self-confidence.",
    "I feel secure.",
    "I make decisions easily.",
    "I feel inadequate.",
    "I am content.",
    "Some unimportant thought runs through my mind and bothers me.",
    "I take disappointments so keenly that I can't put them out of my mind.",
    "I am a steady person.",
    "I get in a state of tension or turmoil as I think over my recent concerns and interest.",

    // Infrequency item
    "I buy a lot of puppy olympic souvenirs."
  ],
  scale: [
    "Almost never",
    "Sometimes",
    "Often",
    "Almost always"
  ],
  reverse: [
    true, false, true, false, false, true, true, false, false, true,
    false, false, true, true, false, true, false, false, true, false,
    false
  ],
  instructions: '<h2><b>STAI</b></h2> Read each statement and then choose the answer to indicate how you generally feel.',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [20],
  data: {survey: 'stai20'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1];
    data.infrequency = scores[data.responses['Q21']];
  }
}