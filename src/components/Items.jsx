import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
	console.log(data);
	return (
		<div className={styles.wrapper}>
			{data.map((item, index) => (
				<ItemCard
					key={item.id}
					name={item.name}
					price={item.price}
					id={item.id}
				/>
			))}
		</div>
	);
}

export default Items;
