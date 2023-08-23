import { benefitType, footerConstantType, howItWorksType, investmentType, navLinkType } from "@/shared/types";

export const NAV_LINKS: navLinkType[] = [
    {
        id: "home",
        title: "Home",
        path: "/"
    },
    {
        id: "product",
        title: "Product",
        path: "/"
    },
    {
        id: "team",
        title: "Team",
        path: "/"
    },
    {
        id: "blog",
        title: "Blog",
        path: "/"
    },
    {
        id: "contact",
        title: "Contact",
        path: "/"
    },
]


export const BENEFITS: benefitType[] = [
    {
        icon: 'groups',
        title: 'connect with farmers',
        description: 'Porta integer sem commodo euismod quisque; quis interdum sollicitudin. Nullam urna enim cursus nisl magna primis.'
    },
    {
        isActive: true,
        icon: 'rocket launch',
        title: 'grow your business',
        description: 'Metus rutrum feugiat quisque; eget pharetra interdum curabitur mattis. Diam eu aliquet donec massa dis sem.'
    },
    {
        icon: 'grass',
        title: 'farm land ownership',
        description: 'Lorem sollicitudin natoque aliquam vitae arcu vel odio nunc. Rutrum lobortis vivamus senectus morbi nam lobortis.'
    },
]


export const INVESTMENTS: investmentType[] = [
    {
        id: 1,
        topic: "New farm today",
        title: "Own a farm land today",
        description: "Own a farm that will be ready for planting in no time",
        buttonText: "Browse farm",
        path: "/"
    },
    {
        id: 2,
        topic: "Fully convenient",
        title: "Automatic farming",
        description: "All farm work done for you by the tap of a button",
        buttonText: "Get started",
        path: "/"

    },
]


export const HOW_IT_WORKS: howItWorksType[] = [
    {
        id: 0,
        title: "Create your WiFahrm account",
        description: "First step is sign up, you have to login or sign up if you are visiting for the first time. on sign up completion the user is redirected to their dashboard"
    },
    {
        id: 1,
        title: "Dashboard",
        description: "Once signed or logged in to the dashboard, users can see data in a clear and concise format, allowing users to quickly monitor and understand complex metrics as well as perform operations"
    },
    {
        id: 2,
        title: "Start farming",
        description: "The user is provided withthe option to farm as well ass other various actions, If a user choses to farm immediately, they will select a crop and a state to plant it in. once that is done, the user is directed to payment."
    },
    {
        id: 3,
        title: "Payment",
        description: "Description 4"
    },
]

export const FOOTER_CONSTANTS: footerConstantType[] = [
    {
        title: "invest",
        links: [
            {
                id: "features",
                title: "Features",
                path: "/"
            },
            {
                id: "howitworks",
                title: "How it works",
                path: "/"
            },
            {
                id: "pricing",
                title: "Pricing",
                path: "/"
            },
            {
                id: "login",
                title: "Login",
                path: "/"
            },
           
        ]
    },
    {
        title: "company",
        links: [
            {
                id: "about",
                title: "About us",
                path: "/"
            },
            {
                id: "team",
                title: "Team",
                path: "/"
            },
            {
                id: "contact",
                title: "Contact",
                path: "/"
            }
        ]
    },
    {
        title: "legal",
        links: [
            {
                id: "privacy",
                title: "Privacy",
                path: "/"
            },
            {
                id: "terms",
                title: "Terms",
                path: "/"
            },
            {
                id: "security",
                title: "Security",
                path: "/"
            },
        ]
    },
   
]