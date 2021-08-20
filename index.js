const http = require('http')


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

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(accounts))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)