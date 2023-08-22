import { NavContextType } from "@/shared/types";
import { createContext } from "react";

const NavContext = createContext<NavContextType | null>(null);
export const NavProvider = NavContext.Provider
export default NavContext;