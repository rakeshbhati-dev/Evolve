import React from 'react'

function Input({
    name,
    value,
    type='text',
    label,
    id,
    placeholder,
    onChange,
    errorMessage,
    inputStyle,
    labelStyle,
    divStyle
}) {
  return (
    <div className={` ${divStyle}`}>
        <label htmlFor={id} className={`${labelStyle}`}>{label}</label>
        <input type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} className={`w-full border border-stone-300 px-4 py-2 focus:outline-none ${inputStyle}`}/>
        {errorMessage && <p className='text-red-500 font-semibold font-sm'>{errorMessage}</p>}
    </div>
  )
}

export default Input