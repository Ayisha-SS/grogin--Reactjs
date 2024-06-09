
import Footer from "./footer/page";
import NavBarItem from "../_component/general/navbar/page";
import Sidebar from "./sidebar/page";
import Product from "./product/page";

export default function Products(){
    return(
        <>
            <NavBarItem/>
            <div className='wrapper flex py-10'>
                <Sidebar/>
                <Product/>
            </div>
            <Footer/>
        </>
    )
}