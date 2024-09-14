import React from "react";
import profilePic from "../assets/sshome.png";
import Portfolio from "../assets/my.png";
import Carrom from "../assets/carrom.png";
import Saloon from "../assets/saloon.png";
import Bottle from "../assets/bottlemachine.jfif";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from "react-icons/fa";

const Project = () => {
  return (
    <div className="boder-b border-white pb-10">
      <h1 className="font-semibold my-10 text-center text-5xl">
        My
        <span className="text-neutral-500"> Works</span>
      </h1>
      <div class="flex flex-wrap justify-center gap-10">
        {/* Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={profilePic}
              alt="Project Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Expense Tracker System</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              For our second-year software project, my team and I developed an
              Expense Tracking system for Bistec Global. I worked on both the
              frontend and backend, focusing on features like user and admin
              setting pages. I also implemented a payment reminders page and
              developed personalized budget displays on the budget page.
              Additionally, we enabled users to track their financial
              statements, enhancing the system's convenience and usability
            </p>
          </div>
          {/* Role */}
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Full Stack Developer</span>
            </p>
          </div>
          <div class="mt-4">
            <a
              href="#"
              class="text-[#72e9ff] text-sm font-semibold hover:underline flex items-center"
            >
              View Source Code{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01.293.707v.006a1 1 0 01-.293.707l-5 5a1 1 0 01-1.414-1.414L15.586 11H6a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/30"
              alt="Next.js Icon"
              class="h-8 w-8"
            />
            <img
              src="https://via.placeholder.com/30"
              alt="TailwindCSS Icon"
              class="h-8 w-8"
            />
          </div>
        </div>

        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Portfolio}
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Portfolio Website</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              I am building my portfolio website using React.js and TailwindCSS.
              This site will showcase my personal details, skills, and work in a
              user-friendly and visually appealing manner.
            </p>
          </div>
          {/* View Source Code Link */}
          <div class="mt-4">
            <a
              href="https://github.com/Ashen06C/portfolioold"
              class="text-[#72e9ff] text-sm font-semibold hover:underline  flex justify-end"
            >
              View Source Code{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01.293.707v.006a1 1 0 01-.293.707l-5 5a1 1 0 01-1.414-1.414L15.586 11H6a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/30"
              alt="Next.js Icon"
              class="h-8 w-8"
            />
            <img
              src="https://via.placeholder.com/30"
              alt="TailwindCSS Icon"
              class="h-8 w-8"
            />
          </div>
        </div>
        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Carrom}
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Mora Carrom Web App</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              Mora Carrom is a web application for the Carrom Society of the
              University of Moratuwa. I am working on both the frontend and
              backend , featuring match scheduling, player comparisons, and a
              user-friendly, fully responsive interface.
            </p>
          </div>
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Full Stack Developer</span>
            </p>
          </div>
          {/* View Source Code Link */}
          <div class="mt-4">
            <a
              href="#"
              class="text-[#72e9ff] text-sm font-semibold hover:underline flex items-center"
            >
              View Source Code{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01.293.707v.006a1 1 0 01-.293.707l-5 5a1 1 0 01-1.414-1.414L15.586 11H6a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/30"
              alt="Next.js Icon"
              class="h-8 w-8"
            />
            <img
              src="https://via.placeholder.com/30"
              alt="TailwindCSS Icon"
              class="h-8 w-8"
            />
          </div>
        </div>
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Saloon}
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Dreamod Saloon Web App</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              Developed a fully responsive frontend for Dreamod Salon's official
              website. Implemented a feature allowing customers to contact the
              salon via email. The project involved creating a user-friendly
              interface optimized for both desktop and mobile devices, ensuring
              an improved customer experience
            </p>
          </div>
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Front End Developer</span>
            </p>
          </div>
          {/* View Source Code Link */}
          <div class="mt-4">
            <a
              href="https://dreamodsaloon.vercel.app/"
              class="text-[#72e9ff] text-sm font-semibold hover:underline flex items-center"
            >
              View Website{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01.293.707v.006a1 1 0 01-.293.707l-5 5a1 1 0 01-1.414-1.414L15.586 11H6a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/30"
              alt="Next.js Icon"
              class="h-8 w-8"
            />
            <img
              src="https://via.placeholder.com/30"
              alt="TailwindCSS Icon"
              class="h-8 w-8"
            />
          </div>
        </div>
        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Bottle}
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">
              Empty Bottle Collecting Machine{" "}
            </h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              The Empty Beverage Bottle Collecting Machine combats plastic
              pollution by revolutionizing bottle collection in public spaces
              with advanced sensors, website and Arduino technology. I was
              responsible for the LCD display and keypad.
            </p>
          </div>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/30"
              alt="Next.js Icon"
              class="h-8 w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
