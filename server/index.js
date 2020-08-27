const express = require('express')
const app = express()
const port = 3000

// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// helmet
const helmet = require('helmet')
app.use(helmet())

// public directory
app.use(express.static('public'))
app.use(express.static('dist'))
//app.use('/static', express.static(path.join(__dirname, '\server\public')))

// API routs
app.get('/', (req, res) => {
  res.send('index.html');
})
app.post('/message', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})