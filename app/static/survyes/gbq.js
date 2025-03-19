/**
* Gambler’s Belief Questionnaire (GBQ-21)
*
* Steenbergh et al., 2002
*
**/
var gbq21 = {
  type: 'survey-template',
  items: [
    "I think of gambling as a challenge.",
    "My knowledge and skill in gambling contribute to the likelihood that I will make money.",
    "My choices or actions affect the game on which I am betting.",
    "If I am gambling and losing, I should continue because I don’t want to miss a win.",
    "I should keep track of previous winning bets so that I can figure out how I should bet in the future.",
    "When I am gambling, “near misses” or times when I almost win remind me that if I keep playing I will win.",
    "Gambling is more than just luck.",
    "My gambling wins are evidence that I have skill and knowledge related to gambling.",
    "I have a “lucky” technique that I use when I gamble.",
    "In the long run, I will win more money than I will lose gambling.",
    "Even though I may be losing with my gambling strategy or plan, I must maintain that strategy or plan because I know it will eventually come through for me.",
    "There are certain things I do when I am betting (for example, tapping a certain number of times, holding a lucky coin in my hand, crossing my fingers, etc.) which increase the chances that I will win.",
    "If I lose money gambling, I should try to win it back.",
    "Those who don’t gamble much don’t understand that gambling success requires dedication and a willingness to invest some money.",
    "Where I get money to gamble doesn’t matter because I will win and pay it back.",
    "I am pretty accurate at predicting when a “win” will occur.",
    "Gambling is the best way for me to experience excitement.",
    "If I continue to gamble, it will eventually pay off, and I will make money.",
    "I have more skills and knowledge related to gambling than most people who gamble.",
    "When I lose at gambling, my losses are not as bad if I don’t tell my loved ones.",
    "I should keep the same bet even when it hasn’t come up lately because it is bound to win.",
    
    // Infrequency item
    "Sometimes I eat rocks just to see what they taste like."
  ],
  scale: [
    "1 - Strongly Agree",
    "2 - Agree",
    "3 - Somewhat Agree",
    "4 - Neither Agree nor Disagree",
    "5 - Somewhat Disagree",
    "6 - Disagree",
    "7 - Strongly Disagree"
  ],
  reverse: [
    true, true, true, true, true, true, true, true, true, true, 
    true, true, true, true, true, true, true, true, true, true, true, false
    ], // Reverse array for all 21 questions set to true
  instructions: '<h2><b>Gambler’s Belief Questionnaire</b></h2> <p>Read each of the following statements carefully. Rate to what extent you agree or disagree with each statement from 1 (strongly agree) to 7 (strongly disagree).</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 6,

  infrequency_items: [21], // Specify the infrequency item(s) by index (in this case, it's the 21st item)
  data: { survey: 'gbs21' },
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [1,1,1,1,1,1,0];
    data.infrequency = scores[data.responses['Q22']];
  }
}