const title=document.querySelector("h1");


function handleTitleClick(){
    const currentColor=title.style.color;
    let newColor;
    if(currentColor=== "blue"){
        newColor="tomato"
    }else{
        newColor="blue"
    }
    title.style.color=newColor
}
function handleMouseEnter(){
    console.log("mouse entered")
}
function handleMouseLeave(){
    console.log("mouse leaved")
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter)
title.addEventListener("mouseleave",handleMouseLeave);
console.log(title)

function handleWindowResize(){
    document.body.style.backgroundColor="tomato"
}
function handleWindowCopy(){
    alert("copy event occured")
}
function handleWindowOffline(){
    alert("WIFI OFF")
}
function handleWindowOnline(){
    alert("WIFI ON")
}
window.addEventListener("resize",handleWindowResize)
window.addEventListener("copy",handleWindowCopy)
window.addEventListener("offline",handleWindowOffline)
window.addEventListener("online",handleWindowOnline)