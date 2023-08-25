import { FOOTER_CONSTANTS } from "@/constants";
import FooterList from "./footerList";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

function Footer() {
    return <footer>
        <div className="bg-footer-wave bg-cover bg-center py-20 md:py-36">
            <div className="w-5/6 mx-auto">
                <div className=" text-center md:rounded-md md:bg-white md:py-20 md:shadow-2xl">
                    <h1 className="text-xl tracking-wider font-semibold mb-8 md:text-2xl">The future of <span className="text-primary-300 capitalize">farm investing</span> is Wifahrm</h1>
                    <button className="capitalize px-12 py-2 bg-primary-300 text-white rounded-md">invest now</button>
                </div>
                <div></div>
            </div>
        </div>
        <div className="bg-gray-20">
            <div className="w-5/6 mx-auto divide-y">
                <div className="py-10">
                    <div className="grid md:grid-cols-4">
                        <FooterList list={FOOTER_CONSTANTS} />
                        <div className="py-8 bg-primary-300 text-white rounded-md">
                            <div className="w-4/5 mx-auto md:w-3/5 ">
                                <h1 className="text-xl font-semibold mb-3">Contact us</h1>
                                <p>Write email to us</p>
                                <p className="mb-4">info@wifahrm.com</p>
                                <Link to="/auth" className="capitalize bg-white text-primary-300 flex justify-center items-center p-3 rounded-md gap-2">
                                    <UserIcon className="w-5 h-5" />
                                    <span>sign up</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-14">
                    <h1>Logo</h1>
                    <span className="text-sm">&copy; Copyright 2023 Wifahrm</span>
                </div>
            </div>
        </div>
    </footer>;
}

export default Footer;