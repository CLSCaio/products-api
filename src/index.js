require('./database')
const app = require('express')()

const express = require('express')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = process.env.PORT || 9001
 
app.get('/', (req, res) => {
  return res.json(db)
})

app.listen(port, () => {
  console.info(`Server executando em http://localhost:${port} ...`)
})

