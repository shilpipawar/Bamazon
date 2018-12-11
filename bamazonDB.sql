-- bamazon

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pass@1234';

DROP DATABASE IF EXISTS bamazonDB;
-- Creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

use bamazonDB;

CREATE TABLE products (
    item_id INTEGER(100) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(65) NULL,
    price DECIMAL(10 , 4 ) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);
  
  select * from products