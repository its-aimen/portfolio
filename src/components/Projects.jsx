import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  return (

    
    <div id="projects" className='app-showcase'>

      <div className="w-full">
          <div className="text">
             <h2 className=" mb-5 text-center white font-bold text-4xl">
            Featured Projects</h2>
          <p  className="items-center mb-13"> Here are some of the projects I've built while learning, experimenting, and turning ideas into functional experiences. </p>
          </div>  
        <div className="showcaselayout">
          {/*Left*/}
          <div className="first-project-wrapper transition-all duration-300 hover:-translate-y-1">
            <div className="image-wrapper">
           <img src="Project1.png" />
           </div>
           <div className='text-content'>
            <h2> A responsive Food Delivery frontend built with React, designed to provide a smooth and engaging user experience. </h2>
            <p className='text-white-50 md: text-base'>
            The platform includes interactive menu browsing, cart management, and a seamless checkout flow with a clean, modern interface.</p>


           </div>

                       <div className="flex items-center gap-7 pt-5 justify-center">
              <a href="https://tomato-food-delivery-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a href="https://github.com/its-aimen/tomato-food-delivery.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                <Code2 className="w-4 h-4" /> Code
              </a>
            </div>

          </div>


          
          {/*Right*/}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project transition-all duration-300 hover:-translate-y-1'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src="Project2.png" alt="" />
              </div>
              <h2> React Movie App </h2>
 <div className="flex items-center gap-7 pt-5 justify-center">
                <a href="https://react-movie-app-peach-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href="https://github.com/its-aimen/react-movie-app.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <Code2 className="w-4 h-4" /> Code
                </a>
              </div>
            </div>

              <div className='project transition-all duration-300 hover:-translate-y-2'>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src="Project3.png" alt="" />
              </div>
              <h2> Portfolio </h2>

            </div>

  <div className="flex items-center gap-7 pt-1 justify-center">
                <a href="portfolio-chi-three-56.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href="https://github.com/its-aimen/portfolio.git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <Code2 className="w-4 h-4" /> Code
                </a>
              </div> 
          </div>


        </div>


      </div>
    
    </div>
  )
}

export default Projects