import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// To avoid dynamic imports breaking in simple environments, we directly use standard react fetch
// Wait, I created a JSON file, let's just fetch it in useEffect to simulate real API, or import directly.
import productData from './data/products.json';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulate fetching JSON data
    setProducts(productData);
  }, []);

  const handleAddToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      toast.warn('Product is already in cart');
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      icon: "🚀"
    });
  };

  const handleRemoveFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));
    toast.info(`${itemToRemove?.name || 'Item'} removed from cart.`);
  };

  const handleClearCart = () => {
    setCart([]);
    toast.success('Proceeding to checkout! Cart cleared.', {
      icon: "🎉"
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-base-100 text-base-content antialiased selection:bg-primary/30">
      <Navbar cartCount={cart.length} />
      <main className="flex-grow">
        <Banner />
        <Stats />
        <MainSection
          products={products}
          cart={cart}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          clearCart={handleClearCart}
        />
        <Steps />
        <Pricing />
      </main>
      <Footer />
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        theme="colored" 
        transition={Slide} 
        bodyClassName="font-medium text-sm"
        toastClassName="rounded-xl shadow-xl border border-white/10"
      />
    </div>
  );
}

export default App;
