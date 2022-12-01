import Image from 'next/image'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import ImageBg from '../images/ImageBg.jpg'
import BgForm from '../images/bg_form.png'
import ImgHeader from '../images/example/Header.jpg'
import ImgVideoExample from '../images/example/VideoExample.png'
import Fotos from '../images/example/Fotos.png'
import Icon1 from '../images/icons/Icon_1.png'
import Icon2 from '../images/icons/Icon_2.png'
import Icon3 from '../images/icons/Icon_3.png'
import Icon4 from '../images/icons/Icon_4.png'
import InputText from '../components/InputText'
import Footer from '../components/Footer'

function ButtonLink(props) {
  return <button className="bg-yellow-primary py-1 px-6 rounded-md text-blue-primary text-2xl font-BebasNeue font-black">{props.label}</button>
}

function Presale() {
  const [inputs, setInputs] = useState({'kode_inves': 2});
  const handleinputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

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
        <div>
          <h2 className="font-BebasNeue font-black text-3xl italic text-center my-6">SEGERA DAFTAR PRE-SALE MEMBERSHIP ANDA SEKARANG TERBATAS! JANGAN SAMPAI KEDULUAN YANG LAIN!</h2>
          <div className="grid lg:grid-cols-2 space-y-4 lg:space-y-0">
            <Image src={ImgVideoExample} alt="Video" className="mx-auto w-full lg:px-6" />
            <Image src={Fotos} alt="Foto" className="mx-auto w-full lg:px-6" />
          </div>
        </div>

        <div className="text-center py-4">
          {/* <ButtonLink label="SIGN UP FOR PRE-SALE" /> */}
            <a className="bg-yellow-primary py-1 px-6 rounded-md text-blue-primary text-2xl font-BebasNeue font-black" href="#form">SIGN UP FOR PRE-SALE</a>
        </div>
        <div className="lg:flex relative overflow-hidden">
          <div className="lg:absolute top-0 bottom-0 right-0 -left-16 h-[30rem]">
            {/* <Image src={ImageBg} alt="Image BG" className="w-full object-none object-center lg:w-min mx-auto lg:mx-0" /> */}
            <Image src={ImageBg} alt="Image BG" className="object-fill lg:object-none w-full lg:w-min" />
          </div>
          <div className="relative ml-auto bg-form-1 lg:w-4/6">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary/80 flex justify-center items-center lg:justify-end lg:pr-20" id="form">
              <div className="w-full max-w-md">
                <h1 className="text-yellow-primary font-Poppins-Bold font-black text-4xl">REGISTER NOW!</h1>
                <form onSubmit={formSubmit}>
                  <div className="flex space-x-8">
                    <InputText label="FIRST NAME" name="firstName" type="text" value={inputs.firstName || ''} onChange={handleinputs} />
                    <InputText label="LAST NAME" name="lastName" type="text" value={inputs.lastName || ''} onChange={handleinputs} />
                  </div>
                  <div className="flex space-x-8">
                    <InputText label="EMAIL" name="email" type="text" value={inputs.email || ''} onChange={handleinputs} />
                    <InputText label="MOBILE NUMBER" name="number" type="text" value={inputs.number || ''} onChange={handleinputs} />
                  </div>
                  <div className="flex space-x-8">
                    <InputText label="REGION" name="region" type="text" value={inputs.region || ''} onChange={handleinputs} />
                    <InputText label="CITY" name="city" type="text" value={inputs.city || ''} onChange={handleinputs} />
                  </div>
                  <div className="my-4">
                    <button type='submit' className="py-1 px-8 bg-yellow-primary text-blue-primary font-Poppins-Bold font-black">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
            <Image src={BgForm} alt="Image BG" className="w-full h-[34rem]"/>
          </div>
        </div>
      </div>

      {/* ======Footer====== */}
      <Footer />
    </Layout>
  )
}

export default Presale