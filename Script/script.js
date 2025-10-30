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

let ImgWebProLinks = ['https://inivrex.github.io/Files/batterychargingAnimation.png', 'https://inivrex.github.io/Files/BorderMovingAnimation.png', 'https://inivrex.github.io/Files/Circular Motion Loading Effect.png', 'https://inivrex.github.io/Files/ContactUs.png', 'https://inivrex.github.io/Files/excelStyle.png', 'https://inivrex.github.io/Files/FillingColorEffects.png', 'https://inivrex.github.io/Files/FlyingBox.png', 'https://inivrex.github.io/Files/HoverButtonEffectBorderMove.png', 'https://inivrex.github.io/Files/HoverEffectWithScale.png', 'https://inivrex.github.io/Files/LoadingEffect.png', 'https://inivrex.github.io/Files/LoadingEffect2.png', 'https://inivrex.github.io/Files/LoadingEffect3.png', 'https://inivrex.github.io/Files/ModernButtonSwitchAnimation.png', 'https://inivrex.github.io/Files/MovingFanAnimation.png', 'https://inivrex.github.io/Files/PendulumEffectLoading.png', 'https://inivrex.github.io/Files/SignalCatchingAnimation.png', 'https://inivrex.github.io/Files/SlideButton.png', 'https://inivrex.github.io/Files/ThreeBallLoadingAnimation.png', 'https://inivrex.github.io/Files/WaterDrop.png'];

for (let i = 0; i < ImgOfProWeb.length; i++) {
    ImgOfProWeb[i].setAttribute('src', ImgWebProLinks[i]);
}


// Battery Charging Border Moving Box, Circular Motion Loading Effect, Contact Us Form, Excel Style, Filling Color Effects, Flying Box Effect, Hover Button Effect Border Move, 

const CardswebProLinks = [
    'https://inivrex.github.io/projects/Battery%20Charging.html',
    'https://inivrex.github.io/projects/Border%20Moving%20Box.html',
    'https://inivrex.github.io/projects/Circular%20Motion%20Loading%20Effect.html',
    'https://inivrex.github.io/projects/Contact%20Us%20Form.html',
    'https://inivrex.github.io/projects/Excel%20Style.html',
    'https://inivrex.github.io/projects/Filling%20Color%20Effects.html',
    'https://inivrex.github.io/projects/Flying%20Box%20Effect.html',
    'https://inivrex.github.io/projects/Hover%20Button%20Effect%20Border%20Move.html',
    'https://inivrex.github.io/projects/Hover%20Effect%20With%20Scale.html',
    'https://inivrex.github.io/projects/Loading%20Effect%201.html',
    'https://inivrex.github.io/projects/Loading%20Effect%202.html',
    'https://inivrex.github.io/projects/Loading%20Effect%203.html',
    'https://inivrex.github.io/projects/Modern%20Button%20Switch%20Animation.html',
    'https://inivrex.github.io/projects/Moving%20Fan%20Animation.html',
    'https://inivrex.github.io/projects/Pendulum%20Effect%20Loading.html',
    'https://inivrex.github.io/projects/Signal%20Receiving%20Animation.html',
    'https://inivrex.github.io/projects/Slide%20Button.html',
    'https://inivrex.github.io/projects/Three%20Ball%20Loading%20Animation.html',
    'https://inivrex.github.io/projects/Water%20Drop.html'
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


// Accept Window For New User 
document.addEventListener("DOMContentLoaded", function () {
    const termWindow = document.getElementById('Acceptterm');
    const agreeBtn = termWindow.querySelector('.agreementBtns:nth-child(2)');
    const disagreeBtn = termWindow.querySelector('.agreementBtns:nth-child(1)');

    function showTermsWindow() {
        termWindow.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }

    // Check if the user has already agreed
    if (localStorage.getItem('agreedToTerms') === 'true') {
        termWindow.style.display = 'none';
        document.body.classList.remove('no-scroll');
    } else {
        // Delay showing the terms window by 10 seconds
        setTimeout(showTermsWindow, 2000);
    }

    // When the Agree button is clicked
    agreeBtn.addEventListener('click', function () {
        localStorage.setItem('agreedToTerms', 'true');
        termWindow.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });

    // When the Disagree button is clicked
    disagreeBtn.addEventListener('click', function () {
        localStorage.removeItem('agreedToTerms');
        document.body.innerHTML = ''; // Clear the entire page content
        alert("You must agree to the terms to use our website.");
    });
});
