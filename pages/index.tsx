"use client"

import React from "react"
import { Flex, Layout} from "antd"
import Head from "next/head"
import ButtonLink from "./components/Button"
import { Input } from "./components"

const Welcome = () => {
  return(
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <Flex gap="middle" wrap>
        <Layout style={{ height: '100vh', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
          <div style={{
            minWidth: '300px',
          }}>
            <h4 className="text-5xl font-semibold tracking-tight text-gray-700 sm:text-6xl">Welcome to BlogSphere! 🌟</h4>
            <p className="my-4 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Dive into the ultimate space where your thoughts meet technology!
            </p>
            <Input title="Access Token" />
            <ButtonLink link={"/blog"} title={"Get in"} />
          </div>
        </Layout>
      </Flex>
    </>
  )
}

export default Welcome