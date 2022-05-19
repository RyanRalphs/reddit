import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostBox from '../components/postbox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ryan's Reddit Clone</title>
      </Head>

      <PostBox />

      <div></div>
    </div>
  )
}

export default Home
