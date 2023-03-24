const ServiceRow = ({ img, title, desc, list, order, sub, ico }) => {
  return (
    <div className="wrapper relative isolate">
      <div className="shadowRed top-full -translate-y-1/2 left-0 -translate-x-[20%]"></div>
      <div className="shadowPurple top-full  -translate-y-1/2 right-0 translate-x-[20%]"></div>
      <div
        className={`contain justify-between ${
          order ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"
        } items-center gap-7 lg:gap-10 xl:gap-8`}
      >
        <div className="relative isolate">
          <img
            src="/dots.webp"
            className={`max-w-[120px] xl:max-w-[170px] object-contain absolute -z-10 ${
              order
                ? "right-0 sm:translate-x-[30%]"
                : "left-0 sm:-translate-x-[30%]"
            } top-0  -translate-y-[30%]`}
            alt=""
          />
          <img
            src={img}
            className="max-w-[500px] w-full xl:max-w-[655px] 2xl:max-w-[855px] object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start items-center text-center lg:text-left lg:items-start flex-col xl:max-w-[720px] max-w-[500px] gap-3 xl:gap-5">
          <div className="flex justify-start items-center gap-3">
            <img
              src={ico}
              className="w-8 sm:w-10 aspect-square object-contain rounded-full"
              alt=""
            />
            <p className="text-redOrange text-sm sm:text-base xl:text-lg font-medium">
              {sub}
            </p>
          </div>
          <h2 className="text-dark text-[25px] sm:text-[35px] xl:text-[45px] 2xl:text-[52px] leading-[1.44] font-semibold">
            {title}
          </h2>
          <p className="text-darker text-sm sm:text-base xl:text-lg 2xl:text-xl font-normal leading-[2] ">
            {desc}
          </p>
          {list && (
            <ul className="list-none flex justify-start items-start flex-col gap-5">
              {list.map((elem, idx) => {
                return (
                  <li
                    className="text-darker text-sm sm:text-base lg:text-xl leading-[1]"
                    key={idx + elem}
                  >
                    {elem}
                  </li>
                );
              })}
            </ul>
          )}
          <button className="text-base sm:text-lg xl:text-[22px] ctaBtn mt-5 px-8 sm:px-[45px] xl:px-[56px] py-3 sm:py-4 xl:py-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRow;
