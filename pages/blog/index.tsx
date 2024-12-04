"use client"

import { Flex, Layout, Menu, Pagination, theme } from "antd"
import Head from "next/head"
import { Card, CardAddPost, Navbar } from "../components";

const { Header, Content, Footer } = Layout;

const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Blog = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return(
    <>
      <Head>
        <title>blog-post-app</title>
      </Head>
      <Flex gap="middle" wrap>
        <Layout style={{ height: '100vh', textAlign: 'center'}}>
          {/* <Header style={{ display: 'flex', justifyContent:'space-between', background: 'white' }}>
            <div className="demo-logo">
              
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header> */}
          <Navbar />
          <CardAddPost />
          <Content className="flex flex-col items-center justify-between text-center mx-auto p-4">
            <div
              className="max-w-6xl mb-2 overflow-auto scroll-smooth focus:scroll-auto flex flex-col"
              style={{
                backgroundColor:'transparent',
                minHeight: '80%',
                minWidth: '280px',
                maxWidth: '7xl',
                padding: 4,
                borderRadius: borderRadiusLG,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
              </div> 
            </div>
            <Pagination style={{justifyContent:'center'}} defaultCurrent={3} total={5} />
          </Content>
          <Footer className="py-[6px] bg-slate-400 text-white" style={{ textAlign: 'center', alignContent:'baseline'}}>
            Blog Post App ©{new Date().getFullYear()} Ant Design
          </Footer>
        </Layout>
      </Flex>
    </>
  )
}

export default Blog