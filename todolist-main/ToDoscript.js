const toDoInputBox = document.getElementById("toDoinput-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(toDoInputBox.value ===''){
        alert("You must write something !!");
        }
        else{
            let toDoli = document.createElement("li");
            toDoli.innerHTML = toDoInputBox.value;
            listContainer.appendChild(toDoli);
            let todoSpan = document.createElement("span");
            todoSpan.innerHTML = "\u00d7";
            toDoli.appendChild(todoSpan)
        }
        toDoInputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName ===  "LI"){
        e.target.classList.toggle("done")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},
false);