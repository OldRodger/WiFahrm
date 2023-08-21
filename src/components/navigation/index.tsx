import { NAV_LINKS } from "@/constants";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

type props = {
    isTopOfPage: boolean
}

function Navigation({ isTopOfPage }: props) {

    const flexBetween = "flex items-center justify-between";
    const navBarBackground = !isTopOfPage && "bg-primary-300 bg-clip-padding shadow-sm backdrop-filter backdrop-blur-lg bg-opacity-20";
    const btnBackground = !isTopOfPage ? "bg-primary-500 border-primary-500" : " border-current";


    return <header className={`flex items-center fixed top-0 w-full py-6 z-50 ${navBarBackground}`}>
        <div className={`${flexBetween} w-5/6 mx-auto gap-28`}>
            <h1 className="">Logo</h1>
            <div className={`${flexBetween} w-full`}>
                <nav className={`${flexBetween} gap-8 text-sm`}>
                    {NAV_LINKS.map(({ id, path, title }) => <NavLink key={id} to={path}>{title}</NavLink>)}
                </nav>
                <div>
                    <Link to="/" className={`${flexBetween} ${btnBackground} border text-white capitalize py-3 px-4 cursor-pointer rounded-md gap-2 md:text-sm`}>
                        <UserIcon className="w-4 h-4" />
                        <span>sign up</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
}

export default Navigation;