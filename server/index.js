const express = require('express');
const bodyParser = require('body-parser');

const port = 4000;
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});
