import { IconContext } from "react-icons";
import { useRef, useEffect } from "react";

import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { SiDribbble } from "react-icons/si";
import { TweenMax, Power3 } from "gsap";
import myFace from '/src/assets/face.png'
import '/src/index.css'

const Hero = () => {

  let myImg = useRef();
  let title = useRef();
  let paragraph = useRef();
  let social = useRef();

  useEffect(() => {
    TweenMax.to(
      myImg,
      .8,
      {
        opacity: 1,
        y: -10,
        delay: .2,
        ease: Power3.easeOut,
      }
    )
    TweenMax.to(
      title,
      .8,
      {
        opacity: 1,
        y: -10,
        delay: .3,
        ease: Power3.easeOut,
      }
    )
    TweenMax.to(
      paragraph,
      .8,
      {
        opacity: 1,
        y: -10,
        delay: .4,
        ease: Power3.easeOut,
      }
    )
    TweenMax.to(
      social,
      .8,
      {
        opacity: 1,
        y: -10,
        delay: .5,
        ease: Power3.easeOut,
      }
    )
  }, [])
  
  return (
    <div className=''>
      <main>
        <div className='grid place-items-center scroll-smooth overflow-x-hidden lg:pt-28'>
                <div id='name' className='flex flex-col justify-center text-center pt-8 lg:flex-row-reverse lg:items-center lg:mx-36 lg:text-left gap-10 lg:gap-28'>
                    <div className='flex justify-center'>
                    <img ref={el => {myImg = el}} className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover opacity-0 rounded-full grayscale' src={myFace} alt="my-face" />
                    </div> 
                    <div>
                    <div ref={el => {title = el}}  className='text-text-clr font-Notoserif flex flex-col justify-center gap-2 opacity-0'>
                    <h1 className='text-4xl lg:text-5xl'>Kelvin Lisdiyanto</h1>
                    <h3 className="text-2xl lg:text-3xl">Web Developer</h3>
                    </div>
                    <div ref={el => {paragraph = el}} className='flex flex-col gap-6 pt-8 opacity-0'>
                        <p className='text-text-clr text-sm lg:break-words font-Manrope mx-24 lg:mx-0 lg:w-80 leading-6 tracking-tight'>Hello, I&apos;m Kelvin, As a passionate front-end developer, I thrive on crafting engaging and user-friendly web experiences.
                            My dedication to creating visually appealing and interactive interfaces drives my work. Im committed to enhancing the online world through compelling user interfaces.
                        </p>
                        <div>
                            <button className='button'><a href="/src/public/CV Kelvin.pdf" download>my resume</a></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div ref={ el => {social = el}} className='border-y-2 border-button-clr mt-16 w-full py-3 relative opacity-0'>
                    <div className='flex justify-center items-center gap-20 text-3xl'>
                        <IconContext.Provider value={{ className: "text-text-clr cursor-pointer hover:text-slate-800 transition-all" }}>
                          <a href="https://www.linkedin.com/in/kelvinlsdynto/" target="blank">
                        <SlSocialLinkedin/>
                          </a>
                        <span className='border-x-2 absolute p-3 flex border-button-clr'>
                          <a href="https://github.com/vintech05" target="blank">
                        <VscGithubAlt/>
                          </a>
                        </span>
                        <a href="https://dribbble.com/Kovelin" target="blank">
                        <SiDribbble/>
                        </a>
                        </IconContext.Provider>
                    </div>
                </div>
        </div> 
        </main>
    </div>
    
  )
}

export default Hero