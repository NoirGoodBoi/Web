// js/upload.js

const uploadBtn =
document.getElementById("uploadBtn")

uploadBtn.addEventListener("click",()=>{

const title =
document.getElementById("title").value

const desc =
document.getElementById("desc").value

const image =
document.getElementById("image").value

const code =
document.getElementById("code").value

const script = {

title,
desc,
image,
code,
views:"0"

}

let scripts =
JSON.parse(localStorage.getItem("scripts"))
|| []

scripts.push(script)

localStorage.setItem(
"scripts",
JSON.stringify(scripts)
)

notify("Uploaded!")

})
