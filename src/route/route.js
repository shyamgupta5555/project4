const express = require('express')
const route = express.Router()
const middleware = require('../middleware/authMiddleware')
const userCtrl = require('../controller/userController');
const bookCtrl = require('../controller/bookController');
const reviewCtrl = require('../controller/reviewController')



route.post('/register', userCtrl.createUser);
route.post('/login', userCtrl.loginUser);
//  BOOK api
route.post('/books',bookCtrl.bookCreate)
route.get('/books',bookCtrl.getBook)
route.get('/books/:bookId',bookCtrl.getBookId)
route.put('/books/:bookId',bookCtrl.updateBook)
route.delete('/books/:bookId',bookCtrl.bookDeleted)

// review api

route.post('/books/:bookId/review',reviewCtrl.createReview)

route.put('/books/:bookId/review/:reviewId',reviewCtrl.updateReview)
route.delete('/books/:bookId/review/:reviewId',reviewCtrl.deleteReview)

route.all('/*' ,(req,res)=>{
  res.status(400).send({status: false , message:"invalid path"})
})

module.exports= route