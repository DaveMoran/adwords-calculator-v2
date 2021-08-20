import React, { useState } from 'react'
import StepInput from './StepInput'

const StepTwo = (props) => {
  const { 
    accounts, 
    addAccount, 
    removeAccount,
    updateAllAccounts
  } = props

  const [accountValues, setAccountValues] = useState(accounts)

  const handleNameChange = (id, e) => {
    const newAccounts = []
    accountValues.forEach(account => {
      if(account.id === id) { account.name = e.target.value }
      newAccounts.push(account)
    });
    setAccountValues(newAccounts)
  }

  const handleCurrSpendChange = (id, e) => {
    const newAccounts = []
    accountValues.forEach(account => {
      if (account.id === id) { account.currSpend = parseInt(e.target.value) }
      newAccounts.push(account)
    });
    setAccountValues(newAccounts)
  }

  const handleDesiredSpendChange = (id, e) => {
    const newAccounts = []
    accountValues.forEach(account => {
      if (account.id === id) { account.desiredSpend = parseInt(e.target.value) }
      newAccounts.push(account)
    });
    setAccountValues(newAccounts)
  }

  return (
    <div className="step" id="stepTwo">
      <h2>Step Two</h2>
      <p>List out your current accounts as well as their budget</p>
      <ul>
        {accountValues.map(singleAccount => (
          <li key={singleAccount.id}>
            <StepInput
              label="Name: "
              type="text"
              value={singleAccount.name}
              onChange={(e) => handleNameChange(singleAccount.id, e)} />
            <br />
            <div className="input-group">
              <StepInput
                label="Current Spend: "
                type="number"
                value={singleAccount.currSpend}
                onChange={(e) => handleCurrSpendChange(singleAccount.id, e)} />
              <StepInput
                label="Desired Spend: "
                type="number"
                value={singleAccount.desiredSpend}
                onChange={(e) => handleDesiredSpendChange(singleAccount.id, e)} />
              </div>
              <button
                className="removeAccount"
                onClick={() => removeAccount(singleAccount.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="button-group">
        <button onClick={addAccount}>Add Account</button>
        <button onClick={updateAllAccounts}>Save</button>
      </div>
    </div>
  )
}

export default StepTwo