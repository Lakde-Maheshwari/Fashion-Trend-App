const ProductDetailsGrid = ({ product }) => {
  // Return null or loading state if product is not available
  if (!product) {
    return <div className="p-4 text-center">Loading product details...</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="space-y-4">
        {/* Fabric */}
        <div className="bg-white text-black p-6 rounded-lg flex items-center justify-between h-[200px]">
          <div className="font-[Arimo] text-[64px] font-bold leading-[50px] tracking-[0.06em]">
            Fabric:
          </div>
          <div className="bg-[#E7E6E6] w-[325px] h-[122px] rounded-[50px] flex items-center justify-center text-[#998E10] font-[Arimo] text-[48px] font-bold leading-[50px] tracking-[0.06em]">
            {product.fabric || 'N/A'}
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white text-black p-6 rounded-lg flex items-center justify-between h-[200px]">
          <div className="font-[Arimo] text-[64px] font-bold leading-[50px] tracking-[0.06em]">
            Sizes:
          </div>
          <div className="bg-[#E7E6E6] w-[325px] h-[122px] rounded-[50px] flex items-center justify-center text-[#998E10] font-[Arimo] text-[48px] font-bold leading-[50px] tracking-[0.06em]">
            {product.sizes ? product.sizes.join(', ') : 'N/A'}
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="space-y-4">
        <div>
          <div className="bg-white text-black p-6 rounded-lg flex items-center justify-between h-[200px]">
            <div className="font-[Arimo] text-[64px] font-bold leading-[50px] tracking-[0.06em]">
              Colors:
            </div>
            <div className="bg-[#E7E6E6] w-[325px] h-[122px] rounded-[50px] flex items-center justify-center text-[#998E10] font-[Arimo] text-[48px] font-bold leading-[50px] tracking-[0.06em]">
              {product.colors ? product.colors.join(', ') : 'N/A'}
            </div>
          </div>
          <img 
            src="/assets/Colors image.png" 
            alt="Colors" 
            className="w-full mt-4 rounded-lg" 
          />
        </div>

        {/* Prices with discount below */}
        <div>
          <div className="bg-white text-black p-6 rounded-lg flex items-center justify-between h-[200px]">
            <div className="font-[Arimo] text-[64px] font-bold leading-[50px] tracking-[0.06em]">
              Prices:
            </div>
            <div className="bg-[#E7E6E6] w-[325px] h-[122px] rounded-[50px] flex items-center justify-center text-[#998E10] font-[Arimo] text-[48px] font-bold leading-[50px] tracking-[0.06em]">
              {product.price || 'N/A'}
            </div>
          </div>
          <div className="bg-white text-black p-4 mt-4 rounded-lg">
            <p className="text-lg">
              {product.discount_percentage ? (
                <>
                  <span className="text-red-600 font-[Arimo] font-normal text-[36px] leading-[50px] tracking-[0.06em]">
                    -{product.discount_percentage}%
                  </span> M.R.P.: <span className="font-semibold">₹{(
                    parseFloat(product.price) / 
                    (1 - parseFloat(product.discount_percentage)/100)
                  ).toFixed(2)}</span>
                </>
              ) : (
                <span className="font-semibold">₹{product.price || 'N/A'}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGrid;