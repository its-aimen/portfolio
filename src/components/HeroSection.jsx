import Spline from "@splinetool/react-spline";
import { Send } from "lucide-react";


export const HeroSection = () =>{
    return (


        <section id="hero" className="min-h-screen flex items-center">
        
         
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
           
         <div className="ml-4 md:ml-20 -mt-10 md:-mt-23 text-left px-4 md:px-0">
                <div>
                <h1 className=" text-4xl text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
                     Hi, I'm Aimen 
                </h1>
             <br/>
            
        <div className=" text-xl md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           
            <p> Frontend Developer </p>
            <p> <br />
            I create stellar web experiences with modern technologies. <br />
            Specializing in front-end development, I build interfaces  <br />
            that are both beautiful and functional.
  </p>

                </div>
            </div> 
            <br/>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <a href ="#projects"
                className="px-8 py-3.5 rounded-full border border-zinc-500/50 text-white font-medium text-sm hover:border-white hover:bg-white/5 transition-all duration-200 inline-flex items-center justify-center"> 
                View My Work
                </a>
                  

                  <a
        href="#contact"
        className="px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
      >
        <span>Let's Talk</span>
        <Send className="w-4 h-4 text-zinc-950 -rotate-12" />
      </a>
            </div>


            </div>




       
            <div className="hidden lg:block w-[400px] h-[400px] xl:w-[630px] xl:h-[630px] -mt-10 -mr-13">
        <Spline scene="https://prod.spline.design/jN8aU7DiaNPZAS6T/scene.splinecode" />
        </div>
        </div>
        </section>
    )
}