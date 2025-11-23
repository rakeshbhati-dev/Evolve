import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
function ListItem({
    item,
    onDelete
}) {  
  return (
    <div className='border border-blue-200 py-2 px-3 mb-2 rounded flex justify-between items-center'>
        <h3 className='font-semibold'>{item.item}</h3>
        <FontAwesomeIcon icon={faTrashCan} title='Delete' className='text-gray-400 hover:text-red-500 cursor-pointer' onClick={()=>onDelete(item.id)}/>
    </div>
  )
}

export default ListItem