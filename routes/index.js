var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/poster', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/poster', function(req, res, next) {
  console.log(req.body);
  res.render('index', { title: 'Express' });
});

module.exports = router;
