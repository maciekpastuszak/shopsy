"use client"

import React, { useState } from 'react'

import classes from './index.module.scss'
import { Media } from '../../../_components/Media'
import Link from 'next/link'

const CartItem = ({ product, title, metaImage, qty, addItemToCart }) => {
  const [quantity, setQuantity] = useState(qty)
 
  const decrementQty = () => {}
  const incrementQty = () => {}
  const enterQty = () => {}

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media className={classes.media}
            imgClassName={classes.image} 
            resource={metaImage}
            fill
          />
        )}
      </Link>
      <div className={classes.itemDetails}>
        <div className={classes.titileWrapper}>
          <h6>{title}</h6>
        </div>
      </div>
    </li>
  )
}

export default CartItem