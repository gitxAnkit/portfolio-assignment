import React from "react";
import profile from "../assets/profile3.jpeg";
import eduIcon from "../assets/education.png";
import { education } from "../constants";

const About = () => {
  return (
    <div id="about" className="min-h-screen p-12 px-4 md:px-8">
      {/* Intro Section */}
      <p className="text-center text-gray-400 uppercase tracking-wide my-4">
        Get to know me more
      </p>
      <h1 className="text-center text-3xl md:text-4xl font-bold my-8">
        About Me
      </h1>

      {/* About Content */}
      <div className="my-8 flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image */}
        <div className="w-56 h-56 md:w-80 md:h-80 rounded-2xl overflow-hidden">
          <img
            src={profile}
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="max-w-2xl space-y-6 md:ml-8 mt-8 md:mt-0">
          {/* Education Section */}
          <div className="flex items-center space-x-4 border-2 border-white rounded-3xl p-8">
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
              <img src={eduIcon} alt="Education icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-gray-400">{education.course}</p>
              <p className="text-gray-500">{education.college}</p>
            </div>
          </div>

          {/* Personal Introduction */}
          <p className="text-gray-300 leading-relaxed text-justify">
            {education.intro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
