"use client"
import About from "./About";
import Banner from "./Banner";
import { Element } from "react-scroll";
import Empty from "./Empty";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
const Header = () => {
    return (
        <div className="">
            <Element name="">
            <Empty></Empty>
            </Element>
            <Element name="Aboutme">
             <Banner></Banner>
            </Element>
            <Element name="Contacts">
            <About></About>
            </Element>
            <Element name="Skills">
                 <Contact></Contact>
            </Element>
            <Element name="">
                <Skills></Skills>
            </Element>
            <Element name="Projects">
                <Projects></Projects>
            </Element>
            <Element name="Education">
               <Education></Education>
            </Element>
        </div>
    );
};

export default Header;