import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import ImgHeader from '../images/example/Header.jpg'
import Bgcountdown from '../images/bg_countdown.jpg'
import Icon1 from '../images/icons/Icon_1.png'
import Icon2 from '../images/icons/Icon_2.png'
import Icon3 from '../images/icons/Icon_3.png'
import Icon4 from '../images/icons/Icon_4.png'
import Footer from '../components/Footer'
import dataStatick from '../store/static.json'

function presaleV2() {
  const [getPresale , setPresale] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const target = new Date("12/31/2022 23:59:59")

  useEffect(() => {
    console.log("dataStatick", dataStatick);
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
    <Layout title="- Presale">
      <div className="w-full relative md:bg-gradient-to-r md:from-blue-primary">
        <div className="relative md:absolute top-0 right-0 left-0 bottom-0 -z-10">
          <div className="bg-gradient-to-t from-blue-primary md:bg-none absolute top-0 right-0 left-0 bottom-0"></div>
          <Image src={ImgHeader} alt="Pre-Sale Fitnessworks"
            className="w-full h-full object-none object-right md:object-cover md:object-right-bottom "
          />
        </div>
        <div className="bg-blue-primary text-white p-4 md:max-w-md lg:max-w-2xl lg:pl-20 lg:w-full md:py-20 md:bg-transparent md:bg-gradient-to-r md:from-blue-primary md:via-blue-primary z-20">
          <div className="max-w-md mx-auto md:mx-4">
            <h3 className="my-4 text-yellow-primary text-xl font-Poppins-Bold italic font-extrabold">RASAKAN PENGALAMAN NGEGYM <br/> MEWAH DENGAN HARGA YANG RAMAH</h3>
            <p className="my-4 font-bold font-Poppins-Bold">daftar pre-sale sekarang juga! jaminan harga termurah di kelasnya.</p>
            <p className="my-4 py-2">FITNESSWORKS adalah GYM pertama di Gresik yang menerapkan Time Based Membership dan manajemen membership melalui aplikasi. membuat harga kami tetap ramah di kantong anda.</p>
            {/* <ButtonLink label="SIGN UP FOR PRE-SALE" /> */}
            <a className="bg-yellow-primary py-1 px-6 rounded-md text-blue-primary text-2xl font-BebasNeue font-black" href="#form">SIGN UP FOR PRE-SALE</a>
          </div>
        </div>
      </div>

      <div className="lg:flex relative overflow-hidden">
        {/* <div className="lg:absolute top-0 bottom-0 right-0 -left-16 h-[30rem]"> */}
        <div className="h-[30rem]">
          <Image src={Bgcountdown} alt="Image BG" className="object-cover object-center w-full min-h-full" />
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white font-black tracking-wider font-BebasNeue">PRE-SALE ENDS IN</h1>
          {
            getPresale ? 
            <div>
              <h1 className="text-4xl text-yellow-primary font-black tracking-wider font-BebasNeue my-8">PRE-SALE END</h1>
            </div> :
            <div className="text-white flex items-center my-6 text-3xl font-black">
              <div>
                <div className="mx-2 bg-white text-blue-primary flex justify-center items-center w-16 h-16 rounded-md">{days} </div>
                <p className="text-center font-BebasNeue text-base font-normal">DAYS</p>
              </div> <span className="pb-7">:</span>
              <div>
                <div className="mx-2 bg-white text-blue-primary flex justify-center items-center w-16 h-16 rounded-md">{hours < 10 ? "0" + hours : hours} </div>
                <p className="text-center font-BebasNeue text-base font-normal">HOURS</p>
              </div> <span className="pb-7">:</span>
              <div>
                <div className="mx-2 bg-white text-blue-primary flex justify-center items-center w-16 h-16 rounded-md">{minutes < 10 ? "0" + minutes : minutes} </div>
                <p className="text-center font-BebasNeue text-base font-normal">MINUTES</p>
              </div> <span className="pb-7">:</span>
              <div>
                <div className="mx-2 bg-white text-blue-primary flex justify-center items-center w-16 h-16 rounded-md">{seconds < 10 ? "0" + seconds : seconds}</div>
                <p className="text-center font-BebasNeue text-base font-normal">SECONDS</p>
              </div>
            </div>
          }
        </div>
      </div>

      {/* =====Content====== */}
      <div className="container text-sm sm:text-base text-blue-primary sm:mx-auto my-6">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center max-w-md md:max-w-none lg:mx-6 my-6 mx-auto">
            <div className="min-w-max px-4">
              <Image src={Icon1} alt="Pre-Sale Fitnessworks" className="w-16 sm:w-24"/>
            </div>
            <div>
              <h3 className="font-BebasNeue tracking-wider font-black text-xl">TIME BASED MEMBERSHIP</h3>
              <p>
              Berbagai macam plan membership tergantung dari seberapa lama anda ingin berada di gym, bayar hanya saat anda ada di Gym. Pilih plan membership sesuai yang anda inginkan.
              </p>
            </div>
          </div>
          <div className="flex items-center max-w-md md:max-w-none lg:mx-6 my-6 mx-auto">
            <div className="min-w-max px-4">
              <Image src={Icon2} alt="Pre-Sale Fitnessworks" className="w-16 sm:w-24"/>
            </div>
            <div>
              <h3 className="font-BebasNeue tracking-wider font-black text-xl">FREE FITNESSWORKS APPS</h3>
              <p>
                Aplikasi GRATIS untuk booking kelas booking Personal Trainer, dan banyak fungsi lainnya. Kontrol segala macam kebutuhan membership kamu kapanpun dimanapun, melalui smartphone anda.
              </p>
            </div>
          </div>
          <div className="flex items-center max-w-md md:max-w-none lg:mx-6 my-6 mx-auto">
            <div className="min-w-max px-4">
              <Image src={Icon3} alt="Pre-Sale Fitnessworks" className="w-16 sm:w-24"/>
            </div>
            <div>
              <h3 className="font-BebasNeue tracking-wider font-black text-xl">HIGH QUALITY & TRNDY DESIGN GYM & CLASSES</h3>
              <p>
                Gym dan kelas dengan perlengkapan premium, locker room, shower, ruangan yang luas dan design interior yang trendy dan Instagramable
              </p>
            </div>
          </div>
          <div className="flex items-center max-w-md md:max-w-none lg:mx-6 my-6 mx-auto">
            <div className="min-w-max px-4">
              <Image src={Icon4} alt="Pre-Sale Fitnessworks" className="w-16 sm:w-24"/>
            </div>
            <div>
              <h3 className="font-BebasNeue tracking-wider font-black text-xl">SUPPORTING YOUR HEALTH JOURNEY</h3>
              <p>
                Fasilitas yang premium, staff dan Trainer yang profesional dan ramah, menciptakan lingkungan yang suportif untuk menjaga mood anda berolahraga.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======Footer====== */}
      <Footer />
    </Layout>
  )
}

export default presaleV2