import Header from "@/app/(app)/(components)/Header";
import Hero from "@/app/(app)/(components)/Hero";
import AboutMe from "@/app/(app)/(components)/AboutMe";
import Experiences from "@/app/(app)/(components)/Experiences";
import Skills from "@/app/(app)/(components)/Skills";
import Projects from "@/app/(app)/(components)/Projects";
import ContactMe from "@/app/(app)/(components)/ContactMe";
import BackToTopButton from "@/app/(app)/(components)/BackToTopButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="experiences">
        <Experiences />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
      <BackToTopButton />
    </>
  );
}
