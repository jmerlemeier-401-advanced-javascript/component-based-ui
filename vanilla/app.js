let state = {};

//grab button
let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('words-input', handleInput);
input.addEventListener('input', handleInput);

function handleClick(e) {
  e.preventDefault();
  state.clicks += 1;
  document.getElementById('words').textContent = state.words + state.clicks;
}

//Crate a fucntion to add some words to our state.
//want to occur when input is manil=pulated.
function handleInput(e) {
  state.words = e.target.value;
}

//Initalizing everthing
function init() {
  state.clicks = 0;
  state.words = 'type to change';
  document.getElementById('words').textContent = state.words;
}

init();

//Then add handlebars and jQuery