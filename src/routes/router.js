const express = require('express');
 const router = express.Router();
 
 const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = require('../controllers/user');

 const { createCustomer} = require('../controllers/customer')
 
 // User route
 router.post('/user', createUser);
 router.get('/user', getAllUsers);
 router.get('/user/:id', getOneUser);
 router.put('/user/:id', updateOne);
 router.delete('/user/:id', deleteOne);

 // customer route
 router.post('/customer', createCustomer);
 
 
 module.exports = router;