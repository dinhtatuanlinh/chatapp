const admin = require('firebase-admin');
const firebaseConfig = require('./../configs/chat-app-e8a9e-firebase-adminsdk-493ox-3ee218c688.json')
  
admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig)
});
  
const verifyLogin = async (req, res, next)=>{
    console.log(req.body.token);
    const token = req.body.token
    let decodeValue = await admin.auth().verifyIdToken(token);
    console.log(decodeValue);
}
module.exports= {
    verifyLogin
}