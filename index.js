console.log("shrikant baraj gouda!");

const express = require("express");

const app = express();

const port = 3000;



  

app.get("/", (req, res) => {
  res.send("you are now in home page");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>you are now in twitter page</h1>");
});

app.listen(port, () => {
  console.log(`example app listern in port ${port}`);
});






















// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//  app.get("/twitter", (req,res) => {
//     res.send("<h1>you are now in twitter page</h1>")
//  })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
