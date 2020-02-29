const router = require('express').Router()
const fs = require('fs')

router.get("/user", async (req, res) => {
  const data = await fs.readFileSync('D:/geekhub/homework17/server/data/user.json');
  res.send(JSON.parse(data))
});

router.post("/user", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/user.json');
  data = JSON.parse(data);
  console.log(data);
  const user = {
    id: data[data.length-1].id + 1,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
  };
  data.push(user);
  await fs.writeFileSync('D:/geekhub/homework17/server/data/user.json', JSON.stringify(data));
  res.send(user);
});

router.delete("/user/:id", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/user.json');
  data = JSON.parse(data);
  const filteredData = await data.filter(user => user.id !== +req.params.id);
  await fs.writeFileSync('D:/geekhub/homework17/server/data/user.json', JSON.stringify(filteredData));
  res.send(filteredData);
});

router.put("/user/:id", async (req, res) => {
  let data = await fs.readFileSync('D:/geekhub/homework17/server/data/user.json');
  data = JSON.parse(data);

  let userInd;
  for(let i = 0; i < data.length; i++) {
    userInd = i;
    if (data[i].id === +req.params.id) break;
  }

  if(!userInd) res.sendStatus(404)

  for (let [key, value] of Object.entries(req.body)) {
    data[userInd][key] = value
  }
  await fs.writeFileSync('D:/geekhub/homework17/server/data/user.json', JSON.stringify(data));
  res.send(data);
});

module.exports = router;
