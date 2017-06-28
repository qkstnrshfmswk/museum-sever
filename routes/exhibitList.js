var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
   res.json([{"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_MP.PNG",
            "exhibit_name": [{"line":"Hall of"}, {"line":"Mountain people"}],
            "exhibit_loc": "GF"},
            {"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_WM.PNG",
            "exhibit_name": [{"line":"Hall of"}, {"line":"World Mountain"}],
            "exhibit_loc": "BF"},
            {"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_MA.PNG",
            "exhibit_name": [{"line":"Hall of"}, {"line":"Mountain Activities"}],
            "exhibit_loc": "BF"},
            {"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_AE.PNG",
            "exhibit_name": [{"line":"Hall of"}, {"line":"Associates\' Exhibition"}],
            "exhibit_loc":"BF"}
            ]);
})


module.exports = router;