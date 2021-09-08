const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password aw an arguement: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = 
  `mongodb+srv://adwords-calc:${password}@cluster0.dl6og.mongodb.net/adwords-calc?retryWrites=true`

mongoose.connect(url)

const accountSchema = new mongoose.Schema({
  name: String,
  desiredSpend: Number,
  currSpend: Number,
  newDaily: Number
})

const Account = mongoose.model('Account', accountSchema)

const account = new Account({
  name: "Mongo",
  desiredSpend: 3000,
  currSpend: 1873,
  newDaily: 0
})

// account.save().then(result => {
//   console.log('account saved!')
//   mongoose.connection.close()
// })

Account.find({}).then(result => {
  result.forEach(account => {
    console.log(account)
  })
  mongoose.connection.close()
})