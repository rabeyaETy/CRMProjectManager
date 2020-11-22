var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	if(req.cookies['userid'] != null || req.session.userid != null){
		uid = "";
		if(req.cookies['userid']!=null)
		{
			uid = req.cookies['userid'];
		}
		else
		{
			uid = req.session.userid;
		}

		userModel.getById(uid, function(result){
			if(req.session.userid == null)
			{
				req.session.userid = result.userid;
				req.session.usertype = result.usertype;
				req.session.designation = result.designation;

			}
			res.render('home/index', {user: result});
		});
	}else{
		res.render('home/index', {user: null});
	}
});






module.exports = router;


