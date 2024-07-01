"use client"
import About from "./About";
import Banner from "./Banner";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import Empty from "./Empty";
const Header = () => {
    return (
        <div className="">
            <Empty></Empty>
            <Element name="">
             <Banner></Banner>
            </Element>
            <Element name="Aboutme">
            <About></About>
            </Element>
        </div>
    );
};

export default Header;