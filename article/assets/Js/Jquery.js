 AOS.init();
//   function Hide Navbar When Scroll
  $(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#navbar').fadeOut();
        } else {
            $('#navbar').fadeIn();
        }
    });
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
