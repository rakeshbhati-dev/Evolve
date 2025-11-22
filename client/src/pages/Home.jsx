import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import ListLayout from '../layout/ListLayout'

function Home() {
  const [list,setList]=useState([])
  const [listItem,setListItem]=useState('')
  const [errroMessage,setErrorMessage]=useState('')

  function addListItem(){
    if(listItem){
      const obj={
      id:crypto.randomUUID(),
      item:listItem
    }
    setList((prev)=>[...prev,obj])
    setListItem('')
    setErrorMessage('')
    }
    else{
      setErrorMessage('Enter some value')
    }
  }

  return (
    <>
      <Navbar />
      <main className='flex h-full justify-center items-center mt-2'>
        <div className='shadow-md rounded w-1/2  p-5'>
          <div className='flex justify-between items-start'>
            <Input id='inpt' name='item' value={listItem} placeholder='Enter a Value' divStyle='w-[90%]' onChange={(e)=>setListItem(e.target.value)} errorMessage={errroMessage}></Input>
            <Button value='Add' buttonStyle='font-semibold bg-blue-400 text-white' onClick={addListItem}></Button>
          </div>
          <ListLayout list={list}></ListLayout>
        </div>
      </main>
    </>
  )
}

export default Home