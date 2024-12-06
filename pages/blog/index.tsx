"use client"

import { Flex, Layout, Menu, Pagination, theme } from "antd"
import Head from "next/head"
import { Card, CardAddPost, Navbar } from "../components";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/server/users";

const { Content, Footer } = Layout;

const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Blog = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const query = useQuery({ queryKey:["post"], queryFn: getPost })

  if(query.isLoading) return(
    <div className="flex w-full h-[100vh] text-center justify-center" style={{ alignItems:'center'}} role='status' aria-label='loading'>
      <svg className='w-10 h-10 stroke-indigo-600 animate-spin' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_9023_61563_3)'>
              <path d='M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444' stroke='stroke-current' strokeWidth='1.4' strokeLinecap='round' className='my-path'></path>
          </g>
          <defs>
              <clipPath id='clip0_9023_61563_3'>
                  <rect width='24' height='24' fill='white'></rect>
              </clipPath>
          </defs>
      </svg>
    </div>
  );

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
          <Content className="flex flex-col items-center justify-between text-center mx-auto p-2">
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
                {query.data?.map((post: any) => (
                  <>
                    <Card key={post?.id} name={'notname'} title={post?.title} body={post?.body}/>
                  </>
                ))}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
              </div> 
            </div>
            <Pagination style={{justifyContent:'center'}} defaultCurrent={3} total={5} />
          </Content>
          <Footer className="py-[6px] bg-slate-400 text-white" style={{ textAlign: 'center', alignContent:'baseline'}}>
            Blog Post App ©{new Date().getFullYear()} 
          </Footer>
        </Layout>
      </Flex>
    </>
  )
}

export default Blog