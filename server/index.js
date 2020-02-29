const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4000;
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});
