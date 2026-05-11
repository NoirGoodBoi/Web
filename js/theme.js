// THEME EDITOR

const colors = [

"purple",
"cyan",
"red",
"lime"

]

function setTheme(color){

document.documentElement
.style.setProperty(
"--accent",
color
)

}
