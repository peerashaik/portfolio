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
    <div className="container">
      <div className="text-center mb-20 px-10">
        <h2 className="text-red text-4xl md:text-5xl text-center mb-10">The most Innovative</h2>
        <p className="mb-5">Throughout 21 years of experience in design & creative field I have been learning, providing innovative and unique latest design trends using the latest technologies.</p>
        <p className="mb-10">To achieve your business goals, great product, or web application, improvements in user experience, improvements of page layouts,  and to improve scalability of  user interfaces across all the devices please connect with me.</p>
        <Button btnlink='contact' btnstyle='btn-primary' label='CONTACT' />
      </div>
    </div>
    </FadeInSection>
    </>
  );
}

export default Skills;