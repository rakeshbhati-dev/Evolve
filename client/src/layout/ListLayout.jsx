import React from 'react'
import ListItem from '../components/ListItem'

function ListLayout({list=[],setList}){

    function deleteHandler(id){
        if(confirm("Do you want to delete item?")){
            let updatedList=list.filter((item)=>item.id!==id)
            setList(updatedList)
        }
    }
  return (
    <div className='py-5 px-1'>
    {
        list.length>0 ?
        <div>
            {
                list.map((item)=>{
                    return(
                        <ListItem item={item} key={item.id} onDelete={deleteHandler}></ListItem>
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