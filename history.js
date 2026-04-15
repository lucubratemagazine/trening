function loadHistory() {
    const container = document.getElementById("historyContainer");
    let entries = JSON.parse(localStorage.getItem("history_log") || "[]");

    if (entries.length === 0) {
        container.innerHTML = "<p>Ingen fullførte økter registrert ennå.</p>";
        return;
    }

    // Nyeste økter først
    entries.reverse();

    entries.forEach(e => {
        const box = document.createElement("div");
        box.className = "history-box " + e.type;

        box.innerHTML = `
            <div class="history-top ${e.type}"></div>
            <div class="history-content">
                <h3>${e.weekday} ${e.date} – Uke ${e.week + 1}</h3>

                <p><strong>Økt:</strong> ${e.type}</p>

                <p><strong>Kilometer sykkel:</strong> ${e.kmSykkel ?? "-"}</p>
                <p><strong>Kilometer gå:</strong> ${e.kmGaa ?? "-"}</p>

                <p class="done">✔ Fullført</p>
            </div>
        `;

        container.appendChild(box);
    });
}

loadHistory();
