function order(item, qty, price)
{
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.displayOrder = function()
    {
        var subtotal = this.orderQty * this.orderPrice;
        return `${subtotal}`;
    }
}


firstOrder = new order("Tape", 2, 5);
secondOrder = new order("Glue", 4, 15);

var aryOrders = [firstOrder, secondOrder]
console.log(aryOrders);

for (var i = 0; i < aryOrders.length; i++)
{
    console.log(aryOrders[i].displayOrder());
}

document.querySelector('h4').addEventListener('click', function()
{
    var myList = ""

    for (var i=0; i < aryOrders.length; i++)
    {
        myList += `<li id=${i}> ${aryOrders[i].orderItem} </li>`
    }

    document.getElementById('displayOrders').innerHTML = myList;
})

// e = user defined variable
document.getElementById('displayOrders').addEventListener('click', function(e)
{
    var objectID = e.target.id;
    document.querySelector('h3').innerHTML = aryOrders[objectID]
    .displayOrder();
})
