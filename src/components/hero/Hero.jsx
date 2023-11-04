import { IconContext } from "react-icons";
import Typed from 'react-typed';

import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { SiDribbble } from "react-icons/si";
import myFace from '/src/assets/face.png'
import '/src/index.css'

const Hero = () => {
  return (
    <div className=''>
      <main>
        <div className='grid place-items-center scroll-smooth overflow-x-hidden lg:pt-28'>
                {/* <div className='absolute top-0 right-0 p-4'>
                </div> */}
                <div id='name' className='flex flex-col justify-center text-center pt-8 lg:flex-row-reverse lg:items-center lg:mx-36 lg:text-left gap-10 lg:gap-28'>
                    <div className='flex justify-center'>
                    <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover rounded-full grayscale' src={myFace} alt="my-face" />
                    </div> 
                    <div>
                    <div  className='text-text-clr font-serif flex flex-col justify-center gap-2'>
                    <h1 className='text-4xl lg:text-5xl'>Kelvin Lisdiyanto</h1>
                    <Typed className="text-2xl lg:text-3xl"
                     strings={[
                      'Web Developer',
                      'Student',
                      'Cinephile']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop >
                    </Typed>
                    </div>
                    <div className='flex flex-col gap-6 pt-8'>
                        <p className='text-text-clr text-sm break-before-all lg:break-words font-Manrope mx-24 lg:mx-0 lg:w-80 leading-6'>Hello, Im Kelvin, As a passionate front-end developer,I thrive on crafting engaging and user-friendly web experiences.
                            My dedication to creating visually appealing and interactive interfaces drives my work. With a keen eye for design and a knack for implementing cutting-edge technologies,Im committed to enhancing the online world through compelling user interfaces.
                        </p>
                    <button className='button'><a href="/src/public/CV Kelvin L.pdf" download>my resume</a></button>
                    </div>
                    </div>
                </div>
                <div className='border-y-2 border-button-clr mt-16 w-full py-3 relative'>
                    <div className='flex justify-center items-center gap-20 text-3xl'>
                        <IconContext.Provider value={{ className: "text-text-clr cursor-pointer hover:text-slate-800 transition-all" }}>
                        <SlSocialLinkedin/>
                        <span className='border-x-2 absolute p-3 flex border-button-clr'>
                        <VscGithubAlt/>
                        </span>
                        <SiDribbble/>
                        </IconContext.Provider>
                    </div>
                </div>
        </div> 
        </main>
    </div>
    
  )
}

export default Hero