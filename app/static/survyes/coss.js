/** 
* Compulsive Online Shopping Scale (COSS)
* 
**/

var coss28 = {
  type: 'survey-template',
  items: [

    // Salience
    "Online shopping/buying is the most important thing in my life.",
    "I think about online shopping/buying things all the time.",
    "I spend a lot of time thinking of or planning online shopping/buying.",
    "Thoughts about online shopping/buying keep popping in my mind.",

    // Mood modification
    "Sometimes I shop online in order to feel better.",
    "Sometimes I shop/buy things online in order to change my mood.",
    "I shop/buy things online in order to forget about personal problems.",
    "I shop/buy things online in order to reduce feelings of guilt, anxiety, helplessness, loneliness, and/or depression.",

    // Conflict
    "I shop/buy online so much that it negatively affects my daily obligations (e.g., school and work).",
    "I give less priority to hobbies, leisure activities, job/studies, or exercise because of online shopping/buying.",
    "I have ignored to love partner, family, and friends because of online shopping/buying.",
    "I often end up in arguments with other because of online shopping/buying.",

    // Tolerance
    "I feel an increasing inclination to shop/buy things online.",
    "I shop/buy online much more than I had intended/planned.",
    "I feel I have to shop/buy more and more online to obtain the same satisfactions as before.",
    "I spend more and more time shopping/buying online.",

    // Relapse
    "I have tried to cut down on online shopping/buying without success.",
    "I have been told by others to reduce online shopping/buying.",
    "I have decided to shop/buy less online, but have not been able to do so.",
    "I have managed to limit online shopping/buying for periods, and then experienced relapse.",

    // Withdrawal
    "I become stressed if obstructed from shopping/buying things online.",
    "I become sour and grumpy if I for some reasons cannot shop/buy things online when I feel like it.",
    "I feel bad if I for some reason I am prevented from shopping/buying things online.",
    "If it has been a while since I last shopped online, I feel a strong urge to shop/buy things.",

    // Problems
    "I shop/buy online so much that it has caused economic problems.",
    "I shop/buy online so much that is has impaired my well-being.",
    "I have worried so much about my online shopping problems that it sometimes has made me sleepless.",
    "I have been bothered with poor conscience because of my online shopping/buying.",

    // Infrequency item
    "I become stressed if I don't buy a lot of puppy olympic souvenirs."

  ],
  scale: [
    "1 = Strongly Disagree",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7 = Strongly Agree"
  ],
  reverse: [
    false, false, false, false, 
    false, false, false, false,
    false, false, false, false, 
    false, false, false, false, 
    false, false, false, false,
    false, false, false, false, 
    false, false, false, false, 
    false
  ],
  instructions: '<h2><b>COSS</b></h2> The questions below ask about your online shopping habit. <br> Read each statement carefully and select how much do you agree with the statement.',
  survey_width: 950,
  item_width: 40,
  scale_repeat: 10,

  infrequency_items: [28],
  data: {survey: 'coss28'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [0,1,1,1,1,1,1];
    data.infrequency = scores[data.responses['Q29']];
  }
}