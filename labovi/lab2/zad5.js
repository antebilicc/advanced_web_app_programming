function napraviIterator(niz) {
    let indeks = 0;

    return function() {
        if (indeks >= niz.length) {
            return undefined;
        }

        indeks++;

        return niz[indeks - 1] +
            " je " + indeks + ". element niza";
    };
}

const sljedeci = napraviIterator(["Ana", "Marko", "Ivo"]);

console.log(sljedeci()); 
console.log(sljedeci());
console.log(sljedeci()); 
console.log(sljedeci()); // undefined