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
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="wrapper ">
      <div className="contain bg-white shadow-contactForm rounded-[20px] flex justify-start items-center flex-col py-[50px] px-5">
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
      </div>
    </div>
  );
};

export default Contact;
