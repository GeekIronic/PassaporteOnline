const Login = {};

Login.loginsession = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM TipoIdentificacion;',(err, customers) => {
            if(customers){
                res.render('Index', {
                    dataListTypeID: customers
                });
                console.log(customers);
            }else{
                res.json(err)
            }
        });
    })
};

Login.loginpassport = (req,res) =>{
    const loginId = req.body
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM PasaporteCiudadano WHERE IdTipo = ? AND IdCiudadano = ? ',[loginId.txt_TypeId, loginId.txt_Ident], (err, customers) => {
            if(customers){
                if(customers.length == 0){
                    res.send('Usuario o contraseña Incorrecta, porfavor digite');
                }else{
                    res.render('ProfilePassport', {
                        Msn: 'ingreso exitoso'
                    });
                }
            }else{
                res.json(err)
            }


            
        });
    }) 
}



module.exports = Login;


