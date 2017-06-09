document.addEventListener("DOMContentLoaded", function (event) {

  //nav scroll javascript
   var navBar = document.querySelector("#nav")

   window.addEventListener("scroll", function (e) {
     if (window.pageYOffset > 250) {
       navBar.classList.remove("startNav");
       navBar.classList.add("fixnav");
     } else {
       navBar.classList.remove("fixnav");
       navBar.classList.add("startNav");
     }

   })


   //social media hover javascript
   var linkImg = document.querySelector("#linkImg");
   var gitImg = document.querySelector("#gitImg");
   var lUrl = 'url("/images/linkedinHover.png")';
   var lUrl2 = 'url("/images/linkedin.png")';
   var gUrl = 'url("/images/githubHover.png")';
   var gUrl2 = 'url("/images/github.png")';

   linkImg.addEventListener("mouseover", function () {

     linkImg.style.backgroundImage = lUrl;

   })

   linkImg.addEventListener("mouseleave", function () {

     linkImg.style.backgroundImage = lUrl2;

   })

   gitImg.addEventListener("mouseover", function () {

     gitImg.style.backgroundImage = gUrl;

   })

   gitImg.addEventListener("mouseleave", function () {

     gitImg.style.backgroundImage = gUrl2;

   })


})
