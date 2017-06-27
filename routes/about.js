var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.get('/img', function(req, res, next){
  res.json([{"info_img": 'http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg'},
   {"info_img":'http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/2.jpg'}]);
})

module.exports = router;
