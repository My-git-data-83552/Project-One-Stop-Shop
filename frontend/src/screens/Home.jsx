import Navigation_bar from "../components/Navigation_bar"
import Product from "../components/Product"
import { FeaturedProduct } from "../components/FeaturedProduct"


export default function Home(){
    return (
        <div style={{backgroundColor:"lightcyan"}}>
            <Navigation_bar/>
            <div>
                <div style={{
                paddingTop:"80px",
                paddingBottom:"80px",
            }}>
                <div  className="container">
                    <h1>Check out Our Featured Products!!!</h1>
                    <hr />
                </div>
            <FeaturedProduct/>
            <Product/>
            </div>
            </div>
        </div>
    )
}