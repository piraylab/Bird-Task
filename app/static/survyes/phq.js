/**
* Patient Health Questionnaire (PHQ-9)
*
**/
var phq9 = {
  type: 'survey-template',
  items: [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    'Trouble concentrating on things, such as reading the newspaper or watching television',
    'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
    'Thoughts that you would be better off dead or of hurting yourself',  // suicide pop-up window
    
    //Infrequency item
    'I have slept at least one hour each day.'
  ],
  scale: [
    'Prefer not to answer',  // include this option?

    'Not at all',
    'Several days',
    'Over half the days',
    'Nearly every day'  
  ],
  reverse: [
    false, false, false, false, false,
    false, false, false, false, false
  ],
  instructions: '<h2><b>PHQ</b></h2> <p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [9],
  data: {survey: 'phq9'},
  on_finish: function(data) {
    // Score response on infrequncy item.
    const scores = [1,1,1,1,0];
    data.infrequency = scores[data.responses['Q10']];
  },
  on_finish: function(data) {
    var responses = data.responses;

    // Check the response for question 9
    // Open the pop-up if the response is 2, 3, 4, or 5
    if (responses.Q09 === "1" || responses.Q09 === "2" || responses.Q09 === "3" || responses.Q09 === "4") {
        window.open('suicide_external_info.html');
    }
  }
}