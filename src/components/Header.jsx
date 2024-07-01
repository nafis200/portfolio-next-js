"use client"
import About from "./About";
import Banner from "./Banner";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
const Header = () => {
    return (
        <div>
            <Element name="">
            <Banner></Banner>
            </Element>
            <About></About>
        </div>
    );
};

export default Header;