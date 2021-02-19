
const select = document.querySelectorAll('.select');
const contain = document.querySelectorAll('.contain');
const arrows = document.querySelectorAll('.arrow');
const collapse = document.querySelectorAll('.collapse');

for (let i = 0; i < contain.length; i++) {
    contain[i].addEventListener('click', e => {

        if (collapse[i].style.display === 'block') {
            collapse[i].style.display = 'none';
        } else {
            collapse[i].style.display = 'block';
        }

        if (arrows[i].style.transform) {
            arrows[i].style.transform = null;
        } else {
            arrows[i].style.transform = 'rotate(180deg)';
        }

        select[i].classList.toggle('bold');
    })
};