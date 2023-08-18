import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";


const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [countCart, setCountCart] = useState(0)
  const [countCart1, setCountCart1] = useState(0)
  const [countCart2, setCountCart2] = useState(0)
 
  const increment = () => {
    setCountCart(countCart +1)
  };
  const increment1 = () => {
    setCountCart1(countCart1 +1)
  };
  const increment2 = () => {
    setCountCart2(countCart2 +1)
  };

  const decrement = () => {
    if (countCart <= 0) {
      setCountCart(0)
    } else {
      setCountCart(countCart -1)
    }
  };

  const decrement1 = () => {
    if (countCart1 <= 0) {
      setCountCart1(0)
    } else {
      setCountCart1(countCart1 -1)
    }
  };

  const decrement2 = () => {
    if (countCart2 <= 0) {
      setCountCart2(0)
    } else {
      setCountCart2(countCart2 -1)
    }
  };



  return (
    <section className="cart">
      <main>
      
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={countCart}
          increment={increment}
          decrement={decrement}

        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={countCart1}
          increment={increment1}
          decrement={decrement1}
       
        />
        <CartItem
          title={"Cheese Burger with Fries"}
          img={burger3}
          value={countCart2}
          increment={increment2}
          decrement={decrement2}
       
        />
   

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
