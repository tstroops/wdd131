/*used character card javascript file as template*/

/*list of enemy objects to populate card*/
const enemies = [
    {
        name:"Amgy Dragon",
        hp:200,
        defense: 20,
        resistance: 10,
        regen:0
    },
    {
        name:"Amgy Drake",
        hp:500,
        defense:80,
        resistance:25,
        regen:0
    },
    {
        name:"Amgy Wyrm",
        hp:250,
        defense:50,
        resistance: 50,
        regen:50
    },
    {
        name:"Amgy Drakon",
        hp:400,
        defense:50,
        resistance:20,
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
let intelligence=10;
let xp=0;

/*initialize function */
function init(){
    let index=Math.floor(Math.random()*enemies.length)
    let amgy=enemies[index];

    //enemy initialization
    enemyCard.innerHTML=`
    <img id="image">
    <h1 id="name">${amgy.name}</h1>
    <h2 id="hp">HP: ${amgy.hp}</h2>
    <h2 id="def">Defense: ${amgy.defense}</h2>
    <h2 id="res">Resistance: ${amgy.resistance}</h2>
    <h2 id="regen">Regeneration: ${amgy.regen}</h2>
    `;

    userStats.innerHTML=`
    <h2 id="char-lvl">Level: ${level}</h2>
    <h2 id="xp">XP: ${0}</h2>
    <h2 id="char-str">Strength: ${str}</h2>
    <h2 id="char-int">Intelligence: ${intelligence}</h2>
    `;
};
init();
