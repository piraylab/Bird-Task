/**
* Depression, Anxiety and Stress Scale - 21 Items (DASS-21)
* grouped_numbers = {
    's': ['Q01', 'Q06', 'Q08', 'Q11', 'Q12', 'Q14', 'Q18'],
    'a': ['Q02', 'Q04', 'Q07', 'Q09', 'Q15', 'Q19', 'Q20'],
    'd': ['Q03', 'Q05', 'Q10', 'Q13', 'Q16', 'Q17', 'Q21']
  } 
**/
var dass21 = {
  type: 'survey-template',
  items: [
    "I found it hard to wind down",
    "I was aware of dryness of my mouth",
    "I couldn’t seem to experience any positive feeling at all",
    "I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion)",
    "I found it difficult to work up the initiative to do things",
    "I tended to over-react to situations",
    "I experienced trembling (e.g., in the hands)",
    "I felt that I was using a lot of nervous energy",
    "I was worried about situations in which I might panic and make a fool of myself",
    "I felt that I had nothing to look forward to",
    "I found myself getting agitated",
    "I found it difficult to relax",
    "I felt down-hearted and blue",
    "I was intolerant of anything that kept me from getting on with what I was doing",
    "I felt I was close to panic",
    "I was unable to become enthusiastic about anything",
    "I felt I wasn’t worth much as a person",
    "I felt that I was rather touchy",
    "I was aware of the action of my heart in the absence of physical exertion (e.g., sense of heart rate increase, heart missing a beat)",
    "I felt scared without any good reason",
    "I felt that life was meaningless", // suicide pop-up
    
    // Infrequency item
    "I never experience any emotions or physical sensations."
  ],
  scale: [
    "0 - Did not apply to me at all",
    "1 - Applied to me to some degree, or some of the time",
    "2 - Applied to me to a considerable degree or a good part of time",
    "3 - Applied to me very much or most of the time"
  ],
  reverse: [
    false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false,
    false
  ],
  instructions: '<h2><b>DASS</b></h2> <p>Rate how often each statement applied to you <b>over the past week</b> on a scale of 0 to 3, where 0 means "Did not apply to me at all" and 3 means "Applied to me very much or most of the time." <br>There are no right or wrong answers. Do not spend too much time on any statement.</p>',
  survey_width: 950,
  item_width: 45,
  scale_repeat: 5,

  infrequency_items: [21],
  data: { survey: 'dass21' },
  on_finish: function(data) {
    // Score response on infrequency item.
    const scores = [0, 1, 1, 1];
    data.infrequency = scores[data.responses['Q22']];
  },
  on_finish: function(data) {
    var responses = data.responses;

    // Check the response for question 9
    // Open the pop-up if the response is 2, 3, 4, or 5
    if (responses.Q21 === "1" || responses.Q21 === "2" || responses.Q21 === "3") {
        window.open('suicide_external_info.html');
    }
  }
}