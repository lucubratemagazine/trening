function loadHistory() {
    const container = document.getElementById("historyList");
    let entries = JSON.parse(localStorage.getItem("history_log") || "[]");

    if (entries.length === 0) {
        container.innerText = "Ingen fullførte økter registrert ennå.";
        return;
    }

    let text = "";

    entries.forEach(e => {
        text += 
`Uke ${e.week + 1}, ${e.weekday} – ${e.date}
Økt: ${e.type}
Km sykkel: ${e.kmSykkel ?? "-"}
Km gå: ${e.kmGaa ?? "-"}
✔ Fullført

`;
    });

    container.innerText = text;
}

loadHistory();
