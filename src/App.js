import React, {useState, useEffect} from 'react'
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Notification from './components/Notification';
import axios from 'axios';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState({})
  const [showStepOne, setShowStepOne] = useState(false)
  const [showStepTwo, setShowStepTwo] = useState(false)
  const [showStepThree, setShowStepThree] = useState(false)
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/profile')
      .then(response => {
        console.log('promise fulfilled')
        setProfile(response.data)
        setShowStepOne(true)
        setShowStepTwo(true)
        setShowStepThree(true)
      })
  }, [])

  const handleShowStepOne = () => { setShowStepOne(!showStepOne) }

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
        <div className="container">
          <div className="row">
              <Notification message={message} messageType={messageType} />
          </div>
          <div className="row">
            <div className="col">
              { showStepOne && 
                <StepOne 
                  profile={profile}
                  showStepOne={showStepOne}
                  handleShowStepOne={handleShowStepOne} />
              }
            </div>
            <div className="col">
              { showStepTwo &&
                <StepTwo 
                  profile={profile}
                  setMessage={setMessage}
                  setMessageType={setMessageType} />
              }
            </div>
            <div className="col">
              {showStepThree &&
                <StepThree
                  profile={profile} />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
