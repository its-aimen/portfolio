import { ThemeToggle } from "./components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import Projects from "./components/Projects";
import { SkillsSection } from "./components/SkillsSection";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";



export const Home =() =>{
    return(
    <div className= "min-h-screen">
        {/*theme toggle*/}
        <ThemeToggle/>
        {/*bg*/}
        <StarBackground/>
        {/*navbar*/}
        <Navbar/>

        {/*main*/}
        <main>
            
            <HeroSection />
            <AboutMe/>
            <SkillsSection/>
            <Projects/>
            
            <Contact />
        </main>
    </div>
    );
};