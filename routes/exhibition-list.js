var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museum', ['exhibitsList']);

router.get('/', function(req, res, next){
    db.exhibitsList.find().sort({index:1}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    });
});

router.post('/', function(req, res){
    var exhibit_img = req.body.exhibit_img;
    var exhibit_name = req.body.exhibit_name;
    var exhibit_loc = req.body.exhibit_loc;
    var id = req.body.exhibit_id;
    var index = req.body.index;
    db.exhibitsList.insert(
        {
            exhibit_img : exhibit_img,
            exhibit_name : exhibit_name,
            exhibit_loc : exhibit_loc,
            id : id,
            index: index
        },
        function(err, doc){
            if(err) res.send(err);
            res.json(doc);
        })
});

router.delete('/:_id',function (req,res) {
    id = req.params._id;
 
    db.exhibitsList.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});


module.exports = router;