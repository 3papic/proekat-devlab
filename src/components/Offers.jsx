import { useNavigate } from "react-router-dom";

const Offers = ({ backgroundImage }) => {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundImage: `url(https://img.freepik.com/free-vector/gradient-dynamic-purple-lines-background_23-2148995757.jpg?w=1800&t=st=1696669661~exp=1696670261~hmac=7c057ea9bca48489147064351ac69963113cce493004e865ff0d4607b52bb09e)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="offer" style={sectionStyle}>
      <div className="flex container mx-auto flex-col gap-5 justify-center w-[90%] p-10">
        <h3 className="text-6xl font-semibold text-gray-50">
          Limited Time Offer
        </h3>
        <h1 className="font-semibold text-2xl text-gray-50">Special Addition</h1>
        <p className="text-md text-gray-50">
          It is a limited-time promotion that provides customers with an exclusive discount or unique product bundle.
        </p>

        <div onClick={() => navigate("product")}>
          <button className="text-gray-50 border rounded-full border-sky-500 px-10 bg-sky-500 py-2">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
