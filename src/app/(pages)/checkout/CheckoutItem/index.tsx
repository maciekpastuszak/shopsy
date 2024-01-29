import Link from 'next/link'

import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'

import classes from './index.module.scss'

export const CheckoutItem = ({ product, title, metaImage, quantity, index }) => {
  return (
    <li className={classes.item} key={index}>
        <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
            {!metaImage && <span>No image</span>}
            {metaImage && typeof metaImage !== 'string' && (
            <Media className={classes.media} imgclassName={classes.image} resource={metaImage} fill />
            )}
      </Link>
    </li>
  )
}

export default CheckoutItem