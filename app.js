//let http = require ('http');

//http.createServer(function(req, res) {

//res.writeHead(200, {'Content-Type': 'text/plain'});

//switch(req.url){
    //case '/':
        //res.end("Bienvenido a KingOfKiev");
        //break;
   // case '/productos':
        //res.end("Estos son nuestros productos");
      //  break;
   // default:
      //  res.end("Error, intente de nuevo mas tarde");
       // break;        
//}

//res.end('Terminado');

//}).listen(4000, 'localhost');

const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log('Servidor corriendo');
})

app.get('/', function(req, res){

    res.send('Bienvenido a KingOfKiev!!');

});

app.get('/contacto', function(req, res){

    res.send('Aqui esta el contacto de ayuda al comprador');

});

app.get('/un-array', function(req, res){

    res.send([1,2,3,4]);

});

app.get('/un-objeto', function(req, res){

    res.send({name: "Juan Pablo"});

});