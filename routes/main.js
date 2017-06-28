var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.json([{"img_path": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg"},
            {"img_path": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/2.jpg"},
            {"img_path": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/3.jpg"}]);
})

module.exports = router;