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
        <h1 className="text-4xl"><span className="text-black">I'm </span><span className="text-red">Peera Shaik</span></h1>
        <h2 className="text-4xl text-gradiant px-0 md:px-28">My work is a blend of Creative Design Thinking, Problem-Solving, and a relentless focus on the User Centered Interfaces</h2>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="banners overflow-hidden flex flex-wrap md:flex-nowrap gap-3.5 mt-16 mb-20">
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-blue">User</span><br/><span className="text-white">Centered</span></h2>
          <h3>User Research | User Journey | User Flow</h3>
        </div>
      </div>
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-red">User</span><br/><span className="text-white">Interface</span></h2>
          <h3>Layout | Standards | Implementation</h3>
        </div>
      </div>
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-green">User</span><br/><span className="text-white">Accessability</span></h2>
          <h3>Brand | Color | Typography | Vision</h3>
        </div>
      </div> 
      <div className="color-bg black flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
          <h2><span className="text-yellow">User</span><br/><span className="text-white">Interaction</span></h2>
          <h3>Intercation | Micro Vision | DOM Manipulation</h3>          
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
            <h4>VISUAL DESIGN</h4>
            <p>Strong visual design skills with expertise in creating user‑friendly, aesthetically consistent interfaces.</p>
          </div>
          <div className="card text-center my-2 p-10">
            <h4>INTERACTION DESIGN</h4>
            <p>Being familiar with best practices for interaction design between a user and the product significantly shapes the user experience.</p>
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
        <h2 className="text-3xl md:text-5xl text-center text-red mb-10">Tools & Technologies</h2>
          <ul className="tools">
            <li><i class="cbp-ig-icon devicon-html5-plain"></i><h3>Html5</h3></li>
            <li><i class="cbp-ig-icon devicon-css3-plain"></i><h3>Css3</h3></li>
            <li><i class="cbp-ig-icon devicon-less-plain-wordmark"></i><h3>Less</h3></li>
            <li><i class="cbp-ig-icon devicon-sass-original"></i><h3>Sass</h3></li>
            <li><i class="cbp-ig-icon devicon-tailwindcss-original"></i><h3>Tailwind</h3></li>
            <li><i class="cbp-ig-icon devicon-postcss-original"></i><h3>PostCSS</h3></li>
            <li><i class="cbp-ig-icon devicon-devicon-plain"></i><h3>DevIcons</h3></li>
            <li><i class="cbp-ig-icon devicon-bootstrap-plain"></i><h3>Bootstrap</h3></li>
            <li><i class="cbp-ig-icon devicon-javascript-plain"></i><h3>JavaScript</h3></li>
            <li><i class="cbp-ig-icon devicon-jquery-plain"></i><h3>jQuery</h3></li>
            <li><i class="cbp-ig-icon devicon-knockout-plain-wordmark"></i><h3>Knockout</h3></li>
            <li><i class="cbp-ig-icon devicon-react-original"></i><h3>React Js</h3></li>
            <li><i class="cbp-ig-icon devicon-figma-plain"></i><h3>Figma</h3></li>
            <li><i class="cbp-ig-icon devicon-xd-plain"></i><h3>Adobe XD</h3></li>
            <li><i class="cbp-ig-icon devicon-sketch-plain"></i><h3>Sketch</h3></li>
            <li><i class="cbp-ig-icon devicon-photoshop-plain"></i><h3>Photoshop</h3></li>
            <li><i class="cbp-ig-icon devicon-illustrator-plain"></i><h3>Illustrator</h3></li>
            <li><i class="cbp-ig-icon devicon-php-plain"></i><h3>Php</h3></li>
            <li><i class="cbp-ig-icon devicon-mysql-original"></i><h3>MySql</h3></li>
            <li><i class="cbp-ig-icon devicon-wordpress-plain"></i><h3>WordPress</h3></li>
            <li><i class="cbp-ig-icon devicon-magento-original"></i><h3>Magento</h3></li>
            <li><i class="bi bi-shop"></i><h3>Shopify</h3></li>
            <li><i class="cbp-ig-icon devicon-webflow-original"></i><h3>Webflow</h3></li>
            <li><i class="cbp-ig-icon devicon-dotnetcore-plain"></i><h3>.Net</h3></li>
            <li><i class="cbp-ig-icon devicon-drupal-plain"></i><h3>Drupal</h3></li>
            <li><i class="cbp-ig-icon devicon-jira-plain"></i><h3>Jira</h3></li>
            <li><i class="cbp-ig-icon devicon-confluence-plain"></i><h3>Confluence</h3></li>
            <li><i class="cbp-ig-icon devicon-cpanel-original"></i><h3>CPanel</h3></li>
            <li><i class="cbp-ig-icon devicon-filezilla-plain"></i><h3>Filezilla</h3></li>
            <li><i class="cbp-ig-icon devicon-jenkins-line"></i><h3>Jenkins</h3></li>
            <li><i class="cbp-ig-icon devicon-git-plain"></i><h3>Git</h3></li>
            <li><i class="cbp-ig-icon devicon-github-original"></i><h3>GitHub</h3></li>
            <li><i class="cbp-ig-icon devicon-bitbucket-original"></i><h3>Bitbucket</h3></li>
            <li><i class="cbp-ig-icon devicon-linux-plain"></i><h3>Linux</h3></li>
            <li><i class="cbp-ig-icon devicon-docker-plain"></i><h3>Docker</h3></li>
          </ul>
      </div>
    </div>
    </FadeInSection>
    </>
  );
}

export default Home;