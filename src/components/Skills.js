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
        <div className="card bg-white shadow-sm mt-14 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-window"></i></NavLink>
            <h4>Website Design</h4>
            <p>A unique website design is crucial for effective branding and achieving your goals, those key elements are branding, typography, layout, visualization, interaction.</p>
        </div>
        <div className="card bg-white shadow-sm mt-14 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-layout-wtf"></i></NavLink>
            <h4>Interface Design</h4>
            <p>Clarity, Consistency, Feedback, Efficiency, Aesthetics, Accessibility, User-Centered Design will help creating visually appealing and user-friendly interfaces.</p>
        </div>
        <div className="card bg-white shadow-sm mt-14 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-globe"></i></NavLink>
            <h4>Web Development</h4>
            <p>This encompasses several aspects, including web design, web content development, client-side & server-side scripting, and network security configuration.</p>
        </div>
      </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="text-center mb-20 px-10">
        <h2 className="text-red text-4xl md:text-5xl text-center mb-10">The most Innovative</h2>
        <p className="mb-5">Throughout 21 years of experience in design & creative field I have been learning, providing innovative and unique latest design trends using the latest technologies.</p>
        <p className="mb-10">To achieve your business goals, great product, or web application, improvements in user experience, improvements of page layouts,  and to improve scalability of  user interfaces across all the devices please connect with me.</p>
        <Button btnlink='contact' btnstyle='btn-primary' label='CONTACT' />
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

export default Skills;