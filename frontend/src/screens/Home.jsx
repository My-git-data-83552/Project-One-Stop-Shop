import Navigation_bar from "../components/Navigation_bar"
import Product from "../components/Product"
import { FeaturedProduct } from "../components/FeaturedProduct"


export default function Home(){
    return (
        <div style={{backgroundColor:"beige"}}>
            <Navigation_bar/>
            <div>
            <FeaturedProduct/>
            <Product/>
            </div>
        </div>
    )
}