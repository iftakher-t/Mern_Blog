const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI

app.use(cors())
app.use(express.json())



// connect mongoose
mongoose.connect( uri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true 
})

app.use(express.urlencoded({ extended: false }))

app.listen(port, 
console.log(`Server is running on port ${port}`))






// Express session
// app.use(
//     session({
//       secret: 'secret',
//       resave: true,
//       saveUninitialized: true
//     })
//   );
  
  // Passport middleware
  // app.use(passport.initialize());
  // app.use(passport.session());
  
  // Connect flash
  // app.use(flash());
  
  // Global variables
  // app.use(function(req, res, next) {
  //   res.locals.success_msg = req.flash('success_msg');
  //   res.locals.error_msg = req.flash('error_msg');
  //   res.locals.error = req.flash('error');
  //   next();
  // });

// app.use(express.static("public"))

// app.use('/', IndexR);
// app.use('/users', UserR);

//listen port
