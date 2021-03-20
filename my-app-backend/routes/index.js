var express = require('express');
var router = express.Router();
const jwt = require('njwt')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  const token = { userExists: false, email:'aish@gmail.com'}
  const token1 = jwt.create(token, 'top-secret-phrase')
  token1.setExpiration(new Date().getTime() + 60*1000)
  res.send(token1.compact())

  // res.json({data:});
});

router.post('/newUser', function(req, res, next) {
  console.log("hello" + req);
  // const token = { userExists: true, email:'aish@gmail.com'}
  // const token1 = jwt.create(token, 'top-secret-phrase')
  // token1.setExpiration(new Date().getTime() + 60*1000)
  // res.send(token1.compact())
  res.send({ userExists: false, email:'aish@gmail.com'});
  // res.sendStatus(200);
  // res.json({data:});
});

router.get('/projects', function(req, res, next) {
  const j = [
    {
      project_id: "1",
      project_name: "proj1"
    },
    {
      project_id: "2",
      project_name: "proj2"
    },
    {
      project_id: "3",
      project_name: "proj3"
    }
  ]
  res.json(j);
});

router.get('/allPods', function(req, res, next) {
  const j = [
    {
      pod_id: "1",
      pod_name: "pod1",
      pod_status: "Running",
      pod_restarts: "0",
      pod_age: "27 mins",
      pod_cpu: "1",
      pod_memory: "19MB",
      project_id:"1"
    },
    {
      pod_id: "2",
      pod_name: "pod2",
      pod_status: "Running",
      pod_restarts: "0",
      pod_age: "27 mins",
      pod_cpu: "1",
      pod_memory: "19MB",
      project_id:"2"
    },
    {
      pod_id: "3",
      pod_name: "pod3",
      pod_status: "Running",
      pod_restarts: "0",
      pod_age: "27 mins",
      pod_cpu: "1",
      pod_memory: "19MB",
      project_id: "3"
    }
  ]
  res.json(j);
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
