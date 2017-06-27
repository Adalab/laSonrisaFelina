"use strict";
var navMobile = document.getElementById("js-navMobile");
var navShow = document.getElementById("js-navShow");
var principalSectionsTitle = document.getElementById("js-principal-section-title");

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
    principalSectionsTitle .classList.add("principal-section-title-display");
  }else{
    header.classList.remove("opacity");
    principalSectionsTitle .classList.remove("principal-section-title-display");
  }
}

$(function(){

   $('a.link-nav').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
                 return false;
          }
      }
   });
});

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

//Flecha subir arriba
$(document).ready(function(){
	$('.up-page').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1000);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.up-page').fadeIn(300);
		} else {
			$('.up-page').fadeOut(300);
		}
	});
})
