

const express = require('express');
const app = express();
const morgan = require('morgan');

//Configurations

app.set('port',3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//paths
app.use(require('./routes/routes'));

//Server Initializer 

app.listen(app.get('port'));
console.log("mi primer servidor");