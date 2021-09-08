const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password aw an arguement: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = 
  `mongodb+srv://adwords-calc:kX0cTxy5rEdLt2Io@cluster0.dl6og.mongodb.net/adwords-calc?retryWrites=true`

mongoose.connect(url)

const profileSchema = new mongoose.Schema({
  startingBudget: Number
})

const Profile = mongoose.model('Profile', profileSchema)

const profile = new Profile({
  startingBudget: 3000
})

profile.save().then(result => {
  console.log('profile saved!')
  mongoose.connection.close()
})