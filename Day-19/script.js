console.log("DOM Task Manager Started");

// selecting elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const colorBtn = document.getElementById("colorBtn");


// add task
addBtn.addEventListener("click", function(){

    const taskText = input.value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    // create element
    const li = document.createElement("li");

    li.innerText = taskText;

    // create delete button
    const delBtn = document.createElement("button");

    delBtn.innerText = "Delete";

    // delete event
    delBtn.addEventListener("click", function(){

        taskList.removeChild(li);

    });

    li.appendChild(delBtn);

    taskList.appendChild(li);

    input.value = "";

});


// clear all tasks
clearBtn.addEventListener("click", function(){

    taskList.innerHTML = "";

});


// change theme color
colorBtn.addEventListener("click", function(){

    document.body.style.background =
        document.body.style.background === "rgb(20, 20, 40)"
        ? "#000"
        : "rgb(20, 20, 40)";


});
