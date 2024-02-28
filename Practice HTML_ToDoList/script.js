var addButton = document.getElementById("Add-Button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add Button Clicked!");
}

var ToDoEntryBox = document.getElementById("Entry-Box");
var ToDoList = document.getElementById("ToDoList");

function newToDoItem(itemText, completed){
    var ToDoItem = document.createElement("li");
    var ToDoText = document.createTextNode(itemText);
    ToDoItem.appendChild(ToDoText);

    if (completed) {
        ToDoItem.classList.add("completed");
    }

    ToDoList.appendChild(ToDoItem);
    ToDoItem.addEventListener("click", toggleToDoItemState);
}

function addToDoItem (){
    var itemText = ToDoEntryBox.value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")){
        this.classList.remove("completed");
    }
    else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItem (){
    var completedItem = ToDoList.getElementsByClassName("completed");

    while (completedItem.length > 0){
        completedItem.item(0).remove();
    }
}

function emptyList () {
    var ToDoItem = ToDoList.children;

    while (ToDoItem.length > 0) {
        ToDoItem.item(0).remove();
    }
}

var myArray = [];
myArray.push("Your Stored Data");
myArray.push("Your Other Stored Data");
alert(myArray[0]);

var ToDoInfo = {
    "task" : "Thing I Need To Do",
    "completed": false
};

function saveList() {
    var ToDos = [];

    for (var i=0; i < ToDoList.children.length; i++){
        var ToDo = ToDoList.children.item(i);

        var ToDoInfo = {
            "task": ToDo.innerText,
            "completed":ToDo.classList.contains("completed")
        };
        ToDos.push(ToDoInfo);
    }
    localStorage.setItem("ToDos", JSON.stringify(ToDos));
    console.log("Tersimpan Disini.");
}

function loadList(){
    if (localStorage.getItem("ToDos") !=null){
        var ToDos = JSON.parse (localStorage.getItem("ToDos"));

        for (var i=0; i <ToDos.length; i++){
            var ToDo = ToDos[i];
            newToDoItem(ToDo.task, ToDo.completed);
        }
    }
}

loadList();





