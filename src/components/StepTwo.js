import axios from 'axios'
import React, { useState } from 'react'
import StepInput from './StepInput'

const StepTwo = (props) => {
  const { profile, setMessage, setMessageType } = props
  const [accounts, setAccounts] = useState(profile.accounts)

  const addAccount = () => {
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

  const handleCurrSpendChange = (id, e) => {
    const newAccounts = []
    accounts.forEach(account => {
      if (account.id === id) {
        account.currSpend = parseInt(e.target.value)
      }
      newAccounts.push(account)
    });
    setAccounts(newAccounts)
  }

  const handleDesiredSpendChange = (id, e) => {
    const newAccounts = []
    accounts.forEach(account => {
      if (account.id === id) {
        account.desiredSpend = parseInt(e.target.value)
      }
      newAccounts.push(account)
    });
    setAccounts(newAccounts)
  }

  const handleSaveStepTwo = () => {
    // Check that account values match total budget
    let cumulativeBudget = 0
    accounts.forEach(account => {
      cumulativeBudget += account.desiredSpend
    })

    if (cumulativeBudget !== profile.startingBudget) {

      setMessageType('error')
      setMessage(
        `Total desired spend (${cumulativeBudget}) does not equal budget (${profile.startingBudget})`
      )

      setTimeout(() => {
        setMessage(null)
        setMessageType(null)
      }, 5000)

    } else {
      const accountObject = {
        ...profile,
        accounts: accounts
      }

      axios
        .post('http://localhost:3001/profile', accountObject)
        .then(response => {
          console.log(response)
        })
    }
  }

  return (
    <div className="step" id="stepTwo">
      <h2>Step Two</h2>
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
              label="Current Spend: "
              type="number"
              value={singleAccount.currSpend}
              onChange={(e) => handleCurrSpendChange(singleAccount.id, e)} />
            <br />
            <StepInput
              label="Desired Spend: "
              type="number"
              value={singleAccount.desiredSpend}
              onChange={(e) => handleDesiredSpendChange(singleAccount.id, e)} />
            
          </li>
        ))}
        <button onClick={addAccount}>Add Account</button>
        <button onClick={handleSaveStepTwo}>Next</button>
      </ul>
    </div>
  )
}

export default StepTwo