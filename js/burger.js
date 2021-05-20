const menuElem = document.querySelector('.menu');
const humElem = document.querySelector('.humburger-menu');




const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humElem.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {
    menuElem.classList.remove('menu-active');
    humElem.classList.remove('humburger-menu-active');
};

humElem.addEventListener('click',toggleMenu);

menuElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('menu-list__link')) {
         closeMenu()
    }
})

