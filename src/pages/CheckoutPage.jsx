import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartProvider";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
