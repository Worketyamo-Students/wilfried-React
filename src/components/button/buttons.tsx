/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 04/08/2024 - 15:45:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 04/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
interface buttonprops {
    link:string
    name:string
    className:string 
    
}
function Buttons ({name, link,className}:buttonprops)  {
    return (
        <div className= {className}>
            <div className={className}>
            <a href={link} className={className}></a>
            </div>
            <h1 className={className} >{name} </h1>
            
        </div>

    );
};

export default Buttons;