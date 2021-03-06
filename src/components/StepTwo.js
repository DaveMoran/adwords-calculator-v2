import React, { useState } from 'react'
import StepInput from './StepInput'
import accountService from '../services/accounts'

const StepTwo = (props) => {
  const { accounts, setAccounts, calculateBudgets } = props
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

  const updateAllAccounts = (newAccounts) => {
    const promises = []
    newAccounts.forEach(account => {
      promises.push(
        accountService.update(account.id, account)
      )
    })

    Promise.all(promises).then(() => { setAccountValues(accounts) })

    calculateBudgets()
  }

  const addAccount = (e) => {
    e.preventDefault()
    const accountObject = { name: "Account" }

    accountService
      .create(accountObject)
      .then(response => {
        setAccountValues(accounts.concat(response.data))
        setAccounts(accounts.concat(response.data))
      })
  }

  const removeAccount = (id) => {
    accountService
      .deleteAccount(id)
      .then(() => {
        const filteredAccounts = accounts.filter(account => {
          if (account.id !== id) { return account }
        })
        setAccountValues(filteredAccounts)
        setAccounts(filteredAccounts)
      })
  }

  return (
    <div className="step" id="stepTwo">
      <h2>Instructions</h2>
      <p>List out your current accounts, their current spend, and their desired spend. Once all accounts are in place, click on 'Calculate' and the app will generate new daily spends so that your accounts can better reach their allocated budgets.</p>
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
        <button onClick={() => updateAllAccounts(accountValues)}>Calculate</button>
      </div>
    </div>
  )
}

export default StepTwo