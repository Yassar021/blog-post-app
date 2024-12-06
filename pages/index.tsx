"use client"

import React, { useState } from "react"
import { Button, Flex, Layout} from "antd"
import Head from "next/head"
import { Input } from "./components"
import { useMutation } from "@tanstack/react-query"
import { login } from "@/server/users"
import { useRouter } from "next/router"

const Welcome = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [token, setToken] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {mutate} = useMutation({
    mutationFn: () => login({user: name,token, email: email}), 
    onError: (er) => {
      alert(er);
      setLoading(false);
    },
    onSuccess: (data) => {
      router.replace(`/blog?id=${data?.data?.id}&token=${token}`);
    }
   })
  
  const handleOnClick = async () => {
    setLoading(true);
    mutate(); 
  }

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
            <h4 className="text-4xl font-semibold tracking-tight text-gray-700 sm:text-6xl">Welcome to BlogSphere! 🌟</h4>
            <p className="my-4 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Dive into the ultimate space where your thoughts meet technology!
            </p>
            <Input value={name} onChange={(e) => setName(e.target.value)} title="Name" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} title="Email" />
            <Input value={token} onChange={(e) => setToken(e.target.value)} title="Access Token" />
            <Button loading={isLoading} onClick={handleOnClick} type="primary">Get in</Button>
          </div>
        </Layout>
      </Flex>
    </>
  )
}

export default Welcome