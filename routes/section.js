var express = require('express');
var router = express.Router();

router.get('/:exhibit_ID', function(req, res, next){
  id = req.params.exhibit_ID;
  res.json([{"exhibit_loc": "section1"}, {"section": "section2"}, {"section": "section3"}]);
});

router.get('/item_list', function(req, res, next){
  res.json([{"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item1"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item2"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item3"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item4"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item5"}]);
});

router.get('/item-list', function(req, res, next){
  res.json([{"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item1"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item2"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item3"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item4"},
            {"item_sumnail": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
            "item_name": "item5"}]);
});

module.exports = router;