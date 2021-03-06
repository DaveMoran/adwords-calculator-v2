import React, {useState, useEffect} from 'react'
// import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Notification from './components/Notification';
import accountService from './services/accounts'
// import profileService from './services/profile'
import './App.css';

const App = () => {
  // const [profile, setProfile] = useState({})
  const [accounts, setAccounts] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    accountService
      .getAll()
      .then(response => {
        setAccounts(response.data)
        setShowApp(true)
      })

    // profileService
    //   .getAll()
    //   .then(response => {
    //     setProfile(response.data)
    //     setShowApp(true)
    //   })
  }, [])

  // const saveBudget = (newBudget) => {
  //   const profileObj = { "startingBudget": newBudget }
  //   profileService
  //     .updateAll(profileObj)
  //     .then(response => {
  //       setProfile(response.data)
  //     })
  // }

  const calculateBudgets = () => {
 // get day of the month
    let currDate = new Date(Date.now())
    let currDay = currDate.getDate()
    let currMonth = currDate.getMonth()
    let daysRemaining = 0
    
    // cauclate days remaining in month
    switch(currMonth) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        daysRemaining = 31 - currDay;
        break;
      case 1:
        daysRemaining = 28 - currDay;
        break;
      default:
        daysRemaining = 30 - currDay;
    }

    const newAccts = []
    accounts.forEach(account => {
      // look at remaining amt for existing budgets, divide by remaining days
      let newDaily = account.desiredSpend - account.currSpend
      if (newDaily < 0) {
        // If number is negative (overspend), set budget to 0
        account.newDaily = 0
      } else {
        // Else, set new number
        account.newDaily = Math.floor((newDaily / daysRemaining) * 100) / 100
      }

      newAccts.push(account)
    })

    const promises = []
    newAccts.forEach(account => {
      promises.push(
        accountService.update(account.id, account)
      )
    })

    Promise.all(promises).then(() => { setAccounts(newAccts) })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AdWords Calculator v1</h1>
      </header>
      { showApp && 
        <main>
          <div className="container">
            <h2>Outline</h2>
            <h3>v2: Improvements</h3>
            <ul>
              <li>Host on Heroku</li>
              <li>Add user account</li>
              <li>Save projects per user account</li>
            </ul>
            <h3>v3: 3rd party</h3>
            <ul>
              <li>Add connection to google adwords</li>
              <li>Add sync button to pull values and calculate new budgets</li>
              <li>Send new budgets to adwords, save</li>
            </ul>
          </div>
          <hr />
          <div id="notificationBar" className="container">
            <div className="row">
              <div className="col">
                <Notification message={message} messageType={messageType} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                {/* <StepOne 
                  profile={profile}
                  saveBudget={saveBudget} /> */}
                <StepTwo
                  accounts={accounts}
                  setAccounts={setAccounts}
                  setMessage={setMessage}
                  setMessageType={setMessageType}
                  calculateBudgets={calculateBudgets} />
              </div>
              <div className="col">
                <StepThree 
                  accounts={accounts}/>
              </div>
            </div>
          </div>
        </main>
      }
    </div>
  );
}

export default App;
