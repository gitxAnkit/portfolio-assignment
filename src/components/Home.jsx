import React from "react";
import profileImage from "../assets/myProfile.jpeg";
import Resume from "../assets/Resume_Ankit.pdf";
import ErrorBoundary from "../app/ErrorBoundary";

const Home = () => {
  const handleDownloadCV = () => {
    window.open(Resume, "_blank");
  };

  return (
    <ErrorBoundary>
      <div className="bg-black text-white min-h-screen flex justify-center items-center space-x-16">
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
            <div className="mt-6 flex flex-col md:flex-row gap-4 p-0">
              <button
                className="border-2 border-white bg-black hover:bg-[crimson] h-12 px-4 rounded-3xl w-full"
                onClick={handleDownloadCV}
              >
                Resume
              </button>
              <button
                className="bg-blue-400 hover:bg-blue-500 h-12 px-4 rounded-3xl w-full"
                onClick={() => (location.href = "./#contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
