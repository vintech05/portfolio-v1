import { useState } from 'react'
import '/src/index.css'
import { IconContext } from "react-icons";
import { RiArrowRightUpLine } from "react-icons/ri"

const About = () => {
    
    const [show, setShow] = useState(1);

    const showToggle = (id) => {
        setShow(id);
    }

    return (
        <div className='flex justify-center items-center lg:flex-row md:flex-col flex-col gap-32 font-Manrope h-screen'>
            <div className=' border-2 border-button-clr'>
            <div className=' border-b-2 border-button-clr px-0 md:px-4 lg:px-8'>
                <ul className='flex flex-row gap-8 text-button-clr'>
                    <li className='mt-2 cursor-pointer pl-8 lg:pr-8' onClick={()=>showToggle(1)}>Skills</li>
                    <li className='border-x-2 border-button-clr py-2 px-12 cursor-pointer' onClick={()=>showToggle(2)}>Hobbies</li>
                    <li className='pt-2 cursor-pointer pr-8 lg:pl-8' onClick={()=>showToggle(3)}>Stack</li>
                </ul>
            </div>
            <div className='p-4'>
            {show === 1 && (
                <div id='skills-tab' className='grid grid-cols-3 gap-2'>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>VSCode</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>Git</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>Figma</span>
                </div>
            )}
            {show === 2 && (
                <div id='hobbies-tab' className='grid grid-cols-2 gap-2'>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>Sleeping</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>Movies</span>
                </div>
            )}
            {show === 3 && (
                <div id='stack-tab' className='grid grid-cols-3 lg:grid-cols-4 gap-2'>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>HTML</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>CSS</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>JS</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>SASS</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>TailwindCSS</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>React</span>
                    <span className='bg-button-clr text-bg-clr p-1 border-bg-clr text-sm hover:bg-bg-clr hover:text-button-clr border-2 hover:border-button-clr transition-all'>Vite</span>
                </div>
            )}
            </div>
            </div>
            <div className='flex flex-col gap-6 tracking-tighter'>
                <a href="https://github.com/vintech05/loopstudios-landing-page">
                <div className='group text-button-clr border-2 border-button-clr cursor-pointer flex flex-row items-center gap-8 w-[20em] md:w-[25em] hover:bg-button-clr group-hover:text-bg-clr transition-all lg:w-[30em] p-3'>
                    <IconContext.Provider value={{ className: "text-text-clr text-2xl group-hover:text-bg-clr transition-all" }}>
                        <RiArrowRightUpLine/>
                    </IconContext.Provider>
                    <span className='text-xl group-hover:text-bg-clr'>Project 1</span>
                </div>
                </a>
                <a href="https://github.com/vintech05/attendance-tracker">
                <div className='group text-button-clr border-2 border-button-clr cursor-pointer flex flex-row items-center gap-8 w-[20em] md:w-[25em] hover:bg-button-clr group-hover:text-bg-clr transition-all lg:w-[30em] p-3'>
                    <IconContext.Provider value={{ className: "text-text-clr text-2xl group-hover:text-bg-clr transition-all" }}>
                        <RiArrowRightUpLine/>
                    </IconContext.Provider>
                    <span className='text-xl group-hover:text-bg-clr'>Project 2</span>
                </div>
                </a>
                <a href="https://github.com/vintech05/diskominfo-dashboard">
                <div className='group text-button-clr border-2 border-button-clr cursor-pointer flex flex-row items-center gap-8 w-[20em] md:w-[25em] hover:bg-button-clr group-hover:text-bg-clr transition-all lg:w-[30em] p-3'>
                    <IconContext.Provider value={{ className: "text-text-clr text-2xl group-hover:text-bg-clr transition-all" }}>
                        <RiArrowRightUpLine/>
                    </IconContext.Provider>
                    <span className='text-xl group-hover:text-bg-clr'>Project 3</span>
                </div>
                </a>
            </div>
        </div>
    )
}

export default About
