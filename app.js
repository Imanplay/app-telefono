
/*let date= document.getElementById("hora");

getTime();

function getTime() {
    const fecha = new Date();
    let time= fecha.toLocaleTimeString()
    date.innerText= "" + time;
}

setInterval(() => getTime())
*/

let hour = document.getElementById("hora");

getTime();

function getTime() {
    const hora = new Date();
    let time = hora.toLocaleTimeString([], { timeStyle: 'short' })
    hour.innerText = "" + time;
}

setInterval(() => getTime())

let date = document.getElementById('fecha');

getDate();

function getDate() {
    const fecha = new Date();
    let dates = fecha.toLocaleDateString([], {weekday: 'short', day: '2-digit', month: 'short'});
    date.innerText = "" + dates;
}

setInterval(getDate());

