function checkCashRegister(price, cash, cid) {
    const currency = {
      'ONE HUNDRED': 100,
      'TWENTY': 20,
      'TEN': 10,
      'FIVE': 5,
      'ONE': 1,
      'QUARTER': 0.25,
      'DIME': 0.1,
      'NICKEL': 0.05,
      'PENNY': 0.01
    };
  
    let change = cash - price;
    let cashArr = [];
    let result = [];
    let cashInDrawer = 0;
    for(let i = 0; i < cid.length; i++){
      cashInDrawer += cid[i][1];
    }
  
    if(change > cashInDrawer){
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    }
  
    if(change === cashInDrawer){
      return {status: 'CLOSED', change: cid};
    }
  
    
      for(let i = cid.length - 1; i >= 0; i--){
        while(change >= currency[cid[i][0]] && cid[i][1] > 0){
          cashArr.push([cid[i][0], currency[cid[i][0]]])
          change = Math.round((change - currency[cid[i][0]]) * 100) / 100;
          cid[i][1] = cid[i][1] - currency[cid[i][0]];
        }
      }
  
      if(change !== 0){
        return {status: 'INSUFFICIENT_FUNDS', change: []};
      }
      
  
    for(let i = cid.length - 1; i >= 0 ; i--){
      let sum = 0;
      for(let j = 0; j < cashArr.length; j++){
        if(cid[i][0] === cashArr[j][0]){
          sum += cashArr[j][1];
        }
      }
      if(sum !== 0){
        result.push([cid[i][0], sum]);
      }
    }
  
    return {status: 'OPEN', change: result};
  
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);