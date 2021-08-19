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

    // look at ratios of existing budgets
    const acctWithRatios = []
    accounts.forEach(account => {
      account.ratio = Math.floor((account.desiredSpend / profile.startingBudget) * 100) / 100
      acctWithRatios.push(account)
    })
    
    console.log(acctWithRatios)
    // look at remaining amount for existing budgets
    // divide remaining amount by remaining days
    // If number is neative (overspend), set budget to 0
  }

  return (
    <div id="stepThree" className="step">
      <h2>Step 3</h2>
      <p>Final Calculations</p>
      <button onClick={determineNewBudgets}>Calculate</button>
      <ul>  
        {accounts.map(singleAccount => (
          <li key={singleAccount.id}>
            <p>Account: {singleAccount.name}</p>
            <p>New Budget: TODO</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepThree