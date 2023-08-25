import { loginHandler, signUpHandler } from "@/shared/helper";
import { AxiosResponse } from "axios";
import { Link, json, redirect, useActionData, useSearchParams } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";

function AuthenticationPage() {
    const [searchParam] = useSearchParams();
    const isLogin = searchParam.get("mode") === 'login';
    const actionData = useActionData() as { message: string } ?? { message: undefined };


    return <section className="h-screen bg-white py-10 items-center justify-center md:flex ">
        <div className="mx-auto w-[88%] xs:w-5/6">
            <div className="gap-10 md:flex">
                {/* FORM */}
                <div className="md:basis-7/12">
                    <Link to="/">
                        <h1 className="mb-10">Logo</h1>
                    </Link>
                    {isLogin ? <Login errorMsg={actionData.message} /> : <SignUp errorMsg={actionData.message} />}
                </div>

                {/* GRAPHICS */}
                <div className="hidden p-5 rounded-3xl bg-invest-background-1 bg-cover md:block md:basis-5/12">
                </div>
            </div>
        </div>
    </section>
}

export default AuthenticationPage;


export async function action({ request }) {
    const { searchParams } = new URL(request.url);
    const mode  = searchParams.get('mode') || 'signup';
    const formData = await request.formData() as FormData;
    const payLoad: { [key: string]: FormDataEntryValue } = {}

    for (const [key, value] of formData.entries()) {
        payLoad[key] = value
    }


    try {
        if (mode === "signup") {
            const response = await signUpHandler(payLoad) as AxiosResponse;
            console.log("SIGN UP SUCCESSFUL");
            console.log(response.data);
        }

        if(mode === 'login'){
            const response = await loginHandler(payLoad) as AxiosResponse;
            console.log("LOGIN SUCCESSFUL");
            console.log(response.data);
            
            
        }

    } catch (error) {
        console.log(error);

        return json({ message: 'NETWORK ERROR' }, { status: 422 })


    }

    return redirect('/auth')
}