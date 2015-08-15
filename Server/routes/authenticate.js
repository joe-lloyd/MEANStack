var express = require('express');
var router = express.Router();

module.exports = function(passport){

	// sends successful login state to angular
	router.get('/success', function(req, res){
		res.send({state: 'success', user: req.user ? req.user : null});
	});

	// sends faild login state to angular
	router.get('/failure', function(req, res){
		res.send({state: 'failure', user:null, message:'Invalid login credentials'});
	});

	//login 
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	// sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect:'/auth/success',
		failureRedirect:'/auth/failure'
	}));

	//log out
	router.get('/signout', function(req,res) {
		req.logout();
		res.redirect('/');
	});

	return router;
};