/**
 * file: js.js
 * purpose: interactivity
 **/

let speed = 3;
let fast = 10;

let myParallax = function () {
    console.log('scroll detected');
    camel.style = 'left:' + fast + 'px';
    fast += -5;
    
    
    
    
// condition
    console.log("fast is now = " + fast); 
        if (fast > 777) {
        fast = -300;
    } 
    
}



document.addEventListener('scroll', myParallax);
