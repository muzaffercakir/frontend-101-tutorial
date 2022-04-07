let fullName = prompt("Adinizi Giriniz: ");
console.log(fullName);

let myName = document.querySelector("#myName");
myName.innerHTML = fullName.toUpperCase();

function showTime() {

    let date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
    setTimeout(showTime, 1000);

 }

