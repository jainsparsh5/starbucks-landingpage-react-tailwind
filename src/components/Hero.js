import React from "react";
import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
function Hero() {
  return (
    <div className="pt-5 xl:mx-40">
      <div className="flex flex-col lg:flex-row bg-starGreen ">
        <div className="flex-none md:w-6/12 relative">
          <div className="absolute w-full h-full bg-[url('/src/images/1.webp')] bg-contain lg:bg-cover lg:bg-center"></div>
        </div>
        <img src={image1} alt="coffee" className="lg:hidden" />
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-black">
            Sign Up for Starbucks® Rewards
          </p>
          <p className="text-[24px] py-2 mt-2">
            Starting 4/22, get 25 Stars when you bring your clean, reusable cup
            into the café. Stars can quickly add up to Rewards.*
          </p>
          <button className="mt-3 border-solid border-black border-2 rounded-full px-5 py-1 text-center font-bold hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
            Join Now
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-starGreen mt-8">
        <img src={image2} alt="coffee" className="lg:hidden" />
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-black">Planet-positive tips</p>
          <p className="text-[24px] py-2 mt-2">
            April is earth month, but our commitment to reducing our
            environmental impact is year round. Try these tips on your next
            Starbucks visit.
          </p>
          <button className="mt-4 border-solid border-black border-2 rounded-full px-5 py-1 text-center font-bold hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
            Learn How
          </button>
        </div>
        <div className="flex-none md:w-6/12 relative">
          <div className="absolute w-full h-full bg-[url('/src/images/2.webp')] bg-contain lg:bg-cover lg:bg-center"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-darkGreen mt-8 text-white">
        <div className="flex-none md:w-6/12 relative">
          <div className="absolute w-full h-full bg-[url('/src/images/3.jpg')] bg-contain lg:bg-cover lg:bg-center"></div>
        </div>
        <img src={image3} alt="coffee" className="lg:hidden" />
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-black">Iced Shaken Awakening</p>
          <p className="text-[24px] py-2 mt-2">
          The new Iced Toasted Vanilla Oatmilk Shaken Espresso is made with Starbucks® Blonde espresso and notes of caramelized vanilla, shaken together with ice.
          </p>
          <button className="mt-4 border-solid bg-white text-black border-black border-2 rounded-full px-5 py-1 text-center font-bold hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
            Order Now
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-starGreen mt-8">
        <img src={image4} alt="coffee" className="lg:hidden" />
        <div className="p-10 sm:p-24 mx-12 text-center">
          <p className="text-[50px] font-black">Planet-positive tips</p>
          <p className="text-[24px] py-2 mt-2">
            April is earth month, but our commitment to reducing our
            environmental impact is year round. Try these tips on your next
            Starbucks visit.
          </p>
          <button className="mt-4 border-solid border-black border-2 rounded-full px-5 py-1 text-center font-bold hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
            Learn How
          </button>
        </div>
        <div className="flex-none md:w-6/12 relative">
          <div className="absolute w-full h-full bg-[url('/src/images/4.jpg')] bg-contain lg:bg-cover lg:bg-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
