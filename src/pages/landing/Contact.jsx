import { useState } from "react";
import Input from "../../components/Input";

const Contact = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [checkBoxes, setCheckBoxes] = useState({
    "Food Delivery": false,
    "House Keeping": false,
    Transportation: false,
    "Personal Care": false,
    "Select All": false,
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const checkBoxHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "Select All") {
      setCheckBoxes({
        "Food Delivery": checked,
        "House Keeping": checked,
        Transportation: checked,
        "Personal Care": checked,
        "Select All": checked,
      });
      return;
    }
    setCheckBoxes((prev) => ({
      ...prev,
      [name]: checked,
      "Select All": false,
    }));
  };
  return (
    <div id="contact" className="wrapper ">
      <div className="contain lg:flex-row flex-col bg-white shadow-contactForm gap-10 rounded-[20px] flex justify-center items-center py-[50px] px-5 sm:px-10">
        <form className="flex justify-start w-full max-w-[800px] items-start flex-col gap-4">
          <h3 className="text-black pb-1 font-bold text-[28px] relative mb-3">
            Enter Details
            <span className="bg-redOrange w-[80%] h-[1px] absolute top-full left-0"></span>
          </h3>
          <div className="flex justify-start items-center w-full gap-5 sm:flex-row flex-col ">
            <Input
              placeholder="First Name"
              name="first"
              value={formData.first}
              handler={inputHandler}
              type="text"
            />
            <Input
              placeholder="Last Name"
              name="last"
              value={formData.last}
              handler={inputHandler}
              type="text"
            />
          </div>
          <div className="flex justify-start items-center w-full gap-5 sm:flex-row flex-col">
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              handler={inputHandler}
              type="email"
            />
            <Input
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              handler={inputHandler}
              type="text"
            />
          </div>
          <Input
            placeholder="Add Notes (Optional)"
            name="notes"
            value={formData.notes}
            handler={inputHandler}
            textarea
          />
          <button className="ctaBtn w-full max-w-[350px] h-[50px] sm:h-[56px] text-lg sm:text-xl font-medium self-center mt-3">
            Schedule Event
          </button>
        </form>
        <div className="flex justify-start w-full max-w-[450px] items-center lg:items-start flex-col gap-4">
          <p className="text-darkGray font-semibold text-sm">
            What service are you interested in?
          </p>
          <div className="grid gap-2 grid-cols-1  sm:grid-cols-2 auto-rows-fr w-full">
            <CheckBox
              value={checkBoxes}
              label="Food Delivery"
              handler={checkBoxHandler}
            />
            <CheckBox
              label="House Keeping"
              value={checkBoxes}
              handler={checkBoxHandler}
            />
            <CheckBox
              label="Transportation"
              value={checkBoxes}
              handler={checkBoxHandler}
            />
            <CheckBox
              label="Personal Care"
              value={checkBoxes}
              handler={checkBoxHandler}
            />
            <CheckBox
              label="Select All"
              value={checkBoxes}
              handler={checkBoxHandler}
            />
          </div>
          <p className="text-darkGray font-semibold text-sm cursor-pointer select-none">
            View 20 More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const CheckBox = ({ label, value, handler }) => {
  return (
    <label
      className="flex select-none cursor-pointer text-black text-base font-medium justify-start items-center gap-3 "
      htmlFor={label}
    >
      <input
        onChange={handler}
        checked={value[label]}
        type="checkbox"
        name={label}
        id={label}
        className="accent-black"
      />
      {label}
    </label>
  );
};
