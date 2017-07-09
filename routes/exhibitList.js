var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
   res.json([{"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/hall_MP.png",
            "exhibit_name": [{"line":"Hall of"}, {"line":"Mountain people"}],
            "exhibit_loc": "GF",
            "id":"MP"},
            {"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/hall_WM.png",
            "exhibit_name": [{"line":"Hall of"}, {"line":"World Mountain"}],
            "exhibit_loc": "BF",
            "id":"WM"},
            {"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/hall_MA.png",
            "exhibit_name": [{"line":"Hall of"}, {"line":"Mountain Activities"}],
            "exhibit_loc": "BF",
            "id":"MA"},
            {"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/hall_AE.png",
            "exhibit_name": [{"line":"Hall of"}, {"line":"Associates\' Exhibition"}],
            "exhibit_loc":"BF",
            "id":"AE"}
            ]);
})


module.exports = router;