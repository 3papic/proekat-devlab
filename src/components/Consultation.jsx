import React from "react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_1258-97771.jpg?w=1800&t=st=1696611548~exp=1696612148~hmac=7a321a0cea5a2d0a2e9fdfae7ea08ba6321588efadc6a6bba8274b5f268ec75d')`, 
    backgroundPosition: "center",
  };

  return (
    <section style={backgroundStyle} className="text-white py-16">
      <div className="container mx-auto flex justify-center items-center">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Confused about which product is right for you?
          </h1>
          <h2 className="text-4xl font-extrabold text-sky-500 mb-6">
            Need Expert Consultation?
          </h2>
          <p className="text-lg mb-8">
            Get the ultimate solution from our experienced team.
          </p>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            onClick={() => navigate("booking")}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
