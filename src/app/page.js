"use client";
import AboutMe from "./aboutMe/AboutMe";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Contact from "./conatctUs/Contact";
import ContactForm from "./conatctUs/ContactUs";
import Education from "./education/Education";
import { HeroSection } from "./HeroSection/HeroSection";
import MySkills from "./mySkills/MySkills";
import Projects from "./projects/Projects";
import ShortDescription from "./shortDescription/ShortDescription";
import SkillTree from "./SkillTree/SkillTree";
import ThreeDIcon from "./utils/ThreeDIcons";

export default function Home() {
  return (
    <>
      <div className="text-black dark:text-white  opacity-95  tracking-wider bg-[#FBFBFB] dark:bg-[#252734] font-mon">
        <Header />

        <div className="max-w-[1240px] mx-auto px-8">
          <div id="home">
            <HeroSection />
          </div>
          <div id="about">
            <AboutMe />

            <ShortDescription />
          </div>
          <div id="skills">
            <MySkills />
          </div>
          <div id="projects">
            <Projects />
          </div>

          <div id="education">
            <Education />
          </div>
          <div id="contacts">
            <Contact />
          </div>

          {/* <ContactForm /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
