// js/notify.js

function notify(text){

const div =
document.createElement("div")

div.innerText = text

div.style.position = "fixed"
div.style.bottom = "20px"
div.style.right = "20px"

div.style.background = "purple"

div.style.padding = "15px"

div.style.borderRadius = "12px"

document.body.appendChild(div)

setTimeout(()=>{

div.remove()

},3000)

}
