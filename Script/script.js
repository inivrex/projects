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
let textWebPro = ["Battery Charging", "Border Moving Box", "Circular Motion Loading Effect", "Contact us form", "Excel Style", "Filling Color Effects", "Flying Box Effect", "Hover Button Effect Border Move", "Hover Effect With Scale", "Loading Effect 1", "Loading Effect 2", "Loading Effect 3", "Modern Button Switch Animation", "Moving Fan Animation", "Pendulum Effect Loading", "Signal Receiving Animation", "Slide Button", "Three Ball Loading Animation", "Water Drop"];

for (let i = 0; i < WebProTxts.length; i++) {
    WebProTxts[i].textContent = textWebPro[i];
}

let ImgWebProLinks = ['Files/batterychargingAnimation.png', 'Files/BorderMovingAnimation.png', 'Files/Circular Motion Loading Effect.png', 'Files/ContactUs.png', 'Files/excelStyle.png', 'Files/FillingColorEffects.png', 'Files/FlyingBox.png', 'Files/HoverButtonEffectBorderMove.png', 'Files/HoverEffectWithScale.png', 'Files/LoadingEffect.png', 'Files/LoadingEffect2.png', 'Files/LoadingEffect3.png', 'Files/ModernButtonSwitchAnimation.png', 'Files/MovingFanAnimation.png', 'Files/PendulumEffectLoading.png', 'Files/SignalCatchingAnimation.png', 'Files/SlideButton.png', 'Files/ThreeBallLoadingAnimation.png', 'Files/WaterDrop.png'];

for (let i = 0; i < ImgOfProWeb.length; i++) {
    ImgOfProWeb[i].setAttribute('src', ImgWebProLinks[i]);
}


// Battery Charging Border Moving Box, Circular Motion Loading Effect, Contact Us Form, Excel Style, Filling Color Effects, Flying Box Effect, Hover Button Effect Border Move, 

const CardswebProLinks = [
    'https://inivrex.in/projects/Battery%20Charging.html',
    'https://inivrex.in/projects/Border%20Moving%20Box.html',
    'https://inivrex.in/projects/Circular%20Motion%20Loading%20Effect.html',
    'https://inivrex.in/projects/Contact%20Us%20Form.html',
    'https://inivrex.in/projects/Excel%20Style.html',
    'https://inivrex.in/projects/Filling%20Color%20Effects.html',
    'https://inivrex.in/projects/Flying%20Box%20Effect.html',
    'https://inivrex.in/projects/Hover%20Button%20Effect%20Border%20Move.html',
    'https://inivrex.in/projects/Hover%20Effect%20With%20Scale.html',
    'https://inivrex.in/projects/Loading%20Effect%201.html',
    'https://inivrex.in/projects/Loading%20Effect%202.html',
    'https://inivrex.in/projects/Loading%20Effect%203.html',
    'https://inivrex.in/projects/Modern%20Button%20Switch%20Animation.html',
    'https://inivrex.in/projects/Moving%20Fan%20Animation.html',
    'https://inivrex.in/projects/Pendulum%20Effect%20Loading.html',
    'https://inivrex.in/projects/Signal%20Receiving%20Animation.html',
    'https://inivrex.in/projects/Slide%20Button.html',
    'https://inivrex.in/projects/Three%20Ball%20Loading%20Animation.html',
    'https://inivrex.in/projects/Water%20Drop.html'
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
