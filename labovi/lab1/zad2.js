function prioritiziraj(niz, callback) {
    let rezultat = [];

    for (let i = 0; i < niz.length; i++) {
        if (callback(niz[i])) {
            rezultat.unshift(niz[i]);
        } else {
            rezultat.push(niz[i]);
        }
    }

    return rezultat;
}
console.log(prioritiziraj([1, 2, 3, 4, 5], x => x % 2 === 0));