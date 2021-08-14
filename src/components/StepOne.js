import axios from 'axios'
import React, { useState } from 'react'
import StepInput from './StepInput'

const StepOne = (props) => {
  const {account, handleShowStepOne} = props
  const [startingBudget, setStartingBudget] = useState(account.startingBudget)
  const [numOfAccounts, setNumOfAccounts] = useState(account.numOfAccounts)
  
  const handleStartingBudget = (event) => {
    let val = parseInt(event.target.value)
    if (val ) { setStartingBudget(val) }
  }

  const handleNumOfAccounts = (event) => {
    let val = parseInt(event.target.value)
    if (val) { setNumOfAccounts(val) }
  }

  const handleSaveStepOne = () => {
    const accountObject = {
      ...account,
      startingBudget: startingBudget,
      numOfAccounts: numOfAccounts
    }

    axios
      .post('http://localhost:3001/account', accountObject)
      .then(response => {
        console.log(response)
      })

    handleShowStepOne()
  }

  return (
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
        onChange={handleStartingBudget} />
      <br />
      <button id="saveStepOne" onClick={handleSaveStepOne}>Next</button>
    </div>
  )
}

export default StepOne