const menuItems = document.querySelectorAll('.menu-content a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
}

function scrollToPosition(to) {

    smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
};

$("div[class='card']").click(function () {
    $(".content").toggleClass("content-active");
    $(".arrow").toggleClass("arrow-active");
    $(".card").toggleClass("card-active");
    $(".img").toggleClass("img-active");

});

$("div[class='card2']").click(function () {
    $(".content2").toggleClass("content-active");
    $(".arrow2").toggleClass("arrow-active");
    $(".card2").toggleClass("card-active");
    $(".img2").toggleClass("img-active");
});

var cont = 1;

document.querySelector("div[class='card']").addEventListener("click", () => {

    if (cont > 2) {

        cont = 2;
        document.querySelector("div[class='card-container2']").style.display = "none";
        document.querySelector("div[class='slider-container']").style.display = "block";
        document.querySelector("div[class='slider-container']").innerHTML = `<div class="slides">

                                                                            <input type="radio" name="slide" id="slide1">
                                                                            <input type="radio" name="slide" id="slide2">
                                                                            <input type="radio" name="slide" id="slide3">
                                                                            <input type="radio" name="slide" id="slide4">

                                                                            <div class="slide primary">
                                                                                <img src="images/introduçãoCajuiNotification.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <video autoplay loop muted>
                                                                                    <source src="images/video1353872091.mp4" type="video/mp4">
                                                                                    Desculpe, seu navegador não suporta vídeos HTML5. 
                                                                                </video>
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap1.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap5.png" alt="">
                                                                            </div>

                                                                            <div class="manual-navigation">
                                                                                <label for="slide1" class="manual-btn manual-btn1"></label>
                                                                                <label for="slide2" class="manual-btn manual-btn2"></label>
                                                                                <label for="slide3" class="manual-btn manual-btn3"></label>
                                                                                <label for="slide4" class="manual-btn manual-btn4"></label>
                                                                            </div>
                                                                        </div>`;

    } else if (cont === 1) {

        document.querySelector("div[class='card-container2']").style.display = "none";
        document.querySelector("div[class='slider-container']").style.display = "block";
        document.querySelector("div[class='slider-container']").innerHTML = `<div class="slides">

                                                                            <input type="radio" name="slide" id="slide1">
                                                                            <input type="radio" name="slide" id="slide2">
                                                                            <input type="radio" name="slide" id="slide3">
                                                                            <input type="radio" name="slide" id="slide4">

                                                                            <div class="slide primary">
                                                                                <img src="images/introduçãoCajuiNotification.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <video autoplay loop muted>
                                                                                    <source src="images/video1353872091.mp4" type="video/mp4">
                                                                                    Desculpe, seu navegador não suporta vídeos HTML5. 
                                                                                </video>
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap1.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap5.png" alt="">
                                                                            </div>

                                                                            <div class="manual-navigation">
                                                                                <label for="slide1" class="manual-btn manual-btn1"></label>
                                                                                <label for="slide2" class="manual-btn manual-btn2"></label>
                                                                                <label for="slide3" class="manual-btn manual-btn3"></label>
                                                                                <label for="slide4" class="manual-btn manual-btn4"></label>
                                                                            </div>
                                                                        </div>`;
        cont++;

    } else if (cont === 2) {

        document.querySelector("div[class='card-container2']").style.display = "flex";
        document.querySelector("div[class='slider-container']").innerHTML = '';
        document.querySelector("div[class='slider-container']").style.display = "none";
        cont++;
    }
})

document.querySelector("div[class='card2']").addEventListener("click", () => {

    if (cont > 2) {

        cont = 2;
        document.querySelector("div[class='card-container']").style.display = "none";
        document.querySelector("div[class='slider-container']").style.display = "block";
        document.querySelector("div[class='slider-container']").innerHTML = `<div class="slides">

                                                                            <input type="radio" name="slide" id="slide1">
                                                                            <input type="radio" name="slide" id="slide2">
                                                                            <input type="radio" name="slide" id="slide3">
                                                                            <input type="radio" name="slide" id="slide4">

                                                                            <div class="slide primary">
                                                                                <img src="images/bitmap4.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <video autoplay loop muted>
                                                                                    <source src="images/video1759040747.mp4" type="video/mp4">
                                                                                    Desculpe, seu navegador não suporta vídeos HTML5. 
                                                                                </video>
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap3.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap6.png" alt="">
                                                                            </div>

                                                                            <div class="manual-navigation">
                                                                                <label for="slide1" class="manual-btn manual-btn1"></label>
                                                                                <label for="slide2" class="manual-btn manual-btn2"></label>
                                                                                <label for="slide3" class="manual-btn manual-btn3"></label>
                                                                                <label for="slide4" class="manual-btn manual-btn4"></label>
                                                                            </div>
                                                                        </div>`;

    } else if (cont === 1) {

        document.querySelector("div[class='card-container']").style.display = "none";
        document.querySelector("div[class='slider-container']").style.display = "block";
        document.querySelector("div[class='slider-container']").innerHTML = `<div class="slides">

                                                                            <input type="radio" name="slide" id="slide1">
                                                                            <input type="radio" name="slide" id="slide2">
                                                                            <input type="radio" name="slide" id="slide3">
                                                                            <input type="radio" name="slide" id="slide4">

                                                                            <div class="slide primary">
                                                                                <img src="images/bitmap4.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <video autoplay loop muted>
                                                                                    <source src="images/video1759040747.mp4" type="video/mp4">
                                                                                    Desculpe, seu navegador não suporta vídeos HTML5. 
                                                                                </video>
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap3.png" alt="">
                                                                            </div>

                                                                            <div class="slide">
                                                                                <img src="images/bitmap6.png" alt="">
                                                                            </div>

                                                                            <div class="manual-navigation">
                                                                                <label for="slide1" class="manual-btn manual-btn1"></label>
                                                                                <label for="slide2" class="manual-btn manual-btn2"></label>
                                                                                <label for="slide3" class="manual-btn manual-btn3"></label>
                                                                                <label for="slide4" class="manual-btn manual-btn4"></label>
                                                                            </div>
                                                                        </div>`;
        cont++;

    } else if (cont === 2) {

        document.querySelector("div[class='card-container']").style.display = "flex";
        document.querySelector("div[class='slider-container']").innerHTML = '';
        document.querySelector("div[class='slider-container']").style.display = "none";
        cont++;
    }
})

document.querySelector("div[class='contact contact-email']").addEventListener("click", () => {

    const textToCopy = 'joseeduardoandrademuniz@gmail.com';

    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);

    tempElement.select();
    document.execCommand('copy');

    document.body.removeChild(tempElement);

    const balloon = document.getElementById("success-balloon");
    balloon.style.display = "block";

    setTimeout(function () {
        balloon.style.display = "none";
        window.location.h
        window.open("https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=new");
    }, 1000);

})