const h1=document.querySelector("h1");

/*
function handleTitleClick(){
    const className="active"
    let newClassName;
    if(h1.className===className){
        newClassName=""
    }else{
        newClassName=className
    }
    h1.className=newClassName
}
*/
/*
function handleTitleClick(){
    const className="active"
    if(h1.classList.contains(className)){
        h1.classList.remove(className)
    }else{
        h1.classList.add(className)
    }
}
*/
function handleTitleClick(){
    h1.classList.toggle("active")
}
h1.addEventListener("click",handleTitleClick)