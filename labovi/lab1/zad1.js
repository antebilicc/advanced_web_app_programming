function vecina(niz, callback) {
    let istina = 0;
    let laz = 0;

    for (let i = 0; i < niz.length; i++) {
        if (callback(niz[i])) {
            istina++;
        } else {
            laz++;
        }

        if (istina > niz.length / 2) {
            return true;
        }

        if (laz >= Math.ceil(niz.length / 2)) {
            return false;
        }
    }

    return istina > laz;
}
console.log(vecina([1, 2, 3, 4, 5], x => x > 3));