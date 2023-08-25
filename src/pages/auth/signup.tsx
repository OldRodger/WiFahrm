import { Form } from "react-router-dom";
import { useState } from "react";
import FormInput from "./forminput";
import { Link } from "react-router-dom";

function SignUp() {
    const [count, setCount] = useState(1);
    let activeProgress = "w-0"
    let stepStyle = "bg-white text-current";
    let formStyle = "translate-x-0"

    if (count === 2) {
        activeProgress = "w-full"
        stepStyle = "bg-primary-300 text-white";
        formStyle = "-translate-x-1/2";
    }

    return <div className="space-y-8">
        <div className="text-center space-y-2">
            <h1 className="text-4xl font-semibold text-gray-600">Create Account</h1>
            <p className="text-sm text-gray-500">Let's get you all set up so you can access your personal account</p>
        </div>
        <div className="flex justify-between relative text-primary-300">
            {/* PROGRESS */}
            <div className="absolute h-1 w-full bg-gray-20 -translate-y-1/2 top-1/2"></div>
            {/* ACTIVE PROGRESS */}
            <div className={`${activeProgress} absolute h-1 bg-primary-300 -translate-y-1/2 top-1/2 transition-all duration-300 ease-in-out`}></div>
            {/* STEP 1 */}
            <span className="bg-primary-300 text-white grid place-items-center relative rounded-full w-7 h-7 border-2 border-primary-300">
                <span>1</span>
            </span>
            {/* STEP 2 */}
            <span className={`${stepStyle} grid place-items-center relative rounded-full w-7 h-7 border-2 border-primary-300`}>
                <span>2</span>
            </span>
        </div>

        <Form>
            <div className="overflow-hidden">
                <div className={`${formStyle} transition-transform duration-300 ease-in-cubic-bezier flex w-[200%]`}>
                    {/* FORM PART 1 */}
                    <div className="w-full space-y-5">
                        <div className="space-y-4">
                            {/* FIRST NAME */}
                            <FormInput props={{
                                placeholder: "First Name",
                                name: "firstName"
                            }} />

                            {/* LAST NAME */}
                            <FormInput props={{
                                placeholder: "Last Name",
                                name: "lastName"
                            }} />

                            {/* USER NAME */}
                            <FormInput props={{
                                placeholder: "Username",
                                name: "userName"
                            }} />
                        </div>

                        <div className="text-right">
                            <button
                                type="button"
                                className="px-8 py-3 bg-primary-300 text-white rounded-md"
                                onClick={() => setCount(2)}
                            >
                                Next
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-500">
                                Already have an account?
                                <Link to="/auth?mode=login" className="ml-2 font-semibold text-gray-600">Login</Link>
                            </p>
                        </div>
                    </div>
                    {/* FORM PART 2 */}
                    <div className="w-full space-y-5">
                        <div className="space-y-4">
                            {/* EMAIL */}
                            <FormInput
                                icon="email"
                                props={{
                                    placeholder: "Email",
                                    name: "email",
                                    type: "email"

                                }} />

                            {/* PHONE */}
                            <FormInput
                                icon="phone"
                                props={{
                                    placeholder: "Phone",
                                    name: "phoneNumber"
                                }} />

                            {/* PASSWORD */}
                            <FormInput
                                icon="lock"
                                props={{
                                    placeholder: "Pasword",
                                    name: "userPassWord",
                                    type: "password"
                                }} />

                            {/* PASSWORD CONFIRM */}
                            <FormInput
                                icon="lock"
                                props={{
                                    placeholder: "Confirm Pasword",
                                    name: "userPassWordConfirm",
                                    type: "password"
                                }} />
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="px-8 py-3 bg-gray-300 text-gray-500 rounded-md"
                                onClick={() => setCount(1)}
                            >
                                Prev
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-primary-300 text-white rounded-md"
                            >
                                Finish
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-500">
                                Already have an account?
                                <Link to="/auth?mode=login" className="ml-2 font-semibold text-gray-600">Login</Link>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </Form>

    </div>;
}

export default SignUp;