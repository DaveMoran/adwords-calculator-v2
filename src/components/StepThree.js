import axios from 'axios'
import React, { useState } from 'react'

const StepThree = (props) => {
  const { accounts, caluculateBudgets } = props

  return (
    <div id="stepThree" className="step">
      <h2>Step 3</h2>
      <p>Final Calculations</p>
      <button onClick={caluculateBudgets}>Calculate</button>
      <ul>  
        {accounts.map(singleAccount => (
          <li key={singleAccount.id}>
            <p><strong>Account:</strong> {singleAccount.name}<br />
            <strong>New Budget:</strong> {singleAccount.newDaily !== null ? singleAccount.newDaily : ''}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepThree