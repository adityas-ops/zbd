import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import React, { useRef, useEffect, useState } from "react";

const data = [
  {
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/ZBD.gg%20marketing%20visuals/HomeWhatsHot/API.jpg",
    name: "Plug-and-play API is LIVE",
    desc: "Join 200+ developers on ZEBEDEE and start moving money at the speed of the internet ⚡",
  },
  {
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/ZBD.gg%20marketing%20visuals/HomeWhatsHot/SM-02-ZBD-x-Emeralize.webp",
    name: "Free and paid courses ⚡",
    desc: "Find courses on the Lightning Network and more on Emeralize →",
  },
  {
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/ZBD.gg%20marketing%20visuals/HomeWhatsHot/Lightning-Rail-Announcement-2.webp",
    name: "Free your money",
    desc: "Moving money across the world just got massively easier →",
  },
  {
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/ZBD.gg%20marketing%20visuals/HomeWhatsHot/Bitrefill-New-Gift-Cards.webp",
    name: "Need an idea for a gift? 🎁",
    desc: "Use sats to buy gift cards for anything inside the ZEBEDEE app →",
  },
  {
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/ZBD.gg%20marketing%20visuals/HomeWhatsHot/blog.jpg",
    name: "Update with social vibes",
    desc: "Your money just got some sweet new moves 🕺💃",
  },
  {
    img: "https://22682105.fs1.hubspotusercontent-na1.net/hubfs/22682105/ZBD.gg%20marketing%20visuals/HomeWhatsHot/forbes.jpg",
    name: "No Big Deal",
    desc: "What do Nostr and ZBD have to do with each other? Find out here 👆",
  },
];

function Carosuel() {
  const [padd, setPadd] = useState("1rem");
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd("1rem");
      } else {
        setPadd("0rem");
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" max-w-[1050px]  mx-auto relative">
      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          padding: padd,
          type: "loop",
          pagination: false,
          perPage: 3,
          rewind : true,
          perMove: 1,
        }}
      >
        <SplideTrack 
      
        >
          {data.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div
                  className="mr-[54px]  w-[300px] h-[300px] "
                  style={{
                    flex: "0 0 300px",
                  }}
                >
                  <div className=" flex flex-col bg-[#edeff9]  rounded-[25px] ">
                    <img src={item.img} className=" rounded-t-[25px] h-[192px]" alt="..." />
                   
                      <h5 className=" font-[700] mt-[15px] text-center mb-[8px] text-[18px]">{item.name}</h5>
                      <p className=" mt-0 text-center px-[5px] font-[400] text-[14px]">{item.desc}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </SplideTrack>
          <div className=" absolute w-full top-[40%]">
        <div className="splide__arrows w-full flex relative justify-between">
          <button className="splide__arrow splide__arrow--prev absolute left-[-5%]">
            <img 
            src="https://zbd.gg/icons/arrow-left.svg"
            className=""
            alt="as"
            />
          </button>
          <button className="splide__arrow splide__arrow--next absolute right-0">
            <img 
            src="https://zbd.gg/icons/arrow-right.svg"
            className=""
            alt="s"
            />
          </button>
        </div>
        </div>
      </Splide>
    </div>
  );
}

export default Carosuel;
