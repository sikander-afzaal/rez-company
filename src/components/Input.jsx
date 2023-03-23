const Input = ({ type, name, placeholder, handler, value, textarea }) => {
  return textarea ? (
    <textarea
      placeholder={placeholder}
      name={name}
      onChange={handler}
      value={value}
      className="bg-white resize-none rounded-lg w-full h-[96px] pt-2 border border-solid border-gray focus-within:border-redOrange outline-none pl-4 placeholder-shown:text-[#6D747C] text-black text-base font-medium placeholder-shown:font-normal transition-all duration-300 focus:border-redOrange"
    ></textarea>
  ) : (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={handler}
      value={value}
      className="bg-white rounded-lg w-full h-[48px] border border-solid border-gray focus-within:border-redOrange outline-none pl-4 placeholder-shown:text-[#6D747C] text-black text-base font-medium placeholder-shown:font-normal transition-all duration-300 focus:border-redOrange"
    />
  );
};

export default Input;
