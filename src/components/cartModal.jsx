import React from "react";
// import styles from "../styles/CartModal.module.css";
import styles from "../styles/cartModal.module.css";
import { useValue } from "../ItemContext";

function CartModal() {
	const { close, cart, total, clear } = useValue();
	function toggle() {}
	// function clear() {}
	return (
		<div className={styles.cartModal}>
			<div className={styles.closeButton} onClick={close}>
				Close
			</div>
			<div className={styles.clearButton} onClick={clear}>
				Clear
			</div>
			<div className={styles.itemContainer}>
				{cart.map((item) => (
					<div className={styles.cartCard} key={item.id}>
						<h1>{item.name}</h1>
						<h1>x{item.qty}</h1>
						<h1>x{item.qty * item.price}</h1>
					</div>
				))}
			</div>
			<div className={styles.total}>
				<div className={styles.totalText}>Total</div>
				<div className={styles.totalPrice}>{total}</div>
			</div>
		</div>
	);
}

export default CartModal;
