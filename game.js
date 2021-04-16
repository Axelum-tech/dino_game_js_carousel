//LEGEND:
// 0-empty
// 1-t-rex
// 2 -cactus




let gameMap=[0,0,0,0,1,0,0,2,0,0]
let dinoIndex=4
let cactus =7
let dir ="left"
let steps=0






function action(){
    switch(event.key){
        case "ArrowLeft":
            if(dinoIndex>0){
            gameMap[dinoIndex]=0
            dinoIndex--
            steps+=1
            gameMap[dinoIndex]=1
            dir="left"
            hp()
            drawMap()
        }
        break
        case "ArrowRight":
            if (dinoIndex<9){
            gameMap[dinoIndex]=0
            dinoIndex++
            steps+=1
            gameMap[dinoIndex]=1
            dir="right"
            hp()
            drawMap()
        }    
        break
    }
}

function hp(){
    if ( gameMap[dinoIndex]==gameMap[cactus] ){
     

        alert("Game Over")
        location.reload()
        
    }
   
}  



function drawMap(){
    m.innerHTML=``
    for(let i=0; i<gameMap.length; i++){
        if (gameMap[i]==0){
            m.innerHTML+=`<div></div>`
        }else if (gameMap[i]==1){
            m.innerHTML+=`<div class="dino ${dir}"></div>`
        }else if (gameMap[i]==2){
            m.innerHTML+=`<div class="cactus"></div>`
        }

              
    }
    step.innerHTML=`Steps : ${steps}`
}









drawMap()



