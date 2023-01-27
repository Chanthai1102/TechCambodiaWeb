AOS.init({
    duration: 1200,
  })  
//   function Hide Navbar When Scroll
  $(document).ready(function(){
    $(window).on("scroll", function(){

        if($(window).scrollTop() == 0){

        $("#navbar").css("background-color", "");
        $(".text-navbar").css("color", "white");
        }
        else if ($(window).scrollTop() > 0){
            $(".text-navbar").css("color", "black");
        }
    });
    $("#slideshow > div:gt(0)").hide();
    setInterval(function() { 
        $('#slideshow > div:first')
        .fadeOut(0)
        .next()
        .fadeIn(0)
        .end()
        .appendTo('#slideshow');
        }, 3000);    
});

// Icon 
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// theme Icon
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme : dark)");

// Icon Taggling
const iconToggle = () =>{
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
const themeCheck = () =>{
    if(userTheme == "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    };
    sunIcon.classList.add("display-none");
};

// Munual Theme Switch
const themeSwitch = () =>{
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        iconToggle();
        return;
    };
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","light");
    iconToggle();
};

// call theme to switch theme button
sunIcon.addEventListener("click", () =>{
    themeSwitch();
});
moonIcon.addEventListener("click", () =>{
    themeSwitch();
});

themeCheck();

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px"; /* adjust this value to the height of your header */
    document.getElementById("navbar").style.background = "white"; 
  }
  prevScrollpos = currentScrollPos;
}
