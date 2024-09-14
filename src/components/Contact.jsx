import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-white pb-2">
      <h1 className="font-semibold my-10 text-center text-4xl">
        Get in
        <span className="text-neutral-500"> Touch</span>
      </h1>
      <div className=" py-12 ">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap -mx-4">
            {/* Get In Touch Section */}
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <h5 className="text-xl font-semibold text-white my-2">
                Let&apos;s Connect
              </h5>
              <p className="mb-6 font-semibold text-[#ADB7BE]">
                I&apos;m currently looking for new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
              <ul className="text-white font-semibold ">
                {/* Location */}
                <li className="mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>F19/A, Malpandeniya Watta, Paragammana, Kegalle</span>
                </li>

                {/* Phone numbers */}
                <li className="mb-4 flex items-center">
                  <FaPhoneAlt className="mr-2" />
                  <div>
                    <a href="tel:+94717447081" className="hover:text-gray-700">
                      +94 70 170 4528
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="mb-4 flex items-center">
                  <FaEnvelope className="mr-2" />
                  <a
                    href="mailto:ashencharanga99@gmail.com"
                    className="hover:text-gray-700"
                  >
                    ashencharanga99@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Send A Message Section */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-xl font-semibold text-white my-2 mb-4">
                Send a Message
              </h2>
              
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full mb-4 md:mb-0 border border-gray-300 p-2 rounded-md text-black"
                    required
                  />
                  
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full mb-4 md:mb-0 border border-gray-300 p-2 rounded-md text-black"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your message"
                  className="w-full border border-gray-300 p-2 rounded-md text-black"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-gray-900 text-white p-3 pb-4 rounded-md w-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
