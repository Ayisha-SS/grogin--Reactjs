import Image from "next/image";
import Products from "./products/page";
import { FilterProvider } from "../../context/page";


export default function Home() {
  return (
    <FilterProvider>
      <Products/>
    </FilterProvider>
      );
}
