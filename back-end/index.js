const express = require('express');
require('dotenv').config();
const cors = require('cors');

const router = require('./routers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('OK');
});

app.use(router);

app.listen(port, () => console.log('Rodando na porta', port));