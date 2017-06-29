var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/:_exhibit_ID', function(req, res, next){
    id = req.params._exhibit_ID;
    switch(id)
    {
        case '1':  res.json([{"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_MP.PNG",
                              "exhibit_name": [{"line":"Hall of"}, {"line":"Mountain people"}],
                              "exhibit_loc": "GF",
                              "exhibit_desc" : "It shows indigenous habitants of the mountain re-gions of Nepal and the world. \
There life style and culture are exposed impressively below this first basement ball, \
influencing the subconscious of the visitors that they are at the height to understand and know \
the information dis-played just below them.<br><br>\
For the close observation, when the visitors stare down the basement, they are ushered by the museum \
guides to the adjoining video hall to orient them about the people, culture and the mountains of Khumbu region.",
                                "section_list":[{"section_name":"Mountain Section", "section_num": 1}, 
                                                {"section_name":"Geological Section", "section_num": 2},
                                                {"section_name": "Flora and Fauna Section", "section_num" : 3},
                                                {"section_name": "Corner of Dedication", "section_num" : 4}]}]);
        break;

        case '2' : res.json([{"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_WM.PNG",
                              "exhibit_name": [{"line":"Hall of"}, {"line":"World Mountain"}],
                              "exhibit_loc": "GF",
                              "exhibit_desc" : "It shows indigenous habitants of the mountain re-gions of Nepal and the world. \
There life style and culture are exposed impressively below this first basement ball, \
influencing the subconscious of the visitors that they are at the height to understand and know \
the information dis-played just below them.<br><br>\
For the close observation, when the visitors stare down the basement, they are ushered by the museum \
guides to the adjoining video hall to orient them about the people, culture and the mountains of Khumbu region.",
                                "section_list":[{"section_name":"Mountain People of Nepal", "section_num": 1}, 
                                                {"section_name":"Mountain People of the World", "section_num": 2},
                                                {"section_name": "The Mandala", "section_num" : 3}]}]);
        break;

        case '3' :  res.json([{"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_MA.PNG",
                              "exhibit_name": [{"line":"Hall of"}, {"line":"Mountain Activities"}],
                              "exhibit_loc": "GF",
                              "exhibit_desc" : "It shows indigenous habitants of the mountain re-gions of Nepal and the world. \
There life style and culture are exposed impressively below this first basement ball, \
influencing the subconscious of the visitors that they are at the height to understand and know \
the information dis-played just below them.<br><br>\
For the close observation, when the visitors stare down the basement, they are ushered by the museum \
guides to the adjoining video hall to orient them about the people, culture and the mountains of Khumbu region.",
                                "section_list":[{"section_name":"Mountain People of Nepal", "section_num": 1}, 
                                                {"section_name":"Mountain People of the World", "section_num": 2},
                                                {"section_name": "The Mandala", "section_num" : 3}]}]);
        break;

        case '4' :  res.json([{"exhibit_img": "http://ec2-34-224-40-186.compute-1.amazonaws.com:3000/public/exhibit_AE.PNG",
                              "exhibit_name": [{"line":"Hall of"}, {"line":"Associates\' Exhibition"}],
                              "exhibit_loc": "GF",
                              "exhibit_desc" : "It shows indigenous habitants of the mountain re-gions of Nepal and the world. \
There life style and culture are exposed impressively below this first basement ball, \
influencing the subconscious of the visitors that they are at the height to understand and know \
the information dis-played just below them.<br><br>\
For the close observation, when the visitors stare down the basement, they are ushered by the museum \
guides to the adjoining video hall to orient them about the people, culture and the mountains of Khumbu region.",
                                "section_list":[{"section_name":"Mountain People of Nepal", "section_num": 1}, 
                                                {"section_name":"Mountain People of the World", "section_num": 2},
                                                {"section_name": "The Mandala", "section_num" : 3}]}]);
        break;
    }
});


module.exports = router;