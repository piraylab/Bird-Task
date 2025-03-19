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
    "I never play video games, not even once."
  ],
  scale: [
    "Yes",
    "No"
  ],
  reverse: [
    true, true, true, true, true, true, true, true, true, false
  ],
  instructions: '<h2><b>PVB</b></h2> <p>Please indicate whether each statement applies to you by selecting "Yes" or "No" for each statement below.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [9],
  data: { survey: 'pvb7' },
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [1,0];
    data.infrequency = scores[data.responses['Q10']];
  }
}