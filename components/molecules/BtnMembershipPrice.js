import React from 'react'
import BtnMembership from '../atoms/BtnMembership'

function BtnMembershipPrice(props) {

  const formatRupiah = (angka) => {
    const format = angka.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    return convert.join('.').split('').reverse().join('')
  }
  return (
    <div className="w-64 h-full">
      <BtnMembership
        onClick={ props.onClick }
        btnActive={ props.btnActive }
      >
        <div className="w-full block">
          <p>Membership</p>
          <p>{props.labelPrice.month} Bulan</p>
          <p className="text-xl mt-3 mb-1 font-black">Rp. {formatRupiah(props.labelPrice.price)}</p>
          {
            props.labelPrice.discont ? (
              <p className="text-xs">Hemat Hingga {props.labelPrice.discont}% / Bulan</p>
            ) : ''
          }
        </div>
      </BtnMembership>
      <div className="py-4 w-56 lg:w-full">
        {props.children}
      </div>
    </div>
  )
}

export default BtnMembershipPrice