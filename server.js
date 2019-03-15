const express = require('express');
const app = express();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const fetch = require('node-fetch');

// Serve static resources
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Fake data
const categories = ['category1', 'category2', 'category3']

// Handle routes and AJAX requests
app.get('/', (req, res) => {
    res.render('index', {categories: categories});
})

// Connect server
app.listen(3000, () => {
    console.log(`server listening on port 3000`);
    const categoriesURL = 'https://stg.lillypulitzer.com/s/lillypulitzer-us/dw/shop/v18_2/categories/just-in?client_id=7469c353-e112-4902-bf40-ead35df41219'
    
    /*
    fetch(categoriesURL)
    .then(rawData => console.log(rawData))
    .catch(error => console.log(error));
    */

   let request = new XMLHttpRequest();
   request.open('GET', categoriesURL);
   request.onreadystatechange = function() {
        // If the request is compete and was successful
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
        } else {
            console.log(`request status: ${request.status}, readyState: ${request.readyState}`)
        }
    }
    request.send();

});