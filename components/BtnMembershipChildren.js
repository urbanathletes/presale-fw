import React from 'react'

function BtnMembershipChildren(props) {
  return (
    <button 
      className={`h-12 w-full my-2 rounded-xl font-Poppins-Bold font-bold ${props.btnActive ? 'bg-blue-primary text-yellow-primary' : 'bg-yellow-primary'}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default BtnMembershipChildren