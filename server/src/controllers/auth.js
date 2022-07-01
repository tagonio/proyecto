const handleLogin = (req,res)=>{

    const { email, password } = req.body;

    if (email !== "test@test.com")
        return res.json({
            error: "user not registered"
        });

    if (password !== "test")
        return res.json({
            error: "password incorrect"
        });
    
    return res.json({
        message:"user login succesfully",
        body:{
            token : "tu token"
        }
    });
}

const handleRegister = (req,res)=>{

    return res.json({
        message: "user registered"
    })
}

module.exports = {
    handleLogin,
    handleRegister
}

