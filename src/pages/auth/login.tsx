import { Form } from "react-router-dom";
import FormInput from "./forminput";
import { Link } from "react-router-dom";

function Login({ errorMsg }: { errorMsg: string }) {
    return <div className="space-y-8">
        <div className="text-center space-y-2 text-gray-600">
            <h1 className="text-xl">Hello, Friend!</h1>
            <h1 className="text-4xl font-semibold">Welcome Back</h1>
            <p className="text-sm text-gray-500">To keep connecting with us please login with your personal info</p>
        </div>

        <Form method="POST">
            <div className="w-full space-y-5">
                <div className="space-y-4">

                    {/* USER NAME */}
                    <FormInput props={{
                        placeholder: "Username",
                        name: "userName"
                    }} />

                    {/* PASSWORD */}
                    <FormInput
                        icon="lock"
                        props={{
                            placeholder: "Pasword",
                            name: "userPassword",
                            type: "password"
                        }} />
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-primary-300 text-white rounded-md"
                    >
                        Login
                    </button>
                </div>
                <div className="text-center">
                    <p className="text-gray-500">
                        Don't have an account?
                        <Link to="/auth" className="ml-2 font-semibold text-gray-600">Create one</Link>
                    </p>
                </div>
            </div>
        </Form>

    </div>;
}

export default Login;