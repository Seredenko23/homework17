const router = require('express').Router()
const fs = require('fs')

router.get("/post", async (req, res) => {
  const data = await fs.readFileSync('D:/geekhub/homework17/server/data/post.json');
  res.send(JSON.parse(data))
});

router.get("/post/:id", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/post.json');
  data = JSON.parse(data);
  data = data.filter(post => post.userId === +req.params.id)
  res.send(data)
});

router.post("/post", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/post.json');
  data = JSON.parse(data);
  console.log(data);
  const post = {
    userId: req.body.userId,
    id: data[data.length-1].id + 1,
    title: req.body.title,
    body: req.body.body,
  };
  data.push(post);
  await fs.writeFileSync('D:/geekhub/homework17/server/data/post.json', JSON.stringify(data));
  res.send(post);
});

router.delete("/post/:id", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/post.json');
  data = JSON.parse(data);
  const filteredData = await data.filter(post => post.id !== +req.params.id);
  await fs.writeFileSync('D:/geekhub/homework17/server/data/post.json', JSON.stringify(filteredData));
  res.send(filteredData);
});

router.put("/post/:id", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/post.json');
  data = JSON.parse(data);

  let postInd;
  for(let i = 0; i < data.length; i++) {
    postInd = i;
    if (data[i].id === +req.params.id) break;
  }

  if(!postInd) res.sendStatus(404)

  for (let [key, value] of Object.entries(req.body)) {
    data[postInd][key] = value
  }
  await fs.writeFileSync('D:/geekhub/homework17/server/data/post.json', JSON.stringify(data));
  res.send(data);
});

module.exports = router;
