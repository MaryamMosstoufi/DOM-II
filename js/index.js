// Your code goes here

// load
window.addEventListener('load', (event) => {
    setTimeout(() => {
        popUp()
    }, 2000);
});

function popUp() {
    document.querySelector('.modal').classList.remove('hidden')
    document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.width = '100%';
}

// scroll
window.onscroll = function () { stickyNav() };

function stickyNav() {
    if (document.body.scrollTop > 88 || document.documentElement.scrollTop > 88) {
        document.querySelector('.main-navigation').classList.add('sticky-nav');
    } else if (document.body.scrollTop < 88 || document.documentElement.scrollTop < 88) {
        document.querySelector('.main-navigation').classList.remove('sticky-nav');
    }
}

// click
document.querySelector('.modal-close').addEventListener('click', closeModal)
function closeModal() {

    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.querySelector('.modal').classList.add('hidden')
}

// keydown
function closeByEsc(event) {
    if (event.key === 'Escape') {
        closeModal()
    }
}
document.addEventListener('keydown', closeByEsc)

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

// Focus
const subscribeEmail = document.querySelector('input')

subscribeEmail.addEventListener('focusin', (event) => {
    event.target.style.borderColor = '#17A2B8';
});

subscribeEmail.addEventListener('focusout', (event) => {
    event.target.style.borderColor = '#17A2B8';
});


// Mouseover & Mouseout
const modalClose = document.querySelector('.modal-close')
modalClose.addEventListener('mouseover', (event) => {
    event.target.style.color = '#17A2B8';
});
modalClose.addEventListener('mouseout', (event) => {
    event.target.style.color = '#C0C0C0';
});

// Resize
function adjustLogo() {
    if (window.innerWidth < 850 && window.innerWidth > 500) {
        document.querySelector('.logo-heading').style.paddingLeft = '20px'
    } else {
        document.querySelector('.logo-heading').style.paddingLeft = '0'
    }
}

window.onresize = adjustLogo;

// Wheel
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(1, scale), 1.5);

    // Apply scale transform
    modalContent.style.transform = `scale(${scale})`;
}

let scale = 1;
const modalContent = document.querySelector('.content');
modalContent.onwheel = zoom;

// Select
subscribeEmail.addEventListener('select', event => {
    subscribeEmail.style.webkitHighlightColor = '#17A2B8';
    subscribeEmail.style.color = 'white';
})

// Double Click
modalContent.addEventListener('dblclick', event => {
    modalContent.style.transform = `scale(1)`;
})

// Drag / Drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// Stretch : Green Sock
var tl = new TimelineMax();
var box = document.querySelector(".content");

tl.staggerFrom(box, 1, {
    y: -300,
    ease: Bounce.easeOut
}, 0.05)
tl.add("rotate")
tl.staggerFrom(box, 2, {
    rotation: 360,
    ease: Bounce.easeIn
}, 0.05, "rotate")
