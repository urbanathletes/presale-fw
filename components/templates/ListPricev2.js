import React, { useEffect, useState } from 'react'
import BtnTabMembership from '../atoms/BtnTabMembership'
import BtnMembershipPrice from '../molecules/BtnMembershipPrice'
import BtnMembershipChildren from '../atoms/BtnMembershipChildren'
import dataStatic from '../../store/static.json'

export const ListPricev2 = () => {
  const data1 = dataStatic.priceListFw[0].category
  const priceList = dataStatic.priceListFw
  // const [pricePresale, setPricePrisale] = useState([])
  const [isActiveBtnTab, setIsActiveBtnTab] = useState({
    btn1: false,
    btn2: false
  })
  const monthsActive = {
    0:false,
    1:false,
    2:false,
    3:false
  }
  const [btnMonth, setBtnMonth] = useState(null)
  const [btnMonthActive, setBtnMonthActive] = useState(monthsActive)

  const valuesBtn = {
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
  }
  const [btnValue, setBtnValue] = useState({})

  const labelMembersipPrice = [
    {id:1, month:1, price:999000},
    {id:2, month:3, price:999000, discont:25},
    {id:3, month:6, price:999000, discont:26},
    {id:4, month:12, price:999000, discont:37},
  ]

  const getPrice = async () => {
    try {
      const res = await fetch('https://fwapi.fitnessworks.co.id/api/package-membership')
      const result = await res.json()
      const data = await result.data.list
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getPrice()
    console.log(data1);
  }, [data1])

  return (
    <div className="lg:px-8 my-6">
          <div className="flex justify-around space-x-8 lg:space-x-12">
            <BtnTabMembership btnActive={isActiveBtnTab.btn1} onClick={() => {setBtnMonth(0); setIsActiveBtnTab({btn1:true}); setBtnMonthActive({})}}>
              <p>OFF PEAK</p>
              <p className="text-base font-Poppins">(10 AM - 4 PM)</p>
            </BtnTabMembership>
            <BtnTabMembership btnActive={isActiveBtnTab.btn2} onClick={() => {setBtnMonth(1); setIsActiveBtnTab({btn2:true}); setBtnMonthActive({})}}>
              <p>OFF HOUSE</p>
            </BtnTabMembership>
          </div>
          <div className="p-4 w-full mx-auto space-x-4 flex lg:justify-center flex-nowrap overflow-hidden overflow-x-auto no-scrollbar">
            {
              btnMonth != null ? 
                priceList[btnMonth].category.map((row, index) => {
                  return (
                    <BtnMembershipPrice
                      key={row.id}
                      labelPrice={{price:999000, month:row.name}}
                      onClick={
                        () => {
                          if (isActiveBtnTab.btn1 || isActiveBtnTab.btn2) {
                            setBtnMonthActive({[index]:true})
                            setBtnValue({})
                          }
                        }
                      }
                      btnActive={btnMonthActive[index]}
                    >
                      btnchile3
                      {
                        row.hours.map((row2, index2) => {
                          // console.log('btnchile3', index2 ,btnMonthActive[index2]);
                          return (
                            <BtnMembershipChildren key={index2}
                              onClick={() => {
                                // console.log(btnMonthActive);
                                console.log('value', btnValue);
                                setBtnValue({btnMonthActive, [index2]:true})
                                // if (btnMonthActive[index2]) {
                                //   console.log('true', btnMonthActive, index2);
                                // }
                              }}
                              btnActive={btnValue[index2] && btnMonthActive[index]}
                              btnDisabled={btnMonthActive[index]}
                            >
                              <p>{row2.name === 'Unlimited' ? row2.name + ' Time' : row2.name + ' / Bulan'}</p>
                            </BtnMembershipChildren>
                          )
                        })
                      }
                      {/* <BtnMembershipChildren
                        onClick={() => {
                          if (btnMonth[index]) {
                            setBtnValue(1)
                          }
                        }}
                        btnActive={btnValue == 1 && btnMonth[index]}
                      >
                        <p>Unlimited Time</p>
                      </BtnMembershipChildren>
                      <BtnMembershipChildren
                        onClick={() => {
                          if (btnMonth[index]) {
                            setBtnValue(2)
                          }
                        }}
                        btnActive={btnValue == 2 && btnMonth[index]}
                      >
                        <p>24 Jam / Bulan</p>
                      </BtnMembershipChildren>
                      <BtnMembershipChildren
                        onClick={() => {
                          if (btnMonth[index]) {
                            setBtnValue(3)
                          }
                        }}
                        btnActive={btnValue == 3 && btnMonth[index]}
                      >
                        <p>12 Jam / Bulan</p>
                      </BtnMembershipChildren>
                      <BtnMembershipChildren
                        onClick={() => {
                          if (btnMonth[index]) {
                            setBtnValue(4)
                          }
                        }}
                        btnActive={btnValue == 4 && btnMonth[index]}
                      >
                        <p>6 Jam / Bulan</p>
                      </BtnMembershipChildren> */}
                    </BtnMembershipPrice>
                  )
                }) :
                ''
            }
          </div>
          <div className="text-center">
            <button className="bg-blue-primary text-yellow-primary border-4 border-yellow-primary py-4 px-28 rounded-xl text-2xl font-Poppins-Bold font-black">CHECKOUT</button>
          </div>
        </div>
  )
}
