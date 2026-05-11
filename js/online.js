// LIVE ONLINE COUNTER

let online =
1234

setInterval(()=>{

online +=
Math.floor(Math.random()*5-2)

document.getElementById("online")
.innerText =
online + " users online"

},2000)
