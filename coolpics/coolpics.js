const pics = document.querySelector('#pic-grid');
const modal = document.querySelector('dialog');
const modalPic = modal.querySelector('img');
const closer = modal.querySelector('.close');
const button = document.querySelector('.smol');
const menu = document.querySelector('nav');

pics.addEventListener('click', openPic);

button.addEventListener('click', swap);

function swap() {
    menu.classList.toggle('hide');
    if (button.innerHTML == 'Menu'){
        button.innerHTML = 'Close';
    }
    else {
        button.innerHTML = 'Menu';
    }
}


function openPic(e) {
    const pic = e.target;
    const sauce = pic.getAttribute('src');
    const alt = pic.getAttribute('alt');
    const full = sauce.replace('sm', 'full')

    modalPic.src = full;
    modalPic.alt = alt;

    modal.showModal();
}

closer.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) =>{
    if (event.target === modal) {
        modal.close();
    }
});