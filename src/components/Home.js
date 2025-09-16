import React from "react";
import { NavLink } from "react-router-dom";
import FadeInSection from './FadeInSection';
import Button from './Button';
import styled from 'styled-components';

/* left right scroll on page scroll*/
const LRScroller = styled.div`
  li {
    background: var(--pink);
    border-radius: 100px;
    color: var(--white) !important;
    font-size: 22px;
    padding: 20px 30px;
    margin: 0 20px;
  }

  &[data-animated="true"] {
    overflow: hidden;
  }

  &[data-animated="true"] .scroller-inner {
    width: max-content;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    white-space: nowrap;
    animation: .2s scrolling linear;
    animation-timeline: scroll(root);
    margin: 20px 0;
  }

  &[data-direction="right"] .scroller-inner {
    flex-direction: row-reverse;
    animation-direction: reverse;
  }

  @keyframes scrolling {
    to {
        transform: translate(calc(-20% - 0.5rem));
    }
  }
`;

const Home = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="text-center mt-5 px-10">
        <p className="text-gray-500">
        Hello, This is <span className="text-pink">PEERA SHAIK</span>, I'm a professional user interface designer.</p>
        <h1 className="hero-text my-5 text-4xl md:text-8xl">SOLID 21 YEARS<br /> OF EXPERIENCE</h1>
        <p>Let's create a successful journey - <NavLink className="link" to="/contact">CONTACT</NavLink></p>
      </div>
    </div>
    </FadeInSection>

    <div className="banners overflow-hidden flex flex-wrap md:flex-nowrap gap-3.5 mt-12">
      <div className="color-bg red flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-black">User</span><br/><span className="text-white">Interface</span></h2>
          <h4>User Research | User Journey | User Flow</h4>
        </div>
      </div>
      <div className="color-bg green flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-yellow">CSS3</span> <span className="text-white">Style</span></h2>
          <h4>Brand | Color | Typography | Vision</h4>
        </div>
      </div>
      <div className="color-bg navy-blue flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-white">HTML</span><span className="text-green">5</span></h2>
          <h4>Layout | Content | Standards</h4>
        </div>
      </div>  
      <div className="color-bg purple flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-yellow">Javascript</span><br/><span className="text-white">jQuery</span></h2>
          <h4>User Intercation | DOM Manipulation</h4>
        </div>
      </div>
    </div>

    <FadeInSection>
    <div className="container">
      <div className="text-center my-32">
        <h2 className="relative text-4xl md:text-5xl text-center my-10"><span className="inline-block text-green">Pixel Perfect</span> Wins</h2>
        <p className="px-10 mb-10">I’ve become a highly valued user interface designer, known for pushing the boundaries of pixel-perfect design implementation. With a keen eye for detail, I craft interfaces driven by emerging ideas that result in cross-browser compatible layouts and seamless user experiences.</p>
        <Button btnlink='skills' btnstyle='btn-primary' label='DESIGN THEME-ING' />
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="my-work-list grid md:grid-cols-2 md:gap-20 mb-10 py-5">
        <div className="item mb-20 md:mb-0">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://vita4you.gr" target="_blank" rel="noreferrer">
                <img src={require("../assets/works/vita4you.png")} loading="lazy" alt="Vita4you" title="Vita4you" />
              </a>
          </div>
          <h2 className="text-white mt-10 mb-2 relative">Health Care Product Redesign and Customization</h2>
          <p className="mb-5 text-sm">A complete new design integration of a ecommerce application</p>
          <span className="bg-gray-800 text-gray-400">UI Design</span> <span className="inline bg-gray-800 text-gray-400">UI Development</span> <span className="inline bg-gray-800 text-gray-400">Magento2 UI</span>
        </div>
        <div className="item mb-20 md:mb-0">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://mynpp.com" target="_blank" rel="noreferrer">
                <img src={require('../assets/works/mynpp.png')} loading="lazy" alt="Mynpp" title="Mynpp" />
              </a>
          </div>
          <h2 className="text-white mt-10 mb-2 relative">Purchasing partner application design and integration</h2>
          <p className="mb-5 text-sm">Designing a custom theme of a Wordpress application</p>
          <span className="bg-gray-800 text-gray-400">UI Design</span> <span className="inline bg-gray-800 text-gray-400">UI Development</span> <span className="inline bg-gray-800 text-gray-400">WordPress UI</span>
        </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="color-bg green py-14 text-center">
      <div className="container">
        <h3 className="uppercase text-white text-3xl md:text-5xl my-10">CLIENTS - TRUST IN QUALITY</h3>
        <div className="fill-white shape-right-slant"></div>
        <p className="text-white px-10 mb-10">Having received over <span className="font-bold text-black text-3xl md:text-6xl">100+</span> esteemed, industry leading accolades my client work has consistently achieved excellence and innovation in the ever-evolving world of digital design. These recognitions not only affirm my commitment to pushing creative boundaries but also underscore the unwavering dedication to delivering cutting-edge solutions.</p>
        <Button btnlink='works' btnstyle='btn-outline' label='VIEW RECENT WORKS' />
      </div>
      <div className="slant light-blue"></div>
    </div>

    <div className="cards empty py-10">
      <div className="container">
      <div className="grid md:grid-cols-3 md:gap-20">
        <div className="card text-center my-4 md:my-10 p-10">
          <h4>INTERACTION DESIGN</h4>
          <p>Being familiar with best practices for interaction design between a user and the product significantly shapes the user experience.</p>
        </div>
        <div className="card text-center my-4 md:my-10 p-10">
          <h4>USABILITY TESTING</h4>
          <p>Observing users interactions across a digital product to identify user pain points, usability issues, and areas for user interface improvement.</p>
        </div>
        <div className="card text-center my-4 md:my-10 p-10">
          <h4>PROBLEM SOLVING</h4>
          <p>Having a deep understanding for the user behaviours, challenges, and the creativity to devise solutions that enhance their experience.</p>
        </div>
      </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="my-20 grid place-items-center">
      <LRScroller data-animated="true">
        <ul className="scroller-inner">
          <li>UI/UX</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive Web Design</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>React JS</li>
          <li>Webflow</li>
          <li>Wordpress UI</li>
          <li>Magento2 UI</li>
          <li>Shopify UI</li>
          <li>Web Development</li>
        </ul>
      </LRScroller>
      <LRScroller data-animated="true" data-direction="right">
        <ul className="scroller-inner">
          <li>UI/UX</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive Web Design</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>React JS</li>
          <li>Webflow</li>
          <li>Wordpress UI</li>
          <li>Magento2 UI</li>
          <li>Shopify UI</li>
          <li>Web Development</li>
        </ul>
      </LRScroller>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="key-skills mb-20">
        <h2 className="text-center text-green my-28">A journey of learning process!</h2>
        <h3 className="text-center mb-5"><strong>SKILLS <span className="text-green">&</span> TECHNOLOGIES</strong></h3>
        <div className="grid md:grid-cols-2 md:gap-20">
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Expertise to create a user interface designs using Figma, Adobe XD, Webflow, Canva.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>HTML5 and XHTML:</strong> Adept at crafting semantic and accessible web pages, ensuring compatibility across devices and browsers.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>CSS3 (Less and Sass):</strong> Well-versed in using CSS preprocessors to create modular, maintainable stylesheets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Responsive Web Design:</strong> Committed to delivering responsive and mobile-friendly designs for optimal user experiences.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Bootstrap:</strong> Familiar with the Bootstrap framework for building responsive and consistent UI components.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Tailwind CSS:</strong> Expereinced at a utility-first CSS framework for building raid user interfaces.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>JavaScript and jQuery:</strong> Proficient in enhancing frontend functionality through dynamic scripting and interactivity.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>React JS:</strong> Expertise in developing cross-browser Single Page Applications and mobile friendly user centred applications using React JS.</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>eCommerce Frontend:</strong> Proficient in developing custom themes, templates, and layouts using Magento2, Shopify, WordPress frontend architecture.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Version Control (Git):</strong> Skilled in collaborating with development teams using Git for code versioning.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Performance Optimization:</strong> Dedicated to improving website speed, minimizing HTTP requests, and optimizing assets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Cross-Browser Compatibility:</strong> Ensuring seamless rendering across various browsers and devices.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Figma, Adobe XD,  Sketch, Photoshop, Illustrator.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Programming Skills:</strong> HTML5, XHTML, XML, CSS3(Less & Sass), Tailwind CSS, Bootstrap, Responsive Web Design, Semantic UI, W3c Standards, PHP, mySQL, JavaScript, jQuery, React JS, WordPress UI, Magento2 UI, Shopify UI, October CMS.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Communication and Collaboration:</strong>a great communication or collaboration will result a successful product.</li>
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