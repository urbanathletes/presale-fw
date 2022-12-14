import React from 'react'

function BtnMembershipChildren(props) {
  return (
    <button 
      className={`h-12 w-full my-2 rounded-xl font-Poppins-Bold font-bold ${props.btnActive ? 'bg-blue-primary text-yellow-primary' : props.btnDisabled ? 'bg-yellow-primary' : 'bg-neutral-300'}`}
      onClick={props.onClick} disabled={props.btnDisabled ? false : true}
    >
      {props.children}
    </button>
  )
}

export default BtnMembershipChildren