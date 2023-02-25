function errorMessage() {
    alert("Page does not exist at the moment.");
}

var clickedAmpharosCount = 0;
function clickedAmpharos() {

    if (clickedAmpharosCount<10) {
        clickedAmpharosCount+=1;
        var audio = new Audio("ampharos_noise.mp3");
        audio.play();
        var hello_text = document.querySelector(".hello_text");
        hello_text.classList.remove("invisible_hi");
        setTimeout(function() {
            hello_text.classList.add("invisible_hi");
        }, 300);
        const options = ["hi.","hi.","hi.","hi.","hi.","hi.","hi.","hi.","yo.","sup"];
        const randomIndex = Math.floor(Math.random() * options.length);
        const newText = options[randomIndex];
        hello_text.textContent = newText;
    }
    else if (clickedAmpharosCount==10) {
        clickedAmpharosCount+=1;
        var header_image = document.querySelector(".header_image");
        header_image.src = "caterpie.png";
        header_image.classList.remove("clickable");
        var audio = new Audio("caterpie_noise.mp3");
        audio.play();
    }
}

function fadeInAnimation() {
    var timeDelay = 100; /*millisec*/
    for (let i=1; i<=f_number; i++) {
        setTimeout(function() {
            var f_target_element = document.querySelector(".f"+i);
            f_target_element.classList.replace("not-visible","fade-in");
        },i*timeDelay);
    }
}

