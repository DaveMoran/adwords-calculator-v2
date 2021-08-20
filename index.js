const express = require('express')
const app = express()

app.use(express.json())

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

app.get('/api/accounts', (request, response) => {
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

const generateId = () => {
  const maxId = accounts.length > 0
    ? Math.max(...accounts.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/accounts', (request, response) => {
  const body = request.body

  if(!body.name) {
    return response.status(400).json({
      error: 'Name missing from body'
    })
  }

  const account = {
    name: body.name,
    currSpend: body.currSpend || 0,
    desiredSpend: body.desiredSpend || 0,
    id: generateId()
  }

  accounts = accounts.concat(account)
  response.json(account)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})