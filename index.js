// print Hello World
// console.log("Hello World")

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send("hello world")
})


app.get('/welcome', (req, res) => {
    res.send('welcome to the serverside!')
  })

  app.post('/', (req, res) => {
    res.send("received")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})