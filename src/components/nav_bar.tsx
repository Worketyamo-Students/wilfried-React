/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 03/08/2024 - 17:07:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import Liste from './liste';
import Logo from './logo';
import { CiSearch } from "react-icons/ci";
import Button from './button/button';

const Nav_bar = () => {
    return (
        <div className='w-[100] h-[6.88rem]   flex px-10 justify-between'>
        <Logo/>
        <Liste href='Home' name='Home' />
        <Liste href='contact' name='About Us'/>
        <Liste href='contact' name='Institutions'/>
        <Liste href='contact' name='Library'/>
        <Liste href='contact' name='Projects'/>
        <Liste href='contact' name='Contact Us'/>
        <CiSearch size={30}  className='text-[#952A2A] w-[2rem] my-4  ml-10 cursor-pointer'/>
        <h1 className=' text-[1.6rem] py-4 text-[#952A2A] ml-[2rem] '>login</h1>
        <div  className='w-[7rem] mx-1 my-4 h-[2.8rem] bg-[#952A2A]   border border-[#952A2A] my-1rem] rounded-[0.5rem] text-center   '>
        <Button href='register' name='register' className='text-[1.5rem] text-white '/>
        </div>
        
        </div>
    );
};

export default Nav_bar;