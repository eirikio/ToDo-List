let headerTitle = document.querySelector(".header__title");

let addTodoWindow = document.querySelector(".app__add-window");
let openNewTodoBtn = document.querySelector(".app__header__add-todos__button");
let closeNewTodoBtn = document.querySelector(".app__add-window__close-button");
let isOpen = false;

const openAddNewWindow = () => {
  console.log("hi");
  if (isOpen === false) {
    addTodoWindow.style.display = "flex";
    isOpen = true;
  } else {
    addTodoWindow.style.display = "none";
    isOpen = false;
  }
};

openNewTodoBtn.addEventListener("click", openAddNewWindow);
closeNewTodoBtn.addEventListener("click", openAddNewWindow);

let todoField = document.querySelectorAll(".empty__todo__field");
let addNewTodoInput = document.querySelector(".app__add-window__input-todo");
let addNewTodoBtn = document.querySelector(".app__add-window__button");
let deleteTodo = document.querySelectorAll(".delete__todo");
let completeTodo = document.querySelectorAll(".checked");

let todos = [];

const printTodos = () => {
  for (let i = 0; i < todos.length; i++) {
    addNewTodoInput.value = " ";
    todoField[i].innerHTML = todos[i];
    deleteTodo[i].style.display = "block";

    deleteTodo[i].addEventListener("click", () => {
      todos.pop(i);
      todoField[i].innerHTML = " ";
      todoField[i].style.background = "white";
      todoField[i].style.border = "2px solid";
      todoField[i].style.textDecoration = "none";
      deleteTodo[i].style.display = "none";
      completeTodo[i].checked = false;
    });

    completeTodo[i].addEventListener("click", () => {
      if (completeTodo[i].checked) {
        todoField[i].style.textDecoration = "line-through";
        todoField[i].style.background = "lightgray";
        todoField[i].style.border = "2px solid ";
      } else {
        todoField[i].style.textDecoration = "none";
        todoField[i].style.background = "white";
        todoField[i].style.border = "2px solid ";
      }
    });
  }
};

const addNewTodo = () => {
  let userInput = addNewTodoInput.value;
  todos.push(userInput);
  printTodos();
};

addNewTodoBtn.addEventListener("click", addNewTodo);

let openMenuBtn = document.querySelector(".burger");
let closeMenuBtn = document.querySelector(".close-navbar");
let navMenu = document.querySelector(".app__navbar");

let nav = false;

const openMenu = () => {
  if (nav === false) {
    nav = true;
    navMenu.style.display = "block";
  } else {
    nav = false;
    navMenu.style.display = "none";
  }
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", openMenu);

let welcomeWindow = document.querySelector(".welcome-window");
let welcomeWindowBtn = document.querySelector(".welcome-window-submit");
let welcomeWindowNameInput = document.querySelector(".welcome-window-name");

// * WEATHER WIDGET LOCATION WELCOME WINDOW INPUT
let welcomeWindowLocationInput = document.querySelector(
  ".welcome-window-location"
);

//* ----------------------------------------------------^

const submitData = () => {
  let userInput = welcomeWindowNameInput.value;
  headerTitle.innerHTML = userInput + "'s ToDo List";
  welcomeWindow.style.display = "none";

  let location = welcomeWindowLocationInput.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3fb2f14892a25e619c2992bc6943de5b`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("wrong city name"));
};

welcomeWindowBtn.addEventListener("click", submitData);

let homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
});

let resetBtn = document.querySelector(".reset-btn");
let resetWindow = document.querySelector(".reset-btn-window");
let yesNoBtn = document.querySelectorAll(".yesno-btn");

const reset = () => {
  console.log(todos);
  resetWindow.style.display = "flex";
};
const resetAll = () => {
  resetWindow.style.display = "none";
  //* Når denne under fjernes må man klikke 2 ganger på hamburgern for å åpne menyen igjen **BUG**
  navMenu.style.display = "none";
  todos = [];
  for (let i = 0; i < 10; i++) {
    todoField[i].innerHTML = " ";
    deleteTodo[i].style.display = "none";
  }

  console.log(todos);
};
resetBtn.addEventListener("click", reset);
yesNoBtn[0].addEventListener("click", resetAll);
yesNoBtn[1].addEventListener("click", () => {
  resetWindow.style.display = "none";
});

let aboutBtn = document.querySelector(".about-btn");
let aboutWindow = document.querySelector(".about-window");
let aboutBackToAppBtn = document.querySelector(".about__close-window-btn");
let about = false;

const openAbout = () => {
  if (about === false) {
    aboutWindow.style.display = "flex";
    about = true;
  } else {
    aboutWindow.style.display = "none";
    about = false;
  }
};

aboutBtn.addEventListener("click", openAbout);
aboutBackToAppBtn.addEventListener("click", openAbout);

let settingsBtn = document.querySelector(".settings-btn");
let settingsWindow = document.querySelector(".settings-window");
let setNameBtn = document.querySelector(".settings-setname-btn");
let setNameInput = document.querySelector(".settings-setname-input");
let settingsCloseBtn = document.querySelector(".settings-close-btn");

const openSettings = () => {
  settingsWindow.style.display = "flex";
};
settingsBtn.addEventListener("click", openSettings);

const setName = () => {
  let userName = setNameInput.value;
  headerTitle.innerHTML = userName + "'s ToDo List";
};

setNameBtn.addEventListener("click", setName);
settingsCloseBtn.addEventListener("click", () => {
  settingsWindow.style.display = "none";
});

let githubBtn = document.querySelector(".github-btn");

let weatherTemp = document.querySelector(".weather-temp");
let weatherDesc = document.querySelector(".weather-desc");
let weatherLocation = document.querySelector(".weather-loc");
let inputLocation = document.querySelector(".input-loc");
let searchLocBtn = document.querySelector(".search-loc");

const displayData = (weather) => {
  weatherTemp.innerHTML = `${weather.main.temp}°C`;
  weatherDesc.innerHTML = `${weather.weather[0].description.toUpperCase()}`;
  weatherLocation.innerHTML = `${welcomeWindowLocationInput.value.toUpperCase()}`;
};
