var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({"facilities":"Library"},
             {"facilities":"Gorkha Village Restaurant"},
             {"facilities":"Souvenir Shop"},
             {"facilities": "Garden"},
             {"facilities":"Wall climbing"})
});

router.get('/libraries', function(req, res, next){
  res.json([{"lib_name":"Annapurna",
            "location":"nepal"}]);

});

router.get('/shop', function(req, res, next){
  res.json([{"lib_name":"Annapurna",
            "location":"nepal"}]);

});

router.get('/restaurant', function(req, res, next){
  res.json([{"lib_name":"Annapurna",
            "location":"nepal"}]);

});
router.get('/Garden', function(req, res, next){
  res.json([{"lib_name":"Annapurna",
            "location":"nepal"}]);

});
router.get('/climing', function(req, res, next){
  res.json([{"lib_name":"Annapurna",
            "location":"nepal"}]);

});
module.exports = router;
