
import React from 'react';
import Image from 'next/image';
import 'animate.css';
import image1 from '../../public/imgonline-com-ua-Transparent-background-dCx8Jbt05t (1).jpg'

const Banner = () => {
    return (
        <div>

        <div className='hero max-w-[490px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10 bg-no-repeat'>

            <div className='hero-overlay bg-opacity-70 rounded-3xl flex flex-col md:flex-row items-center lg:p-32 md:px-8 px-4 py-8 md:py-2'>
                <div className='rounded-3xl w-full md:w-[70%]'>

                  
                    <div className=''>
                        <h1 class="animate__animated animate__fadeInLeft">
                            <span className='text-[40px] md:text-4xl lg:text-6xl font-bold text-white'>
                                Hi ! I am Nafis ahamed
                            </span>
                        </h1>
                        <p className='text-[20px] md:text-2xl lg:text-4xl  text-white'>
                            Mern-Stack Developer | Competitive Programmer | Undergraduate Student
                        </p>
                    </div>
                    <div className='text-[20px] md:text-xl lg:text-2xl text-white font-bold'>

                        

                    </div>
                </div>

                <div className=' md:rounded-full mt-4 md:w-[30%] md:ml-[50px] lg:ml-32'>
                    <h1 class="animate__animated animate__zoomIn">
                        {/* <Link to="/allBook">
                            <button className='btn btn-outline btn-accent md:btn-lg '>
                                <div className='flex gap-2 items-center'>
                                    <p>Explore</p> <FaArrowRightLong />
                                </div>
                            </button>
                        </Link> */}
                        <div className='w-40 h-48 lg:w-52 border border-blue-400 rounded-full'>
                            
                            <Image src={image1} className='w-60 h-48 lg:h-56 rounded-full'></Image>
                        </div>
                    </h1>
                </div>
            </div>


        </div>


       




    </div>

    );
};

export default Banner;