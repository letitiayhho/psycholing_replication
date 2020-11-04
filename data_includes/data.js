var shuffleSequence;
if (Math.random < 0.5) {
  shuffleSequence = seq(
    "setcounter",
    "intro",
    "practice",
    "presep",
    sepWith("sep", startsWith("a")),
    "exit"
  );
} else {
  shuffleSequence = seq(
    "setcounter",
    "intro",
    "practice",
    "presep",
    sepWith("sep", startsWith("b")),
    "exit"
  );
}
var practiceItemTypes = ["practice"];

var defaults = [
  "Separator",
  {
    transfer: 1000,
    normalMessage: "Please wait for the next sentence.",
    //errorMessage: "Wrong. Please wait for the next sentence."
    ignoreFailure: "true",
  },
  "DashedSentence",
  {
    mode: "self-paced reading",
  },
  "Question",
  {
    hasCorrect: true,
    randomOrder: true,
  },
  "Message",
  {
    hideProgressBar: true,
  },
  "Form",
  {
    hideProgressBar: true,
    continueOnReturn: true,
    saveReactionTime: true,
  },
];

var items = [
  // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
  // sequence to send results before the experiment has finished. This is NOT intended to allow
  // for incremental sending of results -- you should send results exactly once per experiment.
  // However, it does permit additional messages to be displayed to participants once the
  // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
  // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
  // otherwise, results are automatically sent at the end of the experiment.
  //
  //["sr", "__SendResults__", { }],

  ["sep", "Separator", {}],

  // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
  // for latin square designs will be updated. (Previously, this was always updated upon completion
  // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
  // point in your running order. If given no options, the counter is incremented by one. If given
  // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
  // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
  //
  ["setcounter", "__SetCounter__", {}],

  // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
  // consent checkbox).

  [
    "intro",
    "Form",
    {
      html: { include: "example_intro.html" },
      validators: {
        age: function (s) {
          if (s.match(/^\d+$/)) return true;
          else return "Bad value for \u2018age\u2019";
        },
      },
    },
  ],

  [
    "intro",
    "Form",
    { consentRequired: true, html: { include: "instruction1.html" } },
  ],
  [
    "intro",
    "Form",
    { consentRequired: true, html: { include: "instruction2.html" } },
  ],
  [
    "intro",
    "Form",
    { consentRequired: true, html: { include: "instruction3.html" } },
  ],
  ["exit", "Form", { consentRequired: false, html: { include: "exit.html" } }],

  //

  //an example for self-paced reading, with word-by-word presentation

  [
    "practice",
    "DashedSentence",
    {
      s:
        "This is a practice sentence to get you used to reading sentences like this.",
    },
    "Question",
    {
      hasCorrect: false,
      randomOrder: false,
      q: "For each sentence you will have to answer a yes or no question, for this practice question, click 'yes'",
      as: ["Yes", "No"],
    },
  ],

  //an example for self-paced reading with a yes/no binary acceptability judgment task
  [
    "practice",
    "DashedSentence",
    {
      s: "The pop star sang herself hoarse at the concert last night.",
    },
    "Question",
    {
      hasCorrect: false,
      randomOrder: false,
      q: "Was the concert at night?",
      as: ["Yes", "No"],
    },
  ],

    // Block 0

["a_f", "DashedSentence", { s: "The critic wept at the end of his favorite French film." }, "Question", { q: "Did the critic cry?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "The critic wept at the end of his favorite French film." }, "Question", { q: "Did the critic cry?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The young mechanic maintained the espresso machine in perfect condition." }, "Question", { q: "Was the mechanic middle-aged?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The young mechanic maintained the espresso machine in perfect condition." }, "Question", { q: "Was the mechanic middle-aged?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "The accountants were forced to retire because of the scandal." }, "Question", { q: "Did the accountants retire against their will?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "The accountants were forced to retire because of the scandal." }, "Question", { q: "Did the accountants retire against their will?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The chef was given a beautiful painting by a loyal patron of the restaurant." }, "Question", { q: "Was the painting given to the waitress?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The chef was given a beautiful painting by a loyal patron of the restaurant." }, "Question", { q: "Was the painting given to the waitress?", as: ["Yes", "No"], /* correct answer: 2 */ }],

    // Block 1

["a_2_t", "DashedSentence", { s: "The woman determined that the estimate had been inflated by the accountant." }, "Question", { q: "Did the accountant inflate the estimate?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_2", "DashedSentence", { s: "The woman determined the estimate had been inflated by the accountant." }, "Question", { q: "Did the accountant inflate the estimate?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_1", "DashedSentence", { s: "The men discovered the island had been invaded by the enemy." }, "Question", { q: "Was the island invaded by the enemy?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_1_t", "DashedSentence", { s: "The men discovered that the island had been invaded by the enemy." }, "Question", { q: "Was the island invaded by the enemy?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The tourists hoped to avoid the riots that were likely to break out." }, "Question", { q: "Were the tourists concerned about the possibility of riots?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "The tourists hoped to avoid the riots that were likely to break out." }, "Question", { q: "Were the tourists concerned about the possibility of riots?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The politicians acknowledged the need to deal with social issues." }, "Question", { q: "Did the politicians refuse to deal with social issues?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The politicians acknowledged the need to deal with social issues." }, "Question", { q: "Did the politicians refuse to deal with social issues?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_4", "DashedSentence", { s: "The men forgot the details had been worked out in advance." }, "Question", { q: "Had the details been worked out in advance?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_4_t", "DashedSentence", { s: "The men forgot that the details had been worked out in advance." }, "Question", { q: "Had the details been worked out in advance?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "Not everyone demanded the resignation of the foreign secretary." }, "Question", { q: "Did everyone demand that the foreign secretary resign?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "Not everyone demanded the resignation of the foreign secretary." }, "Question", { q: "Did everyone demand that the foreign secretary resign?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_3_t", "DashedSentence", { s: "They all claimed that the luggage had been stolen from the hotel." }, "Question", { q: "Do they believe their luggage was stolen?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_3", "DashedSentence", { s: "They all claimed the luggage had been stolen from the hotel." }, "Question", { q: "Do they believe their luggage was stolen?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "Many people went to the techno party organized at the new club." }, "Question", { q: "Was the party a popular event?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "Many people went to the techno party organized at the new club." }, "Question", { q: "Was the party a popular event?", as: ["Yes", "No"], /* correct answer: 1 */ }],

    // Block 2

["a_1_t", "DashedSentence", { s: "The women revealed that the secret had been exposed by the officials." }, "Question", { q: "Did the woman reveal the secret?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_1", "DashedSentence", { s: "The women revealed the secret had been exposed by the officials." }, "Question", { q: "Did the woman reveal the secret?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "The law professor was portrayed by the journalist as the leading candidate." }, "Question", { q: "Did the journalist think a businessman would win the election?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The law professor was portrayed by the journalist as the leading candidate." }, "Question", { q: "Did the journalist think a businessman would win the election?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_3", "DashedSentence", { s: "Some people regretted the decision had been reached without any discussion." }, "Question", { q: "Were people happy that there was no discussion before the decision?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_3_t", "DashedSentence", { s: "Some people regretted that the decision had been reached without any discussion." }, "Question", { q: "Were people happy that there was no discussion before the decision?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_2_t", "DashedSentence", { s: "Two people heard that the album had been criticized in the magazine." }, "Question", { q: "Was the album criticized in the magazine?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_2", "DashedSentence", { s: "Two people heard the album had been criticized in the magazine." }, "Question", { q: "Was the album criticized in the magazine?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The band members set up their equipment before the concert." }, "Question", { q: "Did they set up their equipment?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "The band members set up their equipment before the concert." }, "Question", { q: "Did they set up their equipment?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_4", "DashedSentence", { s: "The man observed the patient had been sent home too early." }, "Question", { q: "Was the patient sent home late?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_4_t", "DashedSentence", { s: "The man observed that the patient had been sent home too early." }, "Question", { q: "Was the patient sent home late?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "Four men were seen by the security guard trying to escape." }, "Question", { q: "Did the security guard see six people trying to escape?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "Four men were seen by the security guard trying to escape." }, "Question", { q: "Did the security guard see six people trying to escape?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "The artists were prevented by the authorities from leaving the country." }, "Question", { q: "Were the artists allowed to leave the country?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The artists were prevented by the authorities from leaving the country." }, "Question", { q: "Were the artists allowed to leave the country?", as: ["Yes", "No"], /* correct answer: 2 */ }],

    // Block 3

["a_f", "DashedSentence", { s: "The successful writer was inspired by his professor to think critically about his work." }, "Question", { q: "Was the writer unsuccessful?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The successful writer was inspired by his professor to think critically about his work." }, "Question", { q: "Was the writer unsuccessful?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_3_t", "DashedSentence", { s: "The men remembered that the appointment had not changed since last week." }, "Question", { q: "Did the appointment change since last week?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_3", "DashedSentence", { s: "The men remembered the appointment had not changed since last week." }, "Question", { q: "Did the appointment change since last week?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_2", "DashedSentence", { s: "Some people understood the message had not meant much to foreigners." }, "Question", { q: "Did the message mean a lot to foreigners?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_2_t", "DashedSentence", { s: "Some people understood that the message had not meant much to foreigners." }, "Question", { q: "Did the message mean a lot to foreigners?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "Ten teenagers were put in jail by the police for robbing a liquor store." }, "Question", { q: "Was the liquor store robbed by teenagers?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "Ten teenagers were put in jail by the police for robbing a liquor store." }, "Question", { q: "Was the liquor store robbed by teenagers?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_4_t", "DashedSentence", { s: "The woman recalled that the speech had not gone over very well." }, "Question", { q: "Did the speech go well?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_4", "DashedSentence", { s: "The woman recalled the speech had not gone over very well." }, "Question", { q: "Did the speech go well?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "Five children were made sick by the rancid poultry they had eaten." }, "Question", { q: "Did the children eat poultry?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "Five children were made sick by the rancid poultry they had eaten." }, "Question", { q: "Did the children eat poultry?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_1", "DashedSentence", { s: "The man noticed the mistake had not happened due to negligence." }, "Question", { q: "Did the mistake happen due to negligence?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_1_t", "DashedSentence", { s: "The man noticed that the mistake had not happened due to negligence." }, "Question", { q: "Did the mistake happen due to negligence?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "The infant drank the milk warmed up by her mother." }, "Question", { q: "Did the mother warm up the milk for her teenage child?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The infant drank the milk warmed up by her mother." }, "Question", { q: "Did the mother warm up the milk for her teenage child?", as: ["Yes", "No"], /* correct answer: 2 */ }],

    // Block 4

["a_1_t", "DashedSentence", { s: "The woman assumed that the blame might have belonged to the driver." }, "Question", { q: "Did the woman think the driver was to blame?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_1", "DashedSentence", { s: "The woman assumed the blame might have belonged to the driver." }, "Question", { q: "Did the woman think the driver was to blame?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_2", "DashedSentence", { s: "They all read the newspaper might be going out of business." }, "Question", { q: "Is the newspaper possibly going out of business?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_2_t", "DashedSentence", { s: "They all read that the newspaper might be going out of business." }, "Question", { q: "Is the newspaper possibly going out of business?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "Most students disagreed with the headmaster that had just been hired." }, "Question", { q: "Did most students oppose the new headmaster?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "Most students disagreed with the headmaster that had just been hired." }, "Question", { q: "Did most citizens oppose the new headmaster?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The students finished the homework assigned to them." }, "Question", { q: "Did the students fail to do their homework?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["b_f", "DashedSentence", { s: "The students finished the homework assigned to them." }, "Question", { q: "Did the students fail to do their homework?", as: ["Yes", "No"], /* correct answer: 2 */ }],
["a_f", "DashedSentence", { s: "Many economists cautioned about the impact the decision might have on tourism." }, "Question", { q: "Were the economists concerned about the impact of the decision on tourism?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "Many economists cautioned about the impact the decision might have on tourism." }, "Question", { q: "Were the economists concerned about the impact of the decision on tourism?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_4_t", "DashedSentence", { s: "The women answered that the questions might be discussed during the meeting." }, "Question", { q: "Is it possible that the question will be discussed during the meeting?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_4", "DashedSentence", { s: "The women answered the questions might be discussed during the meeting." }, "Question", { q: "Is it possible that the question will be discussed during the meeting?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_3", "DashedSentence", { s: "The women warned the drivers might have drunk too much vodka." }, "Question", { q: "Do the women think the drivers may have drunk too much alcohol?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_3_t", "DashedSentence", { s: "The women warned that the drivers might have drunk too much vodka." }, "Question", { q: "Do the women think the drivers may have drunk too much alcohol?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_f", "DashedSentence", { s: "The hairdresser put lotion on the sunburn she had gotten during her vacation." }, "Question", { q: "Did she spend too much time in the sun?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "The hairdresser put lotion on the sunburn she had gotten during her vacation." }, "Question", { q: "Did she spend too much time in the sun?", as: ["Yes", "No"], /* correct answer: 1 */ }],

    // Block 5

["a_f", "DashedSentence", { s: "The bankers confirmed their intention to sign the contract." }, "Question", { q: "Did they intend to sign the contract?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["b_f", "DashedSentence", { s: "The bankers confirmed their intention to sign the contract." }, "Question", { q: "Did they intend to sign the contract?", as: ["Yes", "No"], /* correct answer: 1 */ }],
["a_1", "DashedSentence", { s: "They all indicated the problem might not bother the entire team." }, "Question", { q: "Do they believe that some team members will not be bothered by the problem?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_1_t", "DashedSentence", { s: "They all indicated that the problem might not bother the entire team." }, "Question", { q: "Do they believe that some team members will not be bothered by the problem?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The philanthropist insisted on displaying her extensive stamp collection." }, "Question", { q: "Was she proud of her stamp collection?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The philanthropist insisted on displaying her extensive stamp collection." }, "Question", { q: "Was she proud of her stamp collection?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The party promoter was thrown a surprise party for his birthday." }, "Question", { q: "Did the promoter throw a birthday party?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_f", "DashedSentence", { s: "The party promoter was thrown a surprise party for his birthday." }, "Question", { q: "Did the promoter throw a birthday party?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_2_t", "DashedSentence", { s: "The women worried that the parents might have become quite restless recently." }, "Question", { q: "Do the women think the parents might be restless?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_2", "DashedSentence", { s: "The women worried the parents might have become quite restless recently." }, "Question", { q: "Do the women think the parents might be restless?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_3", "DashedSentence", { s: "Many people feared the future might not hold hope for them." }, "Question", { q: "Do some people fear disappointment in the future?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_3_t", "DashedSentence", { s: "Many people feared that the future might not hold hope for them." }, "Question", { q: "Do some people fear disappointment in the future?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The experienced driver veered off the road after his truck's brakes failed. " }, "Question", { q: "Did the brakes work properly?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_f", "DashedSentence", { s: "The experienced driver veered off the road after his truck's brakes failed. " }, "Question", { q: "Did the brakes work properly?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_4_t", "DashedSentence", { s: "Some people added that the numbers might have decreased since last year." }, "Question", { q: "Do some people suspect the numbers might have decreased since last year?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_4", "DashedSentence", { s: "Some people added the numbers might have decreased since last year." }, "Question", { q: "Do some people suspect the numbers might have decreased since last year?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],

    // Block 6

["a_2_t", "DashedSentence", { s: "Many people advocated that the truth should be made public without delay." }, "Question", { q: "Do many people believe the truth should be public?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_2", "DashedSentence", { s: "Many people advocated the truth should be made public without delay." }, "Question", { q: "Do many people believe the truth should be public?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The woman was bought a drink by a stranger at the bar." }, "Question", { q: "Did the woman know the person who bought her a drink?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_f", "DashedSentence", { s: "The woman was bought a drink by a stranger at the bar." }, "Question", { q: "Did the woman know the person who bought her a drink?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_3", "DashedSentence", { s: "The man proposed the idea should be abandoned for financial reasons." }, "Question", { q: "Does the man want to abandon the idea?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_3_t", "DashedSentence", { s: "The man proposed that the idea should be abandoned for financial reasons." }, "Question", { q: "Does the man want to abandon the idea?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_1_t", "DashedSentence", { s: "Two people found that the equipment should be reported stolen right away." }, "Question", { q: "Do these people hope the equipment will be reported stolen?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_1", "DashedSentence", { s: "Two people found the equipment should be reported stolen right away." }, "Question", { q: "Do these people hope the equipment will be reported stolen?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The opposition leader was always suspicious of the promises made to her." }, "Question", { q: "Was the opposition leader a distrustful person?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The opposition leader was always suspicious of the promises made to her." }, "Question", { q: "Was the opposition leader a distrustful person?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "Many fans believed the rumor about the well-known actor." }, "Question", { q: "Did a lot of fans believe the rumor?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "Many fans believed the rumor about the well-known actor." }, "Question", { q: "Did a lot of fans believe the rumor?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_4", "DashedSentence", { s: "Two people wrote the interview should be conducted over the phone." }, "Question", { q: "Do these people think the interview should be in person?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_4_t", "DashedSentence", { s: "Two people wrote that the interview should be conducted over the phone." }, "Question", { q: "Do these people think the interview should be in person?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_f", "DashedSentence", { s: "The lawyer was represented by her partner at the important meeting." }, "Question", { q: "Did the lawyer's partner skip the meeting?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_f", "DashedSentence", { s: "The lawyer was represented by her partner at the important meeting." }, "Question", { q: "Did the lawyer's partner skip the meeting?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],

    // Block 7

["a_f", "DashedSentence", { s: "The woman complained about having to mow the lawn every week." }, "Question", { q: "Did the woman dislike mowing the lawn?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The woman complained about having to mow the lawn every week." }, "Question", { q: "Did the woman dislike mowing the lawn?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_4_t", "DashedSentence", { s: "Many people advised that the director should be considering further budget cuts." }, "Question", { q: "Were budget cuts advised to the director?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_4", "DashedSentence", { s: "Many people advised the director should be considering further budget cuts." }, "Question", { q: "Were budget cuts advised to the director?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_1", "DashedSentence", { s: "Some people sensed the conflict should be resolved quickly and peacefully." }, "Question", { q: "Do some people hope for a peaceful resolution to the conflict?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_1_t", "DashedSentence", { s: "Some people sensed that the conflict should be resolved quickly and peacefully." }, "Question", { q: "Do some people hope for a peaceful resolution to the conflict?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_3_t", "DashedSentence", { s: "Two people suggested that the scene should be filmed right before sunset." }, "Question", { q: "Was filming before sunset suggested?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_3", "DashedSentence", { s: "Two people suggested the scene should be filmed right before sunset." }, "Question", { q: "Was filming before sunset suggested?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The manager knew all of the members of the racquetball club by name." }, "Question", { q: "Did the manager know the names of the club members?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The manager knew all of the members of the racquetball club by name." }, "Question", { q: "Did the manager know the names of the club members?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The realtors were fired by their supervisor when the housing market declined." }, "Question", { q: "Did the realtors keep their job?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_f", "DashedSentence", { s: "The realtors were fired by their supervisor when the housing market declined." }, "Question", { q: "Did the realtors keep their job?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_2", "DashedSentence", { s: "The man taught the children should be sheltered from all harm." }, "Question", { q: "Does the man think children should be sheltered from danger?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_2_t", "DashedSentence", { s: "The man taught that the children should be sheltered from all harm." }, "Question", { q: "Does the man think children should be sheltered from danger?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The barber meticulously cleaned the shop founded by his father." }, "Question", { q: "Did the barber care about the appearance of his store?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The barber meticulously cleaned the shop founded by his father." }, "Question", { q: "Did the barber care about the appearance of his store?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],

    // Block 8

["a_3_t", "DashedSentence", { s: "The woman announced that the wedding would be postponed until late August." }, "Question", { q: "Will the wedding take place in May?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_3", "DashedSentence", { s: "The woman announced the wedding would be postponed until late August." }, "Question", { q: "Will the wedding take place in May?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_f", "DashedSentence", { s: "My friend received the package sent by his distant relatives." }, "Question", { q: "Did the package get lost in the mail?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_f", "DashedSentence", { s: "My friend received the package sent by his distant relatives." }, "Question", { q: "Did the package get lost in the mail?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_f", "DashedSentence", { s: "Several people were reported to be arguing loudly on the street." }, "Question", { q: "Did the people on the street disagree with each other?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "Several people were reported to be arguing loudly on the street." }, "Question", { q: "Did the people on the street disagree with each other?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_4", "DashedSentence", { s: "The men begged the judge would not treat the defendant harshly." }, "Question", { q: "Do the men want the judge to treat the defendant harshly?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_4_t", "DashedSentence", { s: "The men begged that the judge would not treat the defendant harshly." }, "Question", { q: "Do the men want the judge to treat the defendant harshly?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["a_f", "DashedSentence", { s: "The teachers browsed through the book to make sure their students would enjoy it." }, "Question", { q: "Was it important to the teachers that their students enjoy the book?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The teachers browsed through the book to make sure their students would enjoy it." }, "Question", { q: "Was it important to the teachers that their students enjoy the book?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_1_t", "DashedSentence", { s: "Many people guaranteed that the loan would be paid off on time." }, "Question", { q: "Do people believe the loan will be paid off on time?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_1", "DashedSentence", { s: "Many people guaranteed the loan would be paid off on time." }, "Question", { q: "Do people believe the loan will be paid off on time?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_f", "DashedSentence", { s: "The two roommates were tricked by the broker into signing the lease." }, "Question", { q: "Did the two roommates sign the lease?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["b_f", "DashedSentence", { s: "The two roommates were tricked by the broker into signing the lease." }, "Question", { q: "Did the two roommates sign the lease?", as: ["Yes", "No"], }, /* correct answer: 1 */ ],
["a_2", "DashedSentence", { s: "The men projected the film would not gross enough in cinemas." }, "Question", { q: "Do the men think the film will make a lot of money in cinemas?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],
["b_2_t", "DashedSentence", { s: "The men projected that the film would not gross enough in cinemas." }, "Question", { q: "Do the men think the film will make a lot of money in cinemas?", as: ["Yes", "No"], }, /* correct answer: 2 */ ],

]
