/**
* Yale-Brown Obsessive-Compulsive Scale modified for compulsive buying (YBOC-CB-10)
*
* Monahan et al., 1996
*
**/
var yboc_cb10 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Time occupied by thoughts about shopping.\nHow much of your time is occupied by thoughts about shopping?",
      name: 'Q01',
      options: [
        '0 - None',
        '1 - Mild, < 1 h/day or occasional intrusion',
        '2 - Moderate, 1-3 h/day, or frequent intrusion',
        '3 - Severe, > 3 and up to 8 h/day or very frequent intrusion',
        '4 - Extreme, > 8 h/day or near constant intrusion'
      ],
      required: true
    },
    {
      prompt: "Interference due to thoughts about shopping.\nHow much do your thoughts about shopping interfere with your social, work, or role functioning? Is there anything you don’t do because of them?",
      name: 'Q02',
      options: [
        '0 - None',
        '1 - Mild, slight interference with social or occupational activities but overall performance not impaired',
        '2 - Moderate, definite interference with social or occupational performance, but still manageable',
        '3 - Severe, causes substantial impairment in social or occupational performance',
        '4 - Extreme, incapacitating'
      ],
      required: true
    },
    {
      prompt: "Distress associated with thoughts about shopping.\nHow much distress do your thoughts about shopping cause you?",
      name: 'Q03',
      options: [
        '0 - None',
        '1 - Mild, not too disturbing',
        '2 - Moderate, disturbing but still manageable',
        '3 - Severe, very disturbing',
        '4 - Extreme, near constant and disabling distress'
      ],
      required: true
    },
    {
      prompt: "Resistance against thoughts about shopping.\nHow much of an effort do you make to resist thoughts about shopping? How often do you try to disregard or turn your attention away from these thoughts as they enter your mind?",
      name: 'Q04',
      options: [
        '0 - Always makes an effort to resist, or symptoms so minimal that active resistance not needed',
        '1 - Tries to resist most of the time',
        '2 - Makes some effort to resist',
        '3 - Yields to all thoughts without attempting to control them, but does so with some resistance',
        '4 - Completely and willingly yields to all thoughts about shopping'
      ],
      required: true
    },
    {
      prompt: "Degree of control over thoughts about shopping.\nHow much control do you have over your thoughts about shopping? How successful are you in stopping or diverting your thoughts about shopping? Can you dismiss them?",
      name: 'Q05',
      options: [
        '0 - Complete control',
        '1 - Much control, usually able to stop or divert thoughts with some effort and concentration',
        '2 - Moderate control, sometimes able to stop or divert thinking',
        '3 - Little control, rarely successful in stopping or dismissing thinking, can only divert attention with difficulty',
        '4 - No control, experience is completely involuntary, rarely able even momentarily to alter thoughts about shopping'
      ],
      required: true
    },
    {
      prompt: "Time spent shopping.\nHow much time do you spend shopping? How much time do you spend compulsively shopping?",
      name: 'Q06',
      options: [
        '0 - None',
        '1 - Mild, spends < 1 h/day shopping',
        '2 - Moderate, spends 1-3 h/day shopping',
        '3 - Severe, spends > 3 and up to 8 h/day shopping',
        '4 - Extreme, spends > 8 h/day shopping or near constant shopping episodes'
      ],
      required: true
    },
    {
      prompt: "Interference due to shopping behavior.\nHow much does your shopping behavior interfere with your social, work, or role functioning? Is there anything you don’t do because of the shopping?",
      name: 'Q07',
      options: [
        '0 - None',
        '1 - Mild, slight interference with social or occupational activities but overall performance not impaired',
        '2 - Moderate, definite interference with social or occupational performance, but still manageable',
        '3 - Severe, causes substantial impairment in social or occupational performance',
        '4 - Extreme, incapacitating'
      ],
      required: true
    },
    {
      prompt: "Distress associated with compulsive shopping behavior.\nHow would you feel if prevented from shopping?\nHow anxious would you become?",
      name: 'Q08',
      options: [
        '0 - None',
        '1 - Mild, only slightly anxious if shopping prevented, or only slightly anxious',
        '2 - Moderate, reports that anxiety would mount but remains manageable',
        '3 - Severe, prominent, and very disturbing increase in anxiety if shopping interrupted',
        '4 - Extreme, incapacitating anxiety from any intervention aimed at modifying activity, or incapacitating anxiety develops during performance of shopping'
      ],
      required: true
    },
    {
      prompt: "Resistance against compulsive shopping.\nHow much of an effort do you make to resist the compulsion?",
      name: 'Q09',
      options: [
        '0 - Always makes an effort to resist, or symptoms so minimal that active resistance not needed',
        '1 - Tries to resist most of the time',
        '2 - Makes some effort to resist',
        '3 - Yields to almost all compulsions without attempting to control them, but does so with some reluctance',
        '4 - Completely and unwillingly yields to almost all compulsions'
      ],
      required: true
    },
    {
      prompt: "Degree of control over compulsive shopping.\nHow strong is the drive to shop? How much control do you have over the compulsion?",
      name: 'Q10',
      options: [
        '0 - Complete control',
        '1 - Much control, experiences pressure to perform the behavior but usually able to exercise voluntary control over it',
        '2 - Moderate control, strong pressure to perform behavior, can control it only with difficulty',
        '3 - Little control, very strong drive to perform behavior, must be carried to completion, can only delay with difficulty',
        '4 - No control, drive to perform behavior experienced as completely involuntary and overpowering, rarely able even momentarily to delay activity'
      ],
      required: true
    },
    {
      prompt: "Degree of attention over time. \nSelect 'I experience this rarely' for this question.",
      name: 'InfrequencyQuestion',
      options: [
        '0- None. I always pay close attention to instructions',
        '1- I experience this rarely. I carefully read and follow instructions',
        '2- Sometimes. I occasionally pay attention to instructions',
        '3- Often. I frequently ignore instructions',
        '4- All the time. I rarely follow instructions correctly'
      ],
      required: true
    }
  ],
  randomize_question_order: true,
  preamble: '<h2><b>YBOC-BC</b></h2>For each of the following statements, please indicate the degree to which it applies to you:',

  onfinish: function(data) {
    // Access the response to the infrequency question
    var infrequencyResponse = data.responses['InfrequencyQuestion'];

    // Define the scoring system
    var scoring = {
      '0- None. I always pay close attention to instructions': 1,
      '1- I experience this rarely. I carefully read and follow instructions': 0,
      '2- Sometimes. I occasionally pay attention to instructions': 1,
      '3- Often. I frequently ignore instructions': 1,
      '4- All the time. I rarely follow instructions correctly': 1
    };

    // Calculate the total score for the infrequency question
    var infrequencyScore = scoring[infrequencyResponse];

    // You can now use the infrequencyScore as needed
    console.log('Infrequency Score:', infrequencyScore);

    // You can continue with other actions or calculations here
  }
}