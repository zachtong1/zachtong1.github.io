function errorMessage() {
    alert("Page does not exist at the moment.");
}

function fadeInAnimation() {
    var timeDelay = 400; /*millisec*/
    for (let i=1; i<=f_number; i++) {
        setTimeout(function() {
            var f_target_element = document.querySelector(".f"+i);
            f_target_element.classList.replace("not-visible","fade-in");
        },i*timeDelay);
    }
}

function toggleAutoScroll() {
    let container = document.querySelector(".media_carousel");
    if (autoScrolling==1) {
        autoScrolling=0;
        container.classList.replace("autoScroll","noautoScroll");
    }
    else {
        autoScrolling=1;
        container.classList.replace("noautoScroll","autoScroll");
    }
}


function autoScroll() {
    let container = document.querySelector(".media_carousel");
    if (autoScrolling==1) {
        container.scrollLeft += 1;
    }
    if (autoScrolling==1 && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;}
}

setInterval(autoScroll, 50);