const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const toDoInput=toDoForm.querySelector("input");

let toDos=[];

const TODOS_KEY="todos"
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    toDos=toDos.filter((item) => item.id !== parseInt(li.id));
    li.remove();
    saveToDos();
    
}

function paintToDo(newToDoObj){
    const li=document.createElement("li");
    li.id=newToDoObj.id;
    const span=document.createElement("span");
    span.innerText=newToDoObj.text;
    const button=document.createElement("button");
    button.innerText="X";

    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={text:newToDo,id:Date.now()};
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo)
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);