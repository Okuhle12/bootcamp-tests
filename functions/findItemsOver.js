function findItemsOver(lists, threshold){
    var listOfItems =[];
    for (var i=0; i<lists.length; i++) {
      var list = lists[i];
      if(list.qty > threshold) {
        listOfItems.push(list);
      }
    }
    console.log(listOfItems);
    return listOfItems;
  }
  