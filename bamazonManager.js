var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pass@1234",
    database: "bamazonDB"
});
//SQL Connection////////////////////////////////////////
connection.connect(function (err) {
    managerOptions();
    console.log("calling CLeanup");
});
////////DB Function/////////////////////////////////////////////////
function productSale() {
    connection.query("select item_id,product_name,price,stock_quantity from products where stock_quantity > 0", function (err, result, fields) {
        if (err) throw err;
        const table = cTable.getTable(result);
        console.log(table);
    });
}
function lowInventory() {
    connection.query("select item_id,product_name,price,stock_quantity from products where stock_quantity < 50", function (err, result, fields) {
        if (err) throw err;
        const table = cTable.getTable(result);
        console.log(table);
    });
}
function addInventory() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter Product id:",
                name: "id",
            },
            {
                type: "input",
                message: "Add Quantity:",
                name: "quantity",
            }
        ])
        .then(function (response) {
            connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [response.quantity, response.id], function (error, results, fields) {
                if (error) {
                    console.log("error", error);
                }
                console.log("Product Quantity Updated!!");

            });
        });
}
function addProduct() {

}
////////////////////////////////Manager View//////////////////////////////////////////////
function managerOptions() {
    inquirer
        .prompt([
            {
                message: "Menu options - Manager View",
                type: "checkbox",
                name: "list",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            }
        ])
        .then(function (response) {

            if (response.list[0] == "View Products for Sale") {
                productSale();
            }
            if (response.list[0] == "View Low Inventory") {
                lowInventory();
            }
            if (response.list[0] == "Add to Inventory") {
                addInventory();
            }
            if (response.list[0] == "Add New Product") {
                addProduct();
            }
            //console.log("No Option Selected" + response.list);
        });
}