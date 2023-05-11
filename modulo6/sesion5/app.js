const express = require('express');
const app = express();

const port = process.env.PORT || 300; 

const mongoose = require('mongoose');

const user = '';
const password = '';
const uri = '';

mongoose.connect(uri,
    {useNewUrlOarser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

app.set('view engine', 'ejs');
app.set('views', _dirname + 'views');
router.get('/', async (req, res) => {
    try {
        const arrayMascotas = await Mascota.find();
        console.log(arrayMascotas)
        res.render("mascotas", {
            listaMascotas: "Aquí irán todas las mascotas",
            arrayMascotas
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;