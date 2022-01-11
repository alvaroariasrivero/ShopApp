require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const productsApi = require ('./controllers/productApi');
const cors = require('cors');
const path = require('path');

require('./utils/dbmongo');

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/api/products', productsApi.getAllProducts);
app.get('/api/products/:name?', productsApi.getProductsByName);
app.get('/api/products/:provider?', productsApi.getProductsByProvider);
app.get('/api/products/product_id/:id?', productsApi.getProductById);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${PORT}`)
});