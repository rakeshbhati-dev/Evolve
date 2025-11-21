import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import ListLayout from '../layout/ListLayout'

function Home() {
  let dummyList=[
    {id:1,item:"Item 1"},
    {id:2,item:"Item 2"}
  ]

  return (
    <>
      <Navbar />
      <main className='flex h-full justify-center items-center'>
        <div className='shadow-md rounded w-1/2  p-5'>
          <div className='flex justify-between'>
            <Input id='inpt' placeholder='Enter a Value' divStyle='w-[90%]'></Input>
            <Button value='Add' buttonStyle='font-semibold bg-blue-400 text-white'></Button>
          </div>
          <ListLayout list={dummyList}></ListLayout>
        </div>
      </main>
    </>
  )
}

export default Home