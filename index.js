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

app.get('/api/accounts/:id', (request, response) => {
  const id = Number(request.params.id)
  const account = accounts.find(account => account.id === id)

  if(account) {
    response.json(account)
  } else {
    response.status(404).end()
  }
  
})

app.delete('/api/accounts/:id', (request, response) => {
  const id = Number(request.params.id)
  accounts = accounts.filter(account => account.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})