/**
 * file: js.js
 * purpose: interactivity
 * inspration from: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_js_prop
 **/

var myVideo = document.getElementById("myVideo"); 
myVideo.width = 300;
myVideo.controls = true;

// conditional - the ON / OFF trick
function playPause() { 
  if (myVideo.paused) {
    myVideo.play(); 
    myVideo.controls = false;
  }
  else {
    myVideo.pause();
    myVideo.controls = true;
    }
} 

function makeBig() { 
    myVideo.width = 400; 
} 

function makeSmall() { 
    myVideo.width = 200; 
} 

function makeNormal() { 
    myVideo.width = 300; 
} 

function muteAudio() {
    myVideo.muted = true;
    
}

document.getElementById("myVideo").loop = true;




