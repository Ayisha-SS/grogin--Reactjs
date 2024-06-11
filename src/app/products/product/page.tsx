import ProductBottom from "./productBottom";
import ProductTop from "./productTop";

export default function Product(){
    return(
        <div className="w-full">
            <ProductTop/>
            <ProductBottom/>
        </div>
    )
}