// Create the Dog class here

export default class Dog {


    constructor(dog){
        Object.assign(this, dog)

        
    }



    renderHtm(){
        const {avatar,name,age,bio}= this;
         return   `           
            <div class="slideInLeft dog_content" id="dogContent">
                <img class="dog_image" src="${avatar}" alt="" >
                <div class="dog_details">
                        <p class="dog_title">${name}, ${age}</p>
                        <p class="dog_bio">${bio}</p>
                    
                </div>
            </div>
             
            </div>`
    }

   
    like(){
        
        document.getElementById('dogContent').innerHTML+=`
            <img class="like_badge" src="images/badge-like.png" >
        `
       return this.hasBeenLiked = true
       
    }
    reject(){
        
        document.getElementById('dogContent').innerHTML+=`
            <img class="like_badge" src="images/badge-nope.png" >
        `
       return this.hasBeenLiked = false
       
    }
    swipe(){
        return this.hasBeenSwiped = true
    }
}