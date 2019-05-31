$().ready(function() {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    })

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
    
});
let  details = document.querySelector('#first');
let moreText = document.querySelector('#more');
let  dots = document.querySelector('#dots');

function detailsView1(){
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        details.innerHTML = "View details..."; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        details.innerHTML = "View less"; 
        moreText.style.display = "inline";
    }
}

let details2 = document.querySelector('#second');
let moreText2 = document.querySelector('#more2');
let  dots2 = document.querySelector('#dots2');

function detailsView2(){
    
    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        details2.innerHTML = "View details..."; 
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        details2.innerHTML = "View less"; 
        moreText2.style.display = "inline";
    }
}

let details3 = document.querySelector('#third');
let moreText3 = document.querySelector('#more3');
let  dots3 = document.querySelector('#dots3');

function detailsView3(){
    
    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        details3.innerHTML = "View details..."; 
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        details3.innerHTML = "View less"; 
        moreText3.style.display = "inline";
    }
}


let details4 = document.querySelector('#fourth');
let moreText4 = document.querySelector('#more4');
let  dots4 = document.querySelector('#dots4');

function detailsView4(){
    
    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        details4.innerHTML = "View details..."; 
        moreText4.style.display = "none";
    } else {
        dots4.style.display = "none";
        details4.innerHTML = "View less"; 
        moreText4.style.display = "inline";
    }
}


details.addEventListener('click', detailsView1);
details2.addEventListener('click', detailsView2);
details3.addEventListener('click', detailsView3);
details4.addEventListener('click', detailsView4);

