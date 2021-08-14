import React, { useState } from 'react'
import StepInput from './StepInput'

const StepOne = () => {
  const [startingBudget, setStartingBudget] = useState(0)
  const [numOfAccounts, setNumOfAccounts] = useState(0)
  const [showStepOne, setShowStepOne] = useState(true)

  const handleStartingBudget = (event) => {
    let val = parseInt(event.target.value)
    if (val) { setStartingBudget(val) }
  }

  const handleNumOfAccounts = (event) => {
    let val = parseInt(event.target.value)
    if (val) { setNumOfAccounts(val) }
  }

  const handleShowStepOne = () => {
    setShowStepOne(!showStepOne)
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
      <button id="saveStepOne" onClick={handleShowStepOne}>Next</button>
    </div>
  )
}

export default StepOne