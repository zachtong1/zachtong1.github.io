var caterpied = 0;
var clicked = 0;
var picNum = 0;
var exit = 0;

function caterpie() {
    event.preventDefault();
    if (clicked==0 && caterpied==0) {
        var header_image = document.querySelector(".header_image");
        header_image.src = "caterpie.png";
        header_image.classList.remove("clickable");
        var audio = new Audio("sounds/caterpie_noise.mp3");
        audio.play();
        caterpied = 1;
    }
}

function danceClick() {
    var audio = document.getElementById("danceMusic");
    if (clicked==0 && caterpied==0) {
        clicked=1;
        audio.play();
    }
    else {
        clicked=0;
        audio.pause();
    }
}

function dance() {
    exit=0;
    if (clicked==1) {
        var header_image = document.querySelector(".header_image");
        
        if (picNum==0 && exit==0) {
            picNum=1;
            exit=1;
            header_image.src = "tall1.png";
            var hello_text = document.querySelector(".mNote1");
            hello_text.classList.remove("invisible_hi");
            setTimeout(function() {
                hello_text.classList.add("invisible_hi");
            }, 70);
        }
        if (picNum==1 && exit==0) {
            picNum=2;
            exit=1;
            header_image.src = "tall.png";
        }
        if (picNum==2 && exit==0) {
            picNum=3;
            exit=1;
            header_image.src = "tall2.png";
            var hello_text = document.querySelector(".mNote2");
            hello_text.classList.remove("invisible_hi");
            setTimeout(function() {
                hello_text.classList.add("invisible_hi");
            }, 70);
        }
        if (picNum==3 && exit==0) {
            picNum=0;
            exit=1;
            header_image.src = "tall.png";
        }

    }

    
}

setInterval(dance, 150);




