console.log('Learning Objects');

let company = 'Nike';
let itemName = 'Running Shoes';
let price = 2500;
let avgRating = 4.5;
let numberOfRatings = 38;

console.log(price);

let product = {
  company: 'Nike',
  'item-name': 'Running Shoes',
  price: 2500,
  avgRating: 4.5,
  numberOfRatings: 38,
  rating: {
    fiveStar: 10,
    fourStar: 5,
    threeStar: 3,
    twoStar: 12,
    oneStar: 8,
  }
};

console.log(product.rating.fiveStar);

console.log('dot notation:', product.company);
console.log('dot notation:', product['item-name']);
let key = 'avgRating';
console.log('bracket notation', product[key]);


console.log(product);
console.log(typeof product);

// Modifying the object
product.discount = 50;
product.price = 50;
console.log('after modifying', product);
delete product.numberOfRatings;
console.log('after delete', product);

