import { SiCplusplus } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const SkillsSection = () => {

  const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vite", icon: SiVite },
  { name: "C++", icon: SiCplusplus, },
  { name: "Java", icon: FaJava },
];

    return(
    <section id="skills" className="relative bg-black/85 mx-4 md:mx-20 my-20">

       

        <h2 className="text-center white font-bold text-4xl mb-10 mt-20 pt-10">
            How I Can Contribute & My Key Skills
        </h2>

           <p className=" hidden md:block border-b-2 border-purple-500 pb-2 absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 font-bold text-2xl text-white "> 
            SKILLS </p>

      
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-20 pt-10 pb-20" >
  {skills.map((skill) => {
    const Icon = skill.icon;

    return (
      <div
        key={skill.name}
        className="bg-card p-6 rounded-xl shadow-lg flex flex-col items-center hover:-translate-y-2 transition-all"
      >
        <Icon className="text-6xl mb-4" />
        <h3>{skill.name}</h3>
      </div>
    );
  })}
</div>



    </section>
    );
}

