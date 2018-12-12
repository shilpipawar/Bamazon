var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pass@1234",
    database: "bamazonDB"
});

connection.connect(function (err) {
    allProductsforSale();
    //buyProduct();
    cleanUp();
});

function allProductsforSale() {
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        buyProduct();
    });
}

function cleanUp() {
    connection.end();
}
function placeOredre(id, quantity) {

}
function checkProductQuantity(id) {

}
//The app should then prompt users with two messages.
//The first should ask them the ID of the product they would like to buy.
//The second message should ask how many units of the product they would like to buy.
function validateProductId(name) {
    //return name !== '';
    if (name == parseInt(name)) {
        return name !== '';
    }
}

function buyProduct() {
    inquirer
        .prompt([
            // Here we create a basic text prompt.
            {
                type: "input",
                message: "Enter Product Key:",
                name: "pid",
                validate: validateProductId
            },
            {
                type: "input",
                message: "How many quantity you want to buy:",
                name: "quantity",
                validate: validateProductId
            }, {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            }
        ])
        .then(function (inquirerResponse) {

        });
}