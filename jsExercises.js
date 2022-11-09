// These are sample answers for workshop 2: JavaScript & Node.js

/*
In your group, write a function that takes in a list of prices and a discount rate.
Return a list of prices with the discount rate applied!
*/
let prices = [100, 200, 300];
function discountPrices(prices, discountRate){
    for(let i = 0; i < prices.length; i++){
        prices[i] *= discountRate;
    }

    return prices;
}

console.log(discountPrices(prices, 0.5));


/*
In your group, create an object related to our finance tracker.
Include the name, cost, type, location, category, and one attribute of your choice.
Be prepared to share!
*/

const purchase = {
    name: "Hydroflask",
    cost: 50,
    color: "Olive",
    stickers: false,
    stores: ["UCSD Bookstore", "REI", "Amazon", "Target"]
};

/*
In your group, write an arrow function that takes in your name and prints out your favorite class.
*/
  
const favClass = (name) => {return "I'm " + name + " and my favorite class is CSE 11."}

console.log(favClass("Nikhil"));