var express = require('express');
var cors = require('cors');
const multer=require('multer');
const upload=multer({dest:'uploads/'});

require('dotenv').config();


var app = express();


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.post('/api/fileanalyse',upload.single('upfile'),function(req,res){
  console.log(req.file);
  if(!req.file){
    return res.status(400).json({
      error:"No File uploaded"
    })
  }
  res.status(200).json({
    name:req.file.originalname,
    type:req.file.mimetype,
    size:req.file.size
  })
})


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});





const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
