// Positive meldinger når en hel dagsøkt er fullført
const positiveMessages = [
  "Imponerende innsats i dag.",
  "Sterkt gjennomført.",
  "Du gjør det virkelig bra.",
  "Respekt for treningsviljen din.",
  "Dette er bra.",
  "Dette gir fysisk fremgang og styrke.",
  "Du blir sterkere for hver uke.",
  "Ser ut som du har god kontroll på treningen.",
  "Fremtiden bygges nå.",
  "Det er en skikkelig fremgang.",
  "Imponerende at du holder koken.",
  "Dette gir overskudd og livskvalitet.",
  "Dette gir skikkelig overskudd.",
  "Det du gjør er knallbra for helsa.",
  "Du blir opplagt etter økta.",
  "Du investerer i egen fremtid.",
  "Utrolig godt jobba."
];

// Enkel toast-funksjon
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.innerText = msg;
  t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 3000);
}
