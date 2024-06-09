import FooterBottom from "./footerBottom";
import FooterMiddle from "./footerMiddle";
import FooterTop from "./footerTop";

export default function Footer(){
    return(
        <div className=" bg-[#F3F4F6]">
            <div className="wrapper pt-10">
                <FooterTop/>
                <FooterMiddle/>
                <FooterBottom/>
            </div>
        </div>
    )
}