let body = document.querySelector("body")

let nav = document.createElement("nav")

let input = document.querySelector('input')

let colorBtn = document.createElement("button")

body.append(nav)
body.append(nav, colorBtn)

let home = document.createElement("p")
let conatcs = document.createElement("p")
let about = document.createElement("p")
let otzuvi = document.createElement("p")

nav.append(home, conatcs, about)

home.innerHTML = "home"
conatcs.innerHTML = "conatcs"
about.innerHTML = "about"
otzuvi.innerHTML = "otzuvi"
colorBtn.innerHTML = "blue"

nav.style.background = "black"
nav.style.width = "60%"
nav.style.margin = "0 auto"
nav.style.borderRadius = "30px"
nav.style.color = "white"
nav.style.display = "flex"
nav.style.justifyContent = "center"
nav.style.gap = "70px"
nav.style.fontFamily = "sans-serif"

colorBtn.style.padding = '50px 140px'
colorBtn.style.borderRadius = '10px'
colorBtn.style.border = '1px solid white'
colorBtn.style.position = 'fixed'
colorBtn.style.top = '50%'
colorBtn.style.right = '550px'
colorBtn.style.color = "white"
colorBtn.style.fontSize = "50px"
colorBtn.style.boxShadow = '100px 100px 100px 56px rgba(34, 60, 80, 0.2)';

let btnCLicked = false

colorBtn.addEventListener("click", () => {
    if (btnCLicked === false) {
        body.style.background = "darkviolet"
        nav.style.background = "white"
        nav.style.color = "darkviolet"
        colorBtn.style.color = "white"
        colorBtn.style.borderColor = "white"
        colorBtn.style.innerHTML = "dark"
        btnCLicked = true


    } else {
        body.style.background = "white"
        nav.style.background = "darkviolet"
        nav.style.color = "white"
        colorBtn.style.color = "darkviolet"
        colorBtn.borderColor = "darkviolet"
        colorBtn.style.innerHTML = "Light"

        btnCLicked = false
    }
})

input.addEventListener('input', (event) => {
    event.preventDefault()
    body.style.background = event.target.value
})

