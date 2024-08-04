/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 04/08/2024 - 15:42:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 04/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import Buttons from './button/buttons';
import { HiMiniUsers } from "react-icons/hi2";

const Footer = () => {
    return (
        <div className='flex justify-center gap-10'>
            <div className='bg-[#EEDDDD] w-[15rem] h-[5rem] flex gap-[2rem] py-4 px-4'>
        <a href="orphans"><div className='bg-[#952A2A] w-[3rem] h-[3rem] rounded-[50%] '>
        <HiMiniUsers size={30} className='py-2 text-white'/>
            </div></a> 
            <Buttons link='button' name='orphans' className='text-[2rem] text-[#952A2A] '/>
            </div>
            <div className='bg-[#EEDDDD] w-[33rem] h-[5rem] flex gap-[2rem] py-4 px-4'>
        <a href="#"><div className='bg-[#952A2A] w-[3rem] h-[3rem] rounded-[50%] '>
        <HiMiniUsers size={30} className='py-2 text-white'/>
            </div></a>    
            <Buttons link='button' name='Poverty Relieved Childen' className='text-[2rem] text-[#952A2A] '/>
            </div>
            <div className='bg-[#EEDDDD] w-[35rem] h-[5rem] flex gap-[2rem] py-4 px-4'>
        <a href="#">  <div className='bg-[#952A2A] w-[3rem] h-[3rem] rounded-[50%] '>
        <HiMiniUsers size={30} className='py-2 text-white'/>
            </div></a> 
            <Buttons link='button' name='Scholarship Based Students' className='text-[2rem] text-[#952A2A] '/>
            </div>
        </div>
    );
};

export default Footer;