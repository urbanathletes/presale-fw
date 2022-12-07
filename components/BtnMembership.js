import React from 'react'

function btnMembership(props) {
  return (
    <button className="w-full min-h-[9rem] py-4 text-lg bg-yellow-primary rounded-xl font-Poppins-Bold leading-none flex flex-col items-start">
      {props.children}
    </button>
  )
}

export default btnMembership