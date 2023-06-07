const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav__btn');
const navBtnImg = document.querySelector('#nav__btn__img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.scr = "./img1/burgerclose.svg";
    } else {
        navBtnImg.scr = "./img1/burgeropen.svg";
    }
}