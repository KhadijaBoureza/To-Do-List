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

setInterval(() => {
    let currentTime = new Date();

    // Get hours, minutes, and seconds
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Pad single digits with leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Update HTML elements with padded values
    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}, 1000);

function toggleTodoList() {
    var listContainer = document.getElementById("list-container");
    if (listContainer.style.display === "none") {
        listContainer.style.display = "block";
    } else {
        listContainer.style.display = "none";
    }
}



