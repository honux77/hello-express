var express = require('express');
var router = express.Router();


const shuffle = (arr) => {
  for(let i = arr.length - 1; i > 0; i--) {
    const t = parseInt(Math.random() * arr.length)    
    temp = arr[i]
    arr[i] = arr[t]    
    arr[t] = temp
  }
}

const lotto = () => {
  const a = [];
  for (let i = 1; i <= 45; i++) {
    a.push(i);
  }

  shuffle(a);  
  return a.slice(0, 5).sort((a, b)=>(a - b))
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const arr = lotto();
  console.log("로또: " + arr);
  res.render('index', { lotto: arr });
});

module.exports = router;
