
function guy(name, strength, item)
{
    this.playerName = name;
    this.playerStrength = strength;
    this.playerItem = item;
    this.collectItem = function(newItem)
    {
        this.playerItem = newItem;
    }
}

function weapon(type, strength){
    this.itemType = type;
    this.itemStrength = strength;
}

const player1 = new guy("Tim", 70, "");
console.log(player1);

const newItem = new weapon("Dagger", 60);

player1.collectItem(newItem);

console.log(player1.playerName);
console.log(player1.playerItem);


const player2 = new guy("Sr. Jim", 30, "");

console.log(player2);
