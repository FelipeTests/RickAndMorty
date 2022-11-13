import React from 'react'
import { NextPage } from 'next'
import NoSSR from 'react-no-ssr'
import Head from 'next/head'

import Layout from '@/widgets/Layout'
import Main from '@/widgets/Main'
import CharacterList from '@/widgets/CharacterList'

const App: NextPage = () => {  
  return (
    <NoSSR>
      <Head>
        <title>Rick and Morty APP - App</title>
        <meta name="description" content="App" />
      </Head>
      <Layout>
        <Main>
          <CharacterList />
        </Main>
      </Layout>
    </NoSSR>
  )
}

export default App