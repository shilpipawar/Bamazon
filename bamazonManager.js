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
    managerOptions();
    console.log("calling CLeanup");
});