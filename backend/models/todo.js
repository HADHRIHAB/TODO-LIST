const mongoose = require('mongoose');

const TODO= mongoose.model('TODO',{
    text:String,
    date:String,
    status:Boolean,
   

});




module.exports= TODO;