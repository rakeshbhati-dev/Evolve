import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import ListLayout from '../layout/ListLayout'

function Home() {
  const [list, setList] = useState([])
  const [listItem, setListItem] = useState('')
  const [errroMessage, setErrorMessage] = useState('')
  const [updateList, setUpdateList] = useState({
    itemId: null,
    status: false
  })

  function itemHandler() {
    if (listItem) {
      if (updateList.status) {
        let itemId = updateList.itemId
        let result=list.map((ele)=>ele.id===itemId?{id:itemId,item:listItem}:ele)
        console.log(result);
        setList(result)
        setUpdateList({itemId:null,status:false})
      }
      else {
        const obj = {
          id: crypto.randomUUID(),
          item: listItem
        }
        setList((prev) => [...prev, obj])
      }
      setListItem('')
      setErrorMessage('')
    }
    else {
      setErrorMessage('Enter some value')
    }
  }

  function updateHandler(item) {
    setUpdateList({
      itemId: item.id,
      status: true
    })
    setListItem(item.item)
  }


  return (
    <>
      <Navbar />
      <main className='flex h-full justify-center items-center mt-2 '>
        <div className='shadow-md rounded w-1/2  p-5'>
          <div className='flex justify-between items-start'>
            <Input id='inpt' name='item' value={listItem} placeholder='Enter a Value' divStyle='w-[85%]' onChange={(e) => setListItem(e.target.value)} errorMessage={errroMessage}></Input>
            <Button value={updateList.status ? 'Update' : 'Add'} buttonStyle='font-semibold bg-blue-400 text-white' onClick={itemHandler}></Button>
          </div>
          <ListLayout list={list} setList={setList} onEdit={(item) => updateHandler(item)}></ListLayout>
        </div>
      </main>
    </>
  )
}

export default Home