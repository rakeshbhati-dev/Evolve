import React from 'react'

function Button({
    value,
    onClick,
    type='button',
    buttonStyle
}) {
  return (
    <button type={type} className={`border border-stone-400 px-3 py-2 rounded cursor-pointer ${buttonStyle}`} onClick={onClick}>{value}</button>
  )
}

export default Button