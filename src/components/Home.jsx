import React from "react";
import profileImage from "../assets/myProfile.jpeg";
import Resume from "../assets/Resume_Ankit.pdf";
const Home = () => {
  const handleDownloadCV = () => {
    window.open(Resume, "_blank");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center space-x-16">
      <div className="h-[400px] w-[400px]">
        <img
          src={profileImage}
          alt="profile"
          className="rounded-full bg-cover"
        />
      </div>
      <div className="h-[400px] flex items-center">
        <div>
          <p className="font-bold text-gray-400">Hello, I'm</p>
          <h1 className="text-4xl font-bold">Ankit Verma</h1>
          <p className="text-2xl">Full-Stack Developer</p>
          <div className="mt-6 space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              onClick={() => (location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
