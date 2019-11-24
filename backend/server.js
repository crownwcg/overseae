const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('COMING SOON');
  console.log('response sent');
});

const port = process.env.PORT || 8080
app.listen(
  port, 
  () => console.log(`App listening on port ${port}!`));