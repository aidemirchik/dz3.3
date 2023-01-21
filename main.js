const inputy = document.querySelector(".inputy");
const buttony = document.querySelector(".buttony");

const inputw = document.querySelector(".inputw");
const buttonw = document.querySelector(".buttonw");


let age = 14;

buttony.addEventListener("click", () => {
    let years = new Promise((resolve, reject) => {
        if (age == inputy.value) {
            resolve("True");
        } else {
            reject("False");
        }
    })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
});


let js = "JavaScript";

buttonw.addEventListener("click", () => {
    let words = new Promise((resolve, reject) => {
        if (inputw.value == 10) {
            alert("Вы угадали");
        } else {
            alert("Не правильно");
        }
    });
});
