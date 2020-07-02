var mongoose  = require('mongoose');
var mongoose= require('mongoose');
const dbconfig = require('../config/DBConfig');

const connectDb = () => {
  return mongoose.connect(dbconfig.url).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})
};
 
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password:{
        type:String,
        required: true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    gender:{
        type:String
    },
    contact:{
        type:String
    },
    birthday:{
        type:String
    },
    nic:{
        type:String
    },
    city:{
        type:String
    },
    ditrict:{
        type:String
    }    
  },
  { timestamps: true },
);
 
const User = mongoose.model('User', userSchema);
 
module.exports=User