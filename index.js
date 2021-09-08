require('dotenv').config()
const express = require('express')
const app = express()
const Account = require('./models/account')

app.use(express.json())

app.use(express.static('build'))

const requestLogger = (request, response, next) => {
  console.log('Method:',  request.method)
  console.log('Path:',    request.ppath)
  console.log('Body:',    request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/api/accounts', (request, response) => {
  Account.find({}).then(accounts => {
    response.json(accounts)
  })
})

app.get('/api/accounts/:id', (request, response) => {
  Account.findById(request.params.id).then(account => {
    response.json(account)
  })
})

app.delete('/api/accounts/:id', (request, response) => {
  Account.findByIdAndRemove(request.params.id).then(account => {
    response.json(account)
  })
})

app.post('/api/accounts', (request, response) => {
  const body = request.body

  if(!body.name) {
    return response.status(400).json({ error: 'content missing' })
  }

  const account = new Account({
    name: body.name,
    currSpend: body.currSpend || 0,
    desiredSpend: body.desiredSpend || 0,
    newDaily: body.newDaily || 0,
  })

  account.save().then(savedAccount => {
    response.json(savedAccount)
  })
})

app.put('/api/accounts/:id', (request, response) => {
  const body = request.body
  
  Account.findByIdAndUpdate(request.params.id, body).then(account => {
    response.json(account)
  })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send(({ error: 'Unknown endpoint.'}))
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})