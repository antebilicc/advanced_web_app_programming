function filter(niz, callback) {
    let rezultat = [];

    for (let i = 0; i < niz.length; i++) {
        if (callback(niz[i])) {
            rezultat.push(niz[i]);
        }
    }

    return rezultat;
}

console.log(filter([1, 2, 3, 4, 5, 6], x => x % 2 === 0));