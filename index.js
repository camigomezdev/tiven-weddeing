// Elements
let elementInvite = document.getElementsByClassName("text-invite");
let textInvite = `Junto con nuestras familias<br>te invitamos a celebrar<br>nuestra boda`

let elementNamesText = document.getElementsByClassName("text-us");
let elementNames = document.getElementsByClassName("block--names");
let textNames = `Milena<br>&<br>Hans`

let elementDate = document.getElementsByClassName("text-date");
let textDate = `Fecha: Abril 2, 2022<br>Hora: 3:30 pm`


let elementPlace = document.getElementsByClassName("text-place");
let textPlace = `Lugar: Cariva Eventos,<br>Santa Elena <br> Traje Formal <br> Lluvia de sobres`

// Timeline
let tl = gsap.timeline()
    .to(elementInvite, { duration: 4, text: textInvite, ease: "none" })
    .to(".block--invite", { duration: 1, opacity: 0 }, ">1")
    .to(elementNames, { duration: 1, opacity: 1 })
    .to(elementNamesText, { duration: 3, text: textNames, ease: "none" })
    .to(elementNames, { duration: 1, opacity: 0 }, ">1")
    .to(".block--date", { duration: 1, opacity: 1 })
    .to(elementDate, { duration: 2, text: textDate, ease: "none" })
    .to(elementDate, { duration: 1, opacity: 0 }, ">1")
    .to(".block--place", { duration: 1, opacity: 1 })
    .to(elementPlace, { duration: 4, text: textPlace, ease: "none" })
    .to(".block__button", { duration: 1, opacity: 1 })
    