// MOUSE GLOW

const glow =
document.createElement("div")

glow.id = "glow"

document.body.appendChild(glow)

document.addEventListener("mousemove",e=>{

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})

// FLOATING PARTICLES

for(let i=0;i<60;i++){

const p =
document.createElement("div")

p.className = "particle"

p.style.left =
Math.random()*100 + "%"

p.style.top =
Math.random()*100 + "%"

p.style.animationDuration =
5 + Math.random()*10 + "s"

document.body.appendChild(p)

  }
