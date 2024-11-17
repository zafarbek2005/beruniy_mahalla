import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";
import "./Navbotom.scss";
import logo from '../../assets/logo.png';
import bayroq from '../../assets/uzflag.png';
import gerb from '../../assets/gerbuz.png';

const AccordionApp = () => {
  const accordionData = [
    { title: "MAHALLA HAQIDA", links: [{ label: "Link 1", url: "/section1" }, { label: "Link 2", url: "/section2" }, { label: "Link 3", url: "/section3" }] },
    { title: "UYUSHMA HAQIDA", links: [{ label: "Link 1", url: "/youhome1" }, { label: "Link 2", url: "/youhome2" }, { label: "Link 3", url: "/youhome3" }] },
    { title: "UYUSHMA HAQIDA", links: [{ label: "Link 1", url: "/youhome1" }, { label: "Link 2", url: "/youhome2" }, { label: "Link 3", url: "/youhome3" }] },
    { title: "UYUSHMA HAQIDA", links: [{ label: "Link 1", url: "/youhome1" }, { label: "Link 2", url: "/youhome2" }, { label: "Link 3", url: "/youhome3" }] },
    { title: "UYUSHMA HAQIDA", links: [{ label: "Link 1", url: "/youhome1" }, { label: "Link 2", url: "/youhome2" }, { label: "Link 3", url: "/youhome3" }] },
    { title: "UYUSHMA HAQIDA", links: [{ label: "Link 1", url: "/youhome1" }, { label: "Link 2", url: "/youhome2" }, { label: "Link 3", url: "/youhome3" }] },
    { title: "UYUSHMA HAQIDA", links: [{ label: "Link 1", url: "/youhome1" }, { label: "Link 2", url: "/youhome2" }, { label: "Link 3", url: "/youhome3" }] },
    // Add more as needed...
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const AccordionItem = ({ title, links, isClickable }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => !isClickable && setIsOpen(true);
    const handleMouseLeave = () => !isClickable && setIsOpen(false);
    const handleClick = () => isClickable && setIsOpen(!isOpen);

    return (
      <div
        className={`accordion-item ${isClickable ? "clickable" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="accordion-button" onClick={isClickable ? handleClick : undefined}>
          {title}
          <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</span>
        </button>
        {isOpen && (
          <div className="accordion-content">
            {links.map((link, index) => (
              <Link key={index} to={link.url} className="link-item">
                {link.label} <span className="arrow"><MdKeyboardArrowRight /></span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header>
      <div className="container">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <AiOutlineClose className="close-icon" onClick={toggleSidebar} />
          </div>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} links={item.links} isClickable />
            ))}
          </div>
        </div>
        {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <AiOutlineMenu />
        </div>

        {/* Desktop Navbar */}
        <div className="desktop-navbar">
          <div className="logo_items">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h3>O‘ZBEKISTON MAHALLALARI <br /> <mark>UYUSHMASI</mark></h3>
            </div>
            <div className="items_gerb">
              <button><GiMicrophone /></button>
              <button><BsBookHalf /></button>
              <button><img src={bayroq} alt="Bayroq" /><span>BAYROQ</span></button>
              <button><img src={gerb} alt="Gerb" /><span>GERB</span></button>
              <button><IoMdMusicalNote /><span>MADHIYA</span></button>
            </div>
          </div>
          <div className="accordion-desktop">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} links={item.links} />
            ))}
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccordionApp;
