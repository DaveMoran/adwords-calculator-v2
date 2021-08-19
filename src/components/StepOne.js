import axios from 'axios'
import React, { useState } from 'react'
import StepInput from './StepInput'

const StepOne = (props) => {
  const { account, handleShowStepOne, handleShowStepTwo} = props
  const [startingBudget, setStartingBudget] = useState(account.startingBudget)
  
  const handleStartingBudget = (event) => {
    let val = parseInt(event.target.value)
    if (val ) { setStartingBudget(val) }
  }

  const handleSaveStepOne = () => {
    const accountObject = {
      ...account,
      startingBudget: startingBudget,
    }

    axios
      .post('http://localhost:3001/profile', accountObject)
      .then(response => {
        console.log(response)
      })

    handleShowStepOne()
    handleShowStepTwo()
  }

  return (
    <div id="stepOne" className="step">
      <h2>Step 1</h2>
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