import React from 'react'

const StepInput = (props) => {
  const { label, type, inputID, value, onChange } = props
  return (
    <label>
      {label}
      <input
        type={type}
        id={inputID}
        value={value}
        onChange={onChange} />
    </label>
  )
}

export default StepInput