import { EnvelopeIcon, LockClosedIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";

type Props = {
    icon?: string,
    props: React.HTMLProps<HTMLInputElement>
    onChange?: (e: FormEvent<HTMLInputElement>) => void
}

function FormInput({ props, icon, onChange }: Props) {

    const iconStyle = "w-5 h-5";
    let Icon = <UserIcon className={iconStyle} />
    switch (icon) {
        case "email":
            Icon = <EnvelopeIcon className={iconStyle} />
            break;
        case "phone":
            Icon = <PhoneIcon className={iconStyle} />
            break;
        case "lock":
            Icon = <LockClosedIcon className={iconStyle} />
            break;
        default:
            Icon = <UserIcon className={iconStyle} />
            break;
    }


    return <div className="flex items-center rounded-md text-gray-500 gap-2 py-3 px-2 bg-gray-100 border-2 border-transparent focus-within:border-primary-300 focus-within:bg-gray-200">
        {Icon}
        <input
            required
            {...props}
            className="outline-none flex-1 bg-transparent"
            onChange={onChange}
        />
    </div>
}

export default FormInput;