import React from 'react'

import classes from './index.module.scss';

const Promotion = () => {
  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Deals of the Month</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quo in optio! Labore amet pariatur quibusdam deleniti sequi itaque inventore. Expedita quas nisi iure repudiandae dolore recusandae reiciendis accusamus perferendis?</p>

            <ul className={classes.stats}>

            </ul>
        </div>
    </section>
  )
}

const StatBox = ({ label, value }: {label: string; value: number}) => (
    <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
    </li>
)

export default Promotion