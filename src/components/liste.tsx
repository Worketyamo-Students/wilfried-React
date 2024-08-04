/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 03/08/2024 - 19:16:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
interface type {
    name: string
    href: string
}

function Liste ({name, href}:type)  {
    return (
        <div className='px-[4rem] py-4 font-sans '>
            <a href={href} className=' text-[1.6rem] text-[#404040] text-center  '>{name}</a>
        </div>
    );
};

export default Liste;