import React from 'react'

import classes from './index.module.scss'

const CartItem = ({ product, title, metaImage, qty, addItemToCart }) => {
  return (
    <li className={classes.item} key={title}>
      <h6>TITLE</h6>
    </li>
  )
}

export default CartItem