import { NAV_LINKS } from "@/constants";
import NavContext from "@/context/navigation-context";
import { NavContextType } from "@/shared/types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function MobileNav() {
    const { isNavOpen } = useContext(NavContext) as NavContextType;
    const mobileNavTranslate = isNavOpen ? "translate-x-0" : "-translate-x-full"
    return <div className={`${mobileNavTranslate} fixed top-0 z-[-1] bg-white w-full h-screen transition-all duration-300 ease-in-out md:hidden`} >
        <div className="w-5/6 mx-auto">
            <div className="py-28">
                <nav className="flex flex-col divide-y">
                    {NAV_LINKS.map(({ id, path, title }) => <NavLink key={id} to={path} className="py-5 text-lg">{title}</NavLink>)}
                </nav>
            </div>
        </div>
    </div>;
}

export default MobileNav;