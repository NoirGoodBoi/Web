// js/admin.js

const user =
JSON.parse(localStorage.getItem("user"))

if(!user || user.role !== "admin"){

alert("No Access")

window.location.href =
"index.html"

}

const scripts =
JSON.parse(localStorage.getItem("scripts"))
|| []

const panel =
document.getElementById("adminPanel")

scripts.forEach((script,index)=>{

panel.innerHTML += `

<div class="card">

<div class="card-content">

<h2>${script.title}</h2>

<button
onclick="deleteScript(${index})">

Delete

</button>

</div>

</div>

`

})

function deleteScript(index){

scripts.splice(index,1)

localStorage.setItem(
"scripts",
JSON.stringify(scripts)
)

location.reload()

  }
