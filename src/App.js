import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext, ProductProvider} from './contexts/ProductContext';
import {CartContext, CartProvider} from './contexts/CartContext';

function App() {
	// const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// const addItem = item => {
	// 	setCart(prevCart => [...prevCart, {item}])
	// };

	console.log('test', cart)

	return (
		<div className="App">

			{/* <ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart }}>
					<Navigation />

					<Route exact path="/" component={Products} />

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>
				</CartContext.Provider>
			</ProductContext.Provider> */}

			<ProductProvider>
				<CartProvider >
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" render={() => <ShoppingCart />} />
				</CartProvider>
			</ProductProvider>
		</div>
	);
}

export default App;
