import React from 'react'

function InputText(props) {
  return (
    <label className="block my-2 border-b w-full">
      <span className="text-white text-base font-semibold">{props.label}</span>
      <input name={props.name} type={props.type}
      placeholder={props.placeholder || props.label}
      value={props.value}
      onChange={props.onChange}
      className="text-black w-full px-1 py-1 border-0 border-gray-200 outline-none focus:ring-0 focus:border-black" required/>
    </label>
  )
}

export default InputText