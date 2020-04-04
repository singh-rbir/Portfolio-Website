$(document).ready(function(){

    /* MAKES THE NAVBAR-TOGGLE ON CLICKING A LINK ***************/
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    /* ***************************************************************************************** */

    /* MAKES THE NAVBAR BRAND APPEAR/DISAPPEAR ON THE NAVBAR AFTER A CERTAIN SCROLL */

    var div = $("#divToShowHide");

    var pos = div.position(); // gets the vertical position

    $(window).scroll(function(){
        var windowpos = $(window).scrollTop();

        //console.log("value of pos.top is: " + pos.top);
        //console.log("value of windowpos is: " + windowpos);

        if(windowpos >= (pos.top + 100)){
            div.addClass("afterScroll");
        }
        else{
            div.removeClass("afterScroll");
        }
    });

    /* ******************************************************************************************** */

    // FOLLOWING CODE IS TO TRIGGER ANIMATIONS WHEN THE SPECIFIC ELEMENT BECOMES
    // VISIBLE ON THE SCREEN ******************************

    var scroll = window.requestAnimationFrame ||
            function(callback){
                window.setTimeout(callback, 1000/60)
            };

    // gets all the elements with that class into an array
    var elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            }
        });

        scroll(loop);
    }
    loop();

    function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
                && rect.bottom >= 0)
                ||
                (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight))
                ||
                (rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
                );
            }


});
