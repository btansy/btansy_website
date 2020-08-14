const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('dist'))
//app.use('/static', express.static(path.join(__dirname, '\server\public')))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})