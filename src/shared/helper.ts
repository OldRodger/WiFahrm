import axiosInstance from "@/utils/axios";
import { json } from "react-router-dom";
import { AuthEndPoint } from "./types";






// SIGN UP HANDLER
export async function signUpHandler(payLoad: { [key: string]: FormDataEntryValue }) {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function validateEmail(email: string): boolean {
        return emailRegex.test(email);
    }


    if (!validateEmail(payLoad.email.toString().trim())) {
        return json({ message: 'Invalid email address' }, { status: 422 })
    }


    if (payLoad.password.toString().trim().length < 8) {
        return json({ message: 'Password must be at least 8 characters' }, { status: 422 })
    }

    if (payLoad.password !== payLoad.passwordConfirm) {
        return json({ message: 'Password mismatch' }, { status: 422 })
    }

    delete payLoad.passwordConfirm

    return await axiosInstance.post(AuthEndPoint.NewUser, payLoad);
}


// LOGIN HANDLER
export async function loginHandler(payLoad: { [key: string]: FormDataEntryValue }) {

    return await axiosInstance.post(AuthEndPoint.UserLogin, payLoad);
}

