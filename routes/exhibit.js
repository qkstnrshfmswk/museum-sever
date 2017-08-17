var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museum', ['exhibitHall']);
/* GET home page. */


router.get('/:exhibit_ID', function(req, res, next){
    id = req.params.exhibit_ID;
    db.exhibitHall.find({"exhibit_id":id}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    });
});

//---- This is not used
router.get('/', function(req, res, next){
    db.exhibitHall.find({}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    })
})

router.post('/', function(req, res){
    var exhibit_img = req.body.exhibit_img;
    var exhibit_name = req.body.exhibit_name;
    var exhibit_loc = req.body.exhibit_loc;
    var exhibit_id = req.body.exhibit_id;
    var exhibit_desc = req.body.exhibit_desc;
    var section_list = req.body.section_list;
    db.exhibitHall.insert(
        {
            exhibit_img : exhibit_img,
            exhibit_name :exhibit_name,
            exhibit_loc : exhibit_loc,
            exhibit_id : exhibit_id,
            exhibit_desc : exhibit_desc,
            section_list : section_list
        },
        function(err, doc){
            if(err) res.send(err);
            res.json(doc);
        })
});

router.delete('/:_id',function (req,res) {
    id = req.params._id;
 
    db.exhibitHall.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});
   

module.exports = router;