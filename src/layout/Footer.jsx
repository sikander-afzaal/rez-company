const Footer = () => {
  return (
    <div className="wrapper bg-footer py-[20px] sm:py-[50px] mt-20">
      <div className="contain lg:flex-row flex-col justify-between items-center lg:gap-0 gap-6 sm:gap-10 lg:items-end">
        <div className="flex justify-start sm:max-w-[300px] xl:max-w-[400px] items-center text-center lg:text-left lg:items-start flex-col gap-3">
          <img src="/logo.png" className="w-[140px] object-contain" alt="" />
          <p className="text-black text-base xl:text-xl mt-3 lg:mb-10">
            Creating Lasting Relationships Through Product Design and
            development.
          </p>
          <p className="text-black xl:text-base text-sm font-medium">
            © 2023 On point - All Right Reserved{" "}
          </p>
        </div>
        <div className="flex justify-start sm:flex-row flex-col items-center sm:items-start gap-4 sm:gap-20 xl:gap-[150px] pb-3">
          <div className="flex justify-start items-center lg:items-start text-center lg:text-left flex-col gap-4 sm:gap-3">
            <a href="#" className="text-black text-base font-normal">
              Home
            </a>
            <a href="#" className="text-black text-base font-normal">
              Portfolios
            </a>
            <a href="#" className="text-black text-base font-normal">
              Services
            </a>
            <a href="#" className="text-black text-base font-normal">
              Work
            </a>
          </div>
          <div className="flex justify-start items-center lg:items-start text-center lg:text-left flex-col gap-4 sm:gap-3">
            <a href="#" className="text-black text-base font-normal">
              Terms & Conditions
            </a>
            <a href="#" className="text-black text-base font-normal">
              Privacy Policy
            </a>
            <a href="#" className="text-black text-base font-normal">
              Cookies
            </a>
            <a href="#" className="text-black text-base font-normal">
              Careers
            </a>
          </div>
          <div className="flex justify-start items-center lg:items-start text-center lg:text-left flex-col gap-4 sm:gap-3">
            <a href="#" className="text-black text-base font-normal uppercase">
              Membership
            </a>
            <a href="#" className="text-black text-base font-normal uppercase">
              How it works
            </a>
            <a href="#" className="text-black text-base font-normal uppercase">
              Our services
            </a>
            <a href="#" className="text-black text-base font-normal uppercase">
              Partner Network
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
