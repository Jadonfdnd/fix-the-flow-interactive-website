//Select : button
let heartButton = document.querySelector ('.heart')
//event listener 
heartButton.addEventListener('click', toggleLike);

//function toggleLike
function toggleLike() {
    heartButton.classList.toggle("liked");
}
//wait on click so heart gets animation/heart color change to red
