/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 03/08/2024 - 20:30:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import Button from './button/button';


const Body = () => {
    return (
        <div className='flex py-10 my-2 px-[7rem] h-[70vh] mx-[1.5rem] rounded-[1rem] content-center bg-gradient-to-r from-gray-50 to-gray-25  '>
            <div className='flex-1  h-[30rem] font-bold '><div className='flex px-2 font-bold font-Open '><h1 className='text-[6.5rem] '>Help build a</h1>  <span className='text-[#952A2A] text-[6.5rem] mx-[1rem]'>Better</span></div> <div className='flex '>  <h1 className='text-[6rem] text-[#952A2A] font-bold'>Society</h1> <h1 className='text-[6.5rem] mx-[1rem]'>for</h1><h1 className='text-[6.5rem] text-[#952A2A] mx-[1rem]'>All</h1></div> 
            <p className='text-[2.3rem] font-normal '>Lorem ipsum dolor sit amet consectetur. Ac amet libero <br /> facilisis hendrerit pulvinar massa placerat. </p> 
            <div  className='w-[14rem] mt-[4rem]  my-4 h-[5rem] bg-[#952A2A]  py-4 border border-[#952A2A] my-1rem] rounded-[0.5rem] text-center '>
            <Button name='Donate now' href='Donate now' className='text-[1.5rem] text-white '/>
            </div>
        
                
            </div>
            <div className='flex-1 relative h-[30rem] '>
                <div className='bg-[#EEDDDD] w-[30rem] absolute  h-[28rem] rounded-[1rem] ml-[32rem] mt-[-2rem] '>
                    
                    <img src="/src/assets/enfant.svg" alt="" className=' ml-[-8rem] my-[-15rem]  w-[75rem] h-[75rem] relative '/>
                    
                
                </div>
            </div>
        </div>
    );
};

export default Body;