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
      {/* new section */}
      <div className="bg-[url(https://zbd.gg/new-backgrounds/card-background.png)] sm:bg-[url(https://coolbackgrounds.io/white-background/)] bg-white sm:bg-[#ffffff] bg-cover bg-center flex items-center w-full h-screen sm:h-[500px]">
        <div className="sm:max-w-[1150px] max-w-[350px] rounded-[25px] mx-auto bg-[#ffffff] py-[20px]   mb-0   w-full">
          <div className="flex items-center flex-col sm:flex-row justify-between">
            {/* first div  */}
            <div className=" flex justify-center  order-1 mt-0 sm:mt-[40px] w-full sm:w-[595px] flex-grow flex-shrink basis-0">
              <img
                src="https://zbd.gg/new-fpo/homepage1.png"
                className="max-w-[300px] sm:max-w-[395px]"
                alt="logo"
              />
            </div>
            {/* second div  */}
            <div className="order-2  py-[25px] sm:flex-grow flex-col sm:flex-shrink sm:basis-0 flex w-full h-[300px] sm:h-[75%] pl-0  ">
              <h1 className=" sm:text-left pb-[10px] px-[25px] text-[38px] text-center sm:text-[3rem] leading-[1.05] text-[#121422] font-[900]">
                PLAY & EARN
              </h1>
              <p className=" text-left w-full px-[25px] sm:px-0 sm:max-w-[520px] sm:text-[18px] text-[15px] leading-[1.5] ">
                Why just play for fun, when you can get some free Bitcoin while
                you’re at it? Discover your next favorite game, or go beyond
                gaming with rewarded podcasting apps and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* new section 2 */}
      <div className="bg-[url(https://zbd.gg/new-backgrounds/card-background.png)] sm:bg-[url(https://coolbackgrounds.io/white-background/)] bg-white sm:bg-[#ffffff] bg-cover bg-center flex items-center w-full h-screen sm:h-[400px] sm:mb-[50px] mb-0">
        <div className="sm:max-w-[1150px] max-w-[350px] rounded-[25px] mx-auto bg-[#ffffff] py-[20px]   mb-0   w-full">
          <div className="flex items-center flex-col sm:flex-row justify-between">
            {/* first div  */}
            <div className=" flex justify-center order-1  sm:order-2 mt-0 sm:mt-[40px] w-full sm:w-[595px] flex-grow flex-shrink basis-0">
              <img
                 src="https://zbd.gg/v3/social.png"
                className="max-w-[300px] sm:max-w-[395px]"
                alt="logo"
              />
            </div>
            {/* second div  */}
            <div className="sm:order-1 order-2  py-[25px] sm:flex-grow flex-col sm:flex-shrink sm:basis-0 flex w-full h-[300px] sm:h-[75%] pl-0  ">
              <h1 className=" sm:text-left pb-[10px] px-[25px] text-[38px] text-center sm:text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              ZBD + SOCIAL
              </h1>
              <p className=" text-left w-full px-[25px] sm:px-0 sm:max-w-[520px] sm:text-[18px] text-[15px] leading-[1.5] ">
              Meet the first social app where creators pocket 99% of their
              earnings. Create content, and earn Bitcoin. Or show your support
              by zapping your favorite creators with Bitcoin.
              </p>
              <div className=" flex mt-[20px] justify-center ">
              <button className=" font-bold leading-[1] mt-[10px] rounded-[8px] text-[1rem] text-center flex items-center justify-center py-[12px] w-[246px] bg-[#916ef7] text-white">
                Join the Waitlist
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* new section */}
      <div className="bg-[url(https://zbd.gg/new-backgrounds/card-background.png)] sm:bg-[url(https://coolbackgrounds.io/white-background/)] bg-white sm:bg-white bg-cover bg-center flex items-center w-full h-screen sm:h-[400px]">
        <div className="sm:max-w-[1150px] max-w-[350px] rounded-[25px] mx-auto bg-[#ffffff] py-[20px]   mb-0  sm:mb-[100px] w-full">
          <div className="flex items-center flex-col sm:flex-row justify-between">
            {/* first div  */}
            <div className=" flex justify-center  order-1 mt-0 sm:mt-[40px] w-full sm:w-[595px] flex-grow flex-shrink basis-0">
              <img
               src="https://zbd.gg/new-fpo/homepage2.webp"
                className="max-w-[300px] sm:max-w-[395px]"
                alt="logo"
              />
            </div>
            {/* second div  */}
            <div className="order-2  py-[25px] sm:flex-grow flex-col sm:flex-shrink sm:basis-0 flex w-full h-[300px] sm:h-[75%] pl-0  ">
              <h1 className=" sm:text-left pb-[10px] px-[25px] text-[38px] text-center sm:text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              SPEND ANYWHERE
              </h1>
              <p className=" text-left w-full px-[25px] sm:px-0 sm:max-w-[520px] sm:text-[18px] text-[15px] leading-[1.5] ">
              Leveled up your Bitcoin? Now it&apos;s your turn to shop! Buy gift
              cards from the brands you love inside ZBD or use it as your
              Bitcoin wallet. Spend it here, there, anywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  new section */}
      <div className=" max-w-[1150px] w-[100vw] sm:w-full  mx-auto sm:py-[62px] px-[25px] pt-[27px] pb-[50px] sm:px-[67px] bg-[#edeff9] rounded-none sm:rounded-[25px] mb-[80px] ">
        <p className=" sm:text-[3rem] text-[28px] font-[900] text-[#121422] leading-[1.05]">
          FEATURED APPS
        </p>
        <div className=" flex mt-[45px]  overflow-x-scroll">
          {cData.map((item, index) => {
            return (
              <>
                <div key={index} className="pr-[65px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className=" rounded-[25px] min-w-[150px] max-w-[150px] h-[150px]"
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
      <div className=" mb-[50px] px-[30px] sm:mb-[150px] w-full">
        <p className="sm:text-[3rem] text-[28px] text-left font-[900] leading-[1.05] text-[#121422] sm:text-center ">
          WHAT&apos;S HOT
        </p>
        <div className="mt-[45px] flex pb-[60px]">
          <Carosuel />
        </div>
      </div>
      {/* new section */}

      <div className=" bg-white sm:bg-[#ffffff] bg-cover bg-center flex items-center w-full h-[70vh] sm:h-[400px] sm:mb-[50px] mb-0">
        <div className="sm:max-w-[1150px] max-w-[350px] rounded-[25px] mx-auto bg-[#ffffff] py-[20px]   mb-0   w-full">
          <div className="flex items-center flex-col sm:flex-row justify-between">
            {/* first div  */}
            <div className=" flex justify-center order-1  sm:order-2 mt-0 sm:mt-[40px] w-full sm:w-[595px] flex-grow flex-shrink basis-0">
              <img
                 src="https://zbd.gg/new-fpo/homepage4.webp"
                className="max-w-[300px] sm:max-w-[395px]"
                alt="logo"
              />
            </div>
            {/* second div  */}
            <div className="sm:order-1 order-2  py-[25px] sm:flex-grow flex-col sm:flex-shrink sm:basis-0 flex w-full h-[300px] sm:h-[75%] pl-0  ">
              <h1 className=" sm:text-left pb-[10px] px-[25px] text-[38px] text-center sm:text-[3rem] leading-[1.05] text-[#121422] font-[900]">
              ZBD EXTENSIONS
              </h1>
              <p className=" text-left w-full px-[25px] sm:px-0 sm:max-w-[520px] sm:text-[18px] text-[15px] leading-[1.5] ">
              It all gravitates around the ZBD app, but the ZBD Universe is much
              bigger than that. Discover more tools, bots and plugins!
              </p>
              <div className=" flex mt-[20px] justify-center ">
              <button className=" font-bold leading-[1] mt-[10px] rounded-[8px] text-[1rem] text-center flex items-center justify-center py-[12px] w-[246px] bg-[#916ef7] text-white">
              Check it Out
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* new sections */}
      <div
        className=" bg-[#edeff9] mx-auto w-full  rounded-[25px] py-[38px] px-[30px] sm:px-[63px] mb-[105px] flex justify-evenly"
        style={{
          maxWidth: "calc(100vw - 50px)",
        }}
      >
        <div className="w-full sm:w-fit">
          <p className="sm:text-[38px] text-[28px] leading-[1] mb-[8px] font-[900] text-[#121422]">
            BECOME A PARTNER
          </p>
          <div className="relative">
            <div className=" sm:text-[1rem] text-[15px] w-full sm:max-w-[470px]  h-full">
              Like what you’re seeing? Want to integrate ZEBEDEE into your
              products? Learn more or get started!
            </div>
            <div className=" text-[1rem] font-[700]  items-center hidden sm:flex absolute bottom-0 right-0 text-[#916ef7]">
              For Developers
              <img
                src="https://zbd.gg/new-icons/arrow-purple.svg"
                className=" ml-[6px] mb-[2px]"
                alt="as"
              />
            </div>
            <div className=" text-[1rem] font-[700] flex sm:hidden items-center absolute bottom-[-40%] left-0 text-[#916ef7]">
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
          <div className=" hidden sm:flex  h-full items-center justify-center">
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
      <div className=" sm:flex hidden fixed bottom-[48px] right-0 w-[285px] items-center  bg-[#916ef7] text-white rounded-l-[15px] z-[100]">
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
