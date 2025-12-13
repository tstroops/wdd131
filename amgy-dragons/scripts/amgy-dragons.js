/*used character card javascript file as template*/

/*list of enemy objects to populate card*/
const enemies = [
    {
        name:"Amgy Dragon",
        imgSrc:"images/rsz_amgy-dragon.png",
        imgAlt:"A big angry dragon.",
        maxHP:20,
        hp:20,
        defense: 2,
        resistance: 1,
        regen:0
    },
    {
        name:"Amgy Drake",
        imgSrc:"images/rsz_amgy-drake.png",
        imgAlt: "a giant angry lizard",
        maxHP:50,
        hp:50,
        defense:8,
        resistance:3,
        regen:0
    },
    {
        name:"Amgy Wyrm",
        imgSrc:"images/rsz_amgy-wyrm.png",
        imgAlt:"a giant angry snake",
        maxHP:20,
        hp:25,
        defense:0,
        resistance: 5,
        regen:5
    },
    {
        name:"Amgy Drakon",
        imgSrc:"images/rsz_amgy-drakon.png",
        imgAlt: "an angry red dragon",
        maxHP:20,
        hp:40,
        defense:5,
        resistance:2,
        regen:0
    }
]

/*item selectors*/

/*buttons*/
let attack=document.querySelector("#atk");
let levelUp=document.querySelector("#lvl-up");
let magic=document.querySelector("#magic");

/*divs*/
let bigCard=document.querySelector("#stat-card");
let enemyCard=document.querySelector("#enemy-card");
let userStats=document.querySelector("#user-stats");

/*other variables*/
let level=0;
let str=10;
let int=10;
let xp=0;
let randIndex=Math.floor(Math.random()*enemies.length);

function randomize(){
    randIndex=Math.floor(Math.random()*enemies.length);
}

function scale(enemy){
    enemy.maxHP+=2;
    enemy.hp=enemy.maxHP;
}

/*initialize function */
function init(randIndex){
    let amgy=enemies[randIndex];

    //enemy initialization
    enemyCard.innerHTML=`
    <h2 id="name">${amgy.name}</h2>
    <img id="image" src=${amgy.imgSrc} alt=${amgy.imgAlt}">
    <h3>HP: ${amgy.hp} | Regeneration: ${amgy.regen}</h3>
    <h3>Defense: ${amgy.defense} | Resistance: ${amgy.resistance}</h3>
    `;

    userStats.innerHTML=`
    <h3>Level: ${level} | XP: ${xp}</h3>
    <h3>Strength: ${str} | Intelligence${int}</h3>
    `;
};


//level up function
levelUp.addEventListener("click", function(){
    if (xp >= 100){
        level++;
        xp-=100;
        enemies.forEach(scale);
        if(level%2 == 0){
            int++;
        }
        else{
            str++;
        }
    }
    init(randIndex);
})

//arrow function was ai to help with bug fix
//I don't know if there's a more effective way
attack.addEventListener("click", ()=>damageCalc(false));
magic.addEventListener("click", ()=>damageCalc(true));

function damageCalc(isMagic){
    if(isMagic){
        console.log("magic attack");
        let damage = int-enemies[randIndex].resistance-enemies[randIndex].regen;
        enemies[randIndex].hp-=damage;
    }
    else{
        console.log("attack");
        let damage = str - enemies[randIndex].defense - enemies[randIndex].regen;
        enemies[randIndex].hp -= damage;
    }
    if (enemies[randIndex].hp<=0){
        enemies[randIndex].hp=enemies[randIndex].maxHP;
        xp+=100;
        randomize();
        init(randIndex);
    }
    init(randIndex);
}

init(randIndex);
