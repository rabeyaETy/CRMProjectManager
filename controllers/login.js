var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['userid'] != null || req.session.userid != null){
		res.redirect('/home');
	}else{
		next();
	}
});

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var user = {
		userid: req.body.userid,
		password: req.body.password
	}

	userModel.validate(user, function(result){
		
		if(result.length > 0){
			req.session.userid = result[0].userid;
			req.session.usertype = result[0].usertype;
			req.session.designation = result[0].designation;

			if(req.body.logcheck == "checked")
			{
				res.cookie('userid', req.session.userid);
			}
			
			res.redirect('/home');
		}else{
			res.send('invalid username/password');
		}
	});

});

module.exports = router;


