// adding objects instead of text to t o d o list
//  Loops have 3 parts - initialization; condition; final-expression
var todoList = {
    todos: [],
    displayTodos: function() {
        // console.log("My todos:", );
        // for (var i =0; i < this.todos.length; i++ ) {
        //     // this.todos.lenght = 3 items, 0 = item 1, 1 = itme 2, 2 = itme 3
        //     console.log(this.todos[i].todoText);
        // }
        
        // if this.todos.length is === 0;
        if (this.todos.length === 0 ) {
            console.log("Your todo list is empty!");
        } else {
            //print todos as normal
            console.log("My todos:" );
             for (var i = 0; i < this.todos.length; i++ ) {
                // this.todos.lenght = 3 items, 0 = item 1, 1 = itme 2, 2 = itme 3
                //  check if . completed is true
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);        
                } else {
                // print with ( ) for todoscompleted is false;
                    console.log('( )', this.todos[i].todoText);
                    }
                }
            }
        },
    addTodo: function(todoText) { 
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        //this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        // get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
            completedTodos++;
            }
        }
        // case 1 if everything is true, make everything false
       if (completedTodos === totalTodos) {
            //make everything false
            for (var i = 0; i < totalTodos; i++) {
               this.todos[i].completed = false;
        }
            //case 2 otherwise make everything true
            } else {
                for (var i = 0; i < totalTodos; i++) {
                    this.todos[i].completed = true;
                }
            }
        
        this.displayTodos();
    }
};

//   OLD CODE
// 1 want access to display todos button
// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');

// // 2 run displayTodos method when someone clicks displayTodos button
// displayTodosButton.addEventListener('click', function() {
//     todoList.displayTodos();
// })

// toggleAllButton.addEventListener('click', function() {
//     todoList.toggleAll();
// });


// REFACTORED CODE:
var handlers = {
    displayTodos: function() {
    todoList.displayTodos()
    },
    toggleAll: function() {
    todoList.toggleAll();
    },
    addTodo: function() { 
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    }
};
