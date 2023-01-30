const VerifyToken = (req, res)=>{
    res.send("hola verififyToken");
}

const ReceivedMessage = (req, res) =>{
    res.send("Hola Received");
}

module.exports ={
    VerifyToken,
    ReceivedMessage
}