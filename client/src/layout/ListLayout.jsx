import React from 'react'
import ListItem from '../components/ListItem'

function ListLayout({
    list=[]
}) {
  return (
    <div className='py-5 px-1'>
    {
        list.length>0 ?
        <div>
            {
                list.map((item)=>{
                    return(
                        <ListItem item={item.item} key={item.id}></ListItem>
                    )
                })
            }
        </div>:
        <p className='text-gray-400 text-center'>No Items Added.</p>
    }
    </div>
  )
}

export default React.memo(ListLayout)