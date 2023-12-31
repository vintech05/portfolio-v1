import '/src/index.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {

    const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        };

    return (
        <div>
            <div className='flex flex-row justify-between items-center px-6 border-t-2 border-button-clr'>
            <div className='text-button-clr flex flex-col font-Manrope text-sm font-semibold text-center p-8'>
            <span>Copyright &copy; 2024 Kelvin</span>
            <div className='flex flex-row gap-2 pt-2'>
            <div className="w-4 h-4 bg-button-clr rounded-full"></div>
            <div className="w-4 h-4 border-4 border-button-clr rounded-full"></div>
            <div className="w-4 h-4 border-2 border-button-clr rounded-full"></div>
            </div>
            </div>
            <div onClick={scrollToTop} className='group p-2 border-2 border-button-clr hover:bg-button-clr cursor-pointer'>
                <a href="#">
                    <AiOutlineArrowUp className='group text-2xl text-button-clr group-hover:text-bg-clr transition-all'/>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Footer