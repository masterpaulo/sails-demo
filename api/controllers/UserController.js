/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res){
		User.findAll(function(err,user){
			if(err) return res.send(err, 500);

			res.view({
				model:users
			});
		});
	},

	new : function(req,res){
		res.view();
	},
	create : function(req,res){
		
	},
	show : function(req,res){
		
	},
	edit : function(req,res){
		
	},
	update : function(req,res){
		
	},
	destroy : function(req,res){
		
	}


};

