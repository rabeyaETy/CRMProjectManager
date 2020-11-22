var db = require('./db');

module.exports={

	getById: function(userid, callback){

		var sql = "select * from userinfo where userid=?";
		db.getResults(sql, [userid], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from userinfo where userid=? and password=?";

		db.getResults(sql, [user.userid, user.password], function(result){

			if(result.length > 0 ) {
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from userinfo";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAllexecutive : function(callback){
		var sql = "select * from userinfo where designation='Executive'";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	


	insert : function(user, callback){
		var sql = "insert into userinfo values(?, ?, ?, ?, ?,?, ?, ?)";
		db.execute(sql, [user.userid, user.name, user.usertype, user.designation, user.contactnumber, user.email, user.salary,user.password], function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		var sql = "update userinfo set name=?, contactnumber=?, email=?,salary=?,  password=? where userid=?";		
		db.execute(sql, [user.name, user.contactnumber, user.email,user.salary, user.password, user.userid], function(status){
			callback(status);
			});
		
	},
	delete : function(user, callback){
		var sql = "delete from userinfo where userid=?";
		db.execute(sql, [user.userid],  function(status){
			callback(status);
		});
	}
}	


