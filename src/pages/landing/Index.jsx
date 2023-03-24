import ServiceRow from "../../components/ServiceRow";
import Contact from "./Contact";
import Hero from "./Hero";

const Index = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-start items-center flex-col gap-[80px] lg:gap-[150px] pb-[60px] pt-[100px] lg:py-[150px] ">
        <ServiceRow
          img="/service1.webp"
          desc="Lorem ipsum dolor sit amet, con adipiscing elit. Sed at metus nonligula egestas facilisis id a est. Nam eu tellus eget velit dignissim scelerisque. In aliquam faucibus odio "
          title="Your Food delivery service for older person"
          sub="Food Delivery"
          ico="/delivery-ico.png"
        />
        <ServiceRow
          img="/service2.webp"
          desc="Lorem ipsum dolor sit amet, con adipiscing elit. Sed at metus nonligula egestas facilisis id a est. Nam eu tellus eget velit dignissim scelerisque. In aliquam faucibus odio "
          title="Your House keeping and home care for older person"
          sub="House keeping and home care"
          ico="/care-ico.png"
          order
        />
        <ServiceRow
          img="/service3.webp"
          desc="Lorem ipsum dolor sit amet, con adipiscing elit. Sed at metus nonligula egestas facilisis id a est. Nam eu tellus eget velit dignissim scelerisque. In aliquam faucibus odio "
          title="Your Transportation for older person"
          sub="Transportation"
          ico="/transport-ico.png"
        />
        <ServiceRow
          img="/service4.webp"
          desc="Lorem ipsum dolor sit amet, con adipiscing elit. Sed at metus nonligula egestas facilisis id a est. "
          title="Your Personal care and home care for older person"
          sub="Personal care"
          ico="/personal-ico.png"
          order
          list={[
            "❤️ Excellent Protection",
            "❤️ High Savings Potential",
            "❤️ Maximum Time Savings",
          ]}
        />
      </div>
      <Contact />
    </>
  );
};

export default Index;
