const Elm = require('../elm/Main');
require('./styles/main.styl');
const storedState = localStorage.getItem('elm-todo-save');
const startingState = storedState ? JSON.parse(storedState) : null;
const todomvc = Elm.Todo.fullscreen(startingState);
todomvc.ports.setStorage.subscribe(function (state) {
  localStorage.setItem('elm-todo-save', JSON.stringify(state));
});