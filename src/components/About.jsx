import React from "react";

const About = () => {
  return (
    <div className=" pb-4">
      <h1 className="font-semibold my-10 text-center text-5xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="text-center mx-20 mb-10">
        <p className="text-lg">
          I am an IT undergraduate at the University of Moratuwa with a GPA of
          3.56. I enjoy solving problems and developing web applications. I have
          experience with Java, C, JavaScript, Asp .NET, React.js, and Next.js
          as well as database management. I am a team player with strong time
          management skills, and I am always eager to learn and take on new
          challenges
        </p>
      </div>
      <div className="container mx-auto py-10 px-4 lg:px-0">
        <h2 className="text-4xl font-semibold text-center mb-10  tracking-wider">
          Educations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Education Box */}
          <div className="bg-transparent border border-gray-300  p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:border-neutral-300">
            <h3 className="text-2xl font-bold mb-3 text-white">
              University of Moratuwa
            </h3>
            <p className="text-sm text-neutral-400 mb-3">Expected in 2026</p>
            <p className="text-lg font-semibold text-white mb-5">
              BScHons in Information Technology
            </p>
            <p className="text-neutral-300 mb-5">
              I am an undergraduate at the University of Moratuwa, pursuing a
              BSc (Hons) in Information Technology. I am in my third year and
              have already completed coursework that includes Data Structures
              and Algorithms (DSA), Object-Oriented Programming (OOP), Database
              Management Systems (DBMS), and many more.
            </p>
            <p className="text-lg font-semibold text-neutral-100">
              CGPA: 3.56 / 4.0
            </p>
          </div>

          {/* Second Education Box */}
          <div className="bg-transparent border border-gray-300  p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:border-neutral-300">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Kegalu Vidyalaya, Kegalle
            </h3>
            <p className="text-sm text-neutral-400 mb-3">2012 - 2020</p>
            <p className="text-lg font-semibold text-white mb-5">
              GCE A/L in Physical Science Stream
            </p>
            <p className="text-neutral-300 mb-5">
              In 2020, I completed the GCE Advanced Level in the Physical
              Science stream with a Z-score of 1.58. I achieved three 'B's in
              Combined Mathematics, Physics and Chemistry.
            </p>
            <p className="text-lg font-semibold text-neutral-100">
              Z-Score: 1.5806
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
