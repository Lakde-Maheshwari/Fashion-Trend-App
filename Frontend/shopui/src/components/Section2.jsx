const Section2 = () => {
    return (
        <div className="w-[1754px] bg-[#E5C643] h-[623px] flex flex-col items-center justify-center font-roboto">
            <div className="w-full max-w-[1700px] px-6 lg:px-10 flex flex-col items-center">
                
                <h1 className="font-poppins font-black text-[55px] leading-[70px] tracking-[0.03em] text-center text-white mb-6">
                    JOIN SHOPPING COMMUNITY TO <br />GET MONTHLY PROMO
                </h1>

               
                <p className="font-poppins font-normal text-[32px] leading-[35px] tracking-[0.03em] text-[#FFFCF8] mb-12 text-center max-w-[800px]">
                    Type your email down below and be young wild generation
                </p>

                <div className="w-[574px] h-[87px] rounded-[10px] bg-white flex items-center px-6 relative">
                    
                    <span className="font-poppins font-medium text-[33px] leading-[35px] tracking-[0.03em] text-[#767676] flex-grow">
                        Add your email here
                    </span>

                    
                    <button className="rounded-[8px] bg-black text-white h-[67px] w-[161px] font-poppins font-medium text-[20px] flex items-center justify-center">
                        SEND
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section2;