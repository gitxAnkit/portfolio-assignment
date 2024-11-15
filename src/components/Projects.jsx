import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="relative min-h-screen py-12">
      <h1 className="text-center font-bold text-3xl mb-12">PROJECTS</h1>
      <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white rounded-2xl overflow-hidden p-4 transform transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-center">
              <a href={project.github}>
                <img
                  src={project.cover}
                  alt={project.title}
                  className="rounded-2xl w-full sm:h-96 md:h-[420px] object-cover"
                />
              </a>
            </div>
            <h2 className="project-title text-xl font-semibold mt-4 mb-2">
              {project.title}
            </h2>
            <div className="flex justify-between mt-2">
              <a
                href={project.github}
                className=" border border-white px-4 py-2 rounded-3xl hover:bg-[crimson] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={project.live}
                className=" border border-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
