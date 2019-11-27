const express = require('express');
const cors = require('cors');
const api = require('./routes/api');

const app = express();
app.use(cors());

app.use('/api', api);

const port = process.env.PORT || 8080
app.listen(
  port,
  () => console.log(`App listening on port ${port}!`));