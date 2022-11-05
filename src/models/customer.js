const mongoose = require('mongoose')
 
const customerSchema = new mongoose.Schema(
 {
  email: {
   type: String,
   required: true,
   trim: true
 },
  
  firstname: {
   type: String,
   trim: true,
   maxlength: 25
 },
  minit: {
   type: String,
   trim: true,
   maxlength: 25
 },
  lastname: {
   type: String,
   trim: true,
   maxlength: 25
 },
 phone: {
    type: number,
    required: true,
 },
 customer: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sale'
    }
 ],
 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
 }
 
 },
 { timestamps: true }
)


customerSchema.set('toJSON', {
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id.toString()
  delete returnedObject._id
  delete returnedObject.__v
  // the password should not be revealed
  delete returnedObject.password
 }
})


const customer = mongoose.model('customer', customerSchema)

module.exports = customer 