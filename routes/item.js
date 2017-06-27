var express = require('express');
var router = express.Router();


router.get('/:_itemID', function(req, res, next){
  id = req.params._itemID;
  switch(id)
  {
    case 1:  res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item1",
                        "desc": "Item1 description"}]);
    break; 
    case 2: res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item1",
                        "desc": "Item1 description"}]);
    break;
    case 3: res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item1",
                        "desc": "Item1 description"}]);
    break;
    case 4: res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item1",
                        "desc": "Item1 description"}]);
    break;
  }

})

module.exports = router;
