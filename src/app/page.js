'use client'

import { Button, Container, Text } from '@/app/chakra'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

export default function Home() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(userData)
  
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>
        Search users on GitHub
      </Text>
      <SearchBar setUserData={(res) => setUserData(res)} setLoading={setLoading} />
    </Container>
  )
}
