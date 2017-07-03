var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museum', ['museumItems'])

router.get('/', function(req, res, next) {
  db.museumItems.find().sort({item_hit_num:1}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });
});

router.post('/', function(req, res) {
  var item_id = req.body.item_id;
  var item_name = req.body.item_name;
  var item_img = req.body.item_img;
  var item_desc = req.body.item_desc;
  var item_video = req.body.item_video;
  var category_id = req.body.category_id;
  var section_id = req.body.section_id;
  var subsection_id = req.body.subsection_id;
  var item_hit_num = req.body.item_hit_num;

  db.museumItems.insert(
        {
            item_id : item_id,
            item_name : item_name,
            item_img: item_img,
            item_desc: item_desc,
            item_video: item_video,
            category_id : category_id,
            section_id: section_id,
            subsection_id : subsection_id,
            item_hit_num : item_hit_num
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});

router.put('/:_id', function(req, res, next){
  var id = req.params._id;

  var item_id = req.body.item_id;
  var item_name = req.body.item_name;
  var item_img = req.body.item_img;
  var item_desc = req.body.item_desc;
  var item_video = req.body.item_video;
  var category_id = req.body.category_id;
  var section_id = req.body.section_id;
  var subsection_id = req.body.subsection_id;
  var item_hit_num = req.body.item_hit_num;

  db.museumItems.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {
            item_id : item_id,
            item_name : item_name,
            item_img: item_img,
            item_desc: item_desc,
            item_video: item_video,
            category_id : category_id,
            section_id: section_id,
            subsection_id : subsection_id,
            item_hit_num : item_hit_num            
      }
    }, {upseet : false},
    function (err, doc){
      if(err) res.send(err);
      res.json(doc);
    }
  )
});


router.get('/:_itemID', function(req, res, next){
  id = req.params._itemID;
  console.log(id);
  switch(id)
  {
    case '1':  res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item1",
                        "desc": "Item1 description"}]);
    break; 
    case '2': res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item2",
                        "desc": "Item1 description"}]);
    break;
    case '3': res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item3",
                        "desc": "Item1 description"}]);
    break;
    case '4': res.json([{"item_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/1.jpg", 
                        "item_name" :"item4",
                        "desc": "Item1 description"}]);
    break;
  }

})

module.exports = router;
