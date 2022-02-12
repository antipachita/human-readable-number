module.exports = function toReadable  (number) {
    if (number === 0) {
        return 'zero'
      }
    let arrTen = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tenEin = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let strN = String(number).split('');
    
    
    let decimalArr = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let hundred  = ['zero hundred','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    if (number< 20) {
      let result = arrTen[number];
      return result;
     }
    
    let zeroEndcheck = Number(strN[1]);
    
    if (19< number && 100>number && zeroEndcheck===0) {
      let firstNumber = Number(strN[0]);
      
      let firstNumberStr = decimalArr[firstNumber];
      
      return firstNumberStr;
    } else if (19< number && 100>number) {
        let firstNumber = Number(strN[0]);
      let secondNumber = Number(strN[1]);
      let firstNumberStr = decimalArr[firstNumber];
      let secondNumberStr = arrTen[secondNumber];
      return firstNumberStr+' '+secondNumberStr
    }
    let check = Number(strN[1]+strN[2]);
    if (check>9 && check<20) {
      let firstNumber = Number(strN[0]);
      let thirdNumber = Number(strN[2]);
      let firstNumberStr = hundred[firstNumber];
      let thirdNumberStr = tenEin[thirdNumber];
      return firstNumberStr+' '+thirdNumberStr
    }
    let checkZeroFirst = Number(strN[2]+strN[1]);
     if (checkZeroFirst===0) {
       let firstNumber = Number(strN[0]);
        let firstNumberStr = hundred[firstNumber];
       return firstNumberStr
     }
    let checkZerothird = Number(strN[1]);
     if (checkZerothird===0) {
       let firstNumber = Number(strN[0]);
       let thirdNumber = Number(strN[2]);
       let firstNumberStr = hundred[firstNumber];
       let thirdNumberStr = arrTen[thirdNumber];
        return firstNumberStr+' '+thirdNumberStr;
     }
      
    let checkZero = Number(strN[2]);
    if (checkZero===0) {
      let firstNumber = Number(strN[0]);
      let secondNumber = Number(strN[1]);
      let firstNumberStr = hundred[firstNumber];
      let secondNumberStr = decimalArr[secondNumber];
      return firstNumberStr+' '+secondNumberStr;
    }
      
    if (99<number<1000) {
      let firstNumber = Number(strN[0]);
      let secondNumber = Number(strN[1]);
      let thirdNumber = Number(strN[2]);
      let firstNumberStr = hundred[firstNumber];
      let secondNumberStr = decimalArr[secondNumber];
      let thirdNumberStr = arrTen[thirdNumber];
      return firstNumberStr+' '+secondNumberStr+' '+thirdNumberStr
    }
    }
