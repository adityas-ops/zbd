import Link from "next/link";
import React from "react";

function Waitlist() {
  return (
    <>
      <div className=" w-[100vw] relative font-Whyte">
        <div className=" max-w-[1150px] h-full px-[25px] mx-auto p-0">
          <div className="  sm:mt-[9rem] pb-[1rem]  h-full flex flex-col sm:flex-row justify-center items-start">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="https://cdn.zebedee.io/zbdgg/social/poster.png"
              className=" w-auto h-[32rem] rounded-[0.3rem] mx-auto "
            >
              <source
                src="https://cdn.zebedee.io/zbdgg/social/launch.mp4"
                type="video/mp4"
              />
            </video>
            {/* second div */}
            <div className="flex h-full flex-col pt-[40px] pb-[20px] pl-0 sm:pl-[60px]">
              <p className=" uppercase text-center sm:text-left text-[38px] leading-[1.05] font-[900]">
                join the Waitlist
              </p>
              <p className=" mb-[20px] mt-[10px] text-center sm:text-left w-full sm:max-w-[80%] text-[15px] text-[#000000] sm:text-[18px]">
                Join our waitlist to gain exclusive entry to the first-ever open
                social platform – a place where creators take home 99% of their
                earnings. Create, cash in, or Zap to endorse your favorite
                content.
              </p>
              <img 
              src="https://zbd.gg/waitlist/quest.png"
              className=" sm:block hidden w-full  mb-[2rem] "
              alt="a"
              />
              <span className=" font-[600] text-[15px] leading-[1.4]">
                Enter Your Email
              </span>
              <input 
              className="mb-[1rem] flex items-center py-[10px] border-[1px] border-[#b5b5be] rounded-[4px] mt-[10px] px-[15px] h-[3rem]  text-[14px]"
              placeholder="email@zbd.bb"
              type="email"
              />
               <span className=" font-[600] mt-[15px] text-[15px] leading-[1.4]">
                Your Refferal Code
                <span className="text-[12px] font-[400] pl-[5px]">optional</span>
              </span>
              <input 
               className="mb-[1rem] flex items-center py-[10px] border-[1px] border-[#b5b5be] rounded-[4px] mt-[10px] px-[15px] h-[3rem]  text-[14px]"
              placeholder="79XH1Z0"
              type="text"
              />
              <div 
              className="flex mt-[1rem] items-center justify-center text-[1rem] h-[3rem] w-full sm:w-[20rem] rounded-[0.3rem] font-[700] bg-[#916ef7] text-white "
              >
                Join The Waitlist
              </div>
              <p className=" my-[40px] text-[14px] leading-[1.7] font-[400] pr-0 sm:pr-[100px] ">
              By joining the waitlist you are agreeing to receive marketing emails from us. You can unsubscribe anytime. For more details, review our
             <Link href="/" className=" pl-[5px] underlined  text-[15px]">
             Privacy Policy.
             </Link>
             <br/>
             <br/>
             By joining the waitlist you are also automatically entered to win bitcoin prizes or the grand prize. NO PURCHASE NECESSARY. Ends July 31st, 2023 at 11:59pm EST. One entry per person will be granted upon waitlist signup, and an additional entry will be given for each successful referral. Must be 18+ and have a verified ZBD app account with an email that matches that used to enter the sweepstake. Void where prohibited.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Waitlist;
