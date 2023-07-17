const menuItems=document.querySelectorAll(".menu-content a[href^=\"#\"]");menuItems.forEach(a=>{a.addEventListener("click",scrollToIdOnClick)});function getScrollTopByHref(a){const b=a.getAttribute("href");return document.querySelector(b).offsetTop}function scrollToIdOnClick(a){a.preventDefault();const b=getScrollTopByHref(a.target)-80;scrollToPosition(b)}function scrollToPosition(a){smoothScrollTo(0,a)}function smoothScrollTo(a,b,c){const d=window.scrollX||window.pageXOffset,e=window.scrollY||window.pageYOffset,f=new Date().getTime();c="undefined"==typeof c?400:c;const g=(a,b,c,d)=>1>(a/=d/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b,h=setInterval(()=>{const i=new Date().getTime()-f,j=g(i,d,a-d,c),k=g(i,e,b-e,c);i>=c&&clearInterval(h),window.scroll(j,k)},1e3/60)}$("div[class='card']").click(function(){$(".content").toggleClass("content-active"),$(".arrow").toggleClass("arrow-active"),$(".card").toggleClass("card-active"),$(".img").toggleClass("img-active")}),$("div[class='card2']").click(function(){$(".content2").toggleClass("content-active"),$(".arrow2").toggleClass("arrow-active"),$(".card2").toggleClass("card-active"),$(".img2").toggleClass("img-active")});var cont=1;document.querySelector("div[class='card']").addEventListener("click",()=>{2<cont?(cont=2,document.querySelector("div[class='card-container2']").style.display="none",document.querySelector("div[class='slider-container']").style.display="block",document.querySelector("div[class='slider-container']").innerHTML=`<div class="slides">

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
                                                                        </div>`):1===cont?(document.querySelector("div[class='card-container2']").style.display="none",document.querySelector("div[class='slider-container']").style.display="block",document.querySelector("div[class='slider-container']").innerHTML=`<div class="slides">

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
                                                                        </div>`,cont++):2==cont&&(document.querySelector("div[class='card-container2']").style.display="flex",document.querySelector("div[class='slider-container']").innerHTML="",document.querySelector("div[class='slider-container']").style.display="none",cont++)}),document.querySelector("div[class='card2']").addEventListener("click",()=>{2<cont?(cont=2,document.querySelector("div[class='card-container']").style.display="none",document.querySelector("div[class='slider-container']").style.display="block",document.querySelector("div[class='slider-container']").innerHTML=`<div class="slides">

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
                                                                        </div>`):1===cont?(document.querySelector("div[class='card-container']").style.display="none",document.querySelector("div[class='slider-container']").style.display="block",document.querySelector("div[class='slider-container']").innerHTML=`<div class="slides">

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
                                                                        </div>`,cont++):2==cont&&(document.querySelector("div[class='card-container']").style.display="flex",document.querySelector("div[class='slider-container']").innerHTML="",document.querySelector("div[class='slider-container']").style.display="none",cont++)}),document.querySelector("div[class='contact contact-email']").addEventListener("click",()=>{const a=document.createElement("textarea");a.value="joseeduardoandrademuniz@gmail.com",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a);const b=document.getElementById("success-balloon");b.style.display="block",setTimeout(function(){b.style.display="none",window.location.h,window.open("https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=new")},1e3)});