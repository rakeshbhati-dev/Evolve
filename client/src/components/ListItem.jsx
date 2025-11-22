import React from 'react'

function ListItem({
    item
}) {  
  return (
    <div className='border border-blue-200 py-2 px-3 mb-2 rounded'>
        <h3 className='font-semibold'>{item}</h3>
    </div>
  )
}

export default ListItem