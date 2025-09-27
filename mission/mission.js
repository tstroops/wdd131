const image = document.querySelector('img');
const mode = document.querySelector('#dark-mode');
const content = document.querySelector('body');
const title = document.querySelector('#uni-title');

mode.addEventListener('change', changeMode);
function changeMode(){
    let selection = mode.value;
    if (selection === 'light') {
        image.src = "byui-logo.png";
        document.body.style.backgroundColor = "white";
        content.style.color = "black";
        title.style.color = "blue";
    } else if (selection === 'dark') {
        image.src = "byui-logo-white.png";
        document.body.style.backgroundColor = "black";
        content.style.color = "white";
    }
}