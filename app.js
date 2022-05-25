const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input")
const loginButton=loginForm.querySelector("button")
const link= document.querySelector("a");
const greeting=document.querySelector("#greeting")

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
/*
function onLoginSubmit(event){
    event.preventDefault()
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.innerText=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    console.log(username);
    localStorage.setItem("name",username);
}
*/

function onLoginSubmit(event){
    event.preventDefault()
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    showGreetings(username);
}
function handleLinkClick(event){
    event.preventDefault()
}

function showGreetings(username){
    greeting.innerText=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

link.addEventListener("click",handleLinkClick)
const savedUserName= localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    showGreetings(savedUserName)
}

