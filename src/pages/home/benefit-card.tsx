import { benefitType } from "@/shared/types";





function BenefitCard({ icon, title, description, isActive }: benefitType) {

    const icon_text = icon.trim().toLowerCase().split(" ").join("_");
    const classValue = isActive ?
        "bg-primary-300 text-white -order-1 md:order-none" :
        "bg-white text-primary-300 ";

    return <div className={`${classValue} flex-1 px-10 py-12 rounded-lg shadow-md`}>
        <span className="material-symbols-outlined text-6xl">
            {icon_text}
        </span>
        <h4 className={`font-semibold capitalize mt-4 text-lg ${isActive ? "text-current" : "text-black"}`}>{title}</h4>
        <p className={`mt-4 text-sm leading-relaxed ${isActive ? "text-current" : "text-gray-600"}`}>{description}</p>
    </div>;
}

export default BenefitCard;