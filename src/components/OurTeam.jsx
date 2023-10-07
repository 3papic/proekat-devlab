import React from "react";

const teamMembers = [
  {
    name: "Aleksa Papic",
    designation: "Founder - CEO",
    img: "https://media.licdn.com/dms/image/D4D03AQEXgPx8ocvDEQ/profile-displayphoto-shrink_800_800/0/1695404017343?e=1701907200&v=beta&t=U7M26p6OlM9Az37l42K1o2_nD6hwc4M7Og8tSYHc4KI",
  },
  {
    name: "Ksenija Acimovic",
    designation: "Founder - CEO",
    img: "https://media.licdn.com/dms/image/D5603AQE49Q4yL9sGGw/profile-displayphoto-shrink_800_800/0/1677498122947?e=1701907200&v=beta&t=yb45rWyD_Xq-5K8kiDVjaPNl9RzRJLBWmL16PFwUtWw",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-800">Our Team</h2>
          <p className="text-lg text-gray-600">
            We are comprised of experienced professionals with a passion for technology and a commitment to customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-200 p-4 rounded-md text-center hover:shadow-md transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
