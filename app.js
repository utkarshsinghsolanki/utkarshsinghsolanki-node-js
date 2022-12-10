const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});
app.get('/portfolio', (req, res) => {
    res.status(200).render('portfolio.pug');
});

const PORT = process.env.PORT||'8000';
app.listen(PORT, ()=>{
    console.log('Server Started...');
});
