const dog = {
    name: "Grandpa",
    breed: "Lab",
    birthdate: new Date(),

    speak(sound){
        return "I like to " + sound
    },

    setDate(birthday){
        dog.birthdate = new Date(birthday);
        //OR -- this.birthdate = new Date(birthday);
    }
}
// dog.setDate("2017-1-02")
// aryMonth = ["Jan", "Feb", "Mar"]
// console.log(dog.birthdate)
// console.log(aryMonth[dog.birthdate.getMonth()])

//console.log(dog.speak("woof woof"));
//dog.name = "Something else"
//console.log(dog.name)

// d = new Date("2018-01-01");
// console.log(d);




// ******************** CONSTRUCTOR METHODS *******************
function order(item, qty, price, purchaseDate)
{
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.orderDate = new Date(purchaseDate);
    this.displayOrder = function()
    {
        var subTotal = this.orderQty * this.orderPrice;
        return `${this.orderItem} and ${subTotal}`;
    }
    this.changeQty = function(qty)
    {
        this.orderQty = qty;
    }
}

const order1 = new order("DVD", 1, 10.99, Date.now());
console.log(order1.displayOrder());

order1.changeQty(5);
console.log(order1.displayOrder());

//create second order
const order2 = new order("Vinyl Record", 5, 29.99, Date.now());
console.log(order2.displayOrder());
order2.changeQty(1);
console.log(order2.displayOrder());

//create third order
const order3 = new order(dog, 1, 100, Date.now());
console.log(order3);
console.log(order3.orderItem.name)
console.log(order3.orderItem.breed)

// for (items in order1)
// {
//     console.log(order1[items])
// }
// console.log(order1);
// console.log(order1.orderItem);






