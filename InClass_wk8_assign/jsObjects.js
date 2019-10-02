

//************************************************ */

const aurora = {
    name: "aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        var aString = `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
        return aString;
    }
};


aurora.health -= 20;
aurora.strength +=50;
aurora.xp += 15;

console.log(aurora.describe());


//************************************** */
 const dog = {
     name: "Spike",
     species: "Lab",
     size: 30,
     bark: "Loud"
 }

 console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);

 console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);


 //********************************************* */

 const account = {
     name: "Alex",
     balance: 0,
     credit(amount){
        account.balance += amount; 
     },
     describe(){
         var myString = `Owner: ${this.name}, balance ${this.balance}`;
         return myString;
     }
 };

 console.log(account.describe());
 account.credit(250);
 account.credit(-80);
 console.log(account.describe());




