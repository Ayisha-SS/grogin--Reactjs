import NavbarBottom from "./dropDown";
import NavbarMiddle from "./middleBar";
import NavBar from "./navBar";
import NavbarTop from "./topBar";

export default function NavBarItem(){
    return(
        <>
            <NavbarTop/>
            <NavbarMiddle/>
            <NavBar/>
            <NavbarBottom/>
        </>
    )
}