import React from 'react'

import classes from './index.module.scss'

interface RadioButtonProps {
  label: string
  value: string
  isSelected: boolean
  onRadioChange: (value: string) => void
  groupName: string
}

export const RadioButton: React.FC<RadioButtonProps> = ({
}) => {
  

  return (
    <label className={classes.radioWrapper}>
      <input
      />
      {label}
    </label>
  )
}