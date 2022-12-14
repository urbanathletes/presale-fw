import React from 'react'

function btnMembership(props) {
  return (
    <button 
      className={`w-full min-h-[9rem] py-4 text-lg rounded-xl font-Poppins-Bold leading-none flex flex-col items-start ${props.btnActive ? 'bg-blue-primary text-yellow-primary' : 'bg-yellow-primary'}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default btnMembership