const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let nextID = 1;
const products = [];

app.listen(
    port,
    () => console.log(`Example app listening on port ${port}!`)
);

// Endpoint om productinformatie toe te voegen
app.post('/product', (req, res) => {
    const { productName, productDescription, productPrice } = req.body;

    if (!productName || !productDescription || !productPrice) {
        res.status(400).send({ message: 'All fields are required' });
    } else {
        const newProduct = {
            id: nextID++,
            name: productName,
            description: productDescription,
            price: productPrice
        };
        products.push(newProduct);
        res.status(201).send(newProduct);
    }
});

// Endpoint om productinformatie te verwijderen
app.delete('/product/:id', (req, res) => {
    const { id } = req.params;

    // Find the index of the product with the given id
    const index = products.findIndex(product => product.id === parseInt(id));

    // If the product is found, remove it from the array
    if (index !== -1) {
        products.splice(index, 1);
        res.sendStatus(204); // No Content
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

// Endpoint om alle producten op te halen
app.get('/products', (req, res) => {
    res.status(200).send(products);
});