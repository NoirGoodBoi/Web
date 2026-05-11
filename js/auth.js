// js/auth.js

const users = [

{
email:"admin@noir.com",
password:"123456",
role:"admin"
}

]

function login(){

const email =
document.getElementById("email").value

const password =
document.getElementById("password").value

const user = users.find(u=>

u.email === email &&
u.password === password

)

if(user){

localStorage.setItem(
"user",
JSON.stringify(user)
)

notify("Logged In")

window.location.href =
"index.html"

}else{

notify("Wrong Account")

}

}
