/*==================== SCROLL REVEAL SECTION ====================*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener('scroll', reveal)


//faq wrapper
const rdbtns = document.querySelectorAll('[type="radio"]')

rdbtns.forEach(rdbtn => {
    rdbtn.addEventListener('click', uncheck)
});

function uncheck() {
    if (this.classList.contains('open')) {
        this.checked = false
        this.classList.remove('open')
    } else {
        rdbtns.forEach(rdbtn => {
            rdbtn.classList.remove('open')
        });
        this.classList.add('open')
    }
}


function menuToggle() {
    document.getElementById("myNav").style.width == "100%" ?
        document.getElementById("myNav").style.width = "0%" :
        document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}