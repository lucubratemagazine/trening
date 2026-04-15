/* ---------------------------------------------------------
   STARTDATO
--------------------------------------------------------- */
const startDate = new Date(2026, 3, 13);

/* ---------------------------------------------------------
   UKEMÅL (kort + langt)
--------------------------------------------------------- */
const weekGoals = [
  "Uke 1 – Finne rytmen\n• Gjennomføre alle tre styrkeøktene uten smerte\n• Holde sykkeløktene rolige og jevne\n• Fokus på teknikk i alle øvelser",
  "Uke 2 – Stabilitet og kontroll\n• Øke reps i styrkeøktene uten å miste kvalitet\n• Jevnere tråkk på sykkel (kadens 80–90)\n• Ingen økter skal føles «tunge»",
  "Uke 3 – Bygge kapasitet\n• Legge til ett ekstra sett på hovedøvelsen\n• Øke total sykkeltid med 10 minutter\n• Bedre balanse i overkroppsøkten",
  "Uke 4 – Konsistens og teknikk\n• Alle øvelser skal føles teknisk stabile\n• Ingen hopp i belastning – bare ren kvalitet\n• Fokus på pust og kontroll i kjernedelen",
  "Uke 5 – Øke toleranse\n• Øke reps i alle styrkeøkter\n• Landevei: holde jevn intensitet i hele turen\n• Mindre pauser mellom settene",
  "Uke 6 – Styrke og stabilitet\n• Ett ekstra sett på hovedøvelsen\n• Planke og sideplanke skal føles kontrollerte\n• Sykkel: holde jevn fart i motbakker",
  "Uke 7 – Forberede toppuke\n• Øke reps i styrkeøktene\n• Sykkel: holde jevn intensitet i 75 % av turen\n• Fokus på god restitusjon",
  "Uke 8 – Toppuke\n• Gjennomføre alle økter med best mulig kvalitet\n• Landevei: lengste tur så langt\n• Ingen smerter i hofter eller knær"
];

const goalsShort = [
  "Finne rytmen og komme i gang.",
  "Stabilitet og jevn gjennomføring.",
  "Bygge kapasitet og tåle mer.",
  "Konsistens og teknikk.",
  "Øke toleranse og redusere pauser.",
  "Styrke og stabilitet.",
  "Forberede toppuke.",
  "Toppuke – beste gjennomføring."
];

/* ---------------------------------------------------------
   UKEBEREGNING
--------------------------------------------------------- */
function getCurrentWeek() {
  const now = new Date();
  const diff = now - startDate;
  const days = diff / (1000 * 60 * 60 * 24);
  const w = Math.floor(days / 7);
  return Math.max(0, Math.min(7, w));
}

let manualWeekOffset = 0;

function changeWeek(delta) {
  manualWeekOffset += delta;
  if (getCurrentWeek() + manualWeekOffset < 0) manualWeekOffset = -getCurrentWeek();
  if (getCurrentWeek() + manualWeekOffset > 7) manualWeekOffset = 7 - getCurrentWeek();
  update();
}

function getWeek() {
  return Math.max(0, Math.min(7, getCurrentWeek() + manualWeekOffset));
}

function getDayIndex(offset = 0) {
  const today = new Date();
  let weekday = today.getDay(); // 0 = søndag
  weekday = (weekday + 6) % 7;  // mandag = 0
  return (weekday + offset + 7) % 7;
}

function formatDate(d) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return dd + "." + mm + "." + yy;
}

/* ---------------------------------------------------------
   VISNING AV UKEHEADER + TITLER
--------------------------------------------------------- */
function updateWeekHeader() {
  const week = getWeek();
  const weekStart = new Date(startDate.getTime() + week * 7 * 24 * 60 * 60 * 1000);
  const weekEnd = new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000);
  const header = "Uke " + (week + 1) + " (" + formatDate(weekStart) + " – " + formatDate(weekEnd) + ")";
  document.getElementById("weekHeader").innerText = header;
}

function updateTitles() {
  const week = getWeek();
  const weekStart = new Date(startDate.getTime() + week * 7 * 24 * 60 * 60 * 1000);
  const todayIndex = getDayIndex(0);
  const tomorrowIndex = getDayIndex(1);

  const todayDate = new Date(weekStart.getTime() + todayIndex * 24 * 60 * 60 * 1000);
  const tomorrowDate = new Date(weekStart.getTime() + tomorrowIndex * 24 * 60 * 60 * 1000);

  const weekdays = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

  document.getElementById("todayTitle").innerText =
    "Dagens økt – " + weekdays[todayIndex] + " " + formatDate(todayDate);
  document.getElementById("tomorrowTitle").innerText =
    "Morgendagens økt – " + weekdays[tomorrowIndex] + " " + formatDate(tomorrowDate);
}

/* ---------------------------------------------------------
   KM-FELT
--------------------------------------------------------- */
function showKmFields(week, day, text) {
  const kmBox = document.getElementById("kmFields");
  kmBox.innerHTML = "";

  const lower = text.toLowerCase();

  if (lower.includes("landevei") || lower.includes("sykkel")) {
    const key = `km_sykkel_uke${week}_dag${day}`;
    const stored = localStorage.getItem(key) || "";
    kmBox.innerHTML += `
      <label>Km sykkel:</label>
      <input type="number" id="kmSykkel" step="0.1" value="${stored}">
    `;
  }

  if (lower.includes("gå")) {
    const key = `km_gaa_uke${week}_dag${day}`;
    const stored = localStorage.getItem(key) || "";
    kmBox.innerHTML += `
      <label>Km gå:</label>
      <input type="number" id="kmGaa" step="0.1" value="${stored}">
    `;
  }
}

/* ---------------------------------------------------------
   KM-SUMMERING
--------------------------------------------------------- */
function getWeeklyKmSykkel(week) {
  let sum = 0;
  for (let d = 0; d < 7; d++) {
    const key = `km_sykkel_uke${week}_dag${d}`;
    const val = parseFloat(localStorage.getItem(key));
    if (!isNaN(val)) sum += val;
  }
  return sum;
}

function getWeeklyKmGaa(week) {
  let sum = 0;
  for (let d = 0; d < 7; d++) {
    const key = `km_gaa_uke${week}_dag${d}`;
    const val = parseFloat(localStorage.getItem(key));
    if (!isNaN(val)) sum += val;
  }
  return sum;
}

/* ---------------------------------------------------------
   MÅL-MODAL
--------------------------------------------------------- */
function openGoalsModal() {
  const week = getWeek();
  document.getElementById("goalsWeekText").innerText = weekGoals[week];

  const key = "weight_uke" + week;
  const stored = localStorage.getItem(key);
  const weightInput = document.getElementById("weightInput");
  const status = document.getElementById("weightStatus");
  const changeEl = document.getElementById("weightChange");
  const saveBtn = document.getElementById("weightSaveBtn");

  const todayIndex = getDayIndex(0);
  const isMonday = todayIndex === 0;

  if (stored !== null) {
    weightInput.value = stored;
    status.innerText = "Lagret vekt for uke " + (week + 1) + ": " + stored + " kg";
  } else {
    weightInput.value = "";
    status.innerText = "Ingen vekt registrert for denne uken ennå.";
  }

  if (isMonday && week === getCurrentWeek()) {
    weightInput.disabled = false;
    saveBtn.disabled = false;
    saveBtn.style.opacity = "1";
    status.innerText += " (kan endres i dag – mandag)";
  } else {
    weightInput.disabled = true;
    saveBtn.disabled = true;
    saveBtn.style.opacity = "0.5";
    status.innerText += " (vekt registreres kun på mandager i aktuell uke)";
  }

  const startWeight = localStorage.getItem("weight_start");
  changeEl.innerText = "";
  changeEl.className = "";

  if (startWeight && stored) {
    const diff = parseFloat(stored) - parseFloat(startWeight);
    if (!isNaN(diff) && diff !== 0) {
      if (diff < 0) {
        changeEl.innerText = "⬇️ " + Math.abs(diff).toFixed(1) + " kg siden start";
        changeEl.className = "weight-down";
      } else {
        changeEl.innerText = "⬆️ " + diff.toFixed(1) + " kg siden start";
        changeEl.className = "weight-up";
      }
    } else {
      changeEl.innerText = "Uendret vekt siden start";
    }
  }

  document.getElementById("goalsOverlay").style.display = "flex";
}

function closeGoalsModal() {
  document.getElementById("goalsOverlay").style.display = "none";
}

function saveWeight() {
  const week = getWeek();
  const key = "weight_uke" + week;
  const val = document.getElementById("weightInput").value;
  const status = document.getElementById("weightStatus");
  const changeEl = document.getElementById("weightChange");

  if (val !== "") {
    localStorage.setItem(key, val);
    status.innerText = "Lagret vekt for uke " + (week + 1) + ": " + val + " kg";

    if (!localStorage.getItem("weight_start")) {
      localStorage.setItem("weight_start", val);
    }

    const startWeight = localStorage.getItem("weight_start");
    if (startWeight) {
      const diff = parseFloat(val) - parseFloat(startWeight);
      if (!isNaN(diff) && diff !== 0) {
        if (diff < 0) {
          changeEl.innerText = "⬇️ " + Math.abs(diff).toFixed(1) + " kg siden start";
          changeEl.className = "weight-down";
        } else {
          changeEl.innerText = "⬆️ " + diff.toFixed(1) + " kg siden start";
          changeEl.className = "weight-up";
        }
      } else {
        changeEl.innerText = "Uendret vekt siden start";
      }
    }
  }
}

/* ---------------------------------------------------------
   ØVELSESMODAL
--------------------------------------------------------- */
function sanitizeId(text) {
  return text.toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/[^a-z0-9]+/g, "_");
}

function openExerciseModal() {
  const week = getWeek();
  const day = getDayIndex(0);
  const list = exercises[week][day];
  const container = document.getElementById("exerciseList");
  container.innerHTML = "";

  list.forEach((name) => {
    const id = "done_uke" + week + "_dag" + day + "_" + sanitizeId(name);
    const label = document.createElement("label");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = localStorage.getItem(id) === "1";
    cb.onchange = () => {
      if (cb.checked) localStorage.setItem(id, "1");
      else localStorage.removeItem(id);
    };
    const span = document.createElement("span");
    span.innerText = name;
    label.appendChild(cb);
    label.appendChild(span);
    container.appendChild(label);
  });

  const todayData = weeks[week][day];
  showKmFields(week, day, todayData.t);

  document.getElementById("exerciseOverlay").style.display = "flex";
}

function closeExerciseModal() {
  const week = getWeek();
  const day = getDayIndex(0);

  const kmSykkelInput = document.getElementById("kmSykkel");
  if (kmSykkelInput) {
    const val = kmSykkelInput.value;
    const key = `km_sykkel_uke${week}_dag${day}`;
    if (val !== "") localStorage.setItem(key, val);
    else localStorage.removeItem(key);
  }

  const kmGaaInput = document.getElementById("kmGaa");
  if (kmGaaInput) {
    const val = kmGaaInput.value;
    const key = `km_gaa_uke${week}_dag${day}`;
    if (val !== "") localStorage.setItem(key, val);
    else localStorage.removeItem(key);
  }

  const list = exercises[week][day];
  let allExercisesDone = true;

  list.forEach((name) => {
    const id = "done_uke" + week + "_dag" + day + "_" + sanitizeId(name);
    if (localStorage.getItem(id) !== "1") {
      allExercisesDone = false;
    }
  });

  let kmOk = true;
  if (kmSykkelInput && kmSykkelInput.value === "") kmOk = false;
  if (kmGaaInput && kmGaaInput.value === "") kmOk = false;

  const doneKey = `all_done_uke${week}_dag${day}`;

  if (allExercisesDone && kmOk && !localStorage.getItem(doneKey)) {
    localStorage.setItem(doneKey, "1");

    const todayData = weeks[week][day];

    const entry = {
      week: week,
      day: day,
      weekday: ["Man","Tir","Ons","Tor","Fre","Lør","Søn"][day],
      date: new Date().toLocaleDateString("no-NO"),
      type: todayData.c,
      kmSykkel: kmSykkelInput?.value || null,
      kmGaa: kmGaaInput?.value || null
    };

    let log = JSON.parse(localStorage.getItem("history_log") || "[]");
    log.push(entry);
    localStorage.setItem("history_log", JSON.stringify(log));

    const msg = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
    showToast(msg);
  }

  document.getElementById("exerciseOverlay").style.display = "none";
}

/* ---------------------------------------------------------
   HOVEDOPPDATERING
--------------------------------------------------------- */
function update() {
  const week = getWeek();
  const today = getDayIndex(0);
  const tomorrow = getDayIndex(1);

  const todayData = weeks[week][today];
  const tomorrowData = weeks[week][tomorrow];

  const todayBox = document.getElementById("todayBox");
  const tomorrowBox = document.getElementById("tomorrowBox");

  todayBox.className = "box " + todayData.c;
  tomorrowBox.className = "box " + tomorrowData.c;

  todayBox.innerText = todayData.t;
  tomorrowBox.innerText = tomorrowData.t;

  document.getElementById("goalBox").innerText = goalsShort[week];
  document.getElementById("debugInfo").innerText =
    "Uke " + (week + 1) + "  |  Dag " + (today + 1);

  updateWeekHeader();
  updateTitles();
}

/* ---------------------------------------------------------
   AUTO-SCROLL TIL DAGENS ØKT
--------------------------------------------------------- */
function scrollToToday() {
  const el = document.getElementById("todayTitle");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ---------------------------------------------------------
   SVEIP-NAVIGASJON MELLOM UKER
--------------------------------------------------------- */
let touchStartX = null;

document.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
  }
});

document.addEventListener("touchend", (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  touchStartX = null;

  if (Math.abs(dx) < 50) return;

  if (dx < 0) changeWeek(1);
  else changeWeek(-1);
});

/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  update();
  scrollToToday();
});
