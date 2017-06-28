var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/museum_info', function(req, res, next){
  res.json([{"info_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", "info": "About museum : This is museum"}]);
})


router.get('/main', function(req, res, next){
  res.json([{"img_path": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg"},
            {"img_path": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/2.jpg"},
            {"img_path": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/3.jpg"}]);
})

module.exports = router;