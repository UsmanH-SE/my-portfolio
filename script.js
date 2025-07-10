

const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector("#nav-menu");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
   
})

//header section//
const headScr = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        headScr.classList.add('scrolled');
    } else {
        headScr.classList.remove('scrolled');

    }
});

//hero section//

const heading1 = document.querySelector('.hero-content h1');
const heading2 = document.querySelector('.hero-content h2');

const heading1text = heading1.textContent;
const heading2text = heading2.textContent;

heading1.textContent = '';
heading2.textContent = '';

let effect = document.querySelector('h1');
let effect2 = document.querySelector('h2');

function typingtext(element, text, delay = 111, callback = null) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay)
        } else if (callback) {
            callback();

        }
    }
    type()

}
typingtext(effect, heading1text, 100, () => {
    typingtext(effect2, heading2text, 100, () => {
        effect2.style.color = '#4169E1';
    })

})

//form//

let form = document.getElementById('contact-form');
let success = document.getElementById('success-message');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    setTimeout(() => {
        success.style.display = 'block';
        form.reset()
    }, 500);
})