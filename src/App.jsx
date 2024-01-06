import { useState } from 'react'
import { lock, lock1 } from './assets'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TestCase from './components/TestCase'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-[#18181b] w-full 2xl:container mx-auto font-ali overflow-hidden'>
        <section className='w-full flex flex-col gap-10 relative'>

          <div className='w-full h-full bg-[#00000083] top-0 left-0 absolute z-[2]' />
          <Navbar />
          <Hero />
          <TestCase />

        </section>
      </main>
    </>
  )
}

export default App
