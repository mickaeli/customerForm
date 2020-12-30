const http = require('http');
const express = require('express');
cors = require("cors");
var bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(5000, () => console.log(`Server has started.`));


app.get('/countries', (req, res) => {
  res.json({ countries: ['France', 'Israel', 'Allemagne', 'Angleterre', 'Portugal'] });
});

app.post('/customer', (req, res) => {
  const customer = req.body;
  if(customer.firstname !== '' && customer.lastname !== '' && customer.country !== '' && customer.email !== '') {
      res.json({
      status: 'OK'
    });
  } else {
    res.json({
      status: 'FAILED'
    });
  }
  
})