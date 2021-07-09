var express = require('express');
var router = express.Router();
var User = require("../db/User");


module.exports = function(passport){
    router.post('/signup', function(req, res) {
       //asli authentication ke user exist krra h ki nai idr hora h
       var body = req.body,
       username = body.username,
       password = body.password;

       User.findOne({username:username},function(err,doc){
            if(err) {res.status(500).send('error occureed')}
            else{
                if(doc){res.status(500).send('error occureed')}                          
                else{
                     var record= new User()
                     record.username =username;
                     record.password =record.hashPassword(password);
                     record.save(function(err,user){
                            if(err){res.status(500).send('db error ')}
                            else{ res.send(user)}
                            });
                     


                     }         

                }

       });
    
    
    });   
    
    
router.post('/login',passport.authenticate('local',{
        failureRedirect:'/login',
        successRedirect: '/profile'}),function(req,res){res.send("hey");}
        
        
        );   
return router;
};
