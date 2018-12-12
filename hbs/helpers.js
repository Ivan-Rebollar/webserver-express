const hbs = require('hbs');

//helpers
//con esta nueva funcion ya no son necesarios los datos de anio en
//los res.render
hbs.registerHelper('getAnio',() => {
	return new Date().getFullYear();
})

hbs.registerHelper('capitalizar',(texto)=> {
	let palabras = texto.split(' ');
	palabras.forEach((palabra, idx) => {
		palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
	});

	return palabras.join(' ');
});

