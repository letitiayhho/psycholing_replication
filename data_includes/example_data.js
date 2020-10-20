var shuffleSequence = seq("setcounter", "intro", "practice", "presep", sepWith("sep", rshuffle(startsWith("test"), "f")), "exit");
var practiceItemTypes = ["practice"];




var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        //errorMessage: "Wrong. Please wait for the next sentence."
        ignoreFailure: "true"
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
     "DashedAcceptabilityJudgment", {
        mode: "self-paced reading",
        display: "dashed",
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "On a 1-7 scale, how acceptable is this sentence? Cick a box above or press a number key to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true,
        randomOrder: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
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

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    ["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["intro", "Form", {consentRequired: true, html: {include: "instruction1.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "instruction2.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "instruction3.html" }} ],
    ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],



    //
    
    //an example for self-paced reading, with word-by-word presentation
   
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "How would you like to answer this question?",
                              as: ["Press 1 or click here for this answer.",
                                   "Press 2 or click here for this answer."]}],
                                  
    
    //an example for self-paced reading, but with user-defined word chuncks
    
    ["practice", "DashedSentence", {s: ["Rick", "labeled", "the jar.", "Tim", "did too,", "because", "Tim", "liked", "jars."]},
                 "Question", {hasCorrect: true, randomOrder: true,
                              q: "What did Tim do?",
                              as: ["Tim labeled a jar.",
                                   "Tim bought the jar Rick labeled."]}],
    
    
    //an example for self-paced reading, with a 7-point acceptability judgment task
    ["practice", "DashedAcceptabilityJudgment", {s: ["The pop star", "sang", "herself", "hoarse", "at the concert", "last night."]}],
    
    
    
    //an example for self-paced reading, with a yes/no binary acceptability judgment task
    ["practice", "DashedSentence", {s: ["The pop star", "sang", "herself", "hoarse", "at the concert", "last night."]},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "Is this sentence acceptable as a well-formed English sentence?",
                              as: ["Acceptable",
                                   "Not acceptable"]}],
    
    
    //an example for an acceptability judgment task, the whole is presented without self-paced reading
    
   ["practice", "AcceptabilityJudgment", {s: "The pop star sang herself hoarse at the concert last night."}],
    
    
   ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],
    
   ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],


    //
    
    // Two "real" experiment. This experiment has 2 items, and each item has two conditions. This experiment also has 3 filler sentences.
    // the randomization between experimental items and items is done at the top through the sequencing line.
    
    
    //It will make the later data anlaysis process eaiser if you align the position of words between conditions, 
    //such that the critical words you are interested in are at the same word position or chunck position
    //
   [["test_a",1], "DashedSentence", {s: ["The journalist", "interviewed", "an actress", "who", "he", "knew", "to be shy of publicity", "after", "meeting on", "a previous occasion."]},
               "Question",       {q: "The actress was:", as: ["shy", "publicity-seeking"]}],
   [["test_b",1], "DashedSentence", {s: ["The journalist", "interviewed", "a politician", "who", "after", "meeting on", "a previous occasion", "he", "knew", "to be shy of publicity."]},
               "Question",       {q: "The politician was:", as: ["shy", "publicity-seeking"]}],

    
    
    [["test_a",2], "DashedSentence", {s: "The foreign spy that encoded the top-secret messages was given a new mission that required going to Japan."},
               "Question",       {q: "The spy's mission required him to:", as: ["Go to Japan", "Destroy top-secret messages", "Bug a hotel room"]}],
    [["test_b",2], "DashedSentence", {s: "The foreign spy that bribed the top-officials was given a new mission that required going to Japan."},
               "Question",       {q: "The spy's mission required him to:", as: ["Go to Japan", "Destroy top-secret messages", "Bug a hotel room"]}],

    
    
     
     
    //
    // 3 self-paced-reading filler sentences.
    //

   
    ["f", "DashedSentence", {s: "Only two specialized surgeons that work in the hospital could do this operation."},
          "Question",       {q: "The operation can be performed by:",
                             as: ["Two surgeons with specialist training",
                                  "Three surgeons who are currently off sick"]}],

    ["f", "DashedSentence", {s: "The gangsters that the local police officers tracked for years were represented by an inexperienced lawyer."},
          "Question",       {q: "Who did the inexperienced lawyer represent?",
                             as: ["Some gangsters", "A murder suspect"]}],

   


    ["f", "DashedSentence", {s: "The patient that was admitted to the hospital last month still suffers severe pain in his left leg."},
          "Question",       {q: "Which of the following is true?",
                             as: ["The patient still has severe pain in his left leg",
                                  "The patient no longer suffers from pain in his left leg"]}]
];
