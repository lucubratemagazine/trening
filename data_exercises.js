/* ---------------------------------------------------------
   EXERCISES (uke 1–8) – ren og konsistent versjon
--------------------------------------------------------- */

const stretch = ["Uttøying"];   // én øvelse, får checkbox automatisk

function styrke(oppv, list, nedkj) {
  return [
    `Sykkel ${oppv} min (oppvarming)`,
    ...list,
    ...stretch,                     // Uttøying kommer her
    `Sykkel ${nedkj} min (nedkjøring)`
  ];
}

const exercises = [
  /* ---------------------------------------------------------
     UKE 1
  --------------------------------------------------------- */
  [
    styrke(25, [
      "Beinpress 3×10–12",
      "Step-ups 3×8",
      "Hoftehev 3×12–15",
      "Planke 1×60 sek",
      "Bird Dog 2×8",
      "Bøyde bein-løft 3×8"
    ], 18),

    ["Landevei 45–60 min"],

    styrke(25, [
      "Brystpress 3×8–12",
      "Sittende roing 3×10–12",
      "Nedtrekk 3×10–12",
      "Balanse 3×20–30 sek"
    ], 18),

    ["Hvile / rolig sykkel 60 min / gå 5 km"],

    styrke(25, [
      "Gulv opp/ned 2×2",
      "Rocking 3×10",
      "Beinløft 3×8",
      "Planke 1×60 sek",
      "Sideplanke 2×20–30 sek",
      "Bird Dog 2×8"
    ], 18),

    ["Landevei 60–90 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 2
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 3×11–13",
      "Step-ups 3×9",
      "Hoftehev 3×13–16",
      "Planke 1×65 sek",
      "Bird Dog 2×9",
      "Bøyde bein-løft 3×9"
    ], 18),

    ["Landevei 50–65 min"],

    styrke(18, [
      "Brystpress 3×9–13",
      "Sittende roing 3×11–13",
      "Nedtrekk 3×11–13",
      "Balanse 3×25–35 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 2×2",
      "Rocking 3×11",
      "Beinløft 3×9",
      "Planke 1×65 sek",
      "Sideplanke 2×25–35 sek",
      "Bird Dog 2×9"
    ], 18),

    ["Landevei 65–95 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 3
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 4×10–12",
      "Step-ups 3×8",
      "Hoftehev 3×12–15",
      "Planke 1×70 sek",
      "Bird Dog 2×8",
      "Bøyde bein-løft 3×8"
    ], 18),

    ["Landevei 50–70 min"],

    styrke(18, [
      "Brystpress 4×8–12",
      "Sittende roing 3×10–12",
      "Nedtrekk 3×10–12",
      "Balanse 3×25–35 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 2×2",
      "Rocking 3×10",
      "Beinløft 3×8",
      "Planke 1×70 sek",
      "Sideplanke 2×25–35 sek",
      "Bird Dog 2×8"
    ], 18),

    ["Landevei 70–100 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 4
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 4×10–12",
      "Step-ups 3×8",
      "Hoftehev 3×12–15",
      "Planke 1×70 sek",
      "Bird Dog 2×8",
      "Bøyde bein-løft 3×8"
    ], 18),

    ["Landevei 50–70 min"],

    styrke(18, [
      "Brystpress 4×8–12",
      "Sittende roing 3×10–12",
      "Nedtrekk 3×10–12",
      "Balanse 3×25–35 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 2×2",
      "Rocking 3×10",
      "Beinløft 3×8",
      "Planke 1×70 sek",
      "Sideplanke 2×25–35 sek",
      "Bird Dog 2×8"
    ], 18),

    ["Landevei 70–100 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 5
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 3×12–14",
      "Step-ups 3×10",
      "Hoftehev 3×14–17",
      "Planke 1×75 sek",
      "Bird Dog 2×10",
      "Bøyde bein-løft 3×10"
    ], 18),

    ["Landevei 50–70 min"],

    styrke(18, [
      "Brystpress 3×10–14",
      "Sittende roing 3×12–14",
      "Nedtrekk 3×12–14",
      "Balanse 3×30–40 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 2×2",
      "Rocking 3×12",
      "Beinløft 3×10",
      "Planke 1×75 sek",
      "Sideplanke 2×30–40 sek",
      "Bird Dog 2×10"
    ], 18),

    ["Landevei 75–105 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 6
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 4×12–14",
      "Step-ups 3×10",
      "Hoftehev 3×14–17",
      "Planke 1×80 sek",
      "Bird Dog 2×10",
      "Bøyde bein-løft 3×10"
    ], 18),

    ["Landevei 50–70 min"],

    styrke(18, [
      "Brystpress 4×10–14",
      "Sittende roing 3×12–14",
      "Nedtrekk 3×12–14",
      "Balanse 3×30–40 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 3×2",
      "Rocking 3×12",
      "Beinløft 3×10",
      "Planke 1×80 sek",
      "Sideplanke 2×30–40 sek",
      "Bird Dog 2×10"
    ], 18),

    ["Landevei 75–105 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 7
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 4×13–15",
      "Step-ups 3×11",
      "Hoftehev 3×15–18",
      "Planke 1×85 sek",
      "Bird Dog 2×11",
      "Bøyde bein-løft 3×11"
    ], 18),

    ["Landevei 55–75 min"],

    styrke(18, [
      "Brystpress 4×11–15",
      "Sittende roing 3×13–15",
      "Nedtrekk 3×13–15",
      "Balanse 3×35–45 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 3×2",
      "Rocking 3×13",
      "Beinløft 3×11",
      "Planke 1×85 sek",
      "Sideplanke 2×35–45 sek",
      "Bird Dog 2×11"
    ], 18),

    ["Landevei 80–110 min"],
    ["Hvile"]
  ],

  /* ---------------------------------------------------------
     UKE 8
  --------------------------------------------------------- */
  [
    styrke(18, [
      "Beinpress 4×13–15",
      "Step-ups 3×11",
      "Hoftehev 3×15–18",
      "Planke 1×90 sek",
      "Bird Dog 2×11",
      "Bøyde bein-løft 3×11"
    ], 18),

    ["Landevei 60–75 min"],

    styrke(18, [
      "Brystpress 4×11–15",
      "Sittende roing 3×13–15",
      "Nedtrekk 3×13–15",
      "Balanse 3×35–45 sek"
    ], 18),

    ["Hvile / rolig sykkel"],

    styrke(18, [
      "Gulv opp/ned 3×2",
      "Rocking 3×13",
      "Beinløft 3×11",
      "Planke 1×90 sek",
      "Sideplanke 2×35–45 sek",
      "Bird Dog 2×11"
    ], 18),

    ["Landevei 90–120 min"],
    ["Hvile"]
  ]
];

