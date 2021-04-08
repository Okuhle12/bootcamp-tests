function findItemsOver20(itemsList){
    var listOfItems =[];
    for (var i=0; i<itemsList.length; i++) {
      var list = itemsList[i];
      if(list.qty > 20) {
        listOfItems.push(list);
      }
    }
    console.log(listOfItems);
    return listOfItems;
  }
  