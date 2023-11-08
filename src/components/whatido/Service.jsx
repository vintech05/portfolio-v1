import '/src/index.css'
import { IoConstructOutline } from 'react-icons/io5'
import { RiGlobalLine } from 'react-icons/ri'
import { BiPaintRoll } from 'react-icons/bi'

const Service = () => {
  return (
    <div>
        <div className='grid place-items-center'>
            <div className='grid place-items-center gap-2 pb-12'>
                <h1 className='font-serif uppercase text-4xl text-button-clr'>what i do</h1>
                <IoConstructOutline className='text-3xl text-button-clr'/>
            </div>
            <div className='px-16 grid grid-cols-2 gap-8'>
                <div id='card-1' className='flex flex-col items-center gap-2 border-2 border-button-clr px-8 py-12 lg:px-10 lg:py-24'>
                    <RiGlobalLine className='text-4xl text-button-clr lg:text-5xl'/>
                    <span className='text-button-clr text-2xl font-Manrope capitalize font-semibold pb-6'>web development</span>
                    <p className='font-Manrope text-button-clr text-sm break-words text-left leading-6 lg:break-all lg:w-[25em]'>I provide comprehensive solutions tailored to your needs. I specialize in creating dynamic, user-friendly websites using the latest technologies and frameworks. My services include front-end and website optimization. I adhere to best practices in coding, ensuring your website is not only visually appealing but also efficient and secure.</p>
                        <span className='text-button-clr font-Manrope font-semibold text-sm mt-6 lg:pr-[19.6em] cursor-pointer hover:underline'>Learn More</span>
                </div>
                <div id='card-2' className='flex flex-col items-center gap-2 bg-button-clr px-8 py-12 lg:px-10 lg:py-24'>
                    <BiPaintRoll className='text-4xl text-bg-clr lg:text-5xl'/>
                    <span className='text-bg-clr text-2xl font-Manrope capitalize font-semibold pb-6'>web design</span>
                    <p className='font-Manrope text-bg-clr text-sm break-words text-left leading-6 lg:break-all lg:w-[25em]'>I provide comprehensive solutions tailored to your needs. I specialize in creating dynamic, user-friendly websites using the latest technologies and frameworks. My services include front-end and website optimization. I adhere to best practices in coding, ensuring your website is not only visually appealing but also efficient and secure.</p>
                        <span className='text-bg-clr font-Manrope font-semibold text-sm mt-6 lg:pr-[19.6em] cursor-pointer hover:underline'>Learn More</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service