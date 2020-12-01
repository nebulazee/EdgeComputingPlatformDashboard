var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/devices', function(req, res, next) {
  console.log("hi")
  res.json([{value:"Nvidia Jetson", label:"Nvidia Jetson"}, 
        {value: "Google Coral",label:"Google Coral"},
        {value: "Raspberry pi 4", label:"Raspberry pi 4"},
        {value: "Raspberry pi 3", label:"Raspberry pi 3"}
      ]);
});

module.exports = router;
