
// HW1
// WHY CONST?--> const allow to specify if a variable is or not modifiable.
//               Helps to prevent modifications. This variable identifier cannot be reassigned

//  WHY CAPS?-->It is not mandatory, but helps to indetify easier.
//              Uppercase are letting the programmer know that they can trust the variable doesn't change

const IMAGES =[
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
]

const TITLES=[
    "Photo 1",
    "Photo 2",
    "Photo 3"
]

let currentIndex = 0
let dir ="left"
// let play= setInterval(next,3000)
let playVar=false



const EFECTS =[
    "animate__animated animate__backInRight ",
    "animate__animated animate__backInLeft"
]

function showImage(n){
    carouselSlides.innerHTML=
    `
    <img class="${EFECTS[0]}" src="${IMAGES[n]}" />
    `
}
function showTitile(n){
    carouselTitles.innerHTML=
    `
    <h4>${TITLES[n]}</h4>
    `
}

function showImagePrev(n){
    carouselSlides.innerHTML=
    `
    <img class="${EFECTS[1]}" src="${IMAGES[n]}" />
    `
}
// HW2 boundaries/limits -if/else
function next(){
    if (currentIndex<IMAGES.length-1){
// HW3* tow lines optimisation
        showImage(++currentIndex)
        showIndicators(currentIndex)  
        showTitile(currentIndex)    
    }else if (currentIndex==IMAGES.length-1){
        currentIndex=0
        showImage(currentIndex)
        showIndicators(currentIndex) 
        showTitile(currentIndex)            
    }
}
// HW2 boundaries/limits -if/else 
function prev(){
    if (currentIndex>0){
// HW3* tow lines optimisation 
        showImagePrev(--currentIndex)
        showIndicators(currentIndex)    
        showTitile(currentIndex)  
    }else if (currentIndex==0){
        currentIndex=2
        showImagePrev(currentIndex)
        showIndicators(currentIndex) 
        showTitile(currentIndex)            
    }
}

function showIndicators (n){
    carouselIndicators.innerHTML=``
    for (let i=0;i<IMAGES.length;i++){
        if (i==n){
            carouselIndicators.innerHTML+=`<i class="fas fa-circle"></i> `
        }else{
            carouselIndicators.innerHTML+=`<i class="far fa-circle"></i>`
        }
    }
}

function stop(){
    if (playVar==true){
        clearInterval(play)
        playVar=false
    }else if (playVar==false){
        play=setInterval(next,3000)
        playVar=true

               
    }
}

function action(){
    switch(event.key){
        case "ArrowLeft":
            if (currentIndex>0){
                // HW7* left/right with keys
                showImagePrev(--currentIndex)
                showIndicators(currentIndex) 
                showTitile(currentIndex)  
            }else if (currentIndex==0){
                currentIndex=2
                showImagePrev(currentIndex)
                showIndicators(currentIndex) 
                showTitile(currentIndex)  
            }      
            break
        case "ArrowRight":
            if (currentIndex<2){
                // HW7* left/right with keys
                showImage(++currentIndex)
                showIndicators(currentIndex) 
                showTitile(currentIndex)  
            }else if (currentIndex==2){
                currentIndex=0
                showImage(currentIndex)
                showIndicators(currentIndex) 
                showTitile(currentIndex)    
            }   
            break     
}
}








showImage(currentIndex)
showTitile(currentIndex)
showIndicators(currentIndex)