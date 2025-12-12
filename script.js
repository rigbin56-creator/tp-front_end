// Modo oscuro simple
const body = document.body;
const modoBtn = document.getElementById("modoOscuroBtn");

if (localStorage.getItem("oscuro") === "si") {
    body.classList.add("dark-mode");
}

modoBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("oscuro", "si");
    } else {
        localStorage.removeItem("oscuro");
    }
});

// Datos del Webmaster
document.getElementById("webmasterBtn").addEventListener("click", () => {
    alert("Webmaster: Rigbin (Matheo)\nFanpage hecha para fans y no fans JAKSKJAJKS");
});

