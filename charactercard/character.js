const dragon = {
    pic: "images/amgy-dragon.png",
    picAlt: "a big angry dragon",
    name: "Amgy Dragon",
    hp: 100,
    level: 1,
    attack: function (strength){
        if (this.hp<=0){
            this.hp="I'm dead :(";
        }
        else{this.hp -=strength;};
    },
    levelUp: function(){
        this.level++;
        console.log(this.level);
    }
};

const cardInfo = document.querySelector("#char-card");
const userInfo = document.querySelector("#user-info");
const lvlBtn = document.querySelector('#lvl-up');

function init(){
cardInfo.innerHTML= `        
<img id="image" src=${dragon.pic} alt=${dragon.picAlt}>
<h1 id="name">${dragon.name}</h1>
<h2 id="hp">HP: ${dragon.hp}</h2>`
userInfo.innerHTML=`
<h2 id="char-lvl">Level: ${dragon.level}</h2>
`
}

init();
document.querySelector("#atk").addEventListener("click",function(){
    dragon.attack(10);
    init();
});
lvlBtn.addEventListener("click", function(){
    dragon.levelUp();
    init();
});