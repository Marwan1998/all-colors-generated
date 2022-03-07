(function getNums(){
  let count = 0;
  for(let r = 0; r <= 5; r++){
    for(let g = 0; g <= 5; g++){
      for(let b = 0; b <= 5; b++){
        console.log(`R: ${r}, G: ${g}, B: ${b}`);
        count++;
      }
    }
  }
  console.log("count" + count);
})();
    
// const arr = ["#4DAAAB", "#26596A", "#163342", "#6C98A1"];
// const arr = getNums();
    
// export default arr;
    