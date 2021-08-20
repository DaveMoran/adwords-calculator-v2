import React, { useState } from 'react'
import StepInput from './StepInput'
import accountService from '../services/accounts'

const StepTwo = (props) => {
  const { accounts, setAccounts } = props
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

    Promise.all(promises).then(() => {
      setAccountValues(accounts)
    })
  }

  const addAccount = (e) => {
    e.preventDefault()
    const accountObject = {
      id: (
        accounts.length === 0 ?
          0 :
          accounts[accounts.length - 1].id + 1),
      name: "",
      desiredSpend: 0,
      currSpend: 0
    }

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
        <button onClick={() => updateAllAccounts(accountValues)}>Save</button>
      </div>
    </div>
  )
}

export default StepTwo