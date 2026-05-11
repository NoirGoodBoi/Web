// js/app.js

const scripts = [

{
title:"Universal Hub",
desc:"OP Autofarm + ESP",
category:"Universal",
image:"https://picsum.photos/400/200",
code:'loadstring(game:HttpGet("LINK"))()',
views:"12K"
},

{
title:"Anime Script",
desc:"Auto Farm Anime",
category:"Anime",
image:"https://picsum.photos/401/200",
code:'print("anime")',
views:"9K"
}

]

const container =
document.getElementById("scriptContainer")

function renderScripts(list){

container.innerHTML = ""

list.forEach(script=>{

container.innerHTML += `

<div class="card">

<img src="${script.image}">

<div class="card-content">

<h2>${script.title}</h2>

<p>${script.desc}</p>

<small>
👁 ${script.views}
</small>

<button
onclick="copyScript('${script.code}')">

Copy Script

</button>

<button
onclick="favoriteScript('${script.title}')">

Favorite

</button>

</div>

</div>

`
})

}

renderScripts(scripts)

function copyScript(code){

navigator.clipboard.writeText(code)

notify("Copied!")

}

function filterCategory(category){

const filtered = scripts.filter(
s=>s.category === category
)

renderScripts(filtered)

}

const searchInput =
document.getElementById("searchInput")

searchInput.addEventListener("input",()=>{

const value =
searchInput.value.toLowerCase()

const filtered =
scripts.filter(s=>
s.title.toLowerCase().includes(value)
)

renderScripts(filtered)

})

function favoriteScript(title){

let favorites =
JSON.parse(localStorage.getItem("favorites"))
|| []

favorites.push(title)

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
)

notify("Favorited")

  }
