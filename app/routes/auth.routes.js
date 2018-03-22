const {
    Router,
} = require('express');

const passport=require('passport');
const init = (app, data) => {
    const router = new Router();
    console.log('auth route!');
    router.get('/login', (req, res)=>{
    //    res.render('_shared/login');
     res.redirect('/');
    });

    router.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/',
            failureFlash: true,
        })
    );
};


module.exports={
    init,
};
