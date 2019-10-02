const pen = {
    type: "ballpoint",
    brand: "bic",
    color: "blue"
};

console.log(pen.type)
console.log(pen.color)
console.log(pen.brand)

pen.color = "red";

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

//dynamically add new properties to an already created object
pen.price = 2.5;
console.log(pen.price)

//************************************************ */

const aurora = {
    name: "aurora",
    health: 150,
    strength: 25,
    describe(){
        var aString = `${this.name} has ${this.health} health points and ${this.strength} as strength`;
        //console.log(`${this.name} has ${this.health} health points and ${this.strength} as strength`);
        return aString;
    }
}

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

aurora.health -= 20;
aurora.strength +=50;

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// function describe(character)
// {
//     console.log(`${character.name} has ${character.health} health points and ${character.strength} strength`);
// }

// describe(aurora);

aurora.describe();
