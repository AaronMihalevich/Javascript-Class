// Aaron Mihalevich
// CIS-131 Shopping Cart Assign
// 10/29/19


var app = new Vue ({
    el: "#app",
    data:
    {
        items:[
            {src: "shaunDead.jpg", title: "Shaun of the Dead", desc: "A man attempting to gain focus in his life in the midst of an apocalyptic uprising of zombies.", stock: 4, price: 14.99, ordered: 0, total: 0},
            {src: "HotFuzz.jpg", title: "Hot Fuzz", desc: "Police officers who investigate a series of mysterious deaths in a small English village.", stock: 6, price: 17.99, ordered: 0},
            {src: "worldsEnd.jpg", title: "The Worlds End", desc: "Reattempting an epic pub crawl during an alien occupation of their home town.", stock: 3, price: 19.99, ordered: 0}
        ],
        cartItem: 0,
        theTotal: 0

    },
    methods:
    {
        order(theItem)
        {
            if((theItem.stock == 0) || (this.cartItem < 0))
            {
                alert("Sorry. This title is out of stock")
            }
            else{
                theItem.ordered++;
                theItem.stock--;
                this.cartItem++;

                theItem.total = (theItem.ordered * theItem.price).toFixed(2);

                var sTotal = this.items[0].price * this.items[0].ordered;
                var hTotal = this.items[1].price * this.items[1].ordered;
                var wTotal = this.items[2].price * this.items[2].ordered;
                this.theTotal = (sTotal + hTotal + wTotal).toFixed(2);
            }
            
        },

        removeOne(rmItem)
        {
            rmItem.ordered--;
            rmItem.stock++;
            this.cartItem--;

            rmItem.total = (rmItem.ordered * rmItem.price).toFixed(2);

            var sTotal = this.items[0].price * this.items[0].ordered;
            var hTotal = this.items[1].price * this.items[1].ordered;
            var wTotal = this.items[2].price * this.items[2].ordered;
            this.theTotal = (sTotal + hTotal + wTotal).toFixed(2);
        },

        removeAll(rmAll)
        {
            rmAll.stock += rmAll.ordered;
            rmAll.ordered = 0;
            

            rmAll.total = (rmAll.ordered * rmAll.price).toFixed(2);

            var sTotal = this.items[0].price * this.items[0].ordered;
            var hTotal = this.items[1].price * this.items[1].ordered;
            var wTotal = this.items[2].price * this.items[2].ordered;
            this.theTotal = (sTotal + hTotal + wTotal).toFixed(2);
        }

    }
})