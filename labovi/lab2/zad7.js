function blackJack(niz) {
    let indeks = 0;

    return function dealer(a, b) {
        let suma = a + b;
        let pozivi = 0;
        let gotovo = false;

        return function player() {
            if (gotovo) {
                return "You are done!";
            }

            if (pozivi === 0) {
                pozivi++;
                return suma;
            }

            if (pozivi === 1) {
                suma += niz[indeks];
                indeks++;
                pozivi++;

                if (suma > 21) {
                    gotovo = true;
                    return "bust!";
                }

                return suma;
            }

            if (indeks >= niz.length) {
                return suma;
            }

            suma += niz[indeks];
            indeks++;
            pozivi++;

            if (suma > 21) {
                gotovo = true;
                return "bust!";
            }

            return suma;
        };
    };
}

const dealer = blackJack([5, 3, 8, 2]);
const player = dealer(7, 4);

console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player()); 
console.log(player()); 