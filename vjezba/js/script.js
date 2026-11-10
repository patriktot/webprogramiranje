const a = document.querySelector("#a");
const b = document.querySelector("#b");
const zbroji = document.querySelector("#zbroji");
const oduzmi = document.querySelector("#oduzmi");
const pomnozi = document.querySelector("#pomnozi");
const podijeli  = document.querySelector("#podijeli");
const rezultat = document.querySelector("#rezultat");

zbroji.addEventListener("click", function() {
    let broj1 = Number(a.value);
    let broj2 = Number(b.value);

    console.log(broj1);
    console.log(broj2);
    
    if (a.value === "" || b.value === "" || isNaN(broj1) || isNaN(broj2)) {
        rezultat.textContent = "Broj nije ispravan.";
        return;
    }

    let rez = broj1 + broj2;
    rezultat.textContent = rez;
});

oduzmi.addEventListener("click", function() {
    let broj1 = Number(a.value);
    let broj2 = Number(b.value);

    console.log(broj1);
    console.log(broj2);

    if (a.value === "" || b.value === "" || isNaN(broj1) || isNaN(broj2)) {
        rezultat.textContent = "Broj nije ispravan.";
        return;
    }

    let rez = broj1 - broj2;
    rezultat.textContent = rez;
});

pomnozi.addEventListener("click", function() {
    let broj1 = Number(a.value);
    let broj2 = Number(b.value);

    console.log(broj1);
    console.log(broj2);

    if (a.value === "" || b.value === "" || isNaN(broj1) || isNaN(broj2)) {
        rezultat.textContent = "Broj nije ispravan.";
        return;
    }

    let rez = broj1 * broj2;
    rezultat.textContent = rez;
});

podijeli.addEventListener("click", function() {
    let broj1 = Number(a.value);
    let broj2 = Number(b.value);
   
    console.log(broj1);
    console.log(broj2);

    if (a.value === "" || b.value === "" || isNaN(broj1) || isNaN(broj2)) {
            rezultat.textContent = "Broj nije ispravan.";
            return;
    }

    if (broj2 === 0) {
        rezultat.textContent = "Dijeljenje s nulom nije moguće!";
        return;
    }

    let rez = broj1 / broj2;
    rezultat.textContent = rez;
});

