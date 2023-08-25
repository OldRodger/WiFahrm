import { useSearchParams } from "react-router-dom";
import AuthForm from "./form";
import Login from "./login";
import SignUp from "./signup";

function AuthenticationPage() {
    const [searchParam] = useSearchParams();
    const isLogin = searchParam.get("mode") === 'login';


    return <section className="bg-white py-10 items-center justify-center md:flex ">
        <div className="mx-auto w-5/6">
            <div className="md:flex">
                {/* FORM */}
                <div className="md:basis-2/3">
                    <h1 className="mb-10">Logo</h1>
                    {isLogin ? <Login /> : <SignUp />}
                </div>

                {/* GRAPHICS */}
                <div className="hidden md:block md:basis-1/3">
                    GRAPHICS
                </div>
            </div>
        </div>
    </section>
}

export default AuthenticationPage;