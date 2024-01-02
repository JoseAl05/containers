const express = require('express');
const mongoose = require('mongoose');
const appRouter = require('./router/router');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_CONNECTION).then((res) => {
    console.log('Conectado a base de datos!!')
}).catch((err) => {
    console.log(`Ocurrio un error ${err.message}`);
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', appRouter);

app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log("Server Started on port", app.get('port'));
});

module.exports = app;