const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/index');
// Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

// static files
app.use(express.static(path.join(__dirname, 'public')))

//middlewares

//routes
app.use(indexRoute);


//static files

// escuchando el servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})
