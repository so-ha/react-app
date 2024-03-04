import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cart = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch()

    const handleBtn = () => {
        dispatch(clearCart())
    }
    return(<div className="cart">
        {/* Cart is Empty */}
        <b>Cart :</b>
        {cart.join(", ")}
        <button onClick={handleBtn}>Clear Cart</button>
    </div>)
}

export default Cart