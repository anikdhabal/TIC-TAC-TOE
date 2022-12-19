
let ting=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let gamewin=false;

const changeturn=()=>{
      return turn==="X"?"0":"X";
}
const checkwin=()=>{
let boxes=document.querySelectorAll('.grid');
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e=>{
    if((boxes[e[0]].innerText===boxes[e[1]].innerText)&&(boxes[e[1]].innerText===boxes[e[2]].innerText)&&(boxes[e[0]].innerText!='')){
        gameover.play();
        popup(document.querySelector('.info').innerText=boxes[e[0]].innerText);
document.querySelector('.info').innerText=" ";
gamewin=true;

    }
})
}
//game logic
const grids=document.getElementsByClassName("grid");
Array.from(grids).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.innerHTML===''){
            element.innerHTML=turn;
            turn=changeturn();
            ting.play();
            checkwin();
            if(!gamewin){
            document.getElementsByClassName("info")[0].innerText="Turn For:"+turn;
            }
            
            
        }
    })
})
//reset button
reset.addEventListener('click',()=>{
    Array.from(grids).forEach(e=>{
        e.innerText="";
    })
    turn="X";
    gamewin=false;
    document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
})
//pop up function
function popup(temp){
   
    document.querySelector(".candidate").innerText=temp+" "+" WON";
    document.querySelector(".pop-up").style.display="flex";
    document.querySelector(".close").addEventListener('click',()=>{
    document.querySelector(".pop-up").style.display="none";
    })
    }



