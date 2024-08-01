import { Link, useNavigate } from "react-router-dom"
import Navigation_bar from "../components/Navigation_bar"
import Product from "../components/Product"
import addProduct from "./AddProduct"


export default function Home(){
    return (
        <div style={{backgroundColor:"beige"}}>
            <Navigation_bar/>
            <div>
            <Product/>
            </div>
        </div>
    )
}