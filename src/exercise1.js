const moment = require("moment");

const sortProduct = input => {

 return input
 .filter(produit => moment(produit.dateAdded).year() > 2000)
 .sort(produit => !produit.dateAdded)
 .reduce((acc, produit) => {

   var date = moment(produit.dateAdded);

   acc[produit.name] = [{ name: produit.name, 
                          year: date.year(), 
                          monthOfYear: date.month() + 1, 
                          quantity: produit.quantity 
                        }];

   return acc;
 }, {});
};

module.exports = {
 title: "Exercise 1",
 run: sortProduct
};
//{ banana: [ { name: 'banana', year: 2018, monthOfYear: 2, quantity: 4 } ] }
//{ tomato: [{ name: "tomato", year: 2017, monthOfYear: 2, quantity: 3 }]}

// {
//   name: "tomato",
//   dateAdded: 1486671098000, // 2017-02-09
//   quantity: 3
// }

// The function should filter product before year 2000, sort by date and group by product.

