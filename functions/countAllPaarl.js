function countAllPaarl (registrationNumbers){
    var howMany = registrationNumbers.split(',');
    var regCount=[];
    for(var i=0; i<howMany.length; i++){
      var allCount = howMany[i].trim();
      if (allCount.startsWith('CJ')){
      regCount.push(allCount);
        
      }
    }
    console.log(regCount);
    return regCount.length;
  }