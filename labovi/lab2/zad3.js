function numSelectString(niz) {
    return niz
        .filter(broj => broj % 2 !== 0)
        .sort((a, b) => a - b)
        .reduce((rezultat, broj, indeks) => {
            if (indeks === 0) {
                return String(broj);
            }

            return rezultat + ", " + broj;
        }, "");
}

console.log(numSelectString([17, 34, 3, 12, 23]));