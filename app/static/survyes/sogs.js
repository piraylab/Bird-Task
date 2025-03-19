/** 
* South Oaks Gambling Screen (SOGS)
* 
**/

var sogs1 = {
  type: 'survey-template',
  items: [

    "played cards for money",
    "bet on horses, dogs or other animals (in off-track betting, at the track or with a bookie)",
    "bet on sports (parley cards, with a bookie, or at jai alai)",
    "played dice games (including craps, over and under, or other dice games) for money",
    "went to casino (legal or otherwise)",
    "played the numbers or bet on lotteries",
    "played bingo",
    "played the stock and/or commodities market",
    "played slot machines, poker machines or other gambling machines",
    "bowled, shot pool, played golf or played some other game of skill for money",

  // Infrequency item
    "How often have you traveled to another planet to gamble in the past year?"

  ],
  scale: [
    "Not at all",
    "Less than once a week",
    "Once a week or more"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false
  ],
  instructions: '<h2><b>SOGS</b></h2> 1. Indicate which of the following types of gambling you have done in your lifetime. <br> For each type, mark one answer: \“not at all\”, \“less than once a week\”, or \“once a week or more\”.',
  scale_repeat: 11,
  survey_width: 950,
  item_width: 45,

  infrequency_items: [10],
  data: {survey: 'sogs1'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1];
    data.infrequency = scores[data.responses['Q11']];
  }
}

var sogs2_15 = {
  type: 'survey-multi-choice',
  questions: [
    {
      name: 'Q02',
      prompt: "2. What is the largest amount of money you have ever gambled with any one day?",
      options: [
        'never have gambled',
        '$10 or less',
        'more than $10 up to $100',
        'more than $100 up to $1000',
        'more than $1000 up to $10,000',
        'more than $10,000'
        ],
      required: true
    },
    {
      name: 'Q03',
      prompt: "3. Do (did) your parents have a gambling problem?",
      options: [
        'both my father and mother gamble (or gambled) too much',
        'my father gambles (or gambled) too much',
        'my mother gambles (or gambled) too much',
        'neither gambles (or gambled) too much'
        ],
      required: true
    },
    {
      name: 'Q04',
      prompt: "4. When you gamble, how often do you go back another day to win back money you lost?",
      options: [
        'never',
        'some of the time (less than half the time) I lost',
        'most of the time I lost',
        'every time I lost'
        ],
      required: true
    },
    {
      name: 'Q05',
      prompt: "5. Have you ever claimed to be winning money gambling but weren’t really? In fact, you lost?",
      options: [
        'never (or never gamble)',
        'yes, less than half the time I lost',
        'yes, most of the time'
        ],
      required: true
    },
    { 
      name: 'Q06',
      prompt: "6. Do you feel you have ever had a problem with gambling?",
      options: [
        'no',
        'yes, in the past, but not now',
        'yes'
        ],
      required: true
    },
    {
      name: 'Q07',
      prompt: "7. Did you ever gamble more than you intended?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q08',
      prompt: "8. Have people criticized your gambling?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q09',
      prompt: "9. Have you ever felt guilty about the way you gamble or what happens when you gamble?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q10',
      prompt: "10. Have you ever felt like you would like to stop gambling but didn’t think you could?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q11',
      prompt: "11. Have you ever hidden betting slips, lottery tickets, gambling money, or other signs of gambling from your spouse, children, or other important people in you life?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q12',
      prompt: "12. Have you ever argued with people you like over how you handle money?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q13',
      prompt: "13. (If you answered “yes” to question 12): Have money arguments ever centered on your gambling?",
      options: [
        'Yes',
        'No'
      ],
      required: false
    },
    {
      name: 'Q14',
      prompt: "14. Have you ever borrowed from someone and not paid them back as a result of your gambling?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    },
    {
      name: 'Q15',
      prompt: "15. Have you ever lost time from work (or school) due to gambling?",
      options: [
        'Yes',
        'No'
      ],
      required: true
    }
  ]
}

var lab = ['Yes', 'No'];
var sogs16 = {
  type: 'survey-likert',
  questions: [
    {prompt: "a. from household money", name: 'Q16a', labels: lab},
    {prompt: "b. from your spouse", name: 'Q16b', labels: lab},
    {prompt: "c. from other relatives or in-laws", name: 'Q16c', labels: lab},
    {prompt: "d. from banks, loan companies or credit unions", name: 'Q16d', labels: lab},
    {prompt: "e. from credit cards", name: 'Q16e', labels: lab},
    {prompt: "f. from loan sharks (Shylocks)", name: 'Q16f', labels: lab},
    {prompt: "g. your cashed in stocks, bonds or other securities", name: 'Q16g', labels: lab},
    {prompt: "h. you sold personal or family property", name: 'Q16h', labels: lab},
    {prompt: "i. you borrowed on your checking account (passed bad checks)", name: 'Q16i', labels: lab},
    {prompt: "j. you have (had) a credit line with a bookie", name: 'Q16j', labels: lab},
    {prompt: "k. you have (had) a credit line with a casino", name: 'Q16k', labels: lab},
  ],
  randomize_question_order: false,
  preamble: "16. If you borrowed money to gamble or to pay gambling debts, where did you borrow from? <br> (Check \“yes\” or \“no\” for each)",
  scale_width:100
}

var sogs35 = [];
sogs35 = sogs35.concat(sogs1);
sogs35 = sogs35.concat(sogs2_15);
sogs35 = sogs35.concat(sogs16);