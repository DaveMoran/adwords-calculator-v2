import React, {useState, useEffect} from 'react'
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Notification from './components/Notification';
import accountService from './services/accounts'
import './App.css';

const App = () => {
  const [profile, setProfile] = useState({})
  const [showApp, setShowApp] = useState(false)
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    accountService
      .getProfile()
      .then(response => {
        setProfile(response.data)
        setShowApp(true)
      })
  }, [])

  const addAccount = (e) => {
    e.preventDefault()

    const newAccount = {
      id: (
        profile.accounts.length === 0 ? 
        0 : 
        profile.accounts[profile.accounts.length - 1].id + 1),
      name: "",
      budget: 0
    }

    const newAccounts = profile.accounts.concat(newAccount)

    const profileObject = {
      ...profile,
      accounts: newAccounts
    }

    accountService
      .create(profileObject)
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
            <div class="col">
              <Notification message={message} messageType={messageType} />
            </div>
          </div>
        </div>
        {showApp && 
          <div className="container">
            <div className="row">
              <div className="col">
                <StepOne profile={profile} />
                <StepTwo
                  profile={profile}
                  setMessage={setMessage}
                  setMessageType={setMessageType}
                  addAccount={addAccount} />
              </div>
              <div className="col">
                <StepThree
                  profile={profile} />
              </div>
            </div>
          </div>
        }
        </main>
    </div>
  );
}

export default App;
