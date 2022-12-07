import React from 'react'

function BtnMembershipChildren(props) {
  return (
    <button className="h-12 w-full my-2 bg-yellow-primary rounded-xl font-Poppins-Bold font-bold">
      {props.children}
    </button>
  )
}

export default BtnMembershipChildren