import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';
import Explist from './Explist';

const Expereinces = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="text-center my-20">
        <h2 className="text-red text-4xl md:text-5xl text-center my-10">Experiences with Employees</h2>
          <p className="px-10 md:px-20 mb-10">To my employers, thank you for your support, collaboration, and shared vision over the years.</p>
          <p className="px-10 md:px-20 mb-10">To all colleagues and friends thank you for supporting me and allowing me to evolve and reinvent myself in new learning, and for encouraging clients to trust in me and my work.</p>
          <p className="px-10 md:px-20 mb-10">Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business especially in design and development.</p>
          <Button btnlink='works' btnstyle='btn-primary' label='VIEW RECENT WORKS' />
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
        <h2 className="text-center"><strong><span className="text-red">For All</span> My <span className="text-yellow">Employers...</span> <i className="bi bi-balloon-heart"></i></strong></h2>
        <ul className="employer-list mt-10 mb-32">
          <Explist />
        </ul>
    </div>
    </FadeInSection>
    </>
  );
}

export default Expereinces;