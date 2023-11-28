// sticky navigation menu

let nav_offset_top = $('.header_area').height()+50;

function navbarFixed(){
   if($('.header_area').length){
      $(window).scroll(function(){
         let scroll = $(window).scrollTop();
         if(scroll >= nav_offset_top){
            $('.header_area .main-menu').addClass('navbar_fixed');
         }else{
            $('.header_area .main-menu').removeClass('navbar_fixed');
         }
      })
   }
}

navbarFixed();
//Navigation menu end

//Mini Scroll Start

let scrollContainer = document.querySelector(".slide-div");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", ()=>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft += 350;
});

backBtn.addEventListener("click", ()=>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft -= 350;
});

//Mini Scroll End

//Toggle Navbar Start

$(document).ready(function(){
   $('#icon').click(function(){
     $('nav').toggleClass('show');
   });
 });

//Toggle Navbar End