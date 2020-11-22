var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	req.session.userid = null;
	req.session.usertype = null;
	req.session.designation = null;
	res.clearCookie('userid');
	res.redirect('/home');
});

module.exports = router;


