function totalPhoneBill(callLogCosts){
    console.log(callLogCosts);
    var billList = callLogCosts.split(', ');
    var totalBill=0;
    for(var i=0; i<billList.length; i++){
       var billStr= billList[i];
    if(billStr ==='call'){
        totalBill+=2.75
      }
      if (billStr ==='sms'){
        totalBill+=0.65;
      }
    }
    return 'R' +totalBill.toFixed(2);
      
  }
  