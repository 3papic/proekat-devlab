import React from "react";
import Herotext from "../components/Herotext";
import OurTeam from "../components/OurTeam";
import Whyme from "../components/Whyme";

const About = () => {
  return (
    <>
      <Herotext textt="About Us" />
      <section className="bg-gray-100 py-20 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-semibold text-gray-700">
                Who we are?
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
              We are a team of just two people who went through an intensive two-week training at Developer Lab. After completing the training, we dedicated ourselves to working on our project - developing an online shop. Despite our small size, together we have managed to create a unique and functional platform that will provide customers with a simple and enjoyable shopping experience. Our collaboration and passion for programming contribute to the success of this project, and we are excited to face all the challenges that future development brings.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full md:w-5/5 lg:w-3/4 max-w-md md:max-w-xl rounded-lg shadow-lg"
              src="https://media.licdn.com/dms/image/D4D22AQE0CfQL8x8Nng/feedshare-shrink_1280/0/1694712182504?e=1699488000&v=beta&t=1EO-EAhQDfsklcvM_PPohkmSsauhE0zEbjNOrIqYBzc"
              alt="Team"
            />
          </div>
        </div>
      </section>
      <OurTeam />
      <Whyme />
    </>
  );
};

export default About;
