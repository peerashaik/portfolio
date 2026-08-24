import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';
import { projects } from '../worksData';

const Works = () => {
  return (
    <>
    <main>
    <FadeInSection>
    <div className="container">
      <div className="text-center my-20">
        <h2 className="text-red text-4xl md:text-5xl text-center my-10">Works &amp; Success</h2>
        <p className="px-10">Having had a great successful journey so far and I extremely have gratitude for all my employers and their clients. Here are some best samples that I was involved with.</p>
        <p className="px-10 mt-5">Keeping clients informed regular updates and transparent communication help build trust and prevent misunderstandings. Be open to feedback and willing to make iterates. Flexibility shows that you value their input and are committed to delivering the best possible outcome.</p>
      </div>
    </div>
    </FadeInSection>

    <div className="container">
      <div className="mt-10 mb-20">
        <div className="my-work-list flex flex-wrap justify-evenly gap-12">
          
          {projects.map(work => (
            <div className="item mb-20 md:mb-0 w-full md:w-5/12" key={work.id}>
              <div className="img-wrapper">
                <i className="logo"></i>
                <a href={work.url} target="_blank" rel="noreferrer">
                  <img src={work.image} alt={work.name} title={work.name} />
                </a>
              </div>
              <h2 className="text-white mt-10 mb-2 relative">{work.title}</h2>
              <p className="mb-5 text-sm">{work.theme}</p>
              <span className="bg-gray-800 text-gray-400">UI Design</span> <span className="inline bg-gray-800 text-gray-400">UI Development</span> <span className="inline bg-gray-800 text-gray-400">{work.framework}</span>
            </div>
          ))
          }
          
        </div>
      </div>
    </div>
    </main>
    </>
  );
}

export default Works;