import NavContext from "@/context/navigation-context";
import { NavContextType } from "@/shared/types";
import { useContext } from "react";

function MobileNav() {
    const {isNavOpen} = useContext(NavContext) as NavContextType;
    const mobileNavTranslate = isNavOpen ? "translate-x-0" : "-translate-x-full"
    return <div className={`${mobileNavTranslate} fixed top-0 z-[-1] bg-white w-full h-screen transition-all duration-500 ease-in-out md:hidden`} >
        <div className="w-5/6 mx-auto">
           <div>
            
           </div>
        </div>
    </div>;
}

export default MobileNav;