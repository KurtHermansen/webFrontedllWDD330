
const todoList = [
    {
        title: "Workout",
        complete: true,
        description: "Run a mile.",
        category: "Physical",
        dateTime: "15 min"
    },
    {
        title: "send emails",
        complete: false,
        description: "reply to the weekends email list",
        category: "Work",
        dateTime: "15 min"
    },
    {
        title: "read a book",
        complete: false,
        description: "read at least on chapter in 12 rules for life.",
        category: "Personal",
        dateTime: "15 min"
    },
    {
        title: "minister",
        complete: false,
        description: "Visit with the smith's",
        category: "Church",
        dateTime: "15 min"
    }
]

class TodoModel {
    getAllTasks() {
        return todoList;
    }
    getAllCompletedTasks() {
        
        return todoList;
    }
    getTodoByTitle(title) {
        return todoList.find(todo => todo.title === title);
    }
    setNameValue(name, value) {
        const task = todoList.find(todo => todo.title === name)
        task.complete = value;
    }
    addTask(object){
        todoList.push(object)
    }
    deleteTodo(title) {
        todoList.splice(todoList.findIndex(todo => todo.title === title), 1);

    }

}


export default TodoModel;