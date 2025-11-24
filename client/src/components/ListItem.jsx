import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function ListItem({item, onDelete, onEdit}) {
  return (
    <div className='border border-blue-200 py-2 px-3 mb-2 rounded flex justify-between items-center'>
      <h3 className='font-semibold'>{item.item}</h3>
      <div >
        <FontAwesomeIcon icon={faPen} title='Edit' className='text-gray-400 hover:text-blue-500 cursor-pointer mr-3' onClick={()=>onEdit(item)}/>
        <FontAwesomeIcon icon={faTrashCan} title='Delete' className='text-gray-400 hover:text-red-500 cursor-pointer' onClick={() => onDelete(item.id)} />
      </div>
    </div>
  )
}

export default ListItem