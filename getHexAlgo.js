function getColors2(startColor='000000', colNum=10){
// Another way to hex counter
  startColor = hexToDec(startColor);
  let colors = [], counter = startColor + colNum;
  for(let i = startColor; i < counter; i++){
    colors.push(startColor.toString(16).toUpperCase());
    // console.log("i is: " + i); //TODO: Fix startColor index issue, can only start from 000000
    switch (colors[i].length) {
      case 1: colors[i] = colors[i].replace (/^/,'#00000'); break;
      case 2: colors[i] = colors[i].replace (/^/,'#0000'); break;
      case 3: colors[i] = colors[i].replace (/^/,'#000'); break;
      case 4: colors[i] = colors[i].replace (/^/,'#00'); break;
      case 5: colors[i] = colors[i].replace (/^/,'#0'); break;
      default: colors[i] = colors[i].replace (/^/,'#'); break;
    }
    startColor++;
  }
  return colors;
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

// const arr = ["4DAAAB", "26596A", "163342", "6C98A1"];
const arr = getColors2("000000", 10);
//TODO: Return the arr after randomly sortings

export default arr;
