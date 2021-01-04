const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Manuel carbajal',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', );
});

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Manuel',
//         edad: 26,
//         url: req.url
//     };
//     res.send(salida);
// });

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});