console.log('hello world');
let board = [];

function play(val) {
    const player = document.getElementById('player');
    let element = document.getElementById(val);
    
    if (player.innerText === 'X') {
        player.innerText = 'O';
        element.innerText = 'X'
        board[val] = 'X';
    } else {
        player.innerText = 'X';
        element.innerText = 'O'
        board[val] = 'O';
    }
    //assign each square [0-8] to individual variables
    //big if statement...
    //if sq1 is NOT undefined, and it is equal to squares 2 and 3,
        //trigger and alert that 
    
    let sq1 = board[0]
    let sq2 = board[1]
    let sq3 = board[2]
    let sq4 = board[3]
    let sq5 = board[4]
    let sq6 = board[5]
    let sq7 = board[6]
    let sq8 = board[7]
    let sq9 = board[8]

    if (sq1 !== undefined && sq1 === sq2 && sq1 === sq3) {
        window.alert(`${sq1} is the winner!`);
        return
    } else if (sq4 !== undefined && sq4 === sq5 && sq4 === sq6) {
        window.alert(`${sq4} is the winner`);
        return
    } else if (sq7 !== undefined && sq7 === sq8 && sq7 === sq9) {
        window.alert(`${sq7} is the winner`);
        return
    } else if (sq1 !== undefined && sq1 === sq4 && sq1 === sq7) {
        window.alert(`${sq1} is the winner`);
        return
    } else if (sq2 !== undefined && sq2 === sq5 && sq2 === sq8) {
        window.alert(`${sq2} is the winner`);
        return
    } else if (sq3 !== undefined && sq3 === sq6 && sq3 === sq9) {
        window.alert(`${sq3} is the winner`);
        return
    } else if (sq1 !== undefined && sq1 === sq5 && sq1 === sq9) {
        window.alert(`${sq1} is the winner`);
        return
    } else if (sq7 !== undefined && sq7 === sq5 && sq7 === sq3) {
        window.alert(`${sq7} is the winner`);
        return
    } 


  let boardFull = true
  for(let i = 0; i <= 8; i++){
    if(board[i] === undefined){
       boardFull = false  
    }
  }
  if (boardFull === true) {
      window.alert("wtf does 'Cat's game mean? Anyways, you both lost.")
  }
};