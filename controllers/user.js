var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['userid'] != null || req.session.userid != null){
		next();
	}else{
		res.redirect('/home');
	}
});

router.get('/userlist', function(req, res){

		userModel.getAll(function(results){
			var suser = {
				designation : req.session.designation
			};
				res.render('user/index', {user: results, suser: suser});
		});
});

router.get('/executivelist', function(req, res){

	userModel.getAllexecutive(function(results){
			res.render('user/executivelist', {user: results});
		
	});
});

router.get('/adduser', function(req, res){
	var user = {
		designation: req.session.designation
	}
	res.render('user/adduser', {user: user});
});

router.post('/adduser', function(req, res){

	var user = {
		userid: req.body.userid,
		//clubid: req.body.clubid,
		name: req.body.name,
		usertype: req.body.usertype,
		designation: req.body.designation,
		contactnumber: req.body.contactnumber,
		email: req.body.email,
		salary: req.body.salary,
		password: req.body.password
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/edit/:userid', function(req, res){

	userModel.getById(req.params.userid, function(results){
		res.render('user/edit', {user: results});		
	});

});

router.post('/edit/:userid', function(req, res){
	
	var user = {
		userid: req.body.userid,
		//clubid: req.body.clubid,
		name: req.body.name,
		usertype: req.body.usertype,
		designation: req.body.designation,
		contactnumber: req.body.contactnumber,
		email: req.body.email,
		password: req.body.password,
		userid: req.params.userid
	};

	

	userModel.update(user, function(status){

		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/editprofile/:userid', function(req, res){

	userModel.getById(req.params.userid, function(results){
		res.render('user/editprofile', {user: results});		
	});
});

router.post('/editprofile/:userid', function(req, res){
	
	var user = {
		name: req.body.name,
		contactnumber: req.body.contactnumber,
		email: req.body.email,
		password: req.body.password,
		userid: req.params.userid
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/home');
		}else{
			res.redirect('/user/editprofile/'+req.params.userid);
		}
	});
});

router.get('/details/:userid', function(req, res){

	userModel.getById(req.params.userid, function(result){
		console.log(result);
		res.render('user/details', {user: result});
	});
});

router.get('/profile/:userid', function(req, res){

	userModel.getById(req.params.userid, function(result){
		res.render('user/profile', {user: result});
	});
});

router.get('/delete/:userid', function(req, res){

	var user ={userid: req.params.userid}

	userModel.delete(user, function(status){
		res.redirect('/user/userlist');;		
	});

});

module.exports = router;
