var text = "hi, abdul here";
var i = 0;
var caret = "|";
var speed = 40;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("typing").innerHTML += caret;
    }
}
