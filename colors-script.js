import arr from "./getHexAlgo.js"

let div = document.getElementById("cont");



// for(const elem of arr){
//     let block = document.createElement("div");
//     block.className = "block";
//     block.style = `background-color: ${elem}`;
//     div.appendChild(block);
// }

for(let r = 0; r <= 5; r++){
    for(let g = 0; g <= 5; g++){
      for(let b = 0; b <= 5; b++){
        let block = document.createElement("div");
        block.className = "block";
        block.style = `background-color: rgba(${r}, ${g}, ${b})`;
        div.appendChild(block);
      }
    }
  }