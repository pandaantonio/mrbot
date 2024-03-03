require("dotenv/config");

const bot = require("./client/index");
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

bot.login(process.env.TOKEN);