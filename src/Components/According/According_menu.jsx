import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccordionApp.scss";

const AccordionApp = () => {
  const accordionData = [
    { 
      title: "UYUSHMA HAQIDA", 
      // content: "UYUSHMA HAQIDA", 
      links: [
        { label: "Link 1", url: "/youhome" },
        { label: "Link 2", url: "/youhome" },
        { label: "Link 3", url: "/youhome" }
      ]
    },
    { 
      title: "MAHALLA HAQIDA", 
      // content: "UYUSHMA HAQIDA", 
      links: [
        { label: "Link 1", url: "/section2" },
        { label: "Link 2", url: "/section2" },
        { label: "Link 3", url: "/section2" }
      ]
    },
    { 
      title: "UYUSHMA HAQIDA", 
      // content: "UYUSHMA HAQIDA", 
      links: [
        { label: "Link 1", url: "/youhome" },
        { label: "Link 2", url: "/youhome" },
        { label: "Link 3", url: "/youhome" }
      ]
    },
    { 
      title: "MAHALLA HAQIDA", 
      // content: "UYUSHMA HAQIDA", 
      links: [
        { label: "Link 1", url: "/section2" },
        { label: "Link 2", url: "/section2" },
        { label: "Link 3", url: "/section2" }
      ]
    },
    { 
      title: "UYUSHMA HAQIDA", 
      // content: "UYUSHMA HAQIDA", 
      links: [
        { label: "Link 1", url: "/youhome" },
        { label: "Link 2", url: "/youhome" },
        { label: "Link 3", url: "/youhome" }
      ]
    },
    { 
      title: "MAHALLA HAQIDA", 
      // content: "UYUSHMA HAQIDA", 
      links: [
        { label: "Link 1", url: "/section2" },
        { label: "Link 2", url: "/section2" },
        { label: "Link 3", url: "/section2" }
      ]
    },
  ];

  const AccordionItem = ({ title, children, links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
     <>
      <div className="">
      <div
        className="accordion-item"
        onMouseEnter={toggleOpen}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="accordion-button">
          {title}
          <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</span>
        </button>
        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
          <p>{children}</p>
          <div className="accordion-links">
            {links.map((link, index) => (
              <Link key={index} to={link.url} className="link-item">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      </div>
     
     
     
     </>
      
    );
  };

  const Accordion = ({ items }) => {
    return (
      <div className="accordion-container">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            title={item.title} 
            links={item.links}
          >
            {item.content}
          </AccordionItem>
        ))} 
      </div>
    );  
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <Accordion items={accordionData} />
    </div>
  );
};

export default AccordionApp;
