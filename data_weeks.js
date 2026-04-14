/* ---------------------------------------------------------
   WEEK TEXT (uke 1–8)
   Dette er tekstene som vises i dagens og morgendagens bokser.
   Øvelseslistene ligger i data_exercises.js
--------------------------------------------------------- */

const weeks = [
  // UKE 1
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 25 min rolig sykkel\n\n• Beinpress 3×10–12\n• Step-ups 3×8\n• Hoftehev 3×12–15\n• Planke 1×60 sek\n• Bird Dog 2×8\n• Bøyde bein-løft 3×8\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 45–60 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 25 min rolig sykkel\n\n• Brystpress 3×8–12\n• Sittende roing 3×10–12\n• Nedtrekk 3×10–12\n• Balanse 3×20–30 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel 60 min / gå 5 km", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 25 min rolig sykkel\n\n• Gulv opp/ned 2×2\n• Rocking 3×10\n• Beinløft 3×8\n• Planke 1×60 sek\n• Sideplanke 2×20–30 sek\n• Bird Dog 2×8\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 60–90 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 2
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 3×11–13\n• Step-ups 3×9\n• Hoftehev 3×13–16\n• Planke 1×65 sek\n• Bird Dog 2×9\n• Bøyde bein-løft 3×9\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 50–65 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 3×9–13\n• Sittende roing 3×11–13\n• Nedtrekk 3×11–13\n• Balanse 3×25–35 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 2×2\n• Rocking 3×11\n• Beinløft 3×9\n• Planke 1×65 sek\n• Sideplanke 2×25–35 sek\n• Bird Dog 2×9\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 65–95 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 3
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 4×10–12\n• Step-ups 3×8\n• Hoftehev 3×12–15\n• Planke 1×70 sek\n• Bird Dog 2×8\n• Bøyde bein-løft 3×8\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 50–70 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 4×8–12\n• Sittende roing 3×10–12\n• Nedtrekk 3×10–12\n• Balanse 3×25–35 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 2×2\n• Rocking 3×10\n• Beinløft 3×8\n• Planke 1×70 sek\n• Sideplanke 2×25–35 sek\n• Bird Dog 2×8\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 70–100 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 4
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 4×10–12\n• Step-ups 3×8\n• Hoftehev 3×12–15\n• Planke 1×70 sek\n• Bird Dog 2×8\n• Bøyde bein-løft 3×8\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 50–70 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 4×8–12\n• Sittende roing 3×10–12\n• Nedtrekk 3×10–12\n• Balanse 3×25–35 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 2×2\n• Rocking 3×10\n• Beinløft 3×8\n• Planke 1×70 sek\n• Sideplanke 2×25–35 sek\n• Bird Dog 2×8\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 70–100 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 5
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 3×12–14\n• Step-ups 3×10\n• Hoftehev 3×14–17\n• Planke 1×75 sek\n• Bird Dog 2×10\n• Bøyde bein-løft 3×10\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 50–70 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 3×10–14\n• Sittende roing 3×12–14\n• Nedtrekk 3×12–14\n• Balanse 3×30–40 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 2×2\n• Rocking 3×12\n• Beinløft 3×10\n• Planke 1×75 sek\n• Sideplanke 2×30–40 sek\n• Bird Dog 2×10\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 75–105 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 6
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 4×12–14\n• Step-ups 3×10\n• Hoftehev 3×14–17\n• Planke 1×80 sek\n• Bird Dog 2×10\n• Bøyde bein-løft 3×10\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 50–70 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 4×10–14\n• Sittende roing 3×12–14\n• Nedtrekk 3×12–14\n• Balanse 3×30–40 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 3×2\n• Rocking 3×12\n• Beinløft 3×10\n• Planke 1×80 sek\n• Sideplanke 2×30–40 sek\n• Bird Dog 2×10\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 75–105 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 7
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 4×13–15\n• Step-ups 3×11\n• Hoftehev 3×15–18\n• Planke 1×85 sek\n• Bird Dog 2×11\n• Bøyde bein-løft 3×11\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 55–75 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 4×11–15\n• Sittende roing 3×13–15\n• Nedtrekk 3×13–15\n• Balanse 3×35–45 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 3×2\n• Rocking 3×13\n• Beinløft 3×11\n• Planke 1×85 sek\n• Sideplanke 2×35–45 sek\n• Bird Dog 2×11\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 80–110 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ],

  // UKE 8
  [
    {t:"Mandag – ØKT 1: Bein + kjerne\n\nOppvarming: 18 min rolig sykkel\n\n• Beinpress 4×13–15\n• Step-ups 3×11\n• Hoftehev 3×15–18\n• Planke 1×90 sek\n• Bird Dog 2×11\n• Bøyde bein-løft 3×11\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Tirsdag – Landevei 60–75 min", c:"sykkel"},
    {t:"Onsdag – ØKT 2: Overkropp\n\nOppvarming: 18 min rolig sykkel\n\n• Brystpress 4×11–15\n• Sittende roing 3×13–15\n• Nedtrekk 3×13–15\n• Balanse 3×35–45 sek\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Torsdag – Hvile / rolig sykkel", c:"hvile"},
    {t:"Fredag – ØKT 3: Gulvstyrke\n\nOppvarming: 18 min rolig sykkel\n\n• Gulv opp/ned 3×2\n• Rocking 3×13\n• Beinløft 3×11\n• Planke 1×90 sek\n• Sideplanke 2×35–45 sek\n• Bird Dog 2×11\n\nNedkjøring: 18 min rolig sykkel", c:"styrke"},
    {t:"Lørdag – Landevei 90–120 min", c:"sykkel"},
    {t:"Søndag – Hvile", c:"hvile"}
  ]
];

