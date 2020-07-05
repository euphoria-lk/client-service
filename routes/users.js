
var express = require('express');
var router = express.Router();
var User=require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',async function(req, res, next){
try{
  const user =await User.findOne({
    email:req.body.email,
    password:req.body.password
  })
  if(!user){
     res.status(200).send({
      success: 'true',
      message: "username or password incorrect"
  })
  }else{
    res.status(201).send({
      success: 'true',
      message: "successful",
      user_profile:user
    })
  }

}catch(err){
  console.log(err)
    res.status(500).send({message:err.message})
}

})
router.post('/user',async function(req, res, next){
try{
  const user =await User.findOne({
    firstname:req.body.firstname,
    lastname:req.body.lastname
  })
  if(!user){
     res.status(200).send({
      success: 'true',
      message: "User not found"
  })
  }else{
    res.status(201).json(user);
  }

}catch(err){
  console.log(err)
    res.status(500).send({message:err.message})
}

})


router.post('/signup', async function(req,res,next){
  try{
    const user= await User.findOne({
      email:req.body.email
    });
    if(user){
      res.status(200).send({
      success: 'true',
      message: "user already exists"
      })
    }else{
      const newUser= new User({
          email: req.body.email,
          password:req.body.password,
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          gender:req.body.gender,
          contact:req.body.contact,
          birthday:req.body.birthday,
          nic:req.body.nic,
          city:req.body.city,
          ditrict:req.body.ditrict, 
      })
    const savedUser= await newUser.save();
    res.status(201).send({
      success:true,
      message:"new User saved successfully"
    })
  }

  }catch(err){
    console.log(err)
    res.status(500).send({message:err.message})

  }
  
});


module.exports = router;

