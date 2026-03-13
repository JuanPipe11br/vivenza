import React from 'react';
import { Typography } from '../components/Typography';
import { Card } from '../components/Card';

export const ProjectsPortfolio: React.FC = () => {
  const projects = [
    {
      number: '01',
      title: 'The Glass Pavilion.',
      description: 'Controlling intense western light required a dual-layer approach: sheer linen for daytime diffusion and heavy blackout wool for the evening.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
      alignment: 'left',
    },
    {
      number: '02',
      title: 'Historic Brownstone.',
      description: 'Preserving the heritage moldings meant installing custom-milled tracks that vanished into the ceiling architecture, using rich velvet drops.',
      image: 'https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=2670&auto=format&fit=crop',
      alignment: 'right',
    },
    {
      number: '03',
      title: 'Loft Tribeca.',
      description: 'Industrial bones met refined textiles. We introduced silk drapery panels to soften the exposed brick and concrete throughout.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
      alignment: 'left',
    },
    {
      number: '04',
      title: 'Hamptons Estate.',
      description: 'Coastal light demanded a nuanced approach. We used organic cotton blends and sea-grass textures to create effortless, breezy elegance.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop',
      alignment: 'right',
    },
    {
      number: '05',
      title: 'Penthouse Views.',
      description: 'Floor-to-ceiling windows required motorized shading systems hidden in custom millwork, paired with luxurious silk linings.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
      alignment: 'left',
    },
  ];

  return (
    <div className="bg-brand-surface min-h-screen pt-24 pb-32">
       
       <div className="px-8 md:px-16 max-w-7xl mx-auto mb-32">
          <Typography variant="label" className="text-brand-primary block mb-6">Portfolio</Typography>
          <Typography variant="display" className="text-brand-on-surface max-w-2xl mb-12">
            Selected Work & Case Studies.
          </Typography>
          <Typography variant="body" className="text-brand-on-surface-variant max-w-md border-l border-brand-outline-variant/30 pl-6">
            A look into our approach. We treat every window as an architectural feature, ensuring the textiles interact perfectly with the structural light.
          </Typography>
       </div>

       {projects.map((project, index) => (
         <section 
           key={index} 
           className={`py-32 px-8 md:px-16 ${index % 2 === 0 ? 'bg-brand-surface-container-low' : 'bg-brand-surface'}`}
         >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
               {project.alignment === 'left' ? (
                 <>
                    <div className="md:col-span-1" />
                    <Card className="md:col-span-6 aspect-square shadow-ambient relative group" elevated>
                       <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
                       />
                    </Card>
                    <div className="md:col-span-4 flex flex-col justify-center">
                       <Typography variant="label" className="text-brand-outline-variant mb-4 hidden md:block">{project.number}</Typography>
                       <Typography variant="headline" className="text-brand-on-surface mb-6">{project.title}</Typography>
                       <Typography variant="body" className="text-brand-on-surface-variant mb-8">
                          {project.description}
                       </Typography>
                       <Typography variant="label" className="text-brand-primary cursor-pointer hover:underline underline-offset-4">Read Full Study</Typography>
                    </div>
                 </>
               ) : (
                 <>
                    <div className="md:col-span-1 hidden md:block" />
                    <div className="md:col-span-4 flex flex-col justify-center order-2 md:order-1 lg:ml-12">
                       <Typography variant="label" className="text-brand-outline-variant mb-4 hidden md:block">{project.number}</Typography>
                       <Typography variant="headline" className="text-brand-on-surface mb-6">{project.title}</Typography>
                       <Typography variant="body" className="text-brand-on-surface-variant mb-8">
                          {project.description}
                       </Typography>
                       <Typography variant="label" className="text-brand-primary cursor-pointer hover:underline underline-offset-4">Read Full Study</Typography>
                    </div>
                    <Card className="md:col-span-6 md:col-start-7 aspect-[4/3] shadow-ambient relative order-1 md:order-2 group" elevated>
                       <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" 
                       />
                    </Card>
                 </>
               )}
            </div>
         </section>
       ))}

    </div>
  );
};
