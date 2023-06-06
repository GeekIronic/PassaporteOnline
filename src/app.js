/* *******************************************************
By GeekIronic
Este archvio se encargara de ejecutar todo el servidor
* *******************************************************/

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// Importing routers (Importando rutas)
const ServiceRoutes = require('./routes/rutas');

// Settings (Express)
app.set('port',process.env.PORT || 3000)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// Middlewares (Peticiones antes de que vngan los usuarios)
app.use(morgan('dev')); //Genera en la terminal mensaje sobre la petición realizada

// Conexion a la base de datos para la base de datos mysql
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'Pasaporte_App'
},'single'));
app.use(express.urlencoded({extends: false}));

/* *************************************************************************************************
Routes (redireción a las rutas correspondientes).
Anteriormente el objeto (ServiceRoutes) se llamaba (CustomerRoutes), sin embargo se cambio a un 
nombre más neutral ya que el archivo "rutas" contendra TODAS las rutas de las funciones
*************************************************************************************************** */
app.use('/',ServiceRoutes);

// Static files (Archivos Staticos, para el css ,imagenes, ect...)
app.use(express.static(path.join(__dirname,'public')));

// Starting the server (Empezando el servidor)
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
})

