import React from "react";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssFill,
  RiJavaFill,
} from "react-icons/ri";
import {
  SiMui,
  SiDotnet,
  SiMysql,
  SiMicrosoftsqlserver,
  SiCanva,
  SiGimp,
  SiC,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pl-5">
      <h1 className="font-semibold text-center text-4xl ">Technologies</h1>
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">
          Front-End Technologies
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <div className="">
              <RiHtml5Fill className="text-5xl text-orange-600" />
            </div>
            <div>
              <p className="text-lg">HTML</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <RiCss3Fill className="text-5xl text-blue-400" />
            </div>
            <div>
              <p className="text-lg">CSS</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <RiJavascriptFill className="text-5xl text-yellow-400" />
            </div>
            <div>
              <p className="text-lg">JavaScript</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <RiReactjsLine className="text-5xl text-cyan-600" />
            </div>
            <div>
              <p className="text-lg">React.js</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <RiNextjsLine className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-lg">Next.js</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <SiMui className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-lg">Material UI</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <RiTailwindCssFill className="text-5xl text-blue-400" />
            </div>
            <div>
              <p className="text-lg">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Back-End Technologies</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <div className="">
              <SiDotnet className="text-5xl text-blue-600" />
            </div>
            <div>
              <p className="text-lg">ASP .NET</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Databases</div>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <div className="">
              <SiMicrosoftsqlserver className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-lg">MSSQL</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <SiMysql className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-lg">MySQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Programming Languages</div>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <div className="">
              <RiJavaFill className="text-5xl text-blue-400" />
            </div>
            <div>
              <p className="text-lg">Java</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <RiJavascriptFill className="text-5xl text-yellow-400" />
            </div>
            <div>
              <p className="text-lg">JavaScript</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="">
              <SiC className="text-5xl text-blue-600" />
            </div>
            <div>
              <p className="text-lg">C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Tools</div>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <div className="">
              <FaGitAlt className="text-5xl text-orange-700" />
            </div>
            <div>
              <p className="text-lg">Git</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <SiCanva className="text-5xl text-[#00C4CC]" />
            </div>
            <div>
              <p className="text-lg">Canva</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <SiGimp className="text-5xl text-amber-800" />
            </div>
            <div>
              <p className="text-lg">Gimp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
