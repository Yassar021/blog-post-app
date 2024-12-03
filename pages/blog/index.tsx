"use client"

import { Flex, Layout, Menu, Pagination, theme } from "antd"
import Head from "next/head"

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
        <Header style={{ display: 'flex', justifyContent:'space-between', background: 'white' }}>
          <div className="demo-logo">
            
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center'}}>
          <div
            style={{
              backgroundColor: 'lightblue',
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
              marginTop: '20px',
            }}
          >
            Content
          </div>
          <Pagination style={{justifyContent:'center'}} defaultCurrent={1} total={5} />
        </Content>
        <Footer style={{ textAlign: 'center', alignContent:'baseline'}}>
          Blog Post App ©{new Date().getFullYear()} Created Ant Design
        </Footer>
      </Layout>
    </Flex>
    </>
  )
}

export default Blog