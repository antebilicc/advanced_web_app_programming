function grupiraj(niz, callback) {
    let rezultat = {};

    for (let i = 0; i < niz.length; i++) {
        let kljuc = callback(niz[i]);

        if (rezultat[kljuc] === undefined) {
            rezultat[kljuc] = [];
        }

        rezultat[kljuc].push(niz[i]);
    }

    return rezultat;
}

let brojevi = [1, 2, 3, 4, 5];

console.log(grupiraj(brojevi, x => x % 2 === 0));