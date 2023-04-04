const Hero = () => {
  return (
    <div className="wrapper pt-[100px] xl:pt-10   py-[40px]  isolate md:pb-[90px] relative">
      <div className="shadowPurple top-0 left-0 -translate-x-[20%]"></div>
      <div className="shadowPurple top-0 right-0"></div>
      <div className="shadowPurple top-full left-0 -translate-y-1/2 -translate-x-[20%]"></div>
      <div className="shadowRed top-full right-0 -translate-y-1/2 translate-x-[20%]"></div>
      <div className="shadowPurple top-[40%] -translate-y-1/2 right-0  translate-x-[20%]"></div>
      <div className="shadowCyan top-full left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="shadowCyan top-0 left-[60%] -translate-y-[80%] -translate-x-1/2"></div>
      <div className="flex w-[90%] xl:flex-row flex-col max-w-[1200px] relative isolate gap-4 sm:gap-6 xl:gap-10 justify-center items-center">
        <img
          src="/plane.webp"
          className="left-0 md:block hidden top-[16%] object-contain max-w-full -z-10 pointer-events-none absolute"
          alt=""
        />
        <div className="flex w-full max-w-[450px] justify-start items-center xl:items-start text-center xl:text-left flex-col gap-5">
          <h1 className=" leading-[1.4] font-semibold text-[27px] sm:text-[35px] text-black  ">
            One stop shop for all residential service needs
          </h1>
          <p className="w-full leading-[1.5] font-medium text-base sm:text-lg text-black ">
            We provide services for your elderly care that nurses don't provide.
            Eg meals, housekeeping, personal care, transportation, home health.
          </p>
          <button className="ctaBtn w-[180px] sm:w-[250px] h-[55px] sm:h-[65px]">
            Click for Support
          </button>
        </div>
        <div className="w-full flex justify-center mt-6 sm:mt-10 items-center relative">
          {/* <div className="z-10 left-1 md:left-[8%] top-[8%] flex justify-center items-center sm:hidden bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/care.webp"
              className="object-contain w-[25px] xl:w-[64px] sm:w-[30px] md:w-[40px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Personal Care
            </h3>
          </div>
          <div className="z-10 left-1 md:left-[14%] bottom-[16%] sm:bottom-[8%] sm:hidden flex justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/transport.webp"
              className="object-contain w-[25px]  sm:w-[30px] md:w-[40px] xl:w-[64px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Transport
            </h3>
          </div>
          <div className="z-10 right-1 md:right-[17%] -top-[3%] flex justify-center items-center sm:hidden bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/food.webp"
              className="object-contain w-[25px] sm:w-[30px] md:w-[40px] xl:w-[64px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Food
            </h3>
          </div>
          <div className="z-10 right-0 md:right-[4%] top-[50%] -translate-y-1/2 flex sm:hidden justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/house-keeping.webp"
              className="object-contain w-[25px] sm:w-[30px] md:w-[40px] xl:w-[64px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              House Keeping
            </h3>
          </div>
          <div className="z-10 right-1 md:right-[15%] -bottom-[3%] flex justify-center items-center sm:hidden bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/health.webp"
              className="object-contain w-[25px] sm:w-[30px] md:w-[40px] xl:w-[53px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Home Health
            </h3>
          </div> */}
          <img
            src="/hero.png"
            className="max-w-[500px] xl:max-w-[800px]  w-full object-contain"
            alt=""
          />
          {/* <img
            src="/hero-mob.webp"
            className="max-w-[400px] sm:hidden block w-full object-contain"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
