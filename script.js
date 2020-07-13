console.log("Hello")
var x = document.getElementsByClassName("clip");
var y = document.getElementsByClassName("info1");
var infox = document.getElementsByClassName("infox");
var row3 = document.getElementsByClassName("row3");
var arrow_down = document.getElementsByClassName("arrow_down");

/*  experience1 */ 
document.getElementsByClassName('info1')[0].onclick = function() {
  if(y[0].style.visibilty='visible'){
  x[0].style.clipPath="circle(100%)";
  y[0].style.visibility='hidden';
  infox[0].style.visibility="visible";
  arrow_down[0].style.visibility="visible";
  arrow_down[0].style.animation = "ani 1s ease-in-out 0.5s 3";
}
}
document.getElementsByClassName('infox')[0].onclick = function() {
  if(y[0].style.visibilty='visible'){
  x[0].style.clipPath="circle(0% at 98% 10%)";
  y[0].style.visibility='visible';
  infox[0].style.visibility="hidden";
  arrow_down[0].style.visibility="hidden";
  arrow_down[0].style.animation = "";
}
}
/*  experience2 */ 
document.getElementsByClassName('info1')[1].onclick = function() {
  if(y[1].style.visibilty='visible'){
  x[1].style.clipPath="circle(100%)";
  y[1].style.visibility='hidden';
  infox[1].style.visibility="visible";
  arrow_down[1].style.visibility="visible";
  arrow_down[1].style.animation = "ani 1s ease-in-out 0.3s 3";
}
}
document.getElementsByClassName('infox')[1].onclick = function() {
  if(y[1].style.visibilty='visible'){
  x[1].style.clipPath="circle(0% at 98% 10%)";
  y[1].style.visibility='visible';
  infox[1].style.visibility="hidden";
  arrow_down[1].style.visibility="hidden";
  arrow_down[1].style.animation = "";
}
}


var pill = document.getElementsByClassName("collapse_pill");
pill[0].style.display="flex";
pill[0].style.opacity='1';
document.getElementsByClassName("skills_heading")[0].onclick = ()=>{
  if(pill[0].style.display=="none" || pill[0].style.display==""){
  pill[0].style.display="flex";
  pill[0].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[0].style.display="none";
    pill[0].style.animation = ""
  }
}
document.getElementsByClassName("skills_heading")[1].onclick = ()=>{
  if(pill[1].style.display=="none" || pill[1].style.display==""){
  pill[1].style.display="block";
  pill[1].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[1].style.display="none";
  pill[1].style.animation = ""
  }
}



document.getElementsByClassName("sub_skills_head")[0].onclick = ()=>{
  var p = 2
  if(pill[p].style.display=="none" || pill[p].style.display==""){
  pill[p].style.display="flex";
  pill[p].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[p].style.display="none";
  pill[p].style.animation = ""
  }
}

document.getElementsByClassName("sub_skills_head")[1].onclick = ()=>{
  var p = 3
  if(pill[p].style.display=="none" || pill[p].style.display==""){
  pill[p].style.display="flex";
  pill[p].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[p].style.display="none";
  pill[p].style.animation = ""
  }
}

document.getElementsByClassName("sub_skills_head")[2].onclick = ()=>{
  var p = 4
  if(pill[p].style.display=="none" || pill[p].style.display==""){
  pill[p].style.display="flex";
  pill[p].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[p].style.display="none";
  pill[p].style.animation = ""
  }
}

document.getElementsByClassName("sub_skills_head")[3].onclick = ()=>{
  var p = 5
  if(pill[p].style.display=="none" || pill[p].style.display==""){
  pill[p].style.display="flex";
  pill[p].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[p].style.display="none";
  pill[p].style.animation = ""
  }
}

document.getElementsByClassName("sub_skills_head")[4].onclick = ()=>{
  var p = 6
  if(pill[p].style.display=="none" || pill[p].style.display==""){
  pill[p].style.display="flex";
  pill[p].style.animation = "collapse_ani 1s ease-in-out forwards"
  }
  else{
    pill[p].style.display="none";
  pill[p].style.animation = ""
  }
}