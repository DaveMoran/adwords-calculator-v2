import React, {useState} from 'react'
import StepInput from './components/StepInput';
import './App.css';

const App = () => {
  const [startingBudget, setStartingBudget] = useState(0)
  const [numOfAccounts, setNumOfAccounts] = useState(0)
  const [showStepOne, setShowStepOne] = useState(true)

  const handleStartingBudget = (event) => {
    let val = parseInt(event.target.value)
    if(val) { setStartingBudget(val) } 
  }

  const handleNumOfAccounts = (event) => {
    let val = parseInt(event.target.value)
    if(val) { setNumOfAccounts(val) } 
  }

  const handleShowStepOne = () => {
    setShowStepOne(!showStepOne)
  }

  const currDate = () => {
    return new Date().toLocaleDateString()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AdWords Calculator</h1>
      </header>
      <main>
        <div className="container">
          <h2>Outline</h2>
          <h3>v1: Import from memory</h3>
          <ul>
            <li>Get starting budget for the month</li>
            <li>Add projects + budget, ensure they match the final amount</li>
            <li>Ask for current spend of each budget</li>
            <li>Calculate days remaining in the month</li>
            <li>Propose new daily budgets</li>
          </ul>
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
            <div className="col">
              {showStepOne === true && 
                <div id="stepOne" className="step">
                  <h2>Step 1</h2>
                  <StepInput
                    label="How many accounts do you have?"
                    inputID="numOfAccounts"
                    type="number"
                    value={numOfAccounts}
                    onChange={handleNumOfAccounts} />
                  <br />
                  <StepInput
                    label="What's your starting budget?"
                    inputID="startingBudget"
                    type="number" 
                    value={startingBudget}
                    onChange={handleStartingBudget}/>
                  <br />
                  <button id="saveStepOne" onClick={handleShowStepOne}>Next</button>
                </div>
              }
            </div>
            <div className="col">
              <p>{currDate()}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
