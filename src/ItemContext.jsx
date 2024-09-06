import { createContext, useContext } from "react";
import { useState } from "react";
import CartModal from "./components/cartModal";
export const itemContext = createContext();

export function useValue() {
	const value = useContext(itemContext);
	return value;
}

function CustomItemContext({ children }) {
	console.log(children);
	const [total, setTotal] = useState(0);
	const [item, setItem] = useState(0);
	const [toggleCart, setToggleCart] = useState(false);
	const [cart, setCart] = useState([]);

	const handleAdd = (product) => {
		const index = cart.findIndex((item) => item.id === product.id);
		if (index == -1) {
			setCart([...cart, { ...product, qty: 1 }]);
			setTotal(total + product.price);
		} else {
			//1st way
			// const updatedCart = [...cart];
			// updatedCart[index] = {
			// 	...updatedCart[index],
			// 	qty: updatedCart[index].qty + 1,
			// };
			// setCart(updatedCart);
			// setTotal(total + product.price);
			//2nd way
			const updatedCart = cart.map((item, i) =>
				i == index ? { ...item, qty: item.qty + 1 } : item
			);
			setCart(updatedCart);
			setTotal(total + product.price);
		}
		console.log("cart", cart);
		setItem(item + 1);

		// setTotal(total + price);
		// setItem(item + 1);
	};

	const handleRemove = (product) => {
		const index = cart.findIndex((item) => item.id === product.id);
		if (index !== -1) {
			const updatedCart = cart
				.map((item, i) => {
					if (i == index) return { ...item, qty: item.qty - 1 };
					else return item;
				})
				.filter((item) => item.qty > 0);
			setCart(updatedCart);
			setTotal(total - product.price);
			setItem((ps) => ps - 1);
		}
		// if (total <= 0) return;
		// setTotal(total - price);
		// setItem((ps) => ps - 1);
	};
	const handleReset = () => {
		setTotal(0);
		setItem(0);
	};

	const handleToggle = () => {
		setToggleCart(!toggleCart);
	};

	const close = () => {
		setToggleCart(!toggleCart);
	};
	const clear = () => {
		setCart([]);
		setTotal(0);
		setItem(0);
	};
	return (
		<itemContext.Provider
			value={{
				total,
				item,
				handleAdd,
				handleRemove,
				handleReset,
				handleToggle,
				close,
				cart,
				clear,
			}}
		>
			{toggleCart && <CartModal />}
			{children}
		</itemContext.Provider>
	);
}
export default CustomItemContext;
