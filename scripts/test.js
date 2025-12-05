//Select : button
let heartButton = document.querySelector ('.heart')
//event listener 
heartButton.addEventListener('click', toggleLike);

//function toggleLike
function toggleLike()
//wait on click so heart gets animation/heart color change to red
