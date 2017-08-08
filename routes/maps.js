var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
//map name and image
var db = mongo('museum', ['maps']);
//information
var db_info = mongo('museum', ['mapsInfo']);

router.get('/', function(req, res, next) {
  db.maps.find({}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });
});

router.get('/info', function(req, res, next) {
  db_info.mapsInfo.find({}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });
});

router.post('/', function(req, res) {
  var map_img = req.body.map_img;
  var map_name = req.body.map_name;
  
  db.map.insert(
        {
            map_img : map_img,
            map_name : map_name
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});


router.post('/map_info', function(req, res) {
  var map_name = req.body.map_name;
  var link = req.body.link;

  var facility_type = req.body.facility_type;
  var exhibit_id = req.body.exhibit_id;
  var info = req.body.info;
  var info_type = req.body.info_type;
  db_info.mapsInfo.insert(
        {
            map_name : map_name,
            info : info,
            info_type : info_type
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});


router.put('/:_id', function(req, res, next){
  var id = req.params._id;

  var map_name = req.body.map_name;
  var map_img = req.body.map_img;
  
  db.maps.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {            
            map_name : map_name,
            map_img : map_img           
      }
    }, {upset : false},
    function (err, doc){
      if(err) res.send(err);
      res.json(doc);
    }
  )
});

router.put('/info/:_id', function(req, res, next){
  var id = req.params._id;
  var map_name = req.params.map_name;
  var info = req.body.info;
  var info_type = req.body.info_type;
  db_info.mapsInfo.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {   
            map_name : map_name,
            info : info,
            info_type : info_type
      }
    }, {upset : false},
    function (err, doc){
      if(err) res.send(err);
      res.json(doc);
    }
  )
});


module.exports = router;
