import React from 'react'

import classes from './index.module.scss';
import { Gutter } from '../../_components/Gutter';

const Products = () => {
  return (
    <div className={classes.coontainer}>
        <Gutter className={classes.products}></Gutter>
    </div>
  )
}

export default Products