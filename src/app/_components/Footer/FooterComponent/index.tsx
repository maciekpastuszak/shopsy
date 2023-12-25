"use client"

import React from 'react'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import { Footer } from '../../../../payload/payload-types'
import Link from 'next/link'
import { Button } from 'payload/components'

const FooterComponent = ({ footer }: {footer: Footer}) => {
  const pathname = usePathname();
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion) => (
            <li key={inclusion.title}>
              <Image 
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
          <Gutter>
            <div className={classes.wrap}>
              <Link href="/">
                <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
              </Link>

              <p>{footer.copyright}</p>

              <div className={classes.socialLinks}>
                {profileNavItems.map((item) => {
                  const icon = '';

                  return (
                    <Button 
                    key={item.link.label}
                    el="link"
                    href={item.ink.url}
                    >
                      {item.link.label}
                    </Button>
                  )
                })}
              </div>
            </div>
          </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent