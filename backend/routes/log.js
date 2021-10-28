
//blog routes
const router = require('express').Router();
const User = require('../models/User')
const multer = require('multer')

// define storage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/images')
    },
    filename : function(req,file,cb){
        cb( null, Date.now()+file.originalname)
    }
})

// upload parameter
const upload = multer({
    storage: storage,
    limits : {
        fieldSize : 1024*1024*5
    }
})

// login 
router.get('/login', (req, res) => {
    res.render('login')
})
// register
router.get('/register', (req, res) => {
    res.render('register')
})

// view route
router.get('/:slug', async (req,res)=>{
 let user = await User.findOne({ slug: req.params.slug})

 if(user){
     res.render('showprofile',{ user : user })
 }else{
     res.redirect('/')
 }
})
// handle new user
router.post('/register', async (req,res)=>{
    const { name , email , password1 , password2 } = req.body
let user = new User({
    name :req.body.name ,
    email: req.body.email,
    password1: req.body.password1,
    password2: req.body.password2
})
try{
    user = await user.save();

    res.redirect(`users/${user.slug}`)
   
}catch(err){
    console.log(err)
}
})

// edit blog post
router.get('/edit/:id', async (req,res)=>{
let users = await User.findById(req.params.id)
res.render('editprofile',{ blog:blog })
})

// handle update
router.put('/:id', async (req,res)=>{
    req.users = await User.findById(req.params.id)

    let users = req.users
    users.title = req.body.name,
    users.author = req.body.email,
    users.description = req.body.phone
    
    try{
        users = await users.save()
    
        res.redirect(`/log/${users.slug}`)
    }catch(err){
        console.log(err)
        res.render(`/log/editprofile/$(users.id)`,{ users : users })
    }
    })

    // delete blog post
    router.delete('/:id', async (req,res)=>{
        await User.findByIdAndDelete(req.params.id)
        res.redirect('/')
        })


module.exports = router;
