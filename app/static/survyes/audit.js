/**
* AUDIT questionnaire: screen for alcohol misuse (AUDIT-10)
* 
* Saunders JB, Aasland OG, Babor TF et al. Development of the alcohol use disorders identification test (AUDIT): 
* WHO collaborative project on early detection of persons with harmful alcohol consumption — II. Addiction 1993, 88: 791–803. 
*
**/
var audit10 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: 'How often do you have a drink containing alcohol?',
      name: 'Q01',
      options: ['Never', 'Monthly or less', '2−4 times a month', '2−3 times a week', '4 or more times a week'],
      required: true
    },
    {
      prompt: 'How many standard drinks containing alcohol do you have on a typical day when drinking?',
      name: 'Q02',
      options: ['1 or 2', '3 or 4', '5 or 6', '7 to 9', '10 or more'],
      required: true
    },
    {
      prompt: 'How often do you have six or more drinks on one occasion?',
      name: 'Q03',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you found that you were not able to stop drinking once you had started?',
      name: 'Q04',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you failed to do what was normally expected of you because of drinking?',
      name: 'Q05',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you needed a drink in the morning to get yourself going after a heavy drinking session?',
      name: 'Q06',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, how often have you had a feeling of guilt or remorse after drinking?',
      name: 'Q07',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'During the past year, have you been unable to remember what happened the night before because you had been drinking?',
      name: 'Q08',
      options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
      required: true
    },
    {
      prompt: 'Have you or someone else been injured as a result of your drinking?',
      name: 'Q09',
      options: ['No', 'Yes, but not in the past year', 'Yes, during the past year'],
      required: true
    },
    {
      prompt: 'Has a relative or friend, doctor or other health worker been concerned about your drinking or suggested you cut down?',
      name: 'Q10',
      options: ['No', 'Yes, but not in the past year', 'Yes, during the past year'],
      required: true
    },
    // Infrequency item
    {
      prompt: 'I have never had a drink containing alcohol in my life.',
      name: 'Infrequency',
      options: ['Yes', 'No'],
      required: true
    }
  ],
  randomize_question_order: false,
  preamble: 'Please answer the following questions by selecting the option that best applies to you.',
  data: { survey: 'audit10' },

  on_finish: function(data) {
    // Define the scoring for each question.
    const scoreOptions1 = {
      'Never': 0, 
      'Monthly or less': 1, 
      '2−4 times a month': 2, 
      '2−3 times a week': 3, 
      '4 or more times a week': 4
    };
    const scoreOptions2 = {
      '1 or 2': 0, 
      '3 or 4': 1, 
      '5 or 6': 2, 
      '7 to 9': 3, 
      '10 or more': 4
    };
    const scoreOptions3_8 = {
      'Never': 0,
      'Less than monthly': 1,
      'Monthly': 2,
      'Weekly': 3,
      'Daily or almost daily': 4
    };
    const scoreOptions9_10 = {
      'No': 0, 
      'Yes, but not in the past year': 2, 
      'Yes, during the past year': 4
    };

    // Calculate the total score.
    var totalScore = 0;
    for (let i = 1; i <= 10; i++) {
      const questionName = 'Q' + (i < 10 ? '0' : '') + i; // Generate the question name (e.g., Q01, Q02, ..., Q10)
      const re = data.response[questionName];

      if (i === 1){
        totalScore += scoreOptions1[re];
      }
      else if (i === 2){
        totalScore += scoreOptions2[re];
      }
      else if (i < 9){
        totalScore += scoreOptions3_8[re];
      }
      else {
        totalScore += scoreOptions9_10[re];
      }
    }

    var interpretation = '';
    if (totalScore >= 15) {
      interpretation = 'Likely alcohol dependence (men)';
    } 
    else if (totalScore >= 13) {
      interpretation = 'Likely alcohol dependence (women)';
    }
    else if (totalScore >= 8) {
      interpretation = 'Harmful or hazardous drinking';
    };

    // Check the infrequency question (Q11) response.
    const infrequencyResponse = data.response['Infrequency'];
    if ((infrequencyResponse === "Yes" && totalScore !== 0) || (infrequencyResponse === "No" && totalScore === 0)) {
      // Mark as "not paying attention" if infrequency criteria are met.
      interpretation += ', Not paying attention';
    }

    // Add the total score to the data object.
    data.totalScore = totalScore;
    data.interpretation = interpretation;

    console.log(data.totalScore);
    console.log(data.interpretation);

  }
}