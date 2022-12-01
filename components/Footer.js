import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import ImgFooter from '../images/LogoFitnessworkPutih.png'

function Footer() {
  function atas() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <div className="bg-blue-primary text-white font-Poppins pt-4 pb-8 text-base">
        <div className="container mx-auto font-light">
          <div className="border-b-4 border-white"></div>
          <div className="md:flex md:justify-between items-center lg:items-start">
            <div className="max-w-xs mx-auto md:mx-0 space-y-4 py-4">
              <Image src={ImgFooter} alt="footer" />
              <p className="text-sm font-extralight">
                Fitnessworks is a new experience in fitness. We are the first Gym & Fitness Centre with technology & time-based membership system, in Indonesia.
              </p>
              
            </div>
            <div className="mx-auto grid lg:grid-cols-2 md:ml-10 max-w-xs md:max-w-full md:w-full md:mx-0 my-4 md:my-6">
              <ul className="space-y-4">
                <li><MdOutlineEmail className="mr-4 text-xl inline"/> Info@fitnessworks.co.id</li>
                <li>
                  <a href="https://wa.me/628179288880" target="_blank" rel="noreferrer">
                    <IoLogoWhatsapp className="mr-4 text-xl inline"/> 0817 - 9188 - 880
                  </a>
                </li>
              </ul>
              <ul className="my-4 lg:my-0">
                <li><MdLocationPin className="mr-4 text-xl inline"/> View Location</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer