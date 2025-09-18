import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I specialize in creating modern, responsive, and user-friendly web
        applications using the MERN stack (MongoDB, Express.js, React, Node.js).
        My focus is on building clean and interactive frontend with React and
        Tailwind CSS, while ensuring smooth integration with backend services to
        deliver seamless digital experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-3 border border-gray-400 rounded-lg px-8 py-12 hover:shadow-light cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            {/* Icon */}
            <div className="flex-1 flex items-center">
              <Image src={service.icon} alt="icon" className="w-10" />
            </div>

            {/* Title */}
            <div className="flex-1 flex items-center">
              <h3 className="text-lg text-gray-700">{service.title}</h3>
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-sm text-gray-600 leading-5">
                {service.description}
              </p>
            </div>

            {/* Button (sticks to bottom) */}
            <div className="flex-1 flex items-end">
              <a
                href={service.link}
                className="flex items-center gap-2 text-sm  hover:text-indigo-800 transition-colors"
              >
                <span>Read More</span>
                <Image
                  src={assets.right_arrow}
                  alt="read-more-icon"
                  className="w-4"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
