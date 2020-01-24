const express = require('express');
const app = express();
const path = require("path")

const hbs = require('hbs');
app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/parciales");

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    // res.render('home');

    res.render('home', {
        nombre: 'juan',
        anio: new Date().getFullYear()
    });
});


app.get('/about', (req, res) => {

    // res.render('home');

    res.render('about');
});

app.listen(3000, () => {
    console.log('escuchando peticiones en el puerto 3000');
})