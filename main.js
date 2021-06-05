var i = ["This is my younger sister.Her name is Kyra.","This is me. My name is Heer","This is my mum. Her name is Sonal","This is my dad. His name is Dinesh"];
var h = ["IMG_9985.jpeg","IMG_9987.jpeg","IMG_9200.jpeg","IMG_6340.jpeg"];
var e = 0;
 function next(){
  document.getElementById("heer").innerHTML=i[e];
  document.getElementById("haha").src=h[e];
  e = e+1;
}
