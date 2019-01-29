/* global shoppingList, store, api */
'use strict';
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  // api.getItems()
  //   .then(res => res.json())
  //   .then()
 
});


// Don't forget to delete this before running everything!
// store.items.push(Item.create('apples'));




