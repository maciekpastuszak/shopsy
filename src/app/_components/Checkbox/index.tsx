import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

export const Checkbox = () => {

  return (
    <label className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={classes.checkbox}
      />
      {label}
    </label>
  )
}