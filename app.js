
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('\nHello World!!\n\n')
})

app.get('/status', (req, res) => {
    res.send('\nStatus: UP\n\n')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

