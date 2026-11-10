const unos = document.querySelector("#unos");
const dodaj = document.querySelector("#dodaj");
const lista = document.querySelector("#lista");

dodaj.addEventListener("click", function() {
    let tekst = unos.value.trim();
    if (tekst === "") {
        return;
    }
    console.log(tekst);

    let zadatak = document.createElement("li");

    zadatak.textContent = tekst;

    zadatak.addEventListener("click", function() {
        zadatak.classList.toggle("gotovo");
    });
    
    let obrisi = document.createElement("button");
    obrisi.textContent = "X";

    obrisi.addEventListener("click", function(e) {
            e.stopPropagation();
            zadatak.remove();
        });
    
    zadatak.appendChild(obrisi);
    lista.appendChild(zadatak);

    unos.value = "";
});

