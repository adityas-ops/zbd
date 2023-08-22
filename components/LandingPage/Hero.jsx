import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
        <div className=' w-[100vw] h-full '>
            <div className='  bg-cover min-h-[800px]    px-[25px] bg-[url(https://zbd.gg/new-backgrounds/hero-background@1x-mobile.png)]   sm:bg-[url(https://zbd.gg/new-backgrounds/hero-background@2x.webp)]' style={{
                 backgroundPosition: '50% 20%',
            }}>
                <div className='w-full h-full sm:pt-[109px] pt-[150px]  flex sm:flex-row flex-col-reverse items-center justify-center'>
                    {/* first div */}
                    <div className=' pt-[25px] pb-[30px]'>
                        <h1 className=' sm:text-[64px] text-[2rem] text-center sm:text-start  text-[#f8f8ff] leading-[1.2] sm:leading-[1] font-[900] w-full sm:max-w-[200px] sm:mt-[90px] sm:mb-[20px] '>MONEY WITH MOVES</h1>
                        <p className='sm:text-[18px] text-[16px] text-center text-[#f8f8ff] leading-[1.5] sm:max-w-[350px] w-full mb-[25px]  sm:mb-[46px] '>Jump into a universe of games and apps, connect with your friends, and earn Bitcoin while having fun.</p>
                        <div className='sm:flex hidden '>
                            <Link href="/" className='mr-[20px]'>
                                <img 
                                src='https://zbd.gg/new-icons/appstore.svg'
                                className='w-[180px] object-cover'
                                alt='a'
                                />
                            </Link>
                            <Link href="/" className='mr-[20px]'>
                                <img 
                                src='https://zbd.gg/new-icons/googleplay.svg'
                                className='w-[180px] object-cover'
                                alt='a'
                                />
                            </Link>
                        </div>
                        <div className='flex sm:hidden items-center justify-center '>
                            <div className=' font-[700] rounded-[8px] text-[1rem] py-[13px] px-[35px] border-[2px] border-white text-white'>Download ZBD

                            </div>
                        </div>
                    </div>
                    {/* second div */}
                    <div>
                        <img 
                        src='https://zbd.gg/v3/hero-image.webp'
                        className=' sm:max-w-[500px] w-[315px] sm:w-full sm:mt-[50px] sm:mr-[-50px] sm:ml-[40px] object-cover'
                        alt='hero'
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero