import { ExternalLink, Code2 } from "lucide-react";

const projects = {
  featured: {
    title:
      "A responsive Food Delivery frontend built with React, designed to provide a smooth and engaging user experience.",
    description:
      "The platform includes interactive menu browsing, cart management, and a seamless checkout flow with a clean, modern interface.",
    image: "/Project1.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demo: "https://tomato-food-delivery-two.vercel.app/",
    code: "https://github.com/its-aimen/tomato-food-delivery",
  },
  list: [
    {
      title: "React Movie App",
      description:
        "A movie discovery app that fetches and searches films using the TMDB API, with a popularity-tracking feature powered by Appwrite.",
      image: "/Project2.png",
      bg: "bg-[#ffefdb]",
      tags: ["React", "Appwrite"],
      demo: "https://react-movie-app-peach-ten.vercel.app/",
      code: "https://github.com/its-aimen/react-movie-app",
    },
    {
      title: "Portfolio",
      description:
        "Personal portfolio site — built with React, Tailwind CSS. ",
      image: "/Project3.png",
      bg: "bg-[#ffe7eb]",
      tags: ["React", "Tailwind CSS"],
      demo: "https://portfolio-chi-three-56.vercel.app/",
      code: "https://github.com/its-aimen/portfolio",
    },
  ],
};

const Projects = () => {
  return (
    <div id="projects" className="app-showcase">
      <div className="w-full">
        <div className="text">
          <h2 className="mb-5 text-center text-foreground font-bold text-4xl">
            Featured Projects
          </h2>
          <p className="items-center mb-13 text-center text-muted-foreground">
            Here are some of the projects I've built while learning,
            experimenting, and turning ideas into functional experiences.
          </p>
        </div>

        <div className="showcaselayout">
          {/* Left - featured project */}
          <div className="first-project-wrapper transition-all duration-300 hover:-translate-y-1">
            <div className="image-wrapper">
              <img
                src={projects.featured.image}
                alt={`Screenshot of the ${projects.list[0] ? "Tomato food delivery" : ""} project`}
              />
            </div>
            <div className="text-content">
              <div className="badges">
                {projects.featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-primary/40 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2>{projects.featured.title}</h2>
              <p className="text-white-50 md:text-base text-muted-foreground">
                {projects.featured.description}
              </p>
            </div>

            <div className="flex items-center gap-7 pt-5 justify-center">
              <a
                href={projects.featured.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={projects.featured.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
              >
                <Code2 className="w-4 h-4" /> Code
              </a>
            </div>
          </div>

          {/* Right - project list */}
          <div className="project-list-wrapper overflow-hidden">
            {projects.list.map((project) => (
              <div
                key={project.title}
                className="project transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`image-wrapper ${project.bg}`}>
                  <img src={project.image} alt={`Screenshot of the ${project.title} project`} />
                </div>
                <h2>{project.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-7 pt-3 justify-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Code2 className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
