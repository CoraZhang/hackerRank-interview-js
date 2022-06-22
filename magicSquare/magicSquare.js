function formingMagicSquare(s) {
      let column0 = s[0][0] + s[1][0] + s[2][0];
      let column1 = s[0][1] + s[1][1] + s[2][1];
      let column2 = s[0][2] + s[1][2] + s[2][2];
      let row0 = s[0][0] + s[0][1] + s[0][2];
      let row1 = s[1][0] + s[1][1] + s[1][2];
      let row2 = s[2][0] + s[2][1] + s[2][2];
      let diag1 = s[0][0] + s[1][1] + s[2][2];
      let diag2 = s[0][2] + s[1][1] + s[2][0];
      let collection = [
        column0,
        column1,
        column2,
        row0,
        row1,
        row2,
        diag1,
        diag2,
      ];
  // Write your code here
   let cost = 0;
   let unique = collection.filter((item, i, ar) => ar.indexOf(item) === i);
   let isMagic = checkSquare(unique);
   console.log(isMagic);
   console.log(unique)
   if (isMagic){
    return 0;
   }
   

}

function checkSquare(s){
    if (s.length >1){
        return false
    }else{
        return true
    }
}

formingMagicSquare([[4,9,2],[3,5,7],[8,1,5]])