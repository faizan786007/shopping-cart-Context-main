import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import { itemContext } from "./ItemContext";
import CustomItemContext from "./ItemContext";
// import { totalContext } from "./totalContext";

function App() {
	return (
		<CustomItemContext>
			<div className="App">
				<h2>Shopping Cart</h2>
				<Navbar />
				<Items />
			</div>
		</CustomItemContext>
	);
}
export default App;
