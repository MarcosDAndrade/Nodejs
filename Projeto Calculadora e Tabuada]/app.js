//fazer a importação do express
const express = require('express');
const router = require('./routes/index'); 
const mustache = require('mustache-express'); 

/*const app = express();
app.use("/",router);
*/
const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // requisições POST sejam tratadas igual a GET
app.use(router);


app.engine('mst', mustache()); 
app.set('view engine','mst'); 
app.set('views',__dirname+'/views'); 

module.exports = app; //exportamos o app. pois vamos importa-lo no servidor