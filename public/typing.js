var text = "hi, abdul here ";
var i = 0;
var caret = "|";
var speed = 40;
var blinkSpeed = 300;
var isVisible = true;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        blinkCaret();
    }
}

function blinkCaret() {
    if (isVisible) {
        document.getElementById("typing").innerHTML = document.getElementById("typing").innerHTML.slice(0, -1);
    } else {
        document.getElementById("typing").innerHTML += caret;
    }
    isVisible = !isVisible;
    setTimeout(blinkCaret, blinkSpeed);
}

document.addEventListener("DOMContentLoaded", function(){
    typeWriter();
});