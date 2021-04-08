function transportFee(shiftPrices){
    console.log(shiftPrices);
      switch(shiftPrices){
        case 'morning':
          return 'R20';
          break;
        case 'afternoon':
          return 'R10';
          break;
        case 'nightshift':
          return 'free'
          break;
        default:
          return 'you pay nothing ' + shiftPrices
                        }
    }
          