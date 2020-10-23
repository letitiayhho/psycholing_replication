var shuffleSequence;
if (Math.random < 0.5) {
  shuffleSequence = seq(
    "setcounter",
    "intro",
    "practice",
    "presep",
    sepWith("sep", startsWith("test_a")),
    "exit"
  );
} else {
  shuffleSequence = seq(
    "setcounter",
    "intro",
    "practice",
    "presep",
    sepWith("sep", startsWith("test_b")),
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
      q: "For each sentence you will have to answer a y?es or no question, for this practice question, click 'yes'",
      as: ["Yes", "No"],
    },
  ],

  //an example for self-paced reading with a yes/no binary acceptability judgment task
  [
    "practice",
    "DashedSentence",
    {
      s: [
        "The pop star sang herself hoarse at the concert last night.",
      ],
    },
    "Question",
    {
      hasCorrect: false,
      randomOrder: false,
      q: "Was the concert at night?",
      as: ["Yes", "No"],
    },
  ],

  [["test_a_f", 1], "DashedSentence", { s: ["Filler sentence 1 group a"] }],
  [["test_a_f", 2], "DashedSentence", { s: ["Filler sentence 2 group a"] }],
  [["test_a_f", 3], "DashedSentence", { s: ["Filler sentence 3 group a"] }],
  [["test_a_f", 4], "DashedSentence", { s: ["Filler sentence 4 group a"] }],

  [["test_b_f", 1], "DashedSentence", { s: ["Filler sentence 1 group b"] }],
  [["test_b_f", 2], "DashedSentence", { s: ["Filler sentence 2 group b"] }],
  [["test_a_f", 3], "DashedSentence", { s: ["Filler sentence 3 group a"] }],
  [["test_b_f", 4], "DashedSentence", { s: ["Filler sentence 4 group b"] }],

  [
    ["test_a", 5],
    "DashedSentence",
    {
      s: [
        "The woman determined that the estimate had been inflated by the accountant.",
      ],
    },
    "Question",
    {
      q: "The woman thought the accountants were:",
      as: ["honest", "dishonest"],
    },
  ],
  [
    ["test_b", 5],
    "DashedSentence",
    {
      s: [
        "The woman determined the estimate had been inflated by the accountant.",
      ],
    },
    "Question",
    {
      q: "The woman thought the accountants were:",
      as: ["honest", "dishonest"],
    },
  ],

  [
    ["test_a", 6],
    "DashedSentence",
    { s: ["The men discovered the island had been invaded by the enemy."] },
    "Question",
    { q: "Who invaded the island?:", as: ["the men", "the enemy"] },
  ],
  [
    ["test_b", 6],
    "DashedSentence",
    {
      s: ["The men discovered that the island had been invaded by the enemy."],
    },
    "Question",
    { q: "Who invaded the island?:", as: ["the men", "the enemy"] },
  ],
];
