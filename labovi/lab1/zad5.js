function pipe(funkcije, vrijednost) {
    let rezultat = vrijednost;

    for (let i = 0; i < funkcije.length; i++) {
        rezultat = funkcije[i](rezultat);
    }

    return rezultat;
}

const funkcije = [
    x => x + 2,
    x => x * 3,
    x => x - 1
];

console.log(pipe(funkcije, 4));