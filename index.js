const express = require('express')
const app = express()

let accounts = [
  {
    "id": 3,
    "name": "red",
    "desiredSpend": 1500,
    "currSpend": 998,
    "newDaily": 45.63
  },
  {
    "id": 4,
    "name": "blue",
    "desiredSpend": 1500,
    "currSpend": 1985,
    "newDaily": 0
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/accounts/', (request, response) => {
  response.json(accounts)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})