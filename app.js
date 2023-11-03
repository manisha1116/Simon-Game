

let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','purple','green'];

let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game is started');
        started=true;
      levelUp();
    }
});
// when game click btn background color white

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');

    },250)
}

// when user click button background change green color
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');

    },250)
}

function levelUp(){
    // level up vaisakey paxi userseq khali hunxa and user ley start deykhi button click garnu parxa
    userSeq=[];

    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomCol=btns[randomIdx];

    let randomBtn=document.querySelector(`.${randomCol}`);
//     console.log(randomIdx);+

//    console.log(randomCol);
//     console.log(randomBtn);
    gameSeq.push(randomCol);
    console.log(gameSeq);
    gameFlash(randomBtn);
}
function checkAns(idx){
  
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game OVER! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white";

        },150)
        reset();
    }
}
function btnPress(){
 let btn=this;
 userFlash(btn) ;
 userColor=btn.getAttribute('id');
 userSeq.push(userColor);
 checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
// wrong btn press garda game freeze bhayeko hunaley paxi game lai reset garinxa
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}






    
    

