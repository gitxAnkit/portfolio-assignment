import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs"; // Correct import for Twitter icon

const Contact = () => {
  const email = {
    title: "Email",
    value: "ankitv9936@gmail.com",
    icon: <AiOutlineMail className="text-2xl text-gray-300" />,
    link: "mailto:ankitv9936@gmail.com",
  };
  const phone = {
    title: "Phone",
    value: "+91 8318785767",
    icon: <FaPhoneAlt className="text-2xl text-gray-300" />,
    link: "tel:+918318785767",
  };
  const contacts = {
    linkedIn: {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ankit-verma-b3a497216",
      icon: <FaLinkedin className="text-2xl text-gray-300" />,
    },
    github: {
      title: "GitHub",
      link: "https://github.com/gitxAnkit",
      icon: <BsGithub className="text-2xl text-gray-300" />, // Replace with the GitHub icon if desired
    },
    instagram: {
      title: "Instagram",
      link: "https://instagram.com",
      icon: <FaInstagramSquare className="text-2xl text-gray-300" />,
    },
    twitter: {
      title: "Twitter",
      link: "", // Update with your actual Twitter link
      icon: <BsTwitter className="text-2xl text-gray-300" />,
    },
    facebook: {
      title: "Facebook",
      link: "",
      icon: <FaFacebookSquare className="text-2xl text-gray-300" />,
    },
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-16 min-h-full flex items-center justify-center"
    >
      <div className="text-center">
        <p className="text-gray-400 text-lg mb-4">Get in Touch</p>
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {/* Email Section */}
          <div className="flex items-center space-x-4">
            {email.icon}
            <a
              href={email.link}
              className="text-gray-300 hover:text-white transition"
            >
              {email.value}
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-4">
            {phone.icon}
            <a
              href={phone.link}
              className="text-gray-300 hover:text-white transition"
            >
              {phone.value}
            </a>
          </div>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col items-center gap-4">
          {Object.values(contacts).map(
            (contact, index) =>
              contact.link && (
                <div key={index} className="flex items-center space-x-4">
                  {contact.icon}
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    {contact.title}
                  </a>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
