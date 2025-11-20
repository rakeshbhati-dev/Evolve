import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'

function Home() {
  return (
    <>
    <Navbar />
    <main className='flex h-full justify-center items-center'>
        <div className='border border-gray-400 rounded w-1/2 flex justify-between p-5'>
            <Input id='inpt' placeholder='Enter a Value' divStyle='w-[90%]'></Input>
            <Button value='Add' buttonStyle='font-semibold bg-blue-400 text-white'></Button>
        </div>
    </main>
    </>
  )
}

export default Home