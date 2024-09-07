import React from "react";
import profilePic from "../assets/sshome.png";
import Portfolio from "../assets/my.png";

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
              We are currently developing an e-commerce website using React.js,
              Node.js, MySQL, and TailwindCSS. This platform allows users to
              browse products, add items to their cart, and complete purchases
              seamlessly. The project involves collaborative teamwork aimed at
              creating a user-friendly and efficient online store.
            </p>
          </div>
          {/* Role */}
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Full Stack Developer</span>
            </p>
          </div>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/30"
              alt="React Icon"
              class="h-8 w-8"
            />
            <img
              src="https://via.placeholder.com/30"
              alt="Node.js Icon"
              class="h-8 w-8"
            />
            <img
              src="https://via.placeholder.com/30"
              alt="MySQL Icon"
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
              I am building my portfolio website using Next.js and TailwindCSS.
              This site will showcase my personal details, skills, and work in a
              user-friendly and visually appealing manner.
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
        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src="https://via.placeholder.com/300x150"
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
              I am building my portfolio website using Next.js and TailwindCSS.
              This site will showcase my personal details, skills, and work in a
              user-friendly and visually appealing manner.
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
        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Empty Bottle Collecting Machine </h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              I am building my portfolio website using Next.js and TailwindCSS.
              This site will showcase my personal details, skills, and work in a
              user-friendly and visually appealing manner.
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
      </div>
    </div>
  );
};

export default Project;
