const express = require("express");
const {verifyLogin} = require("./../controllers/verifyLogin")

// const {
//     createComment,
//     getComment,
//     updateComment,
//     deleteComment,
//     createUser
// } = require('./../controllers/commentController');
// const user = require('./../schemas/connection').userModel;

let router = express.Router();


module.exports = () => {
    // cau hình router trang chủ
    // ##################
    router.post('/verifyLogin', (req, res, next)=>{
        verifyLogin(req, res, next)
    })
    router.get('/', (req, res, next)=> {
        res.send('result')
    });
    // router.get('/story', (req, res, next)=>{
    //     polulation(req, res, next)
    // } )
    // ##################
    // router.post('/createuser', (req, res, next)=> createUser(req, res, next))
    // router.post('/createcomment', (req, res, next)=> createComment(req, res, next) )
    // router.get('/read', (req, res, next)=>getComment(req, res, next))
    // router.put('/update', (req, res, next)=>updateComment(req, res, next))
    // router.delete('/delete', (req, res, next)=>deleteComment(req, res, next))
    return router;
}