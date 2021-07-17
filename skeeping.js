// const pr1=document.createElement('pr1');
// const pr2=document.createElement('pr2');
// h3s.innerText="0 to 0";
// tag.appendChild(h3s);

let i=0;
let j=0;
const tag=document.querySelector('#tag');

const bt1=document.querySelector('#bt1');
const bt2=document.querySelector('#bt2');
const bt3=document.querySelector('#bt3');

const pr1=document.querySelector('#pr1');
const pr2=document.querySelector('#pr2');

const stc=document.querySelector('#select');
const slt=document.querySelector('#outOff');

const match=document.querySelector('#Tmatch');

var player1=0 , player2=0;
var final=slt.value;
var totalmatch=match.value;
console.log(totalmatch);
// const mongoose=require("mongoose");
// mongoose.connect



match.addEventListener('change', function(){
    totalmatch=match.value;
    player1=0;
    player2=0;
    reset();
})

slt.addEventListener('change',function(){
    final=slt.value;
    reset();
});
console.log(final);
//stc.value;
//slt.addEventListener()
bt1.addEventListener('mousedown', function (){
    
    //console.log("mouse up");
    bt1.style.backgroundColor="#1246af";
});

bt2.addEventListener('mousedown', function () {
    //console.log("mouse up");
    bt2.style.backgroundColor= '#33aa8c';
});

// bt1.addEventListener('mouseover', function (){
    
//     console.log("mouse up");
//     bt1.style.backgroundColor="#245ac5";
// });

// bt2.addEventListener('mouseover', function () {
//     console.log("mouse up");
//     bt2.style.backgroundColor= '#3cc9a6';
// });


bt1.addEventListener('click', function (){
    if(i<final&&j<final)
    i++;
    pr1.innerText= `${i}`;
    //console.log("ecwyfuijokdils;.a");
    bt1.style.backgroundColor="#003aaf";
    if(i==final)
    {
        player1++;
        pr1.style.color= "rgb(0, 150, 57)";
        pr2.style.color= "rgb(139, 1, 1)";
        document.querySelector('#wins').textContent='Player1 wins this match';
        if((player1+player2)>=totalmatch){
            if(player1>player2)
            document.querySelector('#fwin').textContent=`Player2 wins by ${player1-player2} match`;
            else if(player1<player2)
            document.querySelector('#fwin').textContent=`Player2 wins by ${player1-player2} match`;
            else
            document.querySelector('#fwin').textContent=`Tie game by ${player1}-${player2} match`;
            player2=0;
            player1=0;
            //console.log("winner!!!!!!!!!");
        }
    }
});

bt2.addEventListener('click', function () {
    if(i<final&&j<final)
    j++;
    pr2.innerText= `${j}`;
    //console.log("player2");
    bt2.style.backgroundColor= '#019c76';
    if(j==final)
    {
        player2++;
        pr2.style.color= "rgb(0, 150, 57)";
        pr1.style.color= "rgb(139, 1, 1)";
        document.querySelector('#wins').textContent='Player2 wins this match';
        if((player1+player2)>=totalmatch){
            if(player1>player2)
            document.querySelector('#fwin').textContent=`Player2 wins by ${player1-player2} match`;
            else if(player1<player2)
            document.querySelector('#fwin').textContent=`Player2 wins by ${player1-player2} match`;
            else
            document.querySelector('#fwin').textContent=`Tie game by ${player1}-${player2} match`;
            player2=0;
            player1=0;
            //console.log("winner!!!!!!!!!");
        }
    }
});



bt3.addEventListener('click', reset);

function reset(){
    
    i=0;
    j=0;
    pr1.innerText= `${i}`;
    pr2.innerText= `${j}`;
    bt3.style.backgroundColor="rgb(252, 110, 58)";
    pr2.style.color= "rgb(0,0,0)";
    pr1.style.color= "rgb(0,0,0)";
    document.querySelector('#wins').textContent=' ';
    document.querySelector('#fwin').textContent=' ';
}

bt3.addEventListener('mousedown', function () {
    //console.log("mouse up");
    bt3.style.backgroundColor= 'rgb(255, 144, 104)';
});


