const dragon = {
    pic: "images/amgy-dragon.png",
    picAlt: "a big angry dragon",
    name: "Amgy Dragon",
    hp: 100,
    level: 1,
    attack: function (strength){
        this.hp-=strength;
    },
    levelUp: function(){
        this.level++;
    }
};

const charPic = document.querySelector('#image');
const charName = document.querySelector('#name');
const charHP = document.querySelector('#hp');
const cahrLvl = document.querySelector('#char-lvl');
const lvlBtn = document.querySelector('#lvl-up');
const card = document.querySelector('#card');

function init(){
card.innerHTML= `        
<div id="char-card">
<img id="image" src=${dragon.pic} alt=${dragon.picAlt}>
<h1 id="name">${dragon.name}</h1>
<h2 id="hp">HP: ${dragon.hp}</h2>
</div>
<div id="user-info">
<h2 id="char-lvl">Level: ${dragon.level}</h2>
</div>
<div id="buttons">
<button id="atk">Attack</button>
<button id="lvl-up">Lvl Up</button></div>`
}

init();
document.querySelector("#atk").addEventListener("click", dragon.attack(20), init());
lvlBtn.addEventListener("click", function(){
    dragon.levelUp();
    init();
});