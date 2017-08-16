var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
   res.json([{"info_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/info_img.png",
            "info": "Many people in the world may not know much about the small country called Nepal,\
             but they certainly know about this peak, the tallest in the world, called Mount\
             Everest. Not only this highest peak, but also other 8 of the 14 peaks above the height of eight thousand meters\
             in the world stand tall in Himalayan range of Nepal.<br><br>\
             The Himalaya is the source of water resources for billions of people living in the world. \
             Flora and fauna in the Himalayan range is the natural habitat for the thousands\
             of known and unknown species that contribute in maintaining and restructuring the ecosystems of our\
             world, day and night. The little surfaced cultural values of the mountain people, geological mysteries buried\
             underneath; nature’s serene beauty- wonders on its rock- hard and melting surfaces- make the Nepalese\
             proud and people of the world an epicenter for their explorations.<br><br>\
             Mountains and mountaineering have a history of their own. Without preserving it, it will not be long before all\
             the records and evidences will be lost forever. Nepal Mountaineering Association (NMA), established on 1 \
             Nov 1973, initiated the establishment of International Mountain Museum (IMM) in Pokhara. The basic objective\
             for its establishment was made to record, document"}]);
})




module.exports = router;