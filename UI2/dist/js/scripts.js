window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



$('#startMars').on('click',function(){ 
    var audio = document.getElementById("listenMars");
    audio.play(); 
});

$('#startVenus').on('click',function(){ 
    var audio = document.getElementById("listenVenus");
    audio.play(); 
});

$('#startJupiter').on('click',function(){ 
    var audio = document.getElementById("listenJupiter");
    audio.play(); 
});

$('#startSaturn').on('click',function(){ 
    var audio = document.getElementById("listenSaturn");
    audio.play(); 
});

$('#startEarth').on('click',function(){ 
    var audio = document.getElementById("listenEarth");
    audio.play(); 
});

$('#startUranus').on('click',function(){ 
    var audio = document.getElementById("listenUranus");
    audio.play(); 
});

$('#startNeptune').on('click',function(){ 
    var audio = document.getElementById("listenNeptune");
    audio.play(); 
});

$('#startMercury').on('click',function(){ 
    var audio = document.getElementById("listenMercury");
    audio.play(); 
});

$('#startSun').on('click',function(){ 
    var audio = document.getElementById("listenSun");
    audio.play(); 
});
