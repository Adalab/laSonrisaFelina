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

//Calculadora
var resultButton = document.getElementById("mlResult");
var mgProductElement = document.getElementById("mgProduct");
var mlProductElement = document.getElementById("mlProduct");
var mgDoseElement = document.getElementById("mgDose");

function getMlResult(){
  var resultDose =document.getElementById("resultDose");
  var mgProductInput = mgProductElement.value;
  var mlProductInput = mlProductElement.value;
  var mgDoseInput = mgDoseElement.value;

  if((mgProductInput === "" || mgProductInput === "0") || (mlProductInput === "" || mlProductInput === "0") || (mgDoseInput === "" || mgDoseInput === "0")){
    if(mgProductInput === "" || mgProductInput === "0"){
      mgProductElement.classList.add("alarm");
    }
    if(mlProductInput === "" || mlProductInput === "0"){
      mlProductElement.classList.add("alarm");
    }
    if(mgDoseInput === "" || mgDoseInput === "0"){
      mgDoseElement.classList.add("alarm");
    }
    resultDose.innerHTML = ("Por favor, revise los campos.");
  } else {
  resultDose.innerHTML =((mgDoseInput*mlProductInput)/mgProductInput).toFixed(3).replace(".",",") + " ml";
  }
}
resultButton.addEventListener("click", getMlResult);

function alarmMgProduct(){
  mgProductElement.classList.remove("alarm");
}
function alarmMlProduct(){
  mlProductElement.classList.remove("alarm");
}
function alarmMgDose(){
  mgDoseElement.classList.remove("alarm");
}
