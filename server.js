const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; //constante para el pueto que nos dara heroku

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
//__dirname quiere decir que no importa que url se tenga la toma y con + concatena


app.get('/',(req, res) => {
  //res.send('Hello World');
 
  res.render('home',{
  	nombre: 'Ivan',
  	//anio: new Date().getFullYear()
  });
});

app.get('/about',(req, res) => {
  //res.send('Hello World');
 
  res.render('about',{
  	//anio: new Date().getFullYear()
  });
});

app.listen(port,() =>{
	console.log(`Escuchando peticiones en el puerto ${port}`);
});


//codigo viejo

//objeto que estaba dentro de app.get
 /*let salida = {
  	nombre: 'ivan',
  	edad: 26,
  	url: req.url
  };*/