## Bamazon-app
  
####  bamazonCustomer-js
####  bamazonManager-js

# Table of Contents

1. [Introdution](#Introdution)
1. [Features](#Features)
1. [Installing](#installing)
1. [Configuration](#configuration)
1. [Usage](#usage)
1. [Contributing](#contributing)

# Introdution

 The Bamazon app will take in orders from customers and deplete stock from the store's inventory. It can also track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store. 

# Features

## Bamazon App has 3 features 

## 1. Customer View
## 2. Manager View
## 3. Supervisor View

## Customer View -
- Display all avaialble products - item_id, product_name, department_name, price, stock_quantity 

- Request you enter any availble product key and required quantity for purchase

- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. If not, then you will get message 'Insufficient quantity!', and then prevent the order from going through.

- if store does have enough of the product, the customer's order will get placed.
    This means updating the SQL database to reflect the remaining quantity.
    Once the update goes through, show the customer the total cost of their purchase.

## Manager View -
Display below option for Manager
- View Products for Sale
- View Low Inventory
- Add to Inventory
- Add New Product
1. If a manager selects View Products for Sale, the app dispalys list every available item: the item IDs, names, prices, and quantities.

2. If a manager selects View Low Inventory, then it displays list all items with an inventory count lower than five.

3. If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.

4. If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

# Installing
- package.json has all required dependencies

```npm install```

# Configuration

To use Bamazon App, you will need mysql.

# packages
```
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

```

#### Usage
## 1. Customer View 
- 
```node bamazonCustomer.js```
- Screen Shot:
  ![image](https://github.com/shilpipawar/Bamazon/blob/master/Screenshots/BamazonCustomer.png "Customer-View1")
  ![image](https://github.com/shilpipawar/Bamazon/blob/master/Screenshots/BamazonCustomer1.png "Customer-View2")
  


## 2. Manager View
- 
```node bamazonManager.js```
- Screen Shot:
  ![image](https://github.com/shilpipawar/Bamazon/blob/master/Screenshots/bamazonManager.png "Manager-View")

## 3. Supervisor View
  - 
  ```node bamazonSupervisor.js'```

  - Screen Shot:
  ![image](https://github.com/shilpipawar/liri-node-app/blob/master/ScreenShots/movie-this.png?raw=true "movie-this")


## License
This project is licensed under the MIT License - see the [L