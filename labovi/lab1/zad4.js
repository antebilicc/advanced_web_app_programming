function komutativnost(f1, f2, vrijednost) {
    let prvi = f2(f1(vrijednost));
    let drugi = f1(f2(vrijednost));

    return prvi === drugi;
}

const udvostruci = x => x * 2;
const dodajTri = x => x + 3;

console.log(komutativnost(udvostruci, dodajTri, 5));