import { CheckCircle } from "lucide-react";
import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen py-16 px-4 md:px-8 lg:px-12">
      <h1 className="text-center text-3xl font-bold mb-12">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((skill, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{skill.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6  border-2 border-white p-4 rounded-xl">
              {skill.items.map((i, subIndex) => (
                <div key={subIndex} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm lg:text-lg">{i.name}</h3>
                    <p className="text-gray-300 text-xs lg:text-md">
                      {i.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
