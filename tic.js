let winners=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let boxes=document.querySelectorAll(".box");
let turn="o";
let winnerText=document.querySelector("#winner");
let reset=document.querySelector(".reset")
for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turn==="o"){
            box.textContent="o";
            //bsdkjfhkla
            //cscsd
            turn="x";
            
        }else{
            box.textContent="x";
            turn="o";
        }
        box.disabled=true;
        checkWinner();
    })
}

reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.textContent="";
        box.disabled=false;
        winnerText.textContent="";
        let turn="o";
    }
})
function checkWinner(){
    console.log("check");
    for(let winner of winners){
        if(boxes[winner[0]].textContent!=="" && boxes[winner[0]].textContent===boxes[winner[1]].textContent && boxes[winner[1]].textContent===boxes[winner[2]].textContent){
            for(let box of boxes){
                box.disabled=true;
            }
            winnerText.textContent=`winner is ${boxes[winner[0]].textContent}`;
        }
    }
    
}
