/* ********************************************************************************************************
By GeekIronic
Se colocan todas las rutas del servidor; Cada ruta tendra su "Controller o funcion que permtiira realziar 
una accion". La ruta empezaran por el Index, el cual sera la raiz principal. Anteriomente el archivo (rutas) 
se llamaba "customer"
********************************************************************************************************* */

const express = require('express');
const router = express.Router();



router.get('/',(req,res) =>{
    res.render('Index', {Title: 'Pasaporte app - login'});
    console.log('Ruta Raiz, a primera página en mostrarse')
});




const loginController =require('../controllers/loginController')

//router.get('/', loginController.LoginSession);




// exportar modulo (custmers)
module.exports = router;