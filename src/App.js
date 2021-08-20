import React, {useState, useEffect} from 'react'
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Notification from './components/Notification';
import accountService from './services/accounts'
import profileService from './services/profile'
import './App.css';

const App = () => {
  const [profile, setProfile] = useState({})
  const [accounts, setAccounts] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    accountService
      .getAll()
      .then(response => {
        setAccounts(response.data)
      })

    profileService
      .getAll()
      .then(response => {
        setProfile(response.data)
      })
  }, [])

  const addAccount = (e) => {
    e.preventDefault()
    const accountObject = {
      id: (
        accounts.length === 0 ? 
        0 : 
        accounts[accounts.length - 1].id + 1),
      name: "",
      desiredSpend: 0,
      currSpend: 0
    }

    accountService
      .create(accountObject)
      .then(response => {
        setAccounts(accounts.concat(response.data))
      })
  }

  const removeAccount = (id) => {
    accountService
      .deleteAccount(id)
      .then(response => {
        const filteredAccounts = accounts.filter(account => {
          if (account.id !== id) { return account }
        })
        setAccounts(filteredAccounts)
      })
  }

  const saveBudget = (newBudget) => {
    const profileObj = { "startingBudget": newBudget }
    profileService
      .updateAll(profileObj)
      .then(response => {
        setProfile(response.data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AdWords Calculator v1</h1>
      </header>
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
              <StepOne 
                profile={profile}
                saveBudget={saveBudget} />
              <StepTwo
                accounts={accounts}
                setMessage={setMessage}
                setMessageType={setMessageType}
                addAccount={addAccount}
                removeAccount={removeAccount} />
            </div>
            <div className="col">
              <StepThree 
                profile={profile}
                accounts={accounts} />
            </div>
          </div>
        </div>
        </main>
    </div>
  );
}

export default App;
