import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product/ProductCard.component";
import { CartContext } from "../../context/cart.context";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const { addProductToCart } = useContext(CartContext);
  return (
    <div className="shop-products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          price={product.price}
          onClick={() => addProductToCart(product)}
        />
      ))}
    </div>
  );
};

export default Shop;
