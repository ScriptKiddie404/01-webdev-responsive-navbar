const menuIcon = document.querySelector('.navbar__menu-icon');
menuIcon.addEventListener('click', () => {

    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars')
    }

    const list = document.querySelector('.navbar__list');
    list.classList.toggle('active');
});
