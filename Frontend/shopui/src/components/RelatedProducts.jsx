import Card from "./Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RelatedProducts = ({ relatedproducts }) => {
  if (!relatedproducts || relatedproducts.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500 text-xl">
        No related products found.
      </div>
    );
  }

  return (
    <div className="mt-20 px-6">
      <h2 className="text-[48px] font-bold font-poppins mb-10">Related Products</h2>

      <div className="flex gap-8 justify-center flex-wrap">
        {relatedproducts.slice(0, 4).map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageLink={`http://127.0.0.1:8000${product.design?.image}`}
            name={product.design?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
