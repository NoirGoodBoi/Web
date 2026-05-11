// COMMENTS

function addComment(){

const input =
document.getElementById("commentInput")

const comments =
document.getElementById("comments")

comments.innerHTML +=
`<p>Noir: ${input.value}</p>`

input.value = ""

}

// COPY

function copyScript(){

navigator.clipboard.writeText(
'loadstring(game:HttpGet("LINK"))()'
)

alert("Copied!")

}
