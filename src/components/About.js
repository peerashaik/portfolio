import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';

const About = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="text-center my-20">
        <h2 className="relative text-4xl md:text-5xl text-center my-10"><span className="inline-block text-red">Design</span> &amp; Development</h2>
        <div className="px-10">
          <p className="mb-5">Crazy user interface designer and developer, and I am not just pushing pixels which crafting experiences that resonate globally. Being stack of HTML5, CSS3, ReactJS, Magento2, and beyond, my creativity is clearly fueled by a mastery of both design and code.</p>
          <p>Develop highly interactive Frontend User Interfaces for your web and mobile applications.</p>
          <p className="mb-10">I have also become a highly recommended UI designer known to push the boundaries of pixel perfect designs with my keen eyes for details.</p>
          <Button className="nav-link link" btnlink='experience' btnstyle='btn-primary' label='MY EXPERIENCES' />
        </div>
      </div>
    </div>
    </FadeInSection>

    <div className="hero-banner about">
      <div className="headings flex justify-center items-center flex-col absolute z-10 w-full h-full">
        <h2 className="text-center">HAVE A PROJECT IN MIND?<br /><span className="inline text-red ms-2">LET'S DISCUSS!</span> ME!</h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>

    <FadeInSection>
    <div className="color-bg red py-14 text-center">
      <div className="container">
        <h3 className="uppercase text-white text-3xl md:text-5xl my-10">An Enthusiastic</h3>
        <p className="text-white px-10 mb-10">I am an enthusiastic IT industry professional with 21 years of hands-on experience across various roles. I am committed to shaping exceptional user experiences for digital products. My multifaceted background as a UI Designer, Web Developer, and Adobe Magento2 Commerce Frontend Developer has equipped me with a unique blend of creativity, technical acumen, and leadership skills.</p>
        <Button btnlink='skills' btnstyle='btn-black' label='ABOUT MY SKILLS' />
      </div>
      <div className="slant black"></div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="my-28">
    <div className="container">
      <div className="text-center">
        <h2 className="relative text-4xl md:text-5xl text-center mb-10"><strong>Find <span className="inline-block text-red">Me!</span></strong> <i className="bi bi-bar-chart-fill"></i></h2>
        <p className="px-10 mb-10">It’s great expereince so far! Passionate for web design and development, I always enjoy challenges that both inspire and relax me!</p>
      </div>
      <div className="key-skills px-10">
        <ul>
          <li><i className="bi bi-record-circle-fill"></i> Playing chess is a fantastic to spend my free time! It’s not only enjoyable but also great for sharpening our strategic thinking and problem-solving skills.</li>
          <li><i className="bi bi-record-circle-fill"></i> Playing cricket is also fantastic to spend my free time! It’s not only fun but also a great way to stay active and socialize. </li>
          <li><i className="bi bi-record-circle-fill"></i> Family outings during vacations are a wonderful way to create lasting memories and bond with loved ones.</li>
          <li><i className="bi bi-record-circle-fill"></i> Truly heartwarming to hear! Caring for my parents is a wonderful and fulfilling way to show my love and appreciation for all they’ve done. And It's been a lesson for my kids to take care of me in the future!</li>
          <li><i className="bi bi-record-circle-fill"></i> My daily activity! Taking care of my health and incorporating exercise into my routine is essential for overall well-being. Of course it depends on your strength what things you can do, just do!</li>
        </ul>
      </div>
      <div className="mt-16 text-center">
        <Button btnlink='contact' btnstyle='btn-primary' label='CONTACT' />
      </div>
    </div>
    </div>
    </FadeInSection>
    </>
  );
}

export default About;