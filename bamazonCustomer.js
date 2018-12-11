var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pass@1234",
    database: "bamazonDB"
});

connection.connect(function (err) {
    allSongByArtist();
    cleanUp();
});

function allSongByArtist() {
    // var sql = "SELECT * FROM album where artist = ?";
    // var values = ;
     connection.query("SELECT * FROM products", function (err, result, fields) {
    //connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

function cleanUp() {
    connection.end();
}