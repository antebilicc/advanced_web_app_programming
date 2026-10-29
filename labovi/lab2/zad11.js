const fakePeople = [
    { name: "Ivo", hasPets: false },
    { name: "Eva", hasPets: true },
    { name: "Marko", hasPets: true }
];

function fakeAPICall(i) {
    return new Promise((resolve, reject) => {
        if (i < 0 || i >= fakePeople.length) {
            reject("Error");
            return;
        }

        const vrijeme = Math.floor(Math.random() * 2001) + 1000;

        setTimeout(() => {
            resolve(fakePeople[i]);
        }, vrijeme);
    });
}

function getAllData() {
    return Promise.all([
        fakeAPICall(0),
        fakeAPICall(1),
        fakeAPICall(2)
    ]);
}

getAllData()
    .then((rezultati) => console.log(rezultati))
    .catch((greska) => console.log(greska));