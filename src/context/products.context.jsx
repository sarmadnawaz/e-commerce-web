import React,  { createContext } from "react";
import PRODUCTS from "../shop-data";

export const ProductsContext = createContext({
    products : []
})



export const ProductsProvider = (props) => {
    const [products, setProducts] = React.useState(PRODUCTS[2].items);
    const value = { products }
    return (
        <ProductsContext.Provider value={value}>
            {props.children}
        </ProductsContext.Provider>
    )
}

