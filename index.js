
function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item))
}

function init_list() {
  let checklist = getItem('checklist')
  if (!checklist || checklist.length === 0) {
    checklist = [
      { name: "", checked: false },
      { name: "", checked: true },
      { name: "", checked: false }
    ]
  }
  setItem('checklist', checklist)
}

function render_list() {
  
  console.log(" `render_list` ran");
  const shopping_list_string = generate_list_string();
  $(".js-shopping-list").html(shopping_list_string);
}
var show = ""
function generate_list_string() {
  console.log("Genrating Shopping List Elenet");

  var listAsString = "";

  var shopping_list = getItem('checklist');
  if (!shopping_list) return listAsString;

  for (var i = 0; i < shopping_list.length; i++) {

    /*send items to generate_item_element and add it to listAsString*/
    listAsString += generate_item_element(shopping_list[i])


  }
  return listAsString
}




function add_item_to_list(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);

  var checklist = getItem('checklist');
  if (!checklist) return;

  checklist.push({ name: itemName, checked: false });
  setItem('checklist', checklist);
  alert("str" + itemName);
}

let firstName = getItem('firstName');
if (!firstName) {
  firstName = prompt("what is the name");
  if (firstName) {
    setItem('firstName', firstName);
  }
}

function handle_add_item() {
  $("#clickBtn").on("click", function (event) {
    event.preventDefault();
    console.log("`handle_add_item` ran");

    var str = $("#task").val();

    add_item_to_list(str)
    render_list()
  });
}


function handle_check_item() { }


function handle_shopping_list() {
  init_list();
  render_list();
  handle_add_item();
  handle_check_item();
  handle_delete_item();
}

function generate_item_element(item) {
  return `
    
  
  <li data-item-id="${item.name}">
      <a class="shopping-item js-shopping-item href="${item.checked}?"  shopping-item__checked" : ''}">${firstName}</span>
      <div class="shopping-item-controls">
      <p> ${item.name} </p>
          <button class="shopping-item-toggle js-item-toggle"><span class="button-label"><a href="${item.name}"> Join</span></button>
      </div>
  </li>`;
}

$(document).ready(function () {
  $(handle_shopping_list);
});
