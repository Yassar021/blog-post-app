"use client"

import React from "react"
import { Button, Flex, Layout, Typography } from "antd"
import Title from "antd/es/typography/Title"
import Head from "next/head"
import Link from "next/link"

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
            <Title level={5}>Welcome to BlogSphere! 🌟</Title>
            <Typography.Paragraph>
              {'Dive into the ultimate space where your thoughts meet technology!'}
            </Typography.Paragraph>
            <Button type="primary">
              <Link style={{textDecoration: 'none'}} href={'/blog'}>To the main page</Link>
            </Button>
          </div>
        </Layout>
      </Flex>
    </>
  )
}

export default Welcome