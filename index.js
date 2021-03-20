let CHECKLIST = [
    
    
      
  { name: "Arav", checked: false },
  { name: "Is", checked: true },
  { name: "Nice", checked: false }
  
    
];



function render_list() {
  console.log(" `render_list` ran");
  const shopping_list_string = generate_list_string(CHECKLIST);
  $(".js-shopping-list").html(shopping_list_string);
}
var show = ""
function generate_list_string(shopping_list) {
  console.log("Genrating Shopping List Elenet");
  
  var listAsString = "";

  listAsString


  for( var i = 0; i  < shopping_list.length; i++){
   
      /*send items to generate_item_element and add it to listAsString*/
    listAsString += generate_item_element(shopping_list[i])
  
   
  }
  return listAsString
}




  function add_item_to_list(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);


   CHECKLIST.push( { name: itemName, checked: false } )
   alert("str" + itemName)

  //add an item to the CHECKLIST
}
var prompt = prompt("what is the name")
function handle_add_item() {
  $("#clickBtn").on("click",function (event) {
    event.preventDefault();
    console.log("`handle_add_item` ran");
    
  var str = $("#task").val();

    add_item_to_list(str)
    render_list()
  });
}


function handle_check_item() {}

function handle_delete_item() {}

function handle_shopping_list() {
  render_list();
  handle_add_item();
  handle_check_item();
  handle_delete_item();
}

function generate_item_element(item) {
  return `
    
  
  <li data-item-id="${item.name}">
      <a class="shopping-item js-shopping-item href= " ${item.checked}? "  shopping-item__checked" : ''}">${prompt}</span>
      <div class="shopping-item-controls">
      <a href="${item.name}"> ${item.name} </a>
          <button class="shopping-item-toggle js-item-toggle"><span class="button-label"><a href="Join"> Join</span></button>
          <button class="shopping-item-delete js-item-delete"><span class="button-label" >Delete</span> <a href="${item.name}"> <a></button>
      </div>
  </li>`;
}

$(document).ready(function () {
  $(handle_shopping_list);
});
