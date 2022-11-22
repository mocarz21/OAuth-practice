const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if (req.user) {
    res.render('logged',{userName: req.user.name.givenName,image:req.user._json.picture});
  }else res.redirect('/user/no-permission')
});

router.get('/profile', (req,res)=>{
  if(req.user){
    res.render('user')
  }else res.redirect('/user/no-permission')
})

router.get('/profile/settings', (req,res)=>{
  if(req.user){
    res.render('settings')
  }else res.redirect('/user/no-permission')
})

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});


module.exports = router;