
    document.addEventListener("DOMContentLoaded", function(event) {

        // var addToDoInput = document.querySelector(".panel-addTask__input");
        // var addToDoButton = document.querySelector(".panel-addTask__button");

        // addToDoButton.addEventListener("click", function(event) {
        //     var inputValue = addToDoInput.value;
        //     alert(inputValue);
        // });

        var toDos = [
            new toDos("fsafdsf"),
            new toDos("fsafdsf2222222222"),
            new toDos("fsafdsf34232"),
        ];

        ToDoRenderer.renderList(ToDos);
    });
