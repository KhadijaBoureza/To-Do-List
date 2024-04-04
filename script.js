const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
list.addEventListener("click",function (e) {
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

    
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



function toggleTodoList() {
    var listContainer = document.getElementById("list-container");
    if (listContainer.style.display === "none") {
        listContainer.style.display = "block";
    } else {
        listContainer.style.display = "none";
    }
}



