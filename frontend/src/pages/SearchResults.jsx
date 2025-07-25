import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { useLocation } from 'react-router-dom';
import '../styles/SearchResults.css';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const keyword = new URLSearchParams(location.search).get('keyword');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search`, {
          params: { q: keyword }, // 🔁 use `q` instead of `keyword`
        });
        setProducts(data);
      } catch (err) {
        console.error('Search failed', err);
      }
    };

    if (keyword) fetchResults();
  }, [keyword]);

  return (
    <div>
     <Navbar />

    <div className="results-container">
        <SearchBar />
      <h2>Search Results for: "{keyword}"</h2>
      <div className="results-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
    
    <Footer />
    </div>
  );
};

export default SearchResults;