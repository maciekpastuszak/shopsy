"use client"

import React, { useState } from 'react'

import classes from './index.module.scss'
import { Media } from '../../../_components/Media'
import Link from 'next/link'
import { Price } from '../../../_components/Price'
import Image from 'next/image'

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
          <Price product={product} button={false} />
        </div>

        <div className={classes.quantity}>
          <div className={classes.quantityButton} onClick={decrementQty}>
            <Image src="/assets/icons/minus.svg" alt="minus" width={24} height={24} className={classes.qtnBt} />
          </div>

          

          <div className={classes.quantityButton} onClick={incrementQty}>
            <Image src="/assets/icons/plus.svg" alt="plus" width={24} height={24} className={classes.qtnBt} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem