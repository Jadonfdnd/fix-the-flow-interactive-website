//Select : heart button 
const heartButton = document.querySelector('.like-button')
console.log(heartButton)
//add click event listener and use toggleLike Function
heartButton.addEventListener('click', toggleLike)

//function toggleLike
function toggleLike(event) {
    heartButton.classList.toggle("liked");
    
    
}
//wait on click so heart gets animation/heart color change to red
