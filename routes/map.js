var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
//map name and image
var db = mongo('museum', ['map']);
//information
var db_info = mongo('museum', ['mapInfo']);

router.get('/', function(req, res, next) {
  db.map.find({}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });
});

router.get('/info', function(req, res, next) {
  db_info.mapInfo.find({}, function(err, doc){
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


router.post('/info', function(req, res) {
  var map_name = req.body.map_name;
  var link = req.body.link;

  var facility_type = req.body.facility_type;
  var exhibit_id = req.body.exhibit_id;
  var info = req.body.info;
  var info_type = req.body.info_type;
  db_info.mapInfo.insert(
        {
            map_name : map_name,
            link : link,
            facility_type : facility_type,
            exhibit_id: exhibit_id,
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
  
  db.map.update(
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
  var link = req.params.link;

  var facility_type = req.body.facility_type;
  var exhibit_id = req.body.exhibit_id;
  var info = req.body.info;
  var info_type = req.body.info_type;
  db_info.mapInfo.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {
            
            link : link,
            map_name : map_name,
            facility_type : facility_type,
            exhibit_id : exhibit_id,
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
