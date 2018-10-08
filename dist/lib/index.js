const PORT = 1000;

import express from 'express';

// import type { $Application, $Request, $Response } from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.info(`Server listening on PORT ${PORT}`);
});