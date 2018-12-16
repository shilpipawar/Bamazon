var mysql = require("mysql");
var inquirer = require("inquirer");

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
function productSale(){

}
function lowInventory(){

}
function addInventory(){

}
function addProduct(){
    
}
////////////////////////////////Manager View//////////////////////////////////////////////
function managerOptions() {
    inquirer
        .prompt([
            {
                message: "List a set of menu options",
                type: "checkbox",
                name: "list",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            }
        ])
        .then(function (response) {

            if (response.list[0] == "View Products for Sale") {
                productSale();
            } else if (response.list[1] == "View Low Inventory") {
                lowInventory();
            } else if (response.list[2] == "Add to Inventory") {
                addInventory();
            } else if (response.list[3] == "Add New Product") {
                addProduct();
            } else {
                console.log("No Option Selected");
            }
        });
}