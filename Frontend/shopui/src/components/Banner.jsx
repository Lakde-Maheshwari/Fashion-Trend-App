const Banner = ({ category }) => {
    return (
      <div className="flex justify-center w-full mt-8 md:mt-12 px-6 lg:px-10 ml-auto mr-auto">
        <div className="w-full max-w-[1700px] flex justify-start">
          <div className="w-[271px] h-[88px] bg-[#E7E6E6] rounded-[50px] flex justify-center items-center">
            <div className="w-full h-[56px] rounded-[25px] flex justify-center items-center">
              <p className="font-arimo font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] tracking-wide text-center">
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Banner;