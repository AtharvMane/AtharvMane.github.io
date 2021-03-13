
var i = 0;
var txt = 'Hello I am Atharv';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()

