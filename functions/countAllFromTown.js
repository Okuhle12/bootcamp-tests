function countAllFromTown(regNo, town){
    console.log(regNo);
     var howMany = regNo.split(',');
    var townCount=[];
    for ( var i=0;i<howMany.length;i++){
      var allTown=howMany[i].trim()
      if(howMany[i].trim().startsWith(town)){
        townCount.push(allTown);
      }                                        
  }
    return townCount.length;
  }