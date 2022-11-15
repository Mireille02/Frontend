//Ejercicio 8
//Declara una constante y asígnale la clase document
const d = document;

//Para crear el reloj, exporta la función
//Pásale como parámetros el reloj como tal (clock), el botón que lo inicia (btnPlay) y el botón que lo detiene (btnStop)
export function digitalClock(clock, btnPlay, btnStop) {
    //Declara la variable clockTempo en donde se guardará el reloj que se va a crear.
    let clockTiempo;
    //Utiliza la delegación de eventos y agrégale al document el evento click
    d.addEventListener("click", e => {
        //e = elemento
        if (e.target.matches(btnPlay)) {
            clockTiempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString(); //da la hora en tiempo real
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTiempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

//Alarma
export function alarm(sound, btnPlay, btnStop) {
    let alarmTiempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            alarmTiempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTiempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

