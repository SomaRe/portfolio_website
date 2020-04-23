console.log("Hello")
var x = document.getElementsByClassName("clip");
var y = document.getElementsByClassName("info1");
var infox = document.getElementsByClassName("infox");
var row3 = document.getElementsByClassName("row3");

/*  experience1 */ 
document.getElementsByClassName('info1')[0].onclick = function() {
  if(y[0].style.visibilty='visible'){
  x[0].style.clipPath="circle(100%)";
  y[0].style.visibility='hidden';
  infox[0].style.visibility="visible";
}
}
document.getElementsByClassName('infox')[0].onclick = function() {
  if(y[0].style.visibilty='visible'){
  x[0].style.clipPath="circle(0% at 98% 10%)";
  y[0].style.visibility='visible';
  infox[0].style.visibility="hidden";
}
}
/*  experience2 */ 
document.getElementsByClassName('info1')[1].onclick = function() {
  if(y[1].style.visibilty='visible'){
  x[1].style.clipPath="circle(100%)";
  y[1].style.visibility='hidden';
  infox[1].style.visibility="visible";
}
}
document.getElementsByClassName('infox')[1].onclick = function() {
  if(y[1].style.visibilty='visible'){
  x[1].style.clipPath="circle(0% at 98% 10%)";
  y[1].style.visibility='visible';
  infox[1].style.visibility="hidden";
}
}

