console.log("Hello World!");

// console.log(decToHex(2748));
// console.log(hexToDec('2d2d2d'));

let hex = 'A';
// console.log('16 in hex is: ' + decToHex(16));


// hex counter
// current number up to 10 ex: ABC+1, +1, +1, +1...n10
let hexCount = hexToDec('2d2d2d');
for(let i = 0; i < 1; i++){
  console.log(hexCount.toString(16).toUpperCase());
  hexCount++;
}



function hexToDec(hexNum) {
  hexNum = hexNum.toUpperCase().split('').reverse();
  let decNum = 0;
  hexNum.forEach((num, i) => {
    switch (hexNum[i]) {
      case 'A': hexNum[i] = '10'; break;
      case 'B': hexNum[i] = '11'; break;
      case 'C': hexNum[i] = '12'; break;
      case 'D': hexNum[i] = '13'; break;
      case 'E': hexNum[i] = '14'; break;
      case 'F': hexNum[i] = '15'; break;
      default: break;
    }
    decNum += Number(hexNum[i]) * Math.pow(16, i);
  });
  return decNum;
}

function decToHex(decNum) {
  // decimal to hexdecimal
  let hexNum = "";
  while (decNum % 16 != 0) {
    switch (decNum % 16) {
      case 10: hexNum += "A"; break;
      case 11: hexNum += "B"; break;
      case 12: hexNum += "C"; break;
      case 13: hexNum += "D"; break;
      case 14: hexNum += "E"; break;
      case 15: hexNum += "F"; break;
      default: hexNum += decNum % 16; break;
    }
    decNum = Math.floor(decNum / 16);
  }
  return hexNum.split("").reverse().join("");
}