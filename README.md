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

Bamazon App has 4 features 

- Display all avaialble products - item_id, product_name, department_name, price, stock_quantity 

- Request you enter any availble product key and required quantity for purchase

- Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. If not, then you will get message 'Insufficient quantity!', and then prevent the order from going through.

- if store does have enough of the product, the customer's order will get placed.
    This means updating the SQL database to reflect the remaining quantity.
    Once the update goes through, show the customer the total cost of their purchase.

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
## 1. concert-this 
- This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
    * Name of the venue
    *  Venue location
    * Date of the Event ("MM/DD/YYYY")
- command to access the feature for concert-this
```node liri.js concert-this <artist/band name here>```
- Screen Shot:
  ![image](https://github.com/shilpipawar/liri-node-app/blob/master/ScreenShots/concert-this.png?raw=true "concert-this")


## 2. spotify-this-song
- This will show the following information about the song in your terminal/bash window
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
- command to access the feature for concert-this
```node liri.js spotify-this-song '<song name here>```
- Screen Shot:
  ![image](https://github.com/shilpipawar/liri-node-app/blob/master/ScreenShots/spotify-this-song.png?raw=true "spotify-this-song")

## 3. movie-this
  - This will output the following information to your terminal/bash window:
      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating of the movie.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie.
  - command to access the feature for concert-this
  ```node liri.js movie-this '<movie name here>'```

  - Screen Shot:
  ![image](https://github.com/shilpipawar/liri-node-app/blob/master/ScreenShots/movie-this.png?raw=true "movie-this")

## 4. do-what-it-says
- Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    * Edit the text in random.txt to test out the feature for movie-this and concert-this.
- command to access the feature for concert-this
```node liri.js do-what-it-says```
 - Screen Shot:
  ![image](https://github.com/shilpipawar/liri-node-app/blob/master/ScreenShots/do-what-it-says.png?raw=true "do-what-it-says")

## License
This project is licensed under the MIT License - see the [L