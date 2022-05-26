const clock=document.querySelector("h2#clock");
/*
function sayHello(){
    console.log("hello");
}
setInterval(sayHello,1000);
setTimeout(sayHello,500);
*/
function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    const date_String=`${hours}:${minutes}:${seconds}`
    //console.log(date_String);
    clock.innerText=date_String;
}
getClock();
setInterval(getClock,1000);