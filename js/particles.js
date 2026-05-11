// js/particles.js

const particles =
document.getElementById("particles")

for(let i=0;i<50;i++){

const dot =
document.createElement("div")

dot.style.width = "4px"
dot.style.height = "4px"

dot.style.background = "purple"

dot.style.position = "absolute"

dot.style.borderRadius = "50%"

dot.style.left =
Math.random()*100 + "%"

dot.style.top =
Math.random()*100 + "%"

dot.style.opacity = "0.5"

particles.appendChild(dot)

}
