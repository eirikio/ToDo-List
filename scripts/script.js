let addNewWindow = document.getElementById("app__add-window")
let isOpen = false
let addNewBtn = document.getElementById("app__header__add-todos__button").addEventListener("click", () => {
    openAddNewWindow()
})

let closeNewWindow = document.getElementById("app__add-window__close-button").addEventListener("click", () => {
    openAddNewWindow()
})

function openAddNewWindow() {
    if (isOpen === false) {
        addNewWindow.style.display = "flex"
        isOpen = true
    } else {
        addNewWindow.style.display = "none";
        isOpen = false
    }
}

let toDoField = document.getElementsByClassName("empty__todo__field")
let addNewTodoInput = document.getElementById("app__add-window__input-todo")

let addNewTodo = document.getElementById("app__add-window__button").addEventListener("click", () => {
    addTodo()
})

let counter = 0;

function addTodo() {
    let deleteTodo = document.getElementsByClassName("delete__todo")
    let userInput = addNewTodoInput.value
    addNewTodoInput.value = " "
    deleteTodo[counter].style.color = "black"
    deleteTodo[counter].innerHTML = " X "
    toDoField[counter].innerHTML = userInput
    counter++

    deleteTodo[counter].addEventListener("click", () => {
        toDoField[counter - 1].innerHTML = " "
        deleteTodo[counter - 1].style.color = "transparent"
    })
}

function delTodo() {
    console.log("click")
}