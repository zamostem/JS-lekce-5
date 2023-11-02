const nadpis = document.querySelector("h1")
const odstavec = document.querySelector("#odstavec2")
const obrazek = document.querySelector("img")
const pizza = {
    jmeno: "Hawaii",
    cena: 150,
    ingredience: "smetana, sunka, ananas",
}


nadpis.textContent = "Tento nadpis jsem zmenil pomoci JavaScript"
//nadpis.style.color = "Yellow"
nadpis.style.backgroundColor = "red"

nadpis.classList.add("modra")
nadpis.classList.remove("vetsi-font")

odstavec.style.backgroundColor = "orange"

obrazek.src = "https://www.peliskydog.cz/user/articles/images/jak-vybrat-stene.jpg"
obrazek.alt = "stene"
obrazek.style.width = "100px"

// odstavec.innerHTML = "<h2>Nadpis2</h2>"
odstavec.innerHTML = `
    <h2>${pizza.jmeno}</h2>
    <p>Cena: ${pizza.cena}</p>
`

const btn = document.querySelector("#login-btn")
if(btn.classList.contains("btn--off")) {
    btn.classList.remove("btn--off")
} else {
    btn.classList.add("btn--off")
}

// kliknutí
btn.classList.toggle("btn--off")

btn.className = ""