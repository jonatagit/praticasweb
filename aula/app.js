const express = require('express')
const app = express();
const port = 3000;


app.get('/fuji', (req, resp) => {
    resp.send("Primeiro Endpoint, aula 01")
})


app.get('/spi', (req, resp) => {
    resp.send("Segundo endpoint")
})



app.listen(port, () => {
    console.log('Aplicação com express porta ' + port);
})