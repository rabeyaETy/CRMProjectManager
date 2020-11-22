var db = require('./db');

module.exports={

	getById: function(noticeid, callback){

		var sql = "select * from noticeinfo where noticeid=?";
		db.getResults(sql, [noticeid], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	
	getAllApproved : function(notice, callback){
		var sql = "select * from noticeinfo where noticestatus = ?";

		db.getResults(sql, [notice.noticestatus], function(results){

			console.log(results);

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from noticeinfo";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAllRequest : function(notice, callback){
		var sql = "select * from noticeinfo where noticestatus =?";

		db.getResults(sql, [notice.noticestatus], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(notice, callback){
		var sql = "insert into noticeinfo values('', ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [notice.creatorid, notice.title, notice.description, notice.noticedate, notice.expiredate, notice.noticestatus], function(status){
			callback(status);
		});
	},

	postStatusUpdate: function(notice, callback){
		var sql = "update noticeinfo set noticestatus=? where noticeid=?";		
		db.execute(sql, [notice.noticestatus, notice.noticeid], function(status){
			callback(status);
			});
		
	},
	update : function(notice, callback){
		var sql = "update noticeinfo set title=?, description=?, where noticeid=?";		
		db.execute(sql, [notice.title, notice.description, notice.noticeid], function(status){
			callback(status);
			});
	},

	ChangeStatusAp : function(notice, callback){
		var sql = "update noticeinfo set noticestatus=? where noticeid=?";
		db.execute(sql, [notice.noticestatus, notice.noticeid],  function(status){
			callback(status);
		});
	},

	ChangeStatusRej : function(notice, callback){
		var sql = "update noticeinfo set noticestatus=? where noticeid=?";
		db.execute(sql, [notice.noticestatus, notice.noticeid],  function(status){
			callback(status);
		});
	},

	delete : function(notice, callback){
		var sql = "delete from noticeinfo where noticeid=?";
		db.execute(sql, [notice.noticeid],  function(status){
			callback(status);
		});
	}
}	


