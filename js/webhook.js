// DISCORD WEBHOOK

fetch("WEBHOOK_URL",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

content:
"New script uploaded!"

})

})
