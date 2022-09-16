const app = require('express')()
const consign = require('consign')

const port = process.env.PORT || 9001
 
consign()
  .then('src/config/middlewares')
  .then('src/api/methods')
  .into(app)

app.listen(port, () => {
  console.info(`Server executando em http://localhost:${port} ...`)
})

