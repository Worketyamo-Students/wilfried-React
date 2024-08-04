
/**
import { Button } from "@/components/ui/button";
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 03/08/2024 - 18:00:20
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
    className: string;
}

function Button ({name, href,className}:type)  {
    return (
        <div className= {className}>
            <a href={href} className={className}>{name}</a>
        </div>

    );
};

export default Button;