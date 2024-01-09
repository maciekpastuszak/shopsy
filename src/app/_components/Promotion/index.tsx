import React from 'react'

import classes from './index.module.scss';

const Promotion = () => {
  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Deals of the Month</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quo in optio! Labore amet pariatur quibusdam deleniti sequi itaque inventore. Expedita quas nisi iure repudiandae dolore recusandae reiciendis accusamus perferendis?</p>

            <ul className={classes.stats}>
                <li className={classes.statBox}>
                    <h4>5</h4>
                    <p>days</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Promotion