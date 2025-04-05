import Navbar from "./Navbar";
import Footer from "./Footer";
import Section2 from "./Section2";
import Banner from "./Banner";
import ProductDetailsGrid from "./ProductDetailsGrid";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("Product");
    useEffect(() => {
        if (!id) return;
    
        const fetchProductAndRelated = async () => {
            try {
                
                const productRes = await fetch(`http://127.0.0.1:8000/store/products/${id}`);
                const productData = await productRes.json();
                setProduct(productData);
    
            
                const categoryName = productData.design?.category?.name || "Product";
                setCategoryName(categoryName);
    
                const relatedRes = await fetch(`http://127.0.0.1:8000/store/products/${id}/related/`);
                const relatedData = await relatedRes.json();
                setRelatedProducts(relatedData);
            } catch (error) {
                console.error("Error fetching product or related products:", error);
            }
        };
    
        fetchProductAndRelated();
    }, [id]);
    
    

    return (
        <>
            <div className="relative">
                <Navbar />
                <Banner category={categoryName} />
                <div className="w-full max-w-[1700px] mx-auto px-6 lg:px-10 mt-36">

                    {/* Availability Box */}
                    <div className="flex justify-end">
                        <div className="bg-[#E7E6E6] w-[425px] h-[168px] rounded-[50px] flex items-center justify-center">
                            <div className="text-[#998E10] w-[250px] h-[145px] font-[arimo] font-bold text-[48px] leading-[50px] tracking-[0.06em]">
                                Piece Available
                            </div>
                        </div>
                    </div>

                    {/* Product Title */}
                    <div className="flex justify-start">
                        <div className="bg-[#E7E6E6] w-[446px] h-[172px] rounded-[50px] flex items-center justify-center">
                            <div className="text-[#000000] w-[340px] h-[120px] font-[arimo] font-bold text-[48px] leading-[50px] tracking-[0.06em]">
                                Full Sleeves T-Shirt
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-7">
                        {product && product.design && (
                            <img
                                src={product.design.image}
                                alt={product.design.name || "Product"}
                                className="w-[70%] h-[1330px] object-cover object-center rounded-xl shadow-md"
                            />
                        )}

                        <div className="relative w-[25%] h-[1330px]">
                            <img
                                src="/assets/Yellow Image.png"
                                alt="Style Preview"
                                className="w-full h-full object-cover object-center rounded-xl shadow-md"
                            />
                            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition">
                                <FontAwesomeIcon icon={faArrowRight} className="text-gray-600 text-8xl" />
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <ProductDetailsGrid product={product} />

                    {/* Related Products */}
                    <div className="mt-10">
                        {relatedProducts.length > 0 ? (
                            <RelatedProducts relatedproducts={relatedProducts} />
                        ) : (
                            <div className="text-center text-gray-500 text-xl font-semibold mt-10">
                                No related products found.
                            </div>
                        )}
                    </div>

                    <div className="mt-10 mb-10">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
