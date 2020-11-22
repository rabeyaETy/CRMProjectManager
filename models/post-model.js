var db = require('./db');

module.exports={

	getById: function(postid, callback){

		var sql = "select * from postinfo where postid=?";
		db.getResults(sql, [postid], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	
	getAll : function(callback){
		var sql = "select * from postinfo";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAllApproved : function(post, callback){
		var sql = "select * from postinfo where postaprovalstatus = ?";

		db.getResults(sql, [post.postaprovalstatus], function(results){

			console.log(results);

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(post, callback){
		var sql = "insert into postinfo values('', ?, ?, ?, ?, ?)";
		db.execute(sql, [post.userid, post.postdescription, post.postdate, post.postapprovalstatus, post.filepath], function(status){
			callback(status);
		});
	},
	postStatusUpdate: function(post, callback){
		var sql = "update postinfo set postapprovalstatus=? where postid=?";		
		db.execute(sql, [post.postapprovalstatus, post.postid], function(status){
			callback(status);
			});
		
	},
	update : function(post, callback){
		var sql = "update postinfo set postdescription=?, filepath=? where postid=?";		
		db.execute(sql, [post.postdescription, post.filepath, post.postid], function(status){
			callback(status);
			});
	},
	delete : function(post, callback){
		var sql = "delete from postinfo where postid=?";
		db.execute(sql, [post.postid],  function(status){
			callback(status);
		});
	}
}	


