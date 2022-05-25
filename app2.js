document.title="HEllO";

const title=document.getElementById("title");

console.log(title)
console.dir(title)

title.innerHTML="Hello"
title.autofocus=false;
title.className="hello"
title.style.color="Red"

const hellos=document.getElementsByClassName("test")
console.log(hellos)

const hello=document.getElementsByTagName("div");
console.log(hello)

const hello2=document.querySelector(".test2 h1")
console.log(hello2)

const hello3=document.querySelector(".test")
console.log(hello3)

const hello4=document.querySelectorAll(".test")
console.log(hello4)

