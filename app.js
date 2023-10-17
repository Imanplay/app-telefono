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

/*
function cambiarDiv() {
    let div1 = document.getElementById("container");
    let div2 = document.getElementsByClassName("apps");
    
    div1.style.display = "none"; // Oculta el div actual
    div2.innerHTML = ""; // Vacía el contenido del div2
    
    div2.style.display = "block"; // Muestra el div2 vacío
  }
*/
