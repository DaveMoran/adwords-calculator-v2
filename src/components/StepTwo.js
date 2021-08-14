import React, { useState } from 'react'
import StepInput from './StepInput'

const StepTwo = (props) => {
  const { account } = props
  const [ accounts, setAccounts ] = useState([])

  const addAccount = (event) => {
    event.preventDefault()

    const newAccount = {
      id: accounts.length + 1,
      name: "",
      budget: ""
    }

    setAccounts(accounts.concat(newAccount))
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    let val = event.target.value
    event.target.value = val
  }

  const handleBudgetChange = (event) => {
    let val = event.target.value
    event.target.value = val
  }

  return (
    <div className="step" id="stepTwo">
      <h3>Step Two</h3>
      <p>List out your current accounts as well as their budget</p>
      <ul>
        {accounts.map(singleAccount => (
          <li key={singleAccount.id}>
            <StepInput
              label="Name: "
              type="text"
              value={singleAccount.name}
              onChange={handleNameChange} />
            <br />
            <StepInput
              label="Budget: "
              type="number"
              value={singleAccount.budget} 
              onChange={handleBudgetChange} />
          </li>
        ))}
        <button onClick={addAccount}>Add Account</button>
        <button>Next</button>
      </ul>
    </div>
  )
}

export default StepTwo