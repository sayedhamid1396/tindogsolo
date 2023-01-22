import {dogs} from './data.js'
import Dog from './Dog.js'

const btnLike = document.getElementById('btnLike')
const btnReject = document.getElementById('btnReject')
let currentDogIndex = 0
let unswiped =0
let autoSwap =''
let machedDog = {}



//event Listeners
btnLike.addEventListener('click', like)
btnReject.addEventListener('click', reject)

function newDog(){
    if(dogs[currentDogIndex]){
        if(dogs[currentDogIndex].hasBeenSwiped){
        currentDogIndex++
        newDog()
        }
        else{
            machedDog = new Dog(dogs[currentDogIndex])
            render()
        }
    }
    else{
        review()
    }
    
    
}

//like function
function like(){
    dogs[currentDogIndex].hasBeenLiked=machedDog.like()
    dogs[currentDogIndex].hasBeenSwiped=machedDog.swipe()
    currentDogIndex++
    clearTimeout(autoSwap)
    setTimeout(
    newDog, 1500)

}

//reject function
function reject(){
    dogs[currentDogIndex].hasBeenSwiped=machedDog.reject()
    dogs[currentDogIndex].hasBeenSwiped=machedDog.swipe()
    currentDogIndex++
    clearTimeout(autoSwap)
    setTimeout(
    newDog, 1500)
        
    
}

// rerender unswiped dogs
function review(){
    
    if(unswiped > 0){
         currentDogIndex = 0;
         newDog()
         unswiped = 0
    }
    else{
        dogNotFound()

    }
}


//show message if no unswiped dogs found 
function dogNotFound(){

    content.innerHTML = '<div class="no-data"><p >There is no more dogs...</p><p  >Please Visit Later</p></div>'
    document.getElementById('actions').style.display ='none'
}

// render dogs html
function render(){
     content.innerHTML = machedDog.renderHtm()
     
    //  auto swiped if not click on the like or reject button
  autoSwap=  setTimeout(function(){
        currentDogIndex++
        unswiped++
        newDog()
    }, 10000)



}


newDog()