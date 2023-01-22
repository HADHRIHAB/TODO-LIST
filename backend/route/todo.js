const express=require('express');
const TODO = require('../models/todo');

const router= express.Router();



router.post('/add', (req , res)=>{
    let data= req.body;
    todo= new TODO(data);
    todo.date = new Date();
    todo.status= false
    todo.save()

   .then(
    (Result)=>{
        res.send(Result)
    }
   )
   .catch(
    (err)=>{
        res.send(err)
    })

})

router.get('/getall', (req, res)=>{
    
    TODO.find()
   
    .then(
        (Result)=>{
            res.send(Result)
        })
       .catch(
        (err)=>{
            res.send(err)
        })
})

router.delete('/delete/:id' , (req, res)=>{

let myId= req.params.id;
TODO.findByIdAndRemove({_id:myId})

    .then(
        (Result)=>{
            res.send(Result)
        }
       )
       .catch(
        (err)=>{
            res.send(err)
        }
       )
})
router.put('/update/:id' , (req, res)=>{
    let myId= req.params.id;
    
    TODO.findOneAndUpdate( {_id: myId}, {status:true} )
    
    .then(
        (Result)=>{
            res.send(Result)
        }
       )
       .catch(
        (err)=>{
            res.send(err)
        })
})




module.exports= router;