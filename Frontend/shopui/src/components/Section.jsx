import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Section = ({selectedCategory,categories}) => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!selectedCategory || categories.length === 0) return;
        const selectedCategoryObj = categories.find(cat => cat.name === selectedCategory);
        if (!selectedCategoryObj) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const categoryId = selectedCategoryObj.id; // Get the category ID dynamically
                console.log("Fetching designs for:", selectedCategory, "ID:", categoryId);

                const response = await axios.get(`http://127.0.0.1:8000/store/designs/?category_id=${categoryId}`);
                setCardsData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCategory, categories]);

    if (loading) return <div>Loading designs...</div>; 
    if (error) return <div>Error: {error}</div>;      

    return (
        <div className="flex gap-10">
            {cardsData.slice(0, 4).map((card) => (
                <Card 
                    key={card.id}
                    id = {card.id}
                    imageLink={card.image}  
                    name={card.name}       
                />
            ))}
        </div>
    );
};

export default Section;