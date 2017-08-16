var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
//map name and image
var db = mongo('museum', ['map']);
//information
var db_info = mongo('museum', ['mapInfo']);

router.get('/', function(req, res, next) {
  
  // db.map.find({}, function(err, doc){
  //   if(err) res.send(err);
  //   res.json(doc);
  // });
  res.json([
{
"map_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/sitemap.jpg",
"map_name": "SITE MAP"
},
{
"map_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/basement.jpg",
"map_name": "UNDERGROUND"
},
{
"map_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/ground.jpg",
"map_name": "GROUND"
}
])
});

router.get('/info', function(req, res, next) {
  res.json([{
"map_name" : "SITE MAP",
"info" : "Office: 977-61-46042, 462322, 462336",
"info_type" : "contact"
}, {
"map_name" : "SITE MAP",
"info" : "Library: 977-61-46049",
"info_type" : "contact"
}, {
"map_name" : "SITE MAP",
"info" : "Souvenir shop: 977-61-46048",
"info_type" : "contact"
}, {
"map_name" : "SITE MAP",
"info" : "Gorkha Village Restaurant: 977-61-46047",
"info_type" : "contact"
}, 
{
"map_name" : "SITE MAP",
"info" : "Nepalese: Rs. 80.00",
"info_type" : "fee"
}, {
"map_name" : "SITE MAP",
"info" : "Students: Rs. 40.00",
"info_type" : "fee"
}, 
{
"map_name" : "SITE MAP",
"info" : "SAARC Countries' Visitors: Rs. 200.00",
"info_type" : "fee"
}, 
{
"map_name" : "SITE MAP",
"info" : "Foreigners: Rs. 400.00",
"info_type" : "fee"
}, 
{
"map_name" : "SITE MAP",
"info" : "Garden: Rs. 20.00",
"info_type" : "fee"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Hall of Mountain People",
"info_type" : "hall"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Hall of World Mountains",
"info_type" : "hall"
},
{
"map_name" : "UNDERGROUND",
"info" : "Hall of Mountain Activities ",
"info_type" : "hall"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Audio Visual Hall",
"info_type" : "others"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Office",
"info_type" : "others"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Rest Room",
"info_type" : "others"
}, 


{
"map_name" : "GROUND",
"info" : "Hall of Associates’ Exhibition",
"info_type" : "hall"
}, {
"map_name" : "GROUND",
"info" : "Conference Hall",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Conference Hall",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Library",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Lekhang",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Store",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Baggage Box",
"info_type" : "facility"
},{
"map_name" : "GROUND",
"info" : "Museum Guide",
"info_type" : "facility"
}
])
  
  // db_info.mapInfo.find({}, function(err, doc){
  //   if(err) res.send(err);
  //   res.json(doc);
  // });
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
