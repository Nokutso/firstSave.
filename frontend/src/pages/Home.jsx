import React, { useEffect, useState } from 'react';
import api from '../axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar'; // ✅ import it
import '../styles/Home.css';
import '../styles/SearchBar.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      <SearchBar />

      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <img
              src={p.image}
              alt={p.name}
              className="product-img"
              onError={(e) => { e.target.src = '/placeholder.jpg'; }}
            />
            <h3>{p.name}</h3>
            <p className="price">R{p.price}</p>
            <p className="store">{p.store}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="product-link">
              View Product
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;