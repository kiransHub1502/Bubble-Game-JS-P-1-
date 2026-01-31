 var timer = 6;
 var score = 0;
 var hitRn = 0;
 // event bubbling :- jispe click kroge wo particular element par ecent raise hoga
 // or event listener na milne par event element ke parent pe listener dhundega , 
//  wha bhi nhi milne par event parent ke parent ke parent par listener dhundega

function updateScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
 
function makeBubble(){
     var clutter = "";
for( var i = 1; i <= 160; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}



 function changeHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;
}

function runtimer(){
    var time = setInterval(function(){
        if( timer > 0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
    }
    else{
        // AFTER endng time, make all the bubbles gone and pbtm space vacant
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over .  <br> Your total score is ${score}</h1>`;
        clearInterval(time);
    }
    }, 1000)
}

document.querySelector(".pbtm")
.addEventListener("click", function(details){
      var clickedNo =   Number(details.target.textContent);
      if( clickedNo == hitRn){
        updateScore();
        makeBubble()
        changeHit();
      }
});



makeBubble();
changeHit()
runtimer();
// updateScore();



