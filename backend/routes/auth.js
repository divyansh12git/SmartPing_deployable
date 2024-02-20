
import express from 'express';
import User from '../models/User.js';
import passport from 'passport';
const router = express.Router();

router.post('/signup',async(req,res)=>{
    try{
        let {uname,username,password} = req.body;
        // console.log({uname,username,password})
        const user = new User({uname,username});
        const newUser = await User.register(user,password);
        // res.send(newUser);
        // console.log("Successfully Registered")
        req.login(newUser, function(err) {
            if (err) { return (err); }
            return res.send({msg:"Successfully Registered",user:newUser});
        });
    }
    catch(e){
        res.send(e)
        return ;
    }
})

router.post('/login', 
    passport.authenticate('local', { 
        failureRedirect: 'http://localhost:3000/', 
        failureMessage: true ,
     }),
     function(req, res) {
         // console.log(req.user);
         const user = req.user;
         res.send({msg:"Successfully Logged In",user:user});
        // window.location.href = "http://localhost:3000/home";
     }
) 

router.get('/logout',(req,res)=>{
    
    req.logout(()=>{
        res.send({msg:"Logged Out"});
    });
        
});


export default router;