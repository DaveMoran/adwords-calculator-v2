import React from 'react'

const StepThree = (props) => {
  const { accounts } = props

  return (
    <div id="stepThree" className="step">
      <h2>Final Calculations</h2>
      <ul>  
        {accounts.map(account => (
          <li key={account.id}>
            <p><strong>Account:</strong> {account.name}<br />
            <strong>New Budget:</strong> {account.newDaily !== null ? account.newDaily : ''}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepThree