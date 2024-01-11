import React from 'react'

import classes from './index.module.scss';
import { Gutter } from '../../_components/Gutter';
import Filters from './Filters';
import { Blocks } from '../../_components/Blocks';

const Products = () => {
  return (
    <div className={classes.coontainer}>
        <Gutter className={classes.products}>
          <Filters />
          <Blocks blocks={layout} disableTopPadding={true} />
        </Gutter>
    </div>
  )
}

export default Products