var express = require('express');
var router = express.Router();

router.route('/posts')
		
		//returts posts
		.get(function(req, res){
			//temp 
			res.send({message: 'TODO return all messages'});
		})

		.post(function(req, res){
				res.send({message:'TODO create a new post'});
		});

router.route('/posts/:id')

		.get(function(req, res){

			res.send({message:'TODO message with params' + req.params.id});
		})

		.put(function(req,res){

			res.send({message:'TODO mod post with specific id '+ req.params.id});
		})

		.delete(function(req,res){

			res.send({message:'TODO delete post with specific id '+ req.params.id});
		});

module.exports = router;