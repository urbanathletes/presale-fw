import React from 'react'

function BtnTabMembership(props) {
  return (
    <button 
      className={`h-20 w-full rounded-xl border-4 text-2xl font-black font-Poppins-Bold ${props.btnActive ? 'bg-blue-primary border-yellow-primary text-yellow-primary' : 'bg-yellow-primary border-blue-primary'}`} 
      onClick={ props.onClick }
    >
      {props.children}
    </button>
  )
}

export default BtnTabMembership