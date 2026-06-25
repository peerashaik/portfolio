import React from "react";
import { NavLink } from "react-router-dom";
import FadeInSection from './FadeInSection';
import Button from './Button';

const Skills = () => {
  return (
    <>
    <FadeInSection>
    <div className="cards pt-12 pb-28">
      <div className="container">
      <div className="grid md:grid-cols-3 md:gap-20">
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-window"></i></NavLink>
            <h4>Web Design</h4>
            <p>I have designed and developed numerous websites for diverse companies, gaining valuable experience while driving measurable impact on their businesses. In every project, I incorporate key elements of competitive, user‑centered, and user‑friendly design to deliver interfaces that stand out and create meaningful results.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-layout-wtf"></i></NavLink>
            <h4>Interface Design</h4>
            <p>Every interface I design begins with a clear vision rooted in technology, aesthetics, accessibility, consistency, efficiency, and user feedback. By integrating these process and principles, I create visually appealing, user‑friendly interfaces that deliver seamless experiences and lasting impact.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-globe"></i></NavLink>
            <h4>Development</h4>
            <p>I follow development standards and the limitations of each framework, with a strong focus on performance and user‑friendliness. This including client expectations, design, development, content creation, scripting, and network security configurations ensuring robust, efficient, and user‑centered solutions.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-info-circle"></i></NavLink>
            <h4>Interaction</h4>
            <p>I carefully consider all possible user interactions across layouts, elements, and assets throughout the user flow. By aligning these with client expectations, I ensure applications remain interactive, visually engaging, and accessible for users across both desktop and mobile platforms.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-app-indicator"></i></NavLink>
            <h4>Brand Vision</h4>
            <p>I prioritize brand visibility and maintain consistency throughout the design and development process, ensuring it is reflected in every aspect of my work. A strong brand is the foundation of every business—it connects with users, builds trust, and enhances overall business value.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-file-font"></i></NavLink>
            <h4>Typography</h4>
            <p>I prioritize using the right fonts to strengthen brand identity and ensure readability and accessibility. Selecting right font styles and sizes for headings, sub‑headings, paragraph text, and form elements creates a consistent visual hierarchy that enhances user engagement and increases the time spend with site content.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-book"></i></NavLink>
            <h4>Accessability</h4>
            <p>Designing and developing accessible websites ensures applications are usable for individuals with visual, auditory, and cognitive disabilities. By prioritizing accessibility, websites not only meet standards but also deliver equitable experiences and naturally improve SEO, usability which keep users connected and engaged with content across all devices.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-activity"></i></NavLink>
            <h4>Consistency</h4>
            <p>Maintaining a design system within an application ensures consistency across brand identity, color schemes, typography, form elements, spacing, layouts, and other aspects of site pages. A well‑structured design system creates a unified, predictable experience for both users and the development team. It builds trust, reduces cognitive load, minimizes bugs, and accelerates the entire product lifecycle.</p>
        </div>
        <div className="card bg-white shadow-sm mt-5 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-arrow-up-right-circle"></i></NavLink>
            <h4>Leadership</h4>
            <p>I focus on cultivating a healthy culture, establishing clear accountability, and creating an environment of trust and psychological safety—driving both individual growth and collective success. Building strong connections and fostering peer‑to‑peer coaching empowers teams to move beyond artificial harmony, address conflicts constructively, and achieve high performance.</p>
        </div>
      </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="key-skills mb-20">
        <h2 className="text-3xl md:text-5xl text-center text-red mb-10">Top Skills</h2>
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

export default Skills;