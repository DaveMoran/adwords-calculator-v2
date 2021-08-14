import React, { useState } from 'react'
import StepInput from './StepInput'

const StepTwo = (props) => {
  const { account } = props
  const [ accounts, setAccounts ] = useState([])

  const addAccount = (event) => {
    event.preventDefault()

    const newAccount = {
      id: (accounts.length === 0 ? 0 : accounts[accounts.length - 1].id + 1),
      name: "",
      budget: ""
    }

    setAccounts(accounts.concat(newAccount))
  }

  const handleNameChange = (id, e) => {
    const newAccounts = []
    accounts.forEach(account => {
      if(account.id === id) {
        account.name = e.target.value
      }
      newAccounts.push(account)
    });
    setAccounts(newAccounts)
  }

  const handleBudgetChange = (id, e) => {
    const newAccounts = []
    accounts.forEach(account => {
      if (account.id === id) {
        account.budget = e.target.value
      }
      newAccounts.push(account)
    });
    setAccounts(newAccounts)
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
              onChange={(e) => handleNameChange(singleAccount.id, e)} />
            <br />
            <StepInput
              label="Budget: "
              type="number"
              value={singleAccount.budget} 
              onChange={(e) => handleBudgetChange(singleAccount.id, e)} />
          </li>
        ))}
        <button onClick={addAccount}>Add Account</button>
        <button>Next</button>
      </ul>
    </div>
  )
}

export default StepTwo