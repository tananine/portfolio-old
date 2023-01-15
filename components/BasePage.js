import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const BasePage = props => {
  const { noWrapper, title, children } = props

  const Wrapper = noWrapper ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Container maxWidth="lg">{children}</Container>
  )

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {Wrapper}
    </>
  )
}

export default BasePage
