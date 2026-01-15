import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Work() {
  const mainRef = useRef(null);
  const projects = [
    {
      id: 1,
      image: "/images/projects/image (1).png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione laudantium neque praesentium enim corporis molestiae id, sint, dignissimos, cum dicta! Blanditiis, mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam modi accusantium incidunt. Non deleniti perspiciatis accusantium inventore omnis blanditiis, dolor cupiditate, quas obcaecati, laudantium nihil provident. Quas unde veniam temporibus facilis doloribus, illum ratione."
    },
    {
      id: 2,
      image: "/images/projects/image (2).png",
      description: "Aliquam ratione laudantium neque praesentium enim corporis molestiae id, sint, dignissimos, cum dicta! Blanditiis, mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam modi accusantium incidunt. Non deleniti perspiciatis accusantium inventore omnis blanditiis, dolor cupiditate, quas obcaecati, laudantium nihil provident."
    },
    {
      id: 3,
      image: "/images/projects/image (3).png",
      description: "Inventore omnis blanditiis, dolor cupiditate, quas obcaecati, laudantium nihil provident. Quas unde veniam temporibus facilis doloribus, illum ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione laudantium neque praesentium enim corporis molestiae id."
    },
    {
      id: 4,
      image: "/images/projects/image (4).png",
      description: "Blanditiis, mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam modi accusantium incidunt. Non deleniti perspiciatis accusantium inventore omnis blanditiis, dolor cupiditate, quas obcaecati, laudantium nihil provident. Quas unde veniam temporibus facilis doloribus, illum ratione."
    }
  ];

  useGSAP(() => {
    const projectCard = document.querySelectorAll('.projectCard');

    projectCard.forEach((card, index) => {
      if (index < projectCard.length) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 19%",
          endTrigger: projectCard[projectCard.length - 1],
          end: "top 20%",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        })
      }
    });

  })

  return (
    <div className='w-full'>
      <div ref={mainRef} className='w-full '>
        <h1 className='text-[17vw] font-[font5] uppercase lg:pt-24 lg:px-5 pt-24 flex items-center justify-center lg:items-start md:items-start md:justify-start lg:justify-start    lg:leading-[15vw] h-screen  '>WOrk</h1>
      </div>
      <div className="images w-full flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`projectCard flex flex-col mb-4 ${index % 2 !== 0 ? 'lg:flex-row-reverse md:flex-row-reverse' : 'lg:flex-row md:flex-row'
              } justify-between gap-10 px-5 lg:pt-22 pt-12 bg-black text-white dark:bg-white dark:text-black rounded-t-md lg:h-[85vh] md:h-[78vh] h-[80vh]`}
          >
            <div className='lg:w-1/2 md:w-1/2 lg:h-[60vh] md:h-[45vh] h-[30vh] overflow-hidden rounded-lg'>
              <img className='w-full h-full object-cover' src={project.image} alt={`Project ${project.id}`} />
            </div>
            <div className='lg:w-1/2 md:w-1/2 flex items-center justify-center'>
              <p className='font-[font1] text-sm lg:text-[1.5vw] md:text-[2vw] text-center lg:px-10'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work