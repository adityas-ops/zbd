import { data } from "autoprefixer";
import React from "react";

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

const Data = [
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
  {
    name: "Balls King",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Balls-King-250.jpg",
  },
  {
    name: "Stattrak",
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Stattrak-250.jpg",
  },
];


const data2=[
    {
        img:"https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Artboard%201%20(3).jpg",
        name:"ZBD_Play Twitter",
        name2:"ZBD Challenge",
        date:"Wednesday, Jul 19, 2023, 5:00 PM EST"
    },
    {
        img:"https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Rush-Hour-240.jpg",
        name:"ZEBEDEE Kart",
        name2:"Rush Hour",
        date:"Thursday, Jul 20, 2023, 12:00 PM EST"
    },
    {
        img:"https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/MathG-Game-Night-240.jpg",
        name:"with MathG",
        name2:"Game Night",
        date:"Wednesday, Jul 19, 2023, 4:00 PM EST"
    },
]

function Play() {
  return (
    <>
      <div className="w-[100vw] font-Whyte relative ">
        <div className=" w-full max-w-[1150px] mx-auto  sm:px-0 flex justify-center items-center min-h-auto flex-col">
          {/* new section */}
          <div className=" sm:pt-[161px] sm:pb-[105px] px-[25px]  ">
            <div className="flex sm:flex-row flex-col  h-[650px] sm:h-full">
              <img
                src="https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/1x1.jpg"
                className=" rounded-[25px] max-h-[384px] w-full sm:max-w-[384px] sm:p-[13px]  sm:mr-[55px]"
                alt="as"
              />
              <div>
                <p className="text-[1rem] leading-[1.4] font-[700] mb-[8px] mt-[1rem] ">
                  ZBD Quests
                </p>
                <p className=" uppercase sm:text-[3rem] whitespace-nowrap sm:whitespace-normal text-[28px] font-[900] m-0 tracking-[1px]">
                  Early Access Quest{" "}
                </p>
                <div className="flex items-center justify-center mb-[20px] sm:mb-[50px]">
                  <div className="w-full h-[7px] bg-[#b5b5be]  rounded-[10px] relative">
                    <div className="w-[77%] rounded-[10px] h-[7px] bg-[#916ef7]" />
                    <div className=" absolute right-0 top-[-12px]">
                      <div className=" h-[32px] w-[32px] relative bg-[#b5b5be] rounded-[20px]">
                        <img
                          src="https://zbd.gg/new-icons/quest-trophy.svg"
                          className=" w-[15px] h-[12px] absolute left-[8.5px] top-[10px]  "
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" w-[75px] ml-[15px] font-[700] text-[1rem] ">
                    0-727:0-10:0-1
                  </div>
                </div>
                {/* button */}
                <button className=" text-[1rem] text-[#f8f8ff] py-[11.5px] w-[246px] rounded-[8px] font-[700] flex justify-center items-center  bg-[#916ef7]">
                  Join the Quest
                </button>
              </div>
            </div>
          </div>
          {/* new section */}
          <div className=" max-w-[1150px] px-[25px] mx-auto w-full mb-[38px] sm:px-[67px] pb-[20px] sm:pb-[62px]">
            <p className=" font-[900] uppercase text-[28px] sm:text-[3rem] text-[#121422] leading-[1.1]">
              featured app
            </p>
            <div className="flex mt-[20px] sm:mt-[40px]">
              <div className=" hidden sm:flex">
                <div className="mr-[73px]">
                  <img
                    src="https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Fountain-500.jpg"
                    className=" w-[330px] h-[330px] rounded-[25px]"
                    alt="a"
                  />
                  <p className=" font-[900] text-[28px] uppercase mt-[19px] mb-[9px]">
                    Fountain
                  </p>
                  <p className="text-[18px] leading-[1.3] w-[350px]">
                    Podcasting app that let&apos; s you earn while you listen.
                  </p>
                </div>
                <div className=" grid grid-cols-3 gap-[50px]">
                  {Data.map((item, index) => {
                    return (
                      <>
                        <div key={index} className="flex flex-col ">
                          <img
                            src={item.img}
                            className=" rounded-[25px] h-[164px] w-[164px]"
                            alt={item.name}
                          />
                          <p className=" mt-[14px] font-[700] text-[18px] text-[#121422]">
                            {item.name}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className=" flex sm:hidden overflow-x-scroll">
              {Data.map((item, index) => {
                    return (
                      <>
                        <div key={index} className="flex flex-col  mx-[20px] ">
                          <img
                            src={item.img}
                            className=" rounded-[25px] h-[120px] w-full min-w-[120px] max-w-[120px]"
                            alt={item.name}
                          />
                          <p className=" mt-[14px] font-[700] text-[16px] text-[#121422]">
                            {item.name}
                          </p>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* new sections */}
          <div className=" max-w-[1120px] mx-auto py-[54px] px-[25px] sm:px-[59px] w-full sm:rounded-[25px] bg-[#edeff9]">
            <p className=" font-[900] text-[28px] sm:text-[3rem] leading-[1.1] uppercase ">
              events
            </p>
            <div className=" mt-[36px] flex  flex-col sm:flex-row items-center">
                <div className=" flex mr-0 sm:mr-[50px] relative justify-center">
                    <img 
                    src="https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/Artboard-1-copy.png"
                    className=" h-[450px] w-full mx-auto sm:max-w-[362px] max-h-[452px] rounded-[25px]"
                    alt="as"
                    />
                </div>
                <div className=" max-w-[500px] w-full mt-[40px] ">
                {
                  data2.map((item,index)=>{
                    return(
                        <>
                        <div key={index} className="flex h-[120px] mb-[45px]">
                        <img 
                        src={item.img}
                        className=" rounded-l-[25px] w-[100px] sm:w-[150px] h-full"
                        alt="a"
                        />
                        <div className=" w-full sm:pl-[35px] pl-[15px] h-full rounded-r-[25px] bg-[#f8f8ff]">
                            <p className="font-[900] text-[14px] mt-[20px] mb-[5px] uppercase">{item.name}</p>
                            <p className=" font-[700] text-[20px] sm:text-[24px] leading-[1] max-w-[300px]">{item.name2}</p>
                            <p className=" font-[400] mt-[5px] text-[12px] mr-[5px]  sm:text-[14px]">{item.date}</p>
                        </div>
                        </div>
                        </>
                    )

                  })}
                </div>
            </div>
          </div>
          {/* new section */}
          <div className=" mt-[80px] mb-[100px] px-[25px] sm:px-0 flex flex-col items-center justify-center">
                  <p className=" sm:text-[3rem] text-[28px] text-center sm:text-left leading-[1.4] font-[900]">JOIN OUR GAMING COMMUNITY</p>
                  <div className=" mt-[26px] flex flex-col sm:flex-row  ">
                    <button className=" text-white py-[11.5px] w-[350px] h-[50px] sm:w-[246px] bg-[#916ef7] rounded-[8px] mr-0 mb-[20px] sm:mr-[31px] font-[700] flex items-center justify-center">
                        Twitter
                    </button>
                    <button className=" text-white py-[11.5px] h-[50px] w-[350px] sm:w-[246px] bg-[#916ef7]  rounded-[8px] font-[700] flex items-center justify-center">
                       Discord
                    </button>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;
