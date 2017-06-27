var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.get('/img', function(req, res, next){
  res.json({ info_img: 'http://localhost:3000/public/museum1_3.png'});
})

module.exports = router;
