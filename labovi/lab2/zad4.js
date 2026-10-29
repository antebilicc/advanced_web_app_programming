function suma(niz) {
    let rezultat = 0;

    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i];
    }

    return rezultat;
}

console.log(suma([1, 2, 3, 4]));