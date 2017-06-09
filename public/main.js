document.addEventListener("DOMContentLoaded", function (event) {

  //nav scroll javascript & cart
   var navBar = document.querySelector("#nav")

   window.addEventListener("scroll", function (e) {
     if (window.pageYOffset > 205) {
       navBar.classList.remove("startnav");
       navBar.classList.add("fixnav");
     } else {
       navBar.classList.remove("fixnav");
       navBar.classList.add("startnav");
     }

   })
}
