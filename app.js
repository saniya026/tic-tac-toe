let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO
let count = 0; //to track draw

const winPatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
 
   const resetGame = () => {
     turnO = true;
     count = 0;
     enableBoxes();
     msgContainer.classList.add("hide");
   };


boxes.forEach((box) => {

    box.addEventListener("click", () => {

        console.log("box was clicked");
        if(turnO) { //playerO
        box.innerText = "0";
        turnO = false;
        } else {  //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if ( count== 9 && !isWinner) {

            gameDraw();
        }
});
});

const gameDraw = () => {
msg.innerText = 'Game was a Draw.';
msgContainer.classList.remove("hide");
disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innertext =`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
  let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
        return true;
    }
}
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
        




        
