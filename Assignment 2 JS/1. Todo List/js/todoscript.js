

var initializeTodoApp = function(){
    // initialize Event Listeners
    // on click of #addButton create and add todo Item
    var buttonElement = document.getElementById("addTodoButton");
    buttonElement.addEventListener("click", createTodoItemHandler);

    


};






function createTodoItemHandler(event){
    // Prevent default action of form submission
    event.preventDefault();


    // Get Value from Text Box
    var todoItemContent = document.getElementById("todoTextInput").value;
    
    if(todoItemContent == "")
    {
        window.alert("Task is NOT defined!");

    }else{

        

    // Get todolist element
    var todoListElement = document.getElementById("todoList");
    var todoArray= todoListElement.getElementsByTagName("li");

    var add= true;
    for(var index=0;index<todoArray.length;index++)
    {
        if(todoArray[index].childNodes[1].innerHTML == todoItemContent )
        {
            if (confirm('Task is already in Todo List, Do you want to Add?')) {
                            } else {
                add= false;
            }
        }
    }
    
    if(add){
    var todoCheckBox = document.createElement("INPUT");
    todoCheckBox.setAttribute("type", "checkbox");
    todoCheckBox.classList.add("myCheckBox");

    // 2. Create todo item to display in the todo list
    var todoItem = document.createElement('li');
    todoItem.appendChild(todoCheckBox);


    var labelElement =document.createElement("label");
    labelElement.innerHTML = todoItemContent;
    todoItem.appendChild(labelElement);

    // 3. Get the parent element 
    
    // 4. append the todo item to the todo list
    todoListElement.appendChild(todoItem);

    var checkBoxes = document.getElementsByClassName("myCheckBox");
    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].addEventListener("click", function(){

            if(this.checked){
                this.nextSibling.style.textDecoration = "line-through";
            }else{
            this.nextSibling.style.textDecoration = "none";
            }
        });
    }

    }



    }

}

//load 
//wait for dom and all resources (img,css,js....)
window.onload = initializeTodoApp;

//wait for dom to load .. (master cheat)
document.addEventListener("DOMContentLoaded", function(event) {
    initializeTodoApp(event);
});

