'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { noHeaderFooterURLs, services } from '../../../_components/constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'
const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterURLs.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.services}>
          {services.map(service => (
            <li key={service.title}>
              <Image
                src={service.icon}
                alt={service.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{service.title}</h5>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image
                alt="logo"
                width={64}
                height={64}
                src="/logo-white.svg"
                className={classes.logo}
              />
            </Link>
            <p>{footer?.copyright}</p>
            <ThemeSelector />
            <div className={classes.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link.icon as Media
                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <Image src={icon?.url} alt={item.link.label} width={24} height={24} />
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
