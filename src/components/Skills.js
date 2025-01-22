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
            <NavLink to="/" className="icon"><i className="bi bi-layout-wtf"></i></NavLink>
            <h4>User Interface Design</h4>
            <p>Clarity, Consistency, Feedback, Efficiency, Aesthetics, Accessibility, User-Centered Design will help creating visually appealing and user-friendly interfaces.</p>
        </div>
        <div className="card bg-white shadow-sm mt-14 text-center">
            <NavLink to="/" className="icon"><i className="bi bi-window"></i></NavLink>
            <h4>Website Design</h4>
            <p>A unique website design is crucial for effective branding and achieving your goals, those key elements are branding, typography, layout, visualization, interaction.</p>
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
    <div className="hero-banner skills mb-5">
      <div className="headings flex justify-center items-center flex-col absolute z-10 w-full h-full">
        <h2 className="text-center">USER INTERFACE DESIGN</h2>
        <h3 className="text-center">WEB DEVELOPMENT</h3>
        <h4 className="text-center">eCOMMERCE FRONTEND</h4>
        <h5 className="text-center">WEB DESIGN</h5>
      </div>
      <div className="overlaaay"></div>
      <div className="pic"></div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="text-center my-20 px-10">
        <h2 className="text-4xl md:text-5xl text-center mb-10">Around the world <br />the most <span className="inline-block text-blue">innovative</span></h2>
        <p className="mb-5">Throughout 21 years of experience in design & creative field I have been learning, providing innovative and unique latest design trends using the latest technologies.</p>
        <p className="mb-10">To achieve your business goals, great product, or web application, improvements in user experience, improvements of page layouts,  and to improve scalability of  user interfaces across all the devices please connect with me.</p>
        <Button btnlink='contact' btnstyle='btn-primary' label='CONTACT' />
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="color-bg blue py-14 text-center">
      <div className="container">
        <h3 className="uppercase text-white text-3xl md:text-5xl my-10">Consistency <span className="text-black">&</span> Excellence</h3>
        <p className="text-white px-10 mb-5">All the user-centric web applications focus on the needs, preferences, and behaviors of users throughout the design and development process. This approach ensures that the final product is intuitive, accessible, and highly usable. </p>
        <p className="text-white px-10 mb-10">eCommerce stores use user-centered design to create seamless shopping experiences, leading to higher conversion rates and customer satisfaction, so please connect with me.</p>
        <Button btnlink='works' btnstyle='btn-outline' label='VIEW RECENT WORKS' />
      </div>
      <div className="slant black top"></div>
    </div>
    </FadeInSection>
    <div className="min-h-28">&nbsp;</div>
    </>
  );
}

export default Skills;