import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import axios from "axios";

const Navbar = ({ onCategorySelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([]);
    const categoryRef = useRef(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/store/categories/")
            .then(response => setCategories(response.data.map(category => category.name)))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setShowCategories(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="flex items-center justify-between px-6 lg:px-10 max-w-[1700px] py-4 mx-auto relative">
            <div className="flex items-center flex-grow">
                <div className="flex items-center gap-2">
                    <img src="/assets/Vector.png" alt="Logo" className="w-8 h-auto" />
                    <span className="font-poppins font-black text-3xl sm:text-4xl leading-none tracking-wider">
                        FASHION
                    </span>
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <div className="flex gap-8 xl:gap-[65px] font-poppins font-medium text-lg xl:text-[22px] leading-none tracking-wide">
                    <div className="relative" ref={categoryRef}>
                        <button 
                            className="hover:text-gray-700 transition" 
                            onClick={() => setShowCategories(!showCategories)}
                        >
                            CATALOGUE
                        </button>
                        {showCategories && (
                            <div className="absolute top-full left-0 bg-white shadow-md mt-2 p-4 rounded-md w-40 z-10">
                                {categories.length > 0 ? (
                                    categories.map((category, index) => (
                                        <p 
                                            key={index} 
                                            className="cursor-pointer hover:text-gray-700 py-1"
                                            onClick={() => {
                                                onCategorySelect(category);
                                                setShowCategories(false);
                                            }}
                                        >
                                            {category}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-gray-500">Loading...</p>
                                )}
                            </div>
                        )}
                    </div>
                    <a href="#" className="hover:text-gray-700 transition">FASHION</a>
                    <a href="#" className="hover:text-gray-700 transition">FAVOURITE</a>
                    <a href="#" className="hover:text-gray-700 transition">LIFESTYLE</a>
                </div>
                <button className="w-32 xl:w-[134px] h-12 xl:h-[62px] bg-black text-white rounded-md hover:bg-gray-900 transition ml-4">
                    SIGN UP
                </button>
            </div>

            <button 
                className="md:hidden text-2xl z-50" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>
        </nav>
    );
};

export default Navbar;
