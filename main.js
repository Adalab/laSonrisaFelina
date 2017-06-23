"use strict";
var navMobile = document.getElementById("js-navMobile");
var navShow = document.getElementById("js-navShow");

navMobile.addEventListener("click", mobile);
function mobile() {
  navShow.classList.toggle("list-show");
  navMobile.classList.toggle("open");
}

var header = document.querySelector(".header");
var smallMenuLinkList = document.querySelectorAll(".navMobileItems li a");
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener("click", mobile);
}
window.addEventListener("scroll", changeOpacity);
function changeOpacity(){
  if(document.body.scrollTop > header.offsetHeight){
    header.classList.add("opacity");
  }else{
    header.classList.remove("opacity");
  }
}
