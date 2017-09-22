const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()


const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));
const controllers = require('./server/controllers');
const baseURL = '/api/products'

// app.post(baseURL, controllers.createItem);
// app.get(baseURL + '/:id', controllers.selectItem);
// app.put(baseURL + '/:id', controllers.editItem);
// app.delete(baseURL + '/:id', controllers.deleteItem);

// const port = process.env.PORT || 3000;
// app.listen(port, () => { console.log('Serverlistening on port ' + port + '.'); } );