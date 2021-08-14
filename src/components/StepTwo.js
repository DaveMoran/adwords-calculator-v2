import React, { useState } from 'react'

const StepTwo = (props) => {
  const { account } = props
  const [ accounts, setAccounts ] = useState([])


  return (
    <div className="step" id="stepTwo">
      <h3>Step Two</h3>
      <p>List out your current accounts as well as their budget</p>
      <ul>
        <li>
          <label>
            Name: 
            <input type="text" value="" />
          </label>
          <label>
            Budget: 
            <input type="number" value="" />
          </label>
        </li>
      </ul>
    </div>
  )
}

export default StepTwo