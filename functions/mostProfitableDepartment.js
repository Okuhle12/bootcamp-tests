function mostProfitableDepartment(salesData) {
    var profitableMap = {};
    for (var i = 0; i < salesData.length; i++) {
        var shopDepartment = salesData[i].department;
      //console.log(shopDepartment);
      //console.log(profitableMap);
        if (profitableMap[shopDepartment] === undefined) {
            profitableMap[shopDepartment] = 0;
        } else {
            profitableMap[shopDepartment] += salesData[i].sales;
        }
    }
    //console.log(profitableMap);
  
    var departments = '';
    var total = 0;
    for (var dep in profitableMap) {
        //console.log(profitableMap[dep]);
        if (profitableMap[dep] > total) {
            departments = dep;
            total = profitableMap[dep];
        }
    }
    console.log(departments);
  console.log(total);
  return departments;
  return total;
}
  