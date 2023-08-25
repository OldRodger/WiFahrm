import { NAV_LINKS } from "@/constants";
import NavContext from "@/context/navigation-context";
import { NavContextType } from "@/shared/types";
import { Bars3BottomLeftIcon, UserIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./mobile-navigation";



function Navigation() {
    const { isTopOfPage, toggleNavOpen } = useContext(NavContext) as NavContextType;

    const flexBetween = "flex items-center justify-between";
    const navBarBackground = !isTopOfPage ?
        "bg-white shadow-sm md:bg-primary-300 md:shadow-sm md:bg-opacity-20 md:backdrop-blur-lg" :
        "bg-white shadow-sm md:bg-transparent md:shadow-none";
    const btnStyle = !isTopOfPage ?
        "border-primary-500 bg-primary-500 " :
        "border-primary-300 bg-primary-300 md:border-white";


    return <>
        <header className="fixed w-full z-10">
            <div className={`${navBarBackground} py-4 md:py-6`}>
                <div className="w-5/6 mx-auto">
                    <div className={`flex items-center justify-between gap-28 sm:gap-20 md:gap-28`}>
                        <div className="flex items-center gap-8">
                            <Bars3BottomLeftIcon className="w-8 h-8 text-primary-500 md:hidden" onClick={toggleNavOpen} />
                            <h1 className="">Logo</h1>
                        </div>
                        <div className={`flex items-center justify-end gap-8 flex-1 md:justify-between`}>
                            <nav className={`hidden items-center justify-between gap-8 text-sm md:flex`}>
                                {NAV_LINKS.map(({ id, path, title }) => <NavLink key={id} to={path}>{title}</NavLink>)}
                            </nav>
                            <div>
                                <Link to="/auth" className={`${flexBetween} ${btnStyle} capitalize text-white flex items-center gap-2 text-sm border rounded-md p-3 md:py-3 md:px-4 `}>
                                    <UserIcon className="w-4 h-4" />
                                    <span>sign up</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MOBILE NAV */}
            <MobileNav />

        </header>

    </>
}

export default Navigation;