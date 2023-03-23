const Hero = () => {
  return (
    <div className="wrapper bg-[#6B00FF1A] py-[40px] md:py-[90px]">
      <div className="contain relative isolate  flex-col gap-4 sm:gap-6 xl:gap-10 justify-center items-center">
        <img
          src="/plane.png"
          className="left-0 md:block hidden top-[16%] object-contain max-w-full -z-10 pointer-events-none absolute"
          alt=""
        />
        <h1 className="font-medium leading-[1.4] text-2xl sm:text-[30px] md:text-[40px] xl:text-[54px] text-black text-center xl:max-w-[880px]">
          One stop shop for all residential service needs
        </h1>
        <p className="w-full max-w-[880px] leading-[1.5] font-medium text-base md:text-xl xl:text-[25px] text-black text-center">
          We provide services for your elderly care that nurses don't provide.
          Eg meals, housekeeping, personal care, transportation, home health.
        </p>
        <div className="w-full flex justify-center mt-6 sm:mt-10 items-center relative">
          <div className="z-10 left-1 md:left-[8%] top-[8%] flex justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/care.png"
              className="object-contain w-[25px] xl:w-[64px] sm:w-[30px] md:w-[40px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Personal Care
            </h3>
          </div>
          <div className="z-10 left-1 md:left-[14%] bottom-[16%] sm:bottom-[8%] flex justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/transport.png"
              className="object-contain w-[25px]  sm:w-[30px] md:w-[40px] xl:w-[64px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Transport
            </h3>
          </div>
          <div className="z-10 right-1 md:right-[17%] -top-[3%] flex justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/food.png"
              className="object-contain w-[25px] sm:w-[30px] md:w-[40px] xl:w-[64px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Food
            </h3>
          </div>
          <div className="z-10 right-0 md:right-[4%] top-[50%] -translate-y-1/2 flex justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/house-keeping.png"
              className="object-contain w-[25px] sm:w-[30px] md:w-[40px] xl:w-[64px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              House Keeping
            </h3>
          </div>
          <div className="z-10 right-1 md:right-[15%] -bottom-[3%] flex justify-center items-center bg-cream sm:px-[30px] xl:px-[50px] px-5 py-4 sm:py-[22px] rounded-xl gap-[15px] absolute">
            <img
              src="/health.png"
              className="object-contain w-[25px] sm:w-[30px] md:w-[40px] xl:w-[53px]"
              alt=""
            />
            <h3 className="uppercase text-black text-xs sm:text-base md:text-xl xl:text-[30px] font-medium leading-[1]">
              Home Health
            </h3>
          </div>
          <img
            src="/hero.png"
            className="max-w-[500px] xl:w-auto w-full xl:max-w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
