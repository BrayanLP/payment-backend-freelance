const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const { mongoose } = require('./database');
// Setting 
app.set('port' , process.env.PORT || 3001);

//  Middelwares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/demo', require('./routes/demo.routes'));

// Static files
// app.use(express.static(path.join(__dirname, 'public')))


// Starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on start port ${app.get('port')}`)
})