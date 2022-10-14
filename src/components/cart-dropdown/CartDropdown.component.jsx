import { useContext } from "react";
import "./CartDropdown.styles.scss";
import { CartContext } from '../../context/cart.context'

function CartDropdown() {
  const { isCartOpen, products, productIncrementor, productDecrementor, totalAmount } = useContext(CartContext)
  return (
    <div className={`cart-dropdown ${!isCartOpen ? 'hidden' : ''}`}>
        <div className="cart-dropdown-items">
          {products.map(({imageUrl, price, title, quantity, id}) => {
            return  <div className="cart-dropdown-item">
            <img className="cart-dropdown-item-img" src={imageUrl} alt="item image" />
            <div className="cart-dropdown-item-details">
              <h3>{title}</h3>
              <p>${quantity * +price}</p>
            </div>
            <div className="cart-fn">
              <svg
                  onClick={() => productIncrementor(id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              <span>{quantity}</span>
               
                <svg
                  onClick={() => productDecrementor(id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
            </div></div>
          })}
        </div>
      <button className="cart-dropdown-checkout btn">Proceed to Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total: ${totalAmount}</button>
    </div>
  );
}

export default CartDropdown;
