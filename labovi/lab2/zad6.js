function russianRoulette(n) {
    let brojac = 0;

    return function() {
        brojac++;

        if (brojac < n) {
            return "click!";
        } else if (brojac === n) {
            return "bang";
        } else {
            return "reload to play again";
        }
    };
}

const igra = russianRoulette(3);

console.log(igra()); 
console.log(igra()); 
console.log(igra()); 
console.log(igra()); 
console.log(igra()); 