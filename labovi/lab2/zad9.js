const promise = new Promise((resolve, reject) => {
    reject("Greška");
});

promise.catch(() => {
    console.log("Error");
});

