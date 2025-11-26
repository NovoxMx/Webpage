import data from "../data/navbar.json";
import { Navbar, NavbarData} from "../data/interfaces";
    
const navbarData = data as unknown as NavbarData;
export function getNavbar(lang: "en" | "es"): Navbar[] {
    return navbarData[lang];
}