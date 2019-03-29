function playSound(e) {
    // `` is called backtick. It is used for templating a string. In the line below, audio is going to be a variable
    // which will hold different values so we created a template in the placeholder ${} for various input keys.
    // Stores the audio element associated with the keyCode
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    // Stores the element with class .key associated with the keyCode
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return; //stops the function
    //Rewinds to the start and play again even if the func is called again while it is already being played.
    audio.currentTime = 0; 
    audio.play();
    //Add a class to the element stored in the variable
    key.classList.add('playing'); 
}
  
function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
  
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);