import axios from 'axios'
import React, { useState } from 'react'
import StepInput from './StepInput'

const StepOne = (props) => {
  const { profile, saveBudget} = props
  const [startingBudget, setStartingBudget] = useState(profile.startingBudget)
  
  const handleStartingBudget = (event) => {
    let val = parseInt(event.target.value)
    if (val ) { setStartingBudget(val) }
  }

  return (
    <div id="stepOne" className="step">
      <h2>Step 1</h2>
      <StepInput
        label="What's your starting budget?"
        inputID="startingBudget"
        type="number"
        value={startingBudget ? startingBudget : 0}
        onChange={handleStartingBudget} />
      <br />
      <button id="saveStepOne" onClick={() => saveBudget(startingBudget)}>Save</button>
    </div>
  )
}

export default StepOne