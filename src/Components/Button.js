import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='py-1 px-2 border m-2 rounded-lg bg-slate-700'>{name}</button>
    </div>
  )
}

export default Button
