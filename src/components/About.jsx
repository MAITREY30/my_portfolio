import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        In addition to my programming expertise, I have hands-on experience in full-stack web development. My tech stack includes ReactJS, NextJS, TailwindCSS, and NodeJS, which I have utilized to build dynamic, responsive, and user-friendly web applications.  This blend of theoretical knowledge and practical application allows me to approach software development with a unique perspective, combining rigorous problem-solving techniques with cutting-edge technologies
        </p>

        <br />

        <p className="text-xl">
        Throughout my academic and professional journey, I have participated in numerous coding competitions , constantly striving to improve and stay updated with the latest industry trends. am eager to leverage my skills in a collaborative and innovative environment, where I can contribute to impactful projects and continue to grow as a software developer. Let's connect and explore how we can work together to create something extraordinary!


        </p>
      </div>
    </div>
  );
};

export default About;
