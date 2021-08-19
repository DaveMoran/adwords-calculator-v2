import axios from 'axios'
import React, { useState } from 'react'

const StepThree = (props) => {
  const { profile } = props
  const [accounts, setAccounts] = useState(profile.accounts)

  const determineNewBudgets = () => {
    // get day of the month
    let currDate = new Date(Date.now())
    let currDay = currDate.getDate()
    let currMonth = currDate.getMonth()
    let daysRemaining = 0
    
    // cauclate days remaining in month
    switch(currMonth) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        daysRemaining = 31 - currDay;
        break;
      case 1:
        daysRemaining = 28 - currDay;
        break;
      default:
        daysRemaining = 30 - currDay;
    }

    const newAccts = []
    accounts.forEach(account => {
      // look at remaining amt for existing budgets, divide by remaining days
      let newDaily = account.desiredSpend - account.currSpend
      if (newDaily < 0) {
        // If number is negative (overspend), set budget to 0
        account.newDaily = 0
      } else {
        // Else, set new number
        account.newDaily = Math.floor((newDaily / daysRemaining) * 100) / 100
      }

      newAccts.push(account)
    })
    console.log(newAccts)
  }

  return (
    <div id="stepThree" className="step">
      <h2>Step 3</h2>
      <p>Final Calculations</p>
      <button onClick={determineNewBudgets}>Calculate</button>
      <ul>  
        {accounts.map(singleAccount => (
          <li key={singleAccount.id}>
            <p>Account: {singleAccount.name}<br />
            New Budget: {singleAccount.newDaily !== null ? singleAccount.newDaily : ''}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepThree