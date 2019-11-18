let state = {};

let source = document.getElementById('words-template').innerHTML;
let template = Handlebars.compile(source);

$('#clicker').on('click', handleClick);
$('#words').on('input', handleWords);

function handlewords() {
  state.words = $(this).val();
  render();
}

function handleClick(e) {
  e.preventDefault();
  state.clicks += 1;
  render();
}

function render() {
  //this compile our template. Should ba able to find words and put them insde {{}}
  $('#app').html(template(state));
}

function init(){
  state.words = 'Type some words';
  state.clicks = 0;
  render();
}

$(function() {
  init();
});