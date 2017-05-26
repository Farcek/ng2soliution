import * as express from "express";
import * as path from "path";

const morgan = require('morgan');
const favicon = require('serve-favicon')

import * as api from "./api/index";

const app = express();

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(morgan('dev')); // common || combined || tiny
app.use('/api', api.router);



app.use( express.static(__dirname ));   
app.use( express.static(path.join(__dirname, '../public') )); 

app.listen(3300, () => { 
    console.log('Example2333 app listening on3 port 3300!.')
})