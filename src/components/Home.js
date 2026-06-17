import React from "react";
import { NavLink } from "react-router-dom";
import FadeInSection from './FadeInSection';
import Button from './Button';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="text-center mt-5 px-10">
        <h1 className="text-4xl"><span className="text-black">Hi, I'm </span><span className="text-red">Shaik Peera</span></h1>
        <h2 className="text-4xl hero-text">User Interface Designer and Developer<br />based in Hyderabad, Telangana, India.</h2>
        <p className="mt-5">Let's create a successful journey - <NavLink className="link" to="/contact">CONTACT</NavLink></p>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="banners overflow-hidden flex flex-wrap md:flex-nowrap gap-3.5 mt-16 mb-20">
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-blue">User</span><br/><span className="text-white">Centered</span></h2>
          <h4>User Research | User Journey | User Flow</h4>
        </div>
      </div>
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-red">User</span><br/><span className="text-white">Interface</span></h2>
          <h4>Layout | Standards | Implementation</h4>
        </div>
      </div>
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-green">User</span><br/><span className="text-white">Accessability</span></h2>
          <h4>Brand | Color | Typography | Vision</h4>
        </div>
      </div> 
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-yellow">User</span><br/><span className="text-white">Interaction</span></h2>
          <h4>Intercation | Micro Vision | DOM Manipulation</h4>          
        </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <h2 className="text-red text-3xl md:text-5xl mb-8">Why choose me</h2>
      <div className="cards empty">
        <div className="grid md:grid-cols-3 md:gap-20">
          <div className="card text-center my-2 p-10">
            <h4>INTERACTION DESIGN</h4>
            <p>Being familiar with best practices for interaction design between a user and the product significantly shapes the user experience.</p>
          </div>
          <div className="card text-center my-2 p-10">
            <h4>USABILITY TESTING</h4>
            <p>Observing users interactions across a digital product to identify user pain points, usability issues, and areas for user interface improvement.</p>
          </div>
          <div className="card text-center my-2 p-10">
            <h4>PROBLEM SOLVING</h4>
            <p>Having a deep understanding for the user behaviours, challenges, and the creativity to devise solutions that enhance their experience.</p>
          </div>
          <div className="card text-center my-2 p-10">
            <h4>PROBLEM SOLVING</h4>
            <p>Having a deep understanding for the user behaviours, challenges, and the creativity to devise solutions that enhance their experience.</p>
          </div>
          <div className="card text-center my-2 p-10">
            <h4>PROBLEM SOLVING</h4>
            <p>Having a deep understanding for the user behaviours, challenges, and the creativity to devise solutions that enhance their experience.</p>
          </div>
          <div className="card text-center my-2 p-10">
            <h4>PROBLEM SOLVING</h4>
            <p>Having a deep understanding for the user behaviours, challenges, and the creativity to devise solutions that enhance their experience.</p>
          </div>
        </div>
      </div>
    </div>
    </FadeInSection>


    <FadeInSection>
    <div className="container">
      <div className="key-skills mb-20 mt-20">
        <h2 className="text-3xl md:text-5xl text-center text-red mb-10">Top Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 md:gap-20">
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Expertise to create a user interface designs using Photoshop, Figma, Adobe XD, Webflow and more.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>HTML5 and XHTML:</strong> Adept at crafting semantic and accessible web pages, ensuring compatibility across devices and browsers.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>CSS3 (Less and Sass):</strong> Well-versed in layouts using Flexbox and CSS Grid, with expertise in CSS preprocessors to create modular, maintainable stylesheets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Responsive Web Design:</strong> Committed to delivering responsive and mobile-first and all device friendly designs for optimal user experiences.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Bootstrap:</strong> Expertise with the Bootstrap framework for building responsive and consistent UI components.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Tailwind CSS:</strong> Experienced with utility‑first CSS frameworks for building user interfaces.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>JavaScript and jQuery:</strong> Proficient in enhancing frontend functionality through dynamic scripting and interactivity.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>React JS:</strong> Expertise in developing cross-browser Single Page Applications and mobile friendly applications.</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>eCommerce Frontend:</strong> Proficient in developing custom themes, templates, and layouts using Magento2, Shopify, WordPress frontend architecture.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Version Control (Git):</strong> Skilled in collaborating with development teams using Git for code versioning.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Performance Optimization:</strong> Dedicated to improving website speed by analyzing Core Web Vitals and optimizing performance, including minimizing HTTP requests.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>CI/CD Integration:</strong> Experienced to implement the continuous integration and continuous deployment process towards a smooth development and a cleaner code visibility.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Figma, Adobe XD,  Sketch, Photoshop, Illustrator.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Programming Skills:</strong> HTML5, XHTML, XML, CSS3(Less & Sass), Tailwind CSS, Bootstrap, Responsive Web Design, Semantic UI, W3c Standards, PHP, mySQL, JavaScript, jQuery, React JS, WordPress, Webflow, Magento2, Shopify, October CMS.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Communication and Collaboration:</strong> Partnered with product teams and stakeholders to deliver innovative application design solutions within Agile sprints, driving successful goal completion.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    </FadeInSection>
    </>
  );
}

export default Home;