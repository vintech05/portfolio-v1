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
            <div className='text-button-clr font-Manrope text-sm font-semibold text-center p-8'>
            <span>Copyright &copy; 2023 Kelvin</span>
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