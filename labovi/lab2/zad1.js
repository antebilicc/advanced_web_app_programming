function after(n, callback) {
    let brojac = 0;

    return function() {
        brojac++;

        if (brojac >= n) {
            return callback();
        }
    };
}

const funkcija = after(3, () => console.log("Izvršeno!"));

funkcija(); 
funkcija(); 
funkcija(); 
funkcija(); 