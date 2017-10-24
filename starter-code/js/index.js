
var calculatePriceButton = document.querySelector('.calc-prices-button');

calculatePriceButton.onclick = function () {

  var userInput = document.querySelectorAll('.quantity')[0];
  var userQuantity = Number(userInput.value);
  var productPrice = document.querySelectorAll('.productPrice')[0].innerHTML;

  var itemSubTotal = userQuantity * productPrice;
  alert (itemSubTotal);


  document.querySelectorAll('.item-subtotal')[0].innerHTML = itemSubTotal;
}

var listOfProducts = [
  {item: "IronBubble-head", price: 25},
  {item: "IronShirt", price: 15 },
];

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

//  window.onload = function(){
//   var calculatePriceButton = document.getElementById('.calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('.btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i < deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
