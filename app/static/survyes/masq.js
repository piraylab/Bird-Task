/**
* Mood and Anxiety Symptom Questionnaire (MASQ)
* 
* Casillas, A. & Clark, L. A. (2000, May). The Mini Mood and Anxiety Symptom Questionnaire (Mini- MASQ). 
* Poster presented at the 72nd Annual Meeting of the Midwestern Psychological Association, Chicago, IL.
**/
var masq26 = {
  type: 'survey-template',
  items: [
    "Felt really happy",
    "Felt tense or “high strung”",
    "Felt depressed",
    "Was short of breath",
    "Felt withdrawn from other people",
    "Felt dizzy or lightheaded",
    "Felt hopeless",
    "Hands were cold or sweaty",
    "Felt like I had a lot to look forward to",
    "Hands were shaky",
    "Felt like nothing was very enjoyable",
    "Felt keyed up, “on edge”",
    "Felt worthless",
    "Had trouble swallowing",
    "Felt like I had a lot of interesting things to do",
    "Had hot or cold spells",
    "Felt like a failure",
    "Felt like I was choking",
    "Felt really lively, “up”",
    "Felt uneasy",
    "Felt discouraged",
    "Muscles twitched or trembled",
    "Felt like I had a lot of energy",
    "Was trembling or shaking",
    "Felt like I was having a lot of fun",
    "Had a very dry mouth",

    // Infrequency item
    "Felt like I turned into a refrigerator"
  ],
  scale: [
    "1 - Not at all",
    "2 - A little bit",
    "3 - Moderately",
    "4 - Quite a bit",
    "5 - Extremely"
  ],
  reverse: [
    true, false, false, false, false, false, false, false, true, false, 
    false, false, false, false, true, false, false, false, true, false, 
    false, false, true, false, true, false, false
  ],
  instructions: '<h2><b>Mini-MASQ</b></h2> <p>Below is a list of feelings, sensations, problems, and experiences that people sometimes have. Read each item and then select the number that best describes <u>how much</u> you have felt or experienced things this way <u>during the past week, including today</u>. Use this scale when answering:</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 9,

  infrequency_items: [26],
  data: {survey: 'masq26'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q27']];
  }
}

var masq62 = {
  type: 'survey-template',
  items: [
    "Felt sad",
    "Startled easily",
    "Felt cheerful",
    "Felt afraid",
    "Felt discouraged",
    "Hands were shaky",
    "Felt optimistic",
    "Had diarrhea",
    "Felt worthless",
    "Felt really happy",
    "Felt nervous",
    "Felt depressed",
    "Was short of breath",
    "Felt uneasy",
    "Was proud of myself",
    "Had a lump in my throat",
    "Felt faint",
    "Felt unattractive",
    "Had hot or cold spells",
    "Had an upset stomach",
    "Felt like a failure",
    "Felt like I was having a lot of fun",
    "Blamed myself for a lot of things",
    "Hands were cold or sweaty",
    "Felt withdrawn from other people",
    "Felt keyed up, “on edge”",
    "Felt like I had a lot of energy",
    "Was trembling or shaking",
    "Felt inferior to others",
    "Had trouble swallowing",
    "Felt like crying",
    "Was unable to relax",
    "Felt really slowed down",
    "Was disappointed in myself",
    "Felt nauseous",
    "Felt hopeless",
    "Felt dizzy or lightheaded",
    "Felt sluggish or tired",
    "Felt really “up” or lively",
    "Had a pain in my chest",
    "Felt really bored",
    "Felt like I was choking",
    "Looked forward to things with enjoyment",
    "Muscles twitched or trembled",
    "Felt pessimistic about the future",
    "Had a very dry mouth",
    "Felt like I had a lot of interesting things to do",
    "Was afraid I was going to die",
    "Felt like I had accomplished a lot",
    "Felt like it took an extra effort to get started",
    "Felt like nothing was very enjoyable",
    "Heart was racing or pounding",
    "Felt like I had a lot to look forward to",
    "Felt numbness or tingling in my body",
    "Felt tense or “high-strung”",
    "Felt hopeful about the future",
    "Felt like there wasn’t anything interesting or fun to do",
    "Seemed to move quickly and easily",
    "Muscles were tense or sore",
    "Felt really good about myself",
    "Thought about death or suicide",
    "Had to urinate frequently",

    // The infrequency question
    "Turned into a piece of furniture"  
  ],
  scale: [
    "1 - very slightly or not at all",
    "2 - a little",
    "3 - moderately",
    "4 - quite a bit",
    "5 - extremely"
  ],
  reverse: [
        false, false, true, false, false, false, true, false, false, true,
        false, false, false, false, true, false, false, false, false, false,
        false, true, false, false, false, false, true, false, false, false,
        false, false, false, false, false, false, false, false, true, false,
        false, false, true, false, false, false, true, false, true, false,
        false, false, true, false, false, true, false, true, false, true,
        false, false, false
  ],
  instructions: '<h2><b>MASQ-SHORT</b></h2> <p>Below is a list of feelings, sensations, problems, and experiences that people sometimes have. Read each item and then mark the appropriate choice next to that item. Use the choice that best describes <u>how much</u> you have felt or experienced things this way <u>during the past week, including today</u>. Use this scale when answering:</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 9,

  infrequency_items: [62],
  data: {survey: 'masq62'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q63']];
  },
  on_finish: function(data) {
    var responses = data.responses;

    // Check the response for question 89
    // Open the pop-up if the response is 2, 3, 4, or 5
    if (responses.Q61 === "1" || responses.Q61 === "2" || responses.Q61 === "3" || responses.Q61 === "4") {
        window.open('suicide_external_info.html');
    }
  }
}

var masq90 = {
  type: 'survey-template',
  items: [
    "Felt cheerful",
    "Felt afraid",
    "Startled easily",
    "Felt confused",
    "Slept very well",
    "Felt sad",
    "Felt very alert",
    "Felt discouraged",
    "Felt nauseous",
    "Felt like crying",
    "Felt successful",
    "Had diarrhea",
    "Felt worthless",
    "Felt really happy",
    "Felt nervous",
    "Felt depressed",
    "Felt irritable",
    "Felt optimistic",
    "Felt faint",
    "Felt uneasy",
    "Felt really bored",
    "Felt hopeless",
    "Felt like I was having a lot of fun",
    "Blamed myself for a lot of things",
    "Felt numbness or tingling in my body",
    "Felt withdrawn from other people",
    "Seemed to move quickly and easily",
    "Was afraid I was going to lose control",
    "Felt dissatisfied with everything",
    "Looked forward to things with enjoyment",
    "Had trouble remembering things",
    "Felt like I didn't need much sleep",
    "Felt like nothing was very enjoyable",
    "Felt like something awful was going to happen",
    "Felt like I had accomplished a lot",
    "Felt like I had a lot of interesting things to do",
    "Did not have much of an appetite",
    "Felt like being with other people",
    "Felt like it took extra effort to get started",
    "Felt like I had a lot to look forward to",
    "Thoughts and ideas came to me very easily",
    "Felt pessimistic about the future",
    "Felt like I could do everything I needed to do",
    "Felt like there wasn’t anything interesting or fun to do",
    "Had pain in my chest",
    "Felt really talkative",
    "Felt like a failure",
    "Had hot or cold spells",
    "Was proud of myself",
    "Felt very restless",
    "Had trouble falling asleep",
    "Felt dizzy or lightheaded",
    "Felt unattractive",
    "Felt very clearheaded",
    "Was short of breath",
    "Felt sluggish or tired",
    "Hands were shaky",
    "Felt really 'up' or lively",
    "Was unable to relax",
    "Felt like being by myself",
    "Felt like I was choking",
    "Was unable to laugh easily",
    "Had an upset stomach",
    "Felt inferior to others",
    "Had a lump in my throat",
    "Felt really slowed down",
    "Had a very dry mouth",
    "Felt confident about myself",
    "Muscles twitched or trembled",
    "Had trouble making decisions",
    "Felt like I was going crazy",
    "Felt like I had a lot of energy",
    "Was afraid I was going to die",
    "Was disappointed in myself",
    "Heart was racing or pounding",
    "Had trouble concentrating",
    "Felt tense or 'high strung'",
    "Felt hopeful about the future",
    "Was trembling or shaking",
    "Had trouble paying attention",
    "Muscles were tense or sore",
    "Felt keyed up, 'on edge'",
    "Had trouble staying asleep",
    "Worried a lot about things",
    "Had to urinate frequently",
    "Felt really good about myself",
    "Had trouble swallowing",
    "Hands were cold or sweaty",
    "Thought about death or suicide",
    "Got tired or fatigued easily",

    // Infrequency item
    "Felt like I turned into a refrigerator"
  ],
  scale: [
    "1 - Not at all",
    "2 - A little bit",
    "3 - Moderately",
    "4 - Quite a bit",
    "5 - Extremely"
  ],
  reverse: [
    true, false, false, false, true, false, false, false, false, false,
    true, false, false, true, false, false, false, true, false, false,
    false, false, true, false, false, false, true, false, false, true,
    false, true, false, false, true, true, false, true, false, true,
    false, false, true, false, false, false, false, false, true, false,
    false, false, false, true, false, false, false, true, false, true,
    false, false, false, false, false, false, false, true, false, false,
    false, true, false, false, false, false, false, true, false, false,
    false, false, false, false, false, true, false, false, 
    false, false, false
  ],
  instructions: '<h2><b>MASQ</b></h2> <p>Below is a list of feelings, sensations, problems, and experiences that people sometimes have. Read each item and then mark the appropriate choice next to that item. Use the choice that best describes <u>how much</u> you have felt or experienced things this way <u>during the past week, including today</u>. Use this scale when answering:</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 8,

  infrequency_items: [90],
  data: {survey: 'masq90'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1];
    data.infrequency = scores[data.responses['Q91']];
  },
  on_finish: function(data) {
    var responses = data.responses;

    // Check the response for question 89
    // Open the pop-up if the response is 2, 3, 4, or 5
    if (responses.Q89 === "1" || responses.Q89 === "2" || responses.Q89 === "3" || responses.Q89 === "4") {
        window.open('suicide_external_info.html');
    }
  }
}