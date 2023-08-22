import Carosuel from "@/components/Carosuel";
import Hero from "@/components/LandingPage/Hero";

const cData = [
  {
    name: "Fountain",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Fountain-300.jpg",
  },
  {
    name: "Bitcoin Miner",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/BTC-Miner-300.jpg",
  },
  {
    name: "BrainDoku",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/250%20250.jpg",
  },
  {
    name: "Coin Mehjong",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Coin-Mahjong-300.jpg",
  },
  {
    name: "Solitaire",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Solitaire-300.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full relative font-Whyte">
      <Hero />
      <div className="max-w-[1150px] mx-auto mb-[100px] w-full">
        <div className="flex items-center flex-col sm:flex-row justify-between">
          {/* first div  */}
          <div className=" flex justify-center  order-1 mt-[40px] w-[595px] flex-grow flex-shrink basis-0">
            <img
              src="https://zbd.gg/new-fpo/homepage1.png"
              className=" max-w-[395px]"
              alt="logo"
            />
          </div>
          {/* second div  */}
          <div className="order-2 flex-grow flex-col flex-shrink basis-0 flex w-full h-[75%] pl-0  ">
            <h1 className=" text-left pb-[10px] text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              PLAY & EARN
            </h1>
            <p className=" text-left max-w-[520px] text-[18px] leading-[1.5] ">
              Why just play for fun, when you can get some free Bitcoin while
              you’re at it? Discover your next favorite game, or go beyond
              gaming with rewarded podcasting apps and more.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto mb-[100px] w-full">
        <div className="flex items-center flex-col sm:flex-row justify-between">
          {/* first div  */}
          <div className=" flex justify-center  order-2 mt-[40px] w-[595px] flex-grow flex-shrink basis-0">
            <img
              src="https://zbd.gg/v3/social.png"
              className=" max-w-[395px]"
              alt="logo"
            />
          </div>
          {/* second div  */}
          <div className="order-1 flex-grow flex-col flex-shrink basis-0 flex w-full h-[80%] pl-0  ">
            <h1 className=" text-left pb-[10px] text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              ZBD + SOCIAL
            </h1>
            <p className=" text-left mb-[22px] max-w-[520px] text-[18px] leading-[1.5] ">
              Meet the first social app where creators pocket 99% of their
              earnings. Create content, and earn Bitcoin. Or show your support
              by zapping your favorite creators with Bitcoin.
            </p>
            <div className=" flex  ">
              <button className=" font-bold leading-[1] mt-[10px] rounded-[8px] text-[1rem] text-center flex items-center justify-center py-[12px] w-[246px] bg-[#916ef7] text-white">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="max-w-[1150px] mx-auto mb-[100px] w-full">
        <div className="flex items-center flex-col sm:flex-row justify-between">
          {/* first div  */}
          <div className=" flex justify-center  order-1 mt-[40px] w-[595px] flex-grow flex-shrink basis-0">
            <img
              src="https://zbd.gg/new-fpo/homepage2.webp"
              className=" max-w-[395px]"
              alt="logo"
            />
          </div>
          {/* second div  */}
          <div className="order-2 flex-grow flex-col flex-shrink basis-0 flex w-full h-[75%] pl-0  ">
            <h1 className=" text-left pb-[10px] text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              SPEND ANYWHERE
            </h1>
            <p className=" text-left max-w-[520px] text-[18px] leading-[1.5] ">
              Leveled up your Bitcoin? Now it&apos;s your turn to shop! Buy gift
              cards from the brands you love inside ZBD or use it as your
              Bitcoin wallet. Spend it here, there, anywhere!
            </p>
          </div>
        </div>
      </div>
      {/*  new section */}
      <div className=" max-w-[1150px] mx-auto py-[62px] px-[67px] bg-[#edeff9] rounded-[25px] mb-[80px] ">
        <p className=" text-[3rem] font-[900] text-[#121422] leading-[1.05]">
          FEATURED APPS
        </p>
        <div className=" flex mt-[45px]">
          {cData.map((item, index) => {
            return (
              <>
                <div key={index} className="pr-[65px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className=" rounded-[25px] w-[150px] h-[150px]"
                  />
                  <p className=" font-[700] mt-[14px] text-[18px]">
                    {item.name}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* new section */}
      <div className=" mb-[150px] w-full">
        <p className="text-[3rem] font-[900] leading-[1.05] text-[#121422] text-center ">
          WHAT&apos;S HOT
        </p>
        <div className="mt-[45px] flex">
          <Carosuel />
        </div>
      </div>
      {/* new section */}

      <div className="max-w-[1150px] mx-auto mb-[100px] w-full">
        <div className="flex items-center flex-col sm:flex-row justify-between">
          {/* first div  */}
          <div className=" flex justify-center  order-2 mt-[40px] w-[595px] flex-grow flex-shrink basis-0">
            <img
              src="https://zbd.gg/new-fpo/homepage4.webp"
              className=" max-w-[395px]"
              alt="logo"
            />
          </div>
          {/* second div  */}
          <div className="order-1 flex-grow flex-col flex-shrink basis-0 flex w-full h-[80%] pl-0  ">
            <h1 className=" text-left pb-[10px] text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              ZBD EXTENSIONS
            </h1>
            <p className=" text-left mb-[22px] max-w-[520px] text-[18px] leading-[1.5] ">
              It all gravitates around the ZBD app, but the ZBD Universe is much
              bigger than that. Discover more tools, bots and plugins!
            </p>
            <div className=" flex  ">
              <button className=" font-bold leading-[1] mt-[10px] rounded-[8px] text-[1rem] text-center flex items-center justify-center py-[12px] w-[246px] bg-[#916ef7] text-white">
                Check it Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* new sections */}
      <div className=" bg-[#edeff9] mx-auto  rounded-[25px] py-[38px] px-[63px] mb-[105px] flex justify-evenly" style={{
        maxWidth:"calc(100vw - 50px)"
      }}>
        <div>
          <p className="text-[38px] mb-[8px] font-[900] text-[#121422]">BECOME A PARTNER</p>
          <div className="relative">
            <div className=" text-[1rem] max-w-[470px] w-full h-full">
            Like what you’re seeing? Want to integrate ZEBEDEE into your products? Learn more or get started!
            </div>
            <div className=" text-[1rem] font-[700] flex items-center absolute bottom-0 right-0 text-[#916ef7]">
            For Developers
            <img
            src="https://zbd.gg/new-icons/arrow-purple.svg"
            className=" ml-[6px] mb-[2px]"
            alt="as"
            />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex  h-full items-center justify-center">
            <img 
            src="https://zbd.gg/new-icons/partner1.svg"
            className=" ml-[40px]"
            alt="as"
            />
            <img 
            src="https://zbd.gg/new-icons/partner2.svg"
            className="ml-[40px]"
            alt="as"
            />
            <img 
            src="https://zbd.gg/new-icons/partner3.svg"
            className=" ml-[40px]"
            alt="as"
            />
          </div>
        </div>
      </div>
      <div className=" flex fixed bottom-[48px] right-0 w-[285px] items-center  bg-[#916ef7] text-white rounded-l-[15px] z-[100]">
        <div className=" text-[20px] font-[900] h-full flex items-center  text-center ml-[9px]">
        DOWNLOAD ZBD APP
        </div>
        <img 
        src="https://zbd.gg/appstore/download-qr-code.png"
        className=" w-[101px] h-[101px] m-[12px]"
        alt="as"
        />
      </div>
    </div>
  );
}
