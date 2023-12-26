'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterURLs } from '../../../_components/constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  return (
    <nav
      className={[classes.header, noHeaderFooterURLs.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join()}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image
            className={classes.logo}
            alt="dark-Logo"
            width={64}
            height={64}
            src="/logo-dark.svg"
          />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
