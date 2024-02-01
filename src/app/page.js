'use client'

import { Button, Container } from '@/app/chakra'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Navbar />
    </Container>
  )
}
