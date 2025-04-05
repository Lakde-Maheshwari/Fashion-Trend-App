import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Section from './components/Section';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail'; 
import axios from 'axios';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/store/categories/");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    fetchCategories();
  }, []);

  return (
    <div className="relative">
      <Navbar onCategorySelect={setSelectedCategory} categories={categories} />
      <Banner category={selectedCategory} />
      <div className="w-full max-w-[1700px] mx-auto px-6 lg:px-10 mt-36">
        <div>
          <h1 className="font-poppins font-black text-[48px] leading-[50px] tracking-[0.06em] m-0">
            NEW TRENDY DESIGNS
          </h1>
        </div>
        <div className="flex flex-col gap-40 mt-10">
          <Section selectedCategory={selectedCategory} categories={categories}/>
          <Section selectedCategory={selectedCategory} categories={categories}/>
          <Section selectedCategory={selectedCategory} categories={categories}/>
        </div>
        <div className="mt-10 mb-10">
          <Section2 />
        </div>
        <div className="mt-10 mb-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;