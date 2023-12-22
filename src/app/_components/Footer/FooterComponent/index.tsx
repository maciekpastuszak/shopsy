import React from 'react'

import classes from './index.module.scss'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const FooterComponent = () => {
  const pathname = usePathname();
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      
    </footer>
  )
}

export default FooterComponent