console.log("Hello")
var x = document.getElementsByClassName("clip1")[0];
var y = document.getElementsByClassName("info1")[0];
var infox = document.getElementsByClassName("infox")[0];
document.getElementsByClassName('info1')[0].onclick = function() {
  if(y.style.visibilty='visible'){
  x.style.clipPath="circle(100%)";
  y.style.visibility='hidden';
  infox.style.visibility="visible";
}
}
document.getElementsByClassName('infox')[0].onclick = function() {
  if(y.style.visibilty='visible'){
  x.style.clipPath="circle(0% at 96% 3%)";
  y.style.visibility='visible';
  infox.style.visibility="hidden";
}
}
