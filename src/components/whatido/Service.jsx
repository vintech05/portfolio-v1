import '/src/index.css'
import { IoConstructOutline } from 'react-icons/io5'
import { RiGlobalLine } from 'react-icons/ri'
import { BiPaintRoll  } from 'react-icons/bi'
import { TbWorldSearch } from 'react-icons/tb'

const Service = () => {
  return (
    <div>
        <div className='grid place-items-center'>
            <div className='grid place-items-center gap-2 pb-12'>
                <h1 className='font-serif uppercase text-4xl text-button-clr'>what i do</h1>
                <IoConstructOutline className='text-3xl text-button-clr'/>
            </div>
            <div className='px-16 grid grid-col-1 lg:grid-cols-3 gap-8'>
                <div className='group'>
                    <div id='card-1' className='flex flex-col items-center gap-2 border-2 transition-all border-button-clr group-hover:border-none group-hover:bg-button-clr -mx-10 lg:-mx-0 px-4 py-12 lg:px-6 lg:py-20'>
                        <RiGlobalLine className='text-4xl text-button-clr group-hover:text-bg-clr lg:text-5xl'/>
                        <span className='text-button-clr group-hover:text-bg-clr text-2xl font-Manrope capitalize font-semibold pb-6'>web development</span>
                        <p className='font-Manrope text-button-clr group-hover:text-bg-clr text-sm break-words text-center leading-6 lg:break-before-all lg:text-left lg:w-[25em]'>I provide comprehensive solutions tailored to your needs. I specialize in creating dynamic, user-friendly websites using the latest technologies and frameworks. My services include front-end and website optimization. I adhere to best practices in coding, ensuring your website is not only visually appealing but also efficient and secure.</p>
                            <span className='text-button-clr group-hover:text-bg-clr font-Manrope font-semibold text-sm mt-6 lg:pr-[19.6em] cursor-pointer underline hover:no-underline'>
                                Learn More
                            </span>
                    </div>
                </div>
                <div className='group'>
                    <div id='card-2' className='flex flex-col items-center gap-2 border-2 border-button-clr group-hover:border-none group-hover:bg-button-clr transition-all -mx-10 lg:-mx-0 px-4 py-12 lg:px-6 lg:py-20'>
                        <BiPaintRoll className='text-4xl text-button-clr group-hover:text-bg-clr lg:text-5xl'/>
                        <span className='text-button-clr group-hover:text-bg-clr text-2xl font-Manrope capitalize font-semibold pb-6'>UI/UX design</span>
                        <p className='font-Manrope text-button-clr group-hover:text-bg-clr text-sm break-words text-center leading-6 lg:break-before-all lg:text-left lg:w-[25em]'>I focus on creating visually appealing and user-friendly websites that meet your specific needs. I use the latest design trends and technologies to ensure your website is modern and responsive. My services include UI/UX design and website layout planning. I prioritize user experience, ensuring that your website is not only beautiful but also easy to navigate.</p>
                            <span className='text-button-clr group-hover:text-bg-clr font-Manrope font-semibold text-sm mt-6 lg:pr-[19.6em] cursor-pointer underline hover:no-underline'>
                                Learn More
                            </span>
                    </div>
                </div>
                <div className='group'>
                    <div id='card-3' className='flex flex-col items-center gap-2 border-2 border-button-clr group-hover:border-none group-hover:bg-button-clr transition-all -mx-10 lg:-mx-0 px-4 lg:px-6 py-12 lg:py-20'>
                        <TbWorldSearch className='text-4xl text-button-clr group-hover:text-bg-clr lg:text-5xl'/>
                        <span className='text-button-clr group-hover:text-bg-clr text-2xl font-Manrope capitalize font-semibold pb-6'>SEO</span>
                        <p className='font-Manrope text-button-clr group-hover:text-bg-clr text-sm break-words text-center leading-6 lg:break-before-all lg:text-left lg:w-[25em]'> I can assist you in identifying the most relevant keywords for your content. This involves understanding what terms or phrases your target audience is using when they search for products or services similar to yours. By optimizing your content with these keywords, you can improve your visibility on search engine results pages.</p>
                            <span className='text-button-clr group-hover:text-bg-clr font-Manrope font-semibold text-sm mt-6 lg:pr-[19.6em] cursor-pointer underline hover:no-underline'>
                                Learn More
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service