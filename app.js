const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-Tye': 'application/json'})

    const persona = {
        id: 1,
        nombre: 'Jorge'
    }

    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8088);

console.log('Escuchando el puerto', 8088);