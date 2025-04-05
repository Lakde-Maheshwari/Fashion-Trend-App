const Footer = () => {
    return (
      <div className="w-[1754px] bg-[#000000] h-[545px] font-roboto flex justify-center mb-3">
        <div className="w-full max-w-[1700px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between p-7 leading-loose">
            <div className="flex flex-col p-7 m-4">
              <p className="text-[#FFFFFF]">FASHION</p>
              <span className="text-[#8E8E8E]">
                Complete your style with awesome clothes from us!!
              </span>
            </div>
            <div className="flex flex-col p-7 m-4 font-roboto">
              <p className="text-[#D9D9D9]">Company</p>
              <p className="text-[#8E8E8E]">About</p>
              <p className="text-[#8E8E8E]">Contact us</p>
              <p className="text-[#8E8E8E]">Support</p>
              <p className="text-[#8E8E8E]">Careers</p>
            </div>
            <div className="flex flex-col p-7 m-4">
              <p className="text-[#D9D9D9]">Quick Link</p>
              <p className="text-[#8E8E8E]">Share Location</p>
              <p className="text-[#8E8E8E]">Orders Tracking</p>
              <p className="text-[#8E8E8E]">Size Guide</p>
              <p className="text-[#8E8E8E]">FAQs</p>
            </div>
            <div className="flex flex-col p-7 m-4">
              <p className="text-[#D9D9D9]">Legal</p>
              <p className="text-[#8E8E8E]">Terms & Conditions</p>
              <p className="text-[#8E8E8E]">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;