
export type navLinkType = {
    id: string,
    path: string,
    title: string
}

export type benefitType = {
    isActive?: boolean,
    icon: string,
    title: string,
    description: string
}

export type investmentType = {
    id: number,
    topic: string,
    title: string,
    description: string,
    buttonText: string,
    path: string
}

export type howItWorksType = {
    id: number,
    title: string,
    description: string
}

export type footerConstantType = {
    title: string,
    links: navLinkType[]
}

export interface NavContextType {
    isTopOfPage: boolean,
    isNavOpen: boolean,
    toggleNavOpen: () => void
}


