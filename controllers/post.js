var express = require('express');
var postModel = require('./../models/post-model');
var router = express.Router();

router.get('*', function(req, res, next){

	if(req.cookies['userid'] != null || req.session.userid != null){
		next();
	}else{
		res.redirect('/home');
	}
});

router.get('/', function(req, res){
		var user = {
			designation : req.session.designation
		};
		var post = {
			postaprovalstatus : 1
		}
		postModel.getAllApproved(post, function(results){
			res.render('post/index', {post: results, user:user});
		});
});

router.get('/createpost', function(req, res){
	var user = {
		designation: req.session.designation
	};
	res.render('post/createpost', {user: user});
});

router.post('/createpost', function(req, res){
	var fp; 
	if(req.body.filepath == "" || req.body.filepath == undefined || req.body.filepath == null)
	{
		fp = null;
	}
	else{
		fp = req.body.filepath;
	}

	var post = {
		userid: req.session.userid,
		postdescription: req.body.postdescription,
		postdate: new Date().toISOString().slice(0,10),
		postapprovalstatus: 0,
		filepath: fp
	};

	postModel.insert(post, function(status){
		if(status){
			res.redirect('/home');
		}else{
			res.redirect('/post/createpost');
		}
	});
});

module.exports = router;