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
    console.log("calling CLeanup");

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
function placeOredre(id, enteredQty, dbQty) {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Are you sure to place the order:",
                name: "confirm",
                default: true
            }
        ])
        .then(function (response) {
           
            if (response.confirm) {
                 var updateQty = parseInt(dbQty) - parseInt(enteredQty)
                connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [updateQty, id], function (error, results, fields) {
                    if (error) {
                      console.log("error", error);
                    }
                    console.log("Order placed successfully!! Thanks you");
                  });
               
                // var sql = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
                // var values = [updateQty, id];
                // connection.query(sql, [values], function (err, result, fields) {
                //     if (err) throw err;
    
                //     console.log("Qyantity:" + id + " Qty:" + enteredQty);
    
                //     console.log("working");
                // });
                // console.log("Order Places!!!");
            }
            else {
                console.log("\nThat's okay ");
            }
            cleanUp();
        });
}

function checkProductQuantity(id, quantity) {
    var sql = "select stock_quantity from products where item_id = ?";
    var values = id;
    connection.query(sql, [values], function (err, result, fields) {
        if (err) throw err;

        console.log("Qyantity:" + result[0].stock_quantity + " Qty:" + quantity);

        var dbQty = parseInt(result[0].stock_quantity);
        var enteredQty = parseInt(quantity);
        if (enteredQty <= dbQty) {
            console.log("Hello");
            placeOredre(id, enteredQty, dbQty);
        }
        console.log("not working");
    });
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
            }
        ])
        .then(function (inquirerResponse) {
            console.log(inquirerResponse.pid + " " + inquirerResponse.quantity);
            checkProductQuantity(inquirerResponse.pid, inquirerResponse.quantity);
        });
}