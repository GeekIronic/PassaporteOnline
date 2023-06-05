const Login = {};

Login.LoginSession = (req,res) => {
   res.render('Login');
};

Login.StartSession = (req,res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Conductor',(err, customers) => {
            if(customers){
                res.render('ProfileDriver', {
                    data: customers
                });
            }else{
                res.json(err)
            }
        });
    })
}



module.exports = Login;


