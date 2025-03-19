/** 
* Yale Brown Obsessive-Compulsive Scale (Y-BOCS)
* 
* Goodman, Rasmussen, et al.
**/
var ybocs1_9 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: '<p> I fear I might harm myself <br>(Examples) Fear of eating with a knife or fork, fear of handling sharp objects, fear of walking near glass windows</br>',
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q01'
    },
    {
      prompt: "<p> I fear I might harm other people <br>(Examples) Fear of poisoning other people’s food, fear of harming babies, fear of pushing someone in front of a train, fear of hurting someone’s feelings, fear of being responsible by not providing assistance for some imagined catastrophe, fear of causing harm by giving bad advice</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q02'
    },
    {
      prompt: "<p> I have violent or horrific images in my mind <br>(Examples) Images of murder, dismembered bodies, or other disgusting scenes</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q03'
    },
    {
      prompt: "<p> I fear I will blurt out obscenities <br>(Examples) Fear of shouting obscenities in public situations like church or class, fear of writing obscenities</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q04'
    },
    {
      prompt: "<p> I fear doing something embarrassing <br>(Examples) Fear of appearing foolish in social situations</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q05'
    },
    {
      prompt: "<p> I fear I will act on an unwanted impulse <br>(Examples) Fear of driving a car into a tree, fear of running someone over, fear of stabbing a friend</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q06'
    },
    {
      prompt: "<p> I fear I will steal things <br>(Examples) Fear of “cheating” a cashier, fear of shoplifting inexpensive items</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q07'
    },
    {
      prompt: "<p> I fear that I’ll harm others because I’m not careful enough <br>(Examples) Fear of causing an accident without being aware of it (such as a hit-and-run accident)</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q08'
    },
    {
      prompt: "<p> I fear I’ll be responsible for something else terrible happening <br>(Examples) Fear of causing a fire or burglary because of not being careful enough in checking the house before leaving</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q09'
    }
  ],
  randomize_question_order: false,
  preamble: '<h2><b>Y-BOCS</b></h2> <p style="text-align:left;">Given the definitions, please read carefully each item on the checklist below and select if each obsession and compultion that you currently experience and/or that you have experienced at some time in the past, or that you have not experienced. <p><b>AGRESSIVE OBSESSIONS</b></p>'
}

var ybocs10_17 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I am concerned or disgusted with bodily waste or secretions <br>(Examples) Fear of contracting AIDS, cancer, or other diseases from public rest rooms; fear of your own saliva, urine, feces, semen, or vaginal secretions</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q10'
    },
    {
      prompt: "<p> I am concerned with dirt or germs <br>(Examples) Fear of picking up germs from sitting in certain chairs, shaking hands, or touching door handles</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q11'
    },
    {
      prompt: "<p> I am excessively concerned with environmental contaminants <br>(Examples) Fear of being contaminated by asbestos or radon, fear of radioactive substances, fear of things associated with towns containing toxic waste sites</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q12'
    },
    {
      prompt: "<p> I am excessively concerned with certain household cleansers <br>(Examples) Fear of poisonous kitchen or bathroom cleansers, solvents, insect spray or turpentine</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q13'
    },
    {
      prompt: "<p> I am excessively concerned with animals <br>(Examples) Fear of being contaminated by touching an insect, dog, cat, or other animal</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q14'
    },
    {
      prompt: "<p> I am bothered by sticky substances or residues <br>(Examples) Fear of adhesive tape or other sticky substances that may trap contaminants</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q15'
    },
    {
      prompt: "<p> I am concerned that I will get ill because of contamination <br>(Examples) Fear of getting ill as a direct result of being contaminated (beliefs vary about how long the disease will take to appear)</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q16'
    },
    {
      prompt: "<p> I am concerned that I will contaminate others <br>(Examples) Fear of touching other people or preparing their food after you touch poisonous substances (like gasoline) or after you touch your own body</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q17'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>CONTAMINATION OBSESSIONS</b></p>'
}

var ybocs18_21 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have forbidden or perverse sexual thoughts, images, or impulses <br>(Examples) Unwanted sexual thoughts about strangers, family, or friends</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q18'
    },
    {
      prompt: "<p> I have sexual obsessions that involve children or incest <br>(Examples) Unwanted thoughts about sexually molesting either your own children or other children</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q19'
    },
    {
      prompt: "<p> I have obsessions about homosexuality <br>(Examples) UWorries like “Am I a homosexual?” or “What if I suddenly become gay?” when there is no basis for these thoughts</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q20'
    },
    {
      prompt: "<p> I have obsessions about aggressive sexual behavior toward other people <br>(Examples) Unwanted images of violent sexual behavior toward adult strangers, friends, or family members</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q21'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>SEXUAL OBSESSIONS</b></p>'
}

var ybocs22 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have obsessions about hoarding or saving things <br>(Examples) Worries about throwing away seemingly unimportant things that you might need in the future, urges to pick up and collect useless things</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q22'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>HOARDING/SAVING OBSESSIONS</b></p>'
}

var ybocs23_24 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I am concerned with sacrilege and blasphemy <br>(Examples) Worries about having blasphemous thoughts, saying blasphemous things, or being punished for such things</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q23'
    },
    {
      prompt: "<p> I am excessively concerned with morality <br>(Examples) Worries about always doing “the right thing,” having told a lie, or having cheated someone</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q24'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>RELIGIOUS OBSESSIONS</b></p>'
}

var ybocs25 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have obsessions about symmetry or exactness <br>(Examples) Worries about papers and books being properly aligned, worries about calculations or handwriting being perfect</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q25'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>OBSESSION WITH NEED FOR SYMMETRY OR EXACTNESS</b></p>'
}

var ybocs26_35 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I feel that I need to know or remember certain things <br>(Examples) Belief that you need to remember insignificant things like license plate numbers, the names of actors on television shows, old telephone numbers, bumper stickers or t-shirt slogans</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q26'
    },
    {
      prompt: "<p> I fear saying certain things <br>(Examples) Fear of saying certain words (such as “thirteen”) because of superstitions, fear of saying something that might be disrespectful to a dead person, fear of using words with an apostrophe (because this denotes possession)</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q27'
    },
    {
      prompt: "<p> I fear not saying just the right thing <br>(Examples) Fear of having said the wrong thing, fear of not using the “perfect” word</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q28'
    },
    {
      prompt: "<p> I fear losing things <br>(Examples) Worries about losing a wallet or other unimportant objects, like a scrap of note paper</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q29'
    },
    {
      prompt: "<p> I am bothered by intrusive (neutral) mental images <br>(Examples) Random, unwanted images in your mind</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q30'
    },
    {
      prompt: "<p> I am bothered by intrusive mental nonsense sounds, words or music <br>(Examples) Words, songs, or music in your mind that you can’t stop</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q31'
    },
    {
      prompt: "<p> I am bothered by certain sounds or noises <br>(Examples) Worries about the sounds of clocks ticking loudly or voices in another room that may interfere with sleeping</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q32'
    },
    {
      prompt: "<p> I have lucky and unlucky numbers <br>(Examples) Worries about common numbers (like thirteen) that may cause you to perform activities a certain number of times or to postpone an action until a certain lucky hour of the day</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q33'
    },
    {
      prompt: "<p> Certain colors have special significance to me <br>(Examples) Fear of using objects of certain colors (e.g. black may be associated with death, red with blood or injury)</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q34'
    },
    {
      prompt: "<p> I have superstitious fears <br>(Examples) Fear of passing a cemetery, hearse, or black cat; fear of omens associated with death</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q35'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>MESCELLANEOUS OBSESSIONS</b></p>'
}

var ybocs36_37 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I am concerned with illness or disease <br>(Examples) Worries that you have an illness like cancer, heart disease or AIDS, despite reassurance from doctors that you do not</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q36'
    },
    {
      prompt: "<p> I am excessively concerned with a part of my body or an aspect of my appearance (dysmorphophobia) <br>(Examples) Worries that your face, ears, nose, eyes, or another part of your body is hideous, ugly, despite reassurances to the contrary</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q37'
    }
  ],
  randomize_question_order:  false,
  preamble: '<p><b>SOMATIC OBSESSIONS</b></p>'
}

var ybocs38_41 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I wash my hands excessively or in a ritualized way <br>(Examples) Washing your hands many times a day or for long periods of time after touching, or thinking that you have touched, a contaminated object.This may include washing the entire length of your arms</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q38'
    },
    {
      prompt: "<p> I have excessive or ritualized showering, bathing, tooth brushing, grooming, or toilet routines <br>(Examples) Taking showers or baths or performing other bathroom routines that may last for several hours. If the sequence is interrupted, the entire process may have to be restarted</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q39'
    },
    {
      prompt: "<p> I have compulsions that involve cleaning household items or other inanimate objects <br>(Examples) Excessive cleaning of faucets, toilets, floors, kitchen counters, or kitchen utensils</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q40'
    },
    {
      prompt: "<p> I do other things to prevent or remove contact with contaminants <br>(Examples) Asking family members to handle or remove insecticides, garbage, gasoline cans, raw meat, paints, varnish, drugs in the medicine cabinet, or kitty litter. If you can’t avoid these things, you may wear gloves to handle them, such as when using a self-service gas pump</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q41'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>CLEANING/WASHING COMPULSIONS</b></p>'
}

var ybocs42_46 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I check that I did not harm others <br>(Examples) Checking that you haven’t hurt someone without knowing it.You may ask others for reassurance or call or text someone to make sure everything is all right</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q42'
    },
    {
      prompt: "<p> I check that I did not harm myself <br>(Examples) Looking for injuries or bleeding after handling sharp or breakable objects.You may frequently go to doctors to ask for reassurance that you haven’t hurt yourself</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q43'
    },
    {
      prompt: "<p> I check that nothing terrible happened <br>(Examples) Searching the newspaper or listening to the radio or television for news about some catastrophe that you believe you caused.You may also ask people for reassurance that you didn’t cause an accident</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q44'
    },
    {
      prompt: "<p> I check that I did not make a mistake <br>(Examples) Repeated checking of door locks, stoves, electrical outlets, before leaving home; repeated checking while reading, writing, or doing simple calculations to make sure that you didn’t make a mistake (you can’t be certain that you didn’t)</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q45'
    },
    {
      prompt: "<p> I check some aspect of my physical condition tied to my obsessions about my body <br>(Examples) Seeking reassurance from friends or doctors that you aren’t having a heart attack or getting cancer; repeatedly taking pulse, blood pressure, or temperature; checking your appearance in a mirror, looking for ugly features</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q46'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>CHECKING COMPULSIONS</b></p>'
}

var ybocs47_48 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I reread or rewrite things <br>(Examples) Taking hours to read a few pages in a book or to write a short letter because you get caught in a cycle of reading and rereading; worrying that you didn’t understand something you just read; searching for a “perfect” word or phrase; having obsessive thoughts about the shape of certain printed letters in a book</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q47'
    },
    {
      prompt: "<p> I need to repeat routine activities <br>(Examples) Repeating activities like turning appliances on and off, combing your hair, going in and out of a doorway, or looking in a particular direction; not feeling comfortable unless you do these things the “right” way or the “right” number of times</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q48'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>REPEATING RITUALS</b></p>'
}

var ybocs49 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have counting compulsions <br>(Examples) Counting objects like ceiling or floor tiles, books in a bookcase, nails in a wall, or even grains of sand on a beach; counting when you repeat certain activities, like washing</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q49'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>COUNTING COMPULSIONS</b></p>'
}

var ybocs50 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have ordering or arranging compulsions <br>(Examples) Straightening paper and pens on a desktop or books in a bookcase, wasting hours arranging things in your house in “order” and then becoming very upset if this order is disturbed</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q50'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>ORDERING/ARRANGING COMPULSIONS</b></p>'
}

var ybocs51 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have compulsions to hoard or collect things <br>(Examples) Saving old newspapers, notes, cans, paper towels, wrappers and empty bottles for fear that if you throw them away you may need them; picking up useless objects from the street or from garbage cans</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q51'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>HOARDING/COLLECTING COMPULSIONS</b></p>'
}

var ybocs52_58 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: "<p> I have mental rituals (other than checking/ counting) <br>(Examples) Performing rituals in your head, like saying prayers or thinking a “good” thought to undo a “bad” thought.These are different from obsessions, because you perform these rituals intentionally to reduce anxiety or feel better</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q52'
    },
    {
      prompt: "<p> I need to tell, ask, or confess <br>(Examples) Asking other people to reassure you, confessing to wrong behaviors you never even did, believing that you have to tell other people certain words to feel better</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q53'
    },
    {
      prompt: "<p> I need to touch, tap, or rub things <br>(Examples) Giving in to the urge to touch rough surfaces, like wood, or hot surfaces, like a stove top; giving in to the urge to lightly touch other people; believing you need to touch an object like a telephone to prevent an illness in your family</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q54'
    },
    {
      prompt: "<p> I take measures (other than checking) to prevent harm or terrible consequences to myself or family <br>(Examples) Staying away from sharp or breakable objects, such as knives, scissors, and fragile glass</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q55'
    },
    {
      prompt: "<p> I have ritualized eating behaviors <br>(Examples) Arranging your food, knife, and fork in a particular order before being able to eat, eating according to a strict ritual, not being able to eat until the hands of a clock point exactly at a certain time</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q56'
    },
    {
      prompt: "<p> I have superstitious behaviors <br>(Examples) Not taking a bus or train if its number contains an “unlucky” number (like thirteen), staying in your house on the thirteenth of the month, throwing away clothes you wore while passing a funeral home or cemetery</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q57'
    },
    {
      prompt: "<p> I pull my hair out (trichotillomania) <br>(Examples) Pulling hair from your scalp, eyelids, eyelashes, or pubic areas, using your fingers or tweezers.You may produce bald spots that require you to wear a wig, or you may pluck your eyebrows or eyelids smooth</br>",
      options: ["Past", "Current", "Not Applicable"],
      horizontal: true,
      required: true,
      name: 'Q58'
    }
  ],
  randomize_question_order: false,
  preamble: '<p><b>MISCELLANEOUS COMPULSIONS</b></p>'
}

var ybocs_q = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: 'What is the most upsetting obsessions that you currently experience?', 
      name: 'MostUpsettingObsessions',
      options: ['AGGRESSIVE OBSESSIONS', 'CONTAMINATION OBSESSIONS', 'SEXUAL OBSESSIONS', 'HOARDING/SAVING OBSESSIONS', 'RELIGIOUS OBSESSIONS', 'OBSESSION WITH NEED FOR SYMMETRY OR EXACTNESS', 'MISCELLANEOUS OBSESSIONS', 'SOMATIC OBSESSIONS', 'NOT APPLICABLE'],
      required: true
    },
    {
      prompt: 'What is the most upsetting compulsions that you currently experience?', 
      name: 'MostUpsettingCompulsions',
      options: ['CLEANING/WASHING COMPULSIONS', 'CHECKING COMPULSIONS', 'REPEATING RITUALS', 'COUNTING COMPULSIONS', 'ORDERING/ARRANGING COMPULSIONS', 'HOARDING/COLLECTING COMPULSIONS', 'MISCELLANEOUS COMPULSIONS', 'NOT APPLICABLE'],
      required: true
    }
  ],
  randomize_question_order: false,
  preamble: 'If you have obsessions or compulsions you are curretly experiencing: '
}

var ybocs_part1 = [];
ybocs_part1 = ybocs_part1.concat(ybocs1_9);
ybocs_part1 = ybocs_part1.concat(ybocs10_17);
ybocs_part1 = ybocs_part1.concat(ybocs18_21);
ybocs_part1 = ybocs_part1.concat(ybocs22);
ybocs_part1 = ybocs_part1.concat(ybocs23_24);
ybocs_part1 = ybocs_part1.concat(ybocs25);
ybocs_part1 = ybocs_part1.concat(ybocs26_35);
ybocs_part1 = ybocs_part1.concat(ybocs36_37);
ybocs_part1 = ybocs_part1.concat(ybocs38_41);
ybocs_part1 = ybocs_part1.concat(ybocs42_46);
ybocs_part1 = ybocs_part1.concat(ybocs47_48);
ybocs_part1 = ybocs_part1.concat(ybocs49);
ybocs_part1 = ybocs_part1.concat(ybocs50);
ybocs_part1 = ybocs_part1.concat(ybocs51);
ybocs_part1 = ybocs_part1.concat(ybocs52_58);
ybocs_part1 = ybocs_part1.concat(ybocs_q);

/*
OBSESSION SUBTOTAL (Add items 1-5)
*/
var ybocs_part2_1_5 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: '<p> TIME OCCUPIED BY OBSESSIVETHOUGHTS <br> How much of your time was occupied by obsessive thoughts? How frequently did these thoughts occur?', 
      name: '2.Q01',
      options: [
        '0 = None',
        '1 = Less than 1 hour per day, or occasional intrusions (occur no more than 8 times a day)',
        '2 = 1-3 hours per day, or frequent intrusions (most hours of the day are free of obsessions)',
        '3 = More than 3 hours and up to 8 hours per day, or very frequent intrusions',
        '4 = More than 8 hours per day, or near-constant intrusions'
        ],
      required: true
    },
    {
      prompt: '<p> INTERFERENCE DUE TO OBSESSIVE THOUGHTS <br> How much did these thoughts interfere with your social or work functioning? Is there anything that you didn’t do because of them?', 
      name: '2.Q02',
      options: [
        '0 = No interference',
        '1 = Mild, slight interference with social or occupational performance, but still performance not impaired',
        '2 = Moderate, definitive interference with social or occupational performance, but still manageable',
        '3 = Severe interference, causes substantial impairment in social or occupational performance',
        '4 = Extreme, incapacitating interference'
        ],
      required: true
    },
    {
      prompt: '<p> DISTRESS ASSOCIATED WITH OBSESSIVE THOUGHTS <br> How much distress did your obsessive thoughts cause you?', 
      name: '2.Q03',
      options: [
        '0 = None',
        '1 = Mild, infrequent, and not too disturbing distress',
        '2 = Moderate, frequent, and disturbing distress, but still manageable',
        '3 = Severe, very frequent, and very disturbing distress',
        '4 = Extreme, near-constant, and disabling distress'
        ],
      required: true
    },
    {
      prompt: '<p> RESISTANCE AGAINST OBSESSIONS <br> How much effort did you make to resist the obsessive thoughts? How often did you try to disregard or turn your attention away from those thoughts as they entered your mind?', 
      name: '2.Q04',
      options: [
        '0 = I made an effort to always resist (or the obsessions are so minimal that there is no need to actively resist them)',
        '1 = I tried to resist most of the time (e.g. more than half the time I tried to resist)',
        '2 = I made some effort to resist',
        '3 = I allowed all obsessions to fill my mind without attempting to control them, but I did so with some reluctance',
        '4 = I completely and willingly gave in to all obsessions'
        ],
      required: true
    },
    {
      prompt: '<p> DEGREES OF CONTROL OVER OBSESSIVE THOUGHTS <br> How much control did you have over your obsessive thoughts? How successful were you in stopping or diverting your obsessive thinking?', 
      name: '2.Q05',
      options: [
        '0 = Complete control',
        '1 = Much control; usually I could stop or divert obsessions with some effort and concentration',
        '2 = Moderate control; sometimes I could stop or divert obsessions',
        '3 = Little control; I was rarely successful in stopping obsessions and could only divert attention with great difficulty',
        '4 = No control; I was rarely able to even momentarily ignore the obsessions'
        ],
      required: true
    }
  ],
  randomize_question_order: false,
  preamble: '<h><b>Part 2</b></h> <p style="text-align:left;">Thank you for completing theY-BOCS checklist. Please circle the most upsetting obsessions and compulsions that you currently experience. Remember the definitions of obsessions and compulsions and the examples of each that you may have noted on the checklist, and place a check mark by the appropriate number from 0-4 under each question below.</p> <p style="text-align:left;"><b>OBSESSIVE THOUGHTS</b>: Review the obsessions you checked on the Y-BOCS Symptom Checklist to help you answer the first five questions. Please think about the times when these symptoms were at their worst in the last <u>3-6 months</u> (including today), and check one answer for each question.</p>'
}

/*
COMPULSIVE SUBTOTAL (Add items 6-10)
*/
var ybocs_part2_6_10 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: '<p> TIME SPENT PERFORMING COMPULSIVE BEHAVIORS <br> How much time did you spend performing compulsive behaviors? How frequently did you perform compulsions?', 
      name: '2.Q06',
      options: [
        '0 = None',
        '1 = Less than 1 hour per day was spent performing compulsions, or occasional performance of compulsive behaviors (no more than 8 times per day)',
        '2 = 1-3 hours per day was spent performing compulsions, or frequent performance of compulsive behaviors (most hours were free of compulsions)',
        '3 = More than 3 hours and up to 8 hours per day were spent performing compulsions, or very frequent performance of compulsive behaviors (during most hours of the day)',
        '4 = More than 8 hours were spent performing compulsions, or near-constant performance of compulsive behaviors (hour rarely passes without several compulsions being performed)'
        ],
      required: true
    },
    {
      prompt: '<p>  INTERFERENCE DUE TO COMPULSIVE BEHAVIORS <br> How much did your compulsive behaviors interfere with your social or work functioning?', 
      name: '2.Q07',
      options: [
        '0 = No interference',
        '1 = Mild, slight interference with social or occupational performance, but overall performance not impaired',
        '2 = Moderate, definitive interference with social or occupational performance, but still manageable',
        '3 = Severe interference, causes substantial impairment in social or occupational performance',
        '4 = Extreme, incapacitating interference'
        ],
      required: true
    },
    {
      prompt: '<p> . DISTRESS ASSOCIATED WITH COMPULSIVE BEHAVIORS <br> How would you have felt if prevented from performing your compulsions? How anxious would you have become?', 
      name: '2.Q08',
      options: [
        '0 = Not at all anxious',
        '1 = Only slightly anxious if compulsions prevented',
        '2 = Anxiety would mount but remain manageable if compulsions prevented',
        '3 = Prominent and very disturbing increase in anxiety if compulsions interrupted',
        '4 = Extreme, incapacitating anxiety from any intervention aimed at reducing the compulsions'
        ],
      required: true
    },
    {
      prompt: '<p> RESISTANCE <br> How much effort did you make to resist the compulsions? Or how often did you try to stop the compulsions?', 
      name: '2.Q09',
      options: [
        '0 = I made an effort to always resist (or the obsessions are so minimal that there is no need to actively resist them)',
        '1 = I tried to resist most of the time (e.g. more than half the time I tried to resist)',
        '2 = I made some effort to resist',
        '3 = I yielded to almost all compulsions without attempting to control them, but I did so with some reluctance',
        '4 = I completely and willingly yielded to all compulsions'
        ],
      required: true
    },
    {
      prompt: '<p> DEGREES OF CONTROL OVER COMPULSIVE BEHAVIORS <br> How much control did you have over the compulsive behaviors? How successful were you in stopping the ritual(s)?', 
      name: '2.Q10',
      options: [
        '0 = Complete control',
        '1 = Usually I could stop compulsions or rituals with some effort and willpower',
        '2 = Sometimes I could stop compulsive behaviors, but only with difficulty',
        '3 = I could only delay the compulsive behaviors, but eventually they had to be carried out to completion',
        '4 = I was rarely able to even momentarily delay performing the compulsive behaviors'
        ],
      required: true
    }
  ],
  randomize_question_order: false,
  preamble: [
    '<h2> Part 2 Cont</h2> <p style="text-align:left;"><b>COMPULSIONS</b>: Review the compulsions you checked on theY-BOCS Symptom Checklist to help you answer these five questions. Please think about the times when these symptoms were at their worst in the last <u>3-6 months</u> (including today), and check one answer for each question.</p>'
  ]
}

var ybocs_part2_11 = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: '<p> Do you think your obsessions or compulsions are reasonable or rational? Would there be anything besides anxiety to worry about if you resisted them? Do you think something would really happen?', 
      name: '2.Q11',
      options: [
        '0 = I think my obsessions or compulsions are unreasonable or excessive',
        '1 = I think my obsessions or compulsions are unreasonable or excessive, but I’m not completely convinced that they aren’t necessary',
        '2 = I think my obsessions or compulsions may be unreasonable or excessive',
        '3 = I don’t think my obsessions or compulsions are unreasonable or excessive',
        '4 = I am sure my obsessions or compulsions are reasonable, no matter what anyone says'
      ],
      required: true
    }
  ]
}

var ybocs_part2 = [];
ybocs_part2 = ybocs_part2.concat(ybocs_part2_1_5);
ybocs_part2 = ybocs_part2.concat(ybocs_part2_6_10);
ybocs_part2 = ybocs_part2.concat(ybocs_part2_11);

var ybocs = ybocs_part1.concat(ybocs_part2)