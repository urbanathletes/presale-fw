import React, { useEffect, useState } from 'react'

function coba() {
  const [getPresale , setPresale] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("12/1/2022 00:02:00")
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()
      
      const dd = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hh = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mm = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const ss = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(dd)
      setHours(hh)
      setMinutes(mm)
      setSeconds(ss)

      if (dd <= 0 && hh <= 0 && mm <= 0 && ss <= 0) {
        setPresale(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>Coba</h1>
      {
        getPresale ? "time Stop" :
        <span>{days} : {hours} : {minutes} : {seconds}</span>
      }
    </div>
  )
}

export default coba