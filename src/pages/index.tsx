import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import NoSSR from 'react-no-ssr'

import Welcome from '@/widgets/Welcome'

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Head>
        <title>Rick and Morty APP - Welcome</title>
        <meta name="description" content="Welcome Page" />
      </Head>
      <Welcome />
    </NoSSR>
  )
}

export default Home