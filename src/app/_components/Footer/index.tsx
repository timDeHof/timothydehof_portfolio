import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'
import FooterComponent from './FooterComponent'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
