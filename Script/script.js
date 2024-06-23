//Global Variables Here
const smallProjects = document.getElementById("smallProjects");
const NavMoreLnkBtn = document.getElementById("NavMoreLnkBtn");
const MoreNavWin = document.getElementById("MoreNavWin");
const MoreNavMWin = document.getElementById("MoreNavMWin");
const dateIn = document.getElementById("dateIn");
const TimeIn = document.getElementById("TimeIn");
const section = document.querySelector("section");
const navlinks = document.getElementsByClassName("navlinks");
const WebProTxts = document.getElementsByClassName("WebProTxts");
const ImgOfProWeb = document.getElementsByClassName("ImgOfProWeb");
const cardsWebPro = document.getElementsByClassName("cardsWebPro");


section.addEventListener("click", () => {
    MoreNavMWin.style.display = "none";
    MoreNavWin.style.height = "0rem";
})
for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
        MoreNavMWin.style.display = "none";
        MoreNavWin.style.height = "0rem";
    })
}
NavMoreLnkBtn.addEventListener("click", () => {
    if (MoreNavWin.style.height != "10rem") {
        MoreNavWin.style.height = "10rem";
        MoreNavMWin.style.display = "flex";
    } else {
        MoreNavMWin.style.display = "none";
        MoreNavWin.style.height = "0rem";
    }
})

//Remove the id name from url when someone click on nav links

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
        window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});
    });
};

//Inputting Web Project Text And Images
let textWebPro = ["Battery Charging", "Border Moving Box", "Circular Motion Loading Effect", "Contact us form", "Excel Style", "Filling Color Effect", "Flying Box Effect", "HoverButton Effect Border Move", "Hover Effect With Scale", "Loading Effect 1", "Loading Effect 2", "Loading Effect 3", "Modern Button Switch Animation", "Moving Fan Animation", "Pendulum Effect Loading", "Signal Receiving Animation", "Slide Button", "Three Ball Loading Animation", "Water Drop"];

for (let i = 0; i < WebProTxts.length; i++) {
    WebProTxts[i].textContent = textWebPro[i];
}

let ImgWebProLinks = ['Files/batterychargingAnimation.png', 'Files/BorderMovingAnimation.png', 'Files/Circular Motion Loading Effect.png', 'Files/ContactUs.png', 'Files/excelStyle.png', 'Files/FillingColorEffects.png', 'Files/FlyingBox.png', 'Files/HoverButtonEffectBorderMove.png', 'Files/HoverEffectWithScale.png', 'Files/LoadingEffect.png', 'Files/LoadingEffect2.png', 'Files/LoadingEffect3.png', 'Files/ModernButtonSwitchAnimation.png', 'Files/MovingFanAnimation.png', 'Files/PendulumEffectLoading.png', 'Files/SignalCatchingAnimation.png', 'Files/SlideButton.png', 'Files/ThreeBallLoadingAnimation.png', 'Files/WaterDrop.png'];

for (let i = 0; i < ImgOfProWeb.length; i++) {
    ImgOfProWeb[i].setAttribute('src', ImgWebProLinks[i]);
}


const CardswebProLinks = [
    'https://inivrex.in/projects/battery%20charging',
    'https://inivrex.in/projects/border%20moving%20box',
    'https://inivrex.in/projects/circular%20motion%20loading%20effect',
    'https://inivrex.in/projects/contact%20us%20form',
    'https://inivrex.in/projects/excel%20style',
    'https://inivrex.in/projects/filling%20color%20effect',
    'https://inivrex.in/projects/flying%20box%20effect',
    'https://inivrex.in/projects/hoverbutton%20effect%20border%20move',
    'https://inivrex.in/projects/hover%20effect%20with%20scale',
    'https://inivrex.in/projects/loading%20effect%201',
    'https://inivrex.in/projects/loading%20effect%202',
    'https://inivrex.in/projects/loading%20effect%203',
    'https://inivrex.in/projects/modern%20button%20switch%20animation',
    'https://inivrex.in/projects/moving%20fan%20animation',
    'https://inivrex.in/projects/pendulum%20effect%20loading',
    'https://inivrex.in/projects/signal%20receiving%20animation',
    'https://inivrex.in/projects/slide%20button',
    'https://inivrex.in/projects/three%20ball%20loading%20animation',
    'https://inivrex.in/projects/water%20drop'
];

for (let i = 0; i < cardsWebPro.length; i++) {
    cardsWebPro[i].setAttribute('href', CardswebProLinks[i]);
}


// Scroll Navigation Show 
window.addEventListener('scroll', function () {

    MoreNavMWin.style.display = "none";
    MoreNavWin.style.height = "0rem";
    var navbar = document.querySelector('nav');
    var navbarHeight = navbar.offsetHeight;

    if (window.pageYOffset >= navbarHeight + 100) {
        navbar.classList.add('fixed');
        MoreNavWin.style.position = 'fixed';
        MoreNavWin.style.zIndex = '120';
        MoreNavWin.style.top = '3.7rem';
        document.body.style.marginTop = '8rem';
    } else {
        navbar.classList.remove('fixed');
        MoreNavWin.style.position = 'absolute';
        document.body.style.marginTop = '0rem';
        document.body.style.transition = '0s';
    }
});


//Move effect 
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.scroll-animate');

    function checkVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        elements.forEach(function (element) {
            var rect = element.getBoundingClientRect();
            if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });

        // Reset elements if scroll offset is 0
        if (scrollTop === 1) {
            elements.forEach(function (element) {
                element.classList.remove('visible');
                // Trigger reflow to restart animation
                void element.offsetWidth;
            });
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});
