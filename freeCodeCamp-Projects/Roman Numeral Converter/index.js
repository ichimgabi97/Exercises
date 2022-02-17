function convertToRoman(num) {
    const convert = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    let result = '';
    let deci = num;
    while(deci > 0){
      for(let i = 0; i < convert.length; i ++){
        if(deci >= convert[i][1]){
          result += convert[i][0];
          deci -= convert[i][1];
          break;
        }
      } 
    }
   return result;
  }
  
  //console.log(convertToRoman(3999));
  convertToRoman(36);