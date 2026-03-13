import React from 'react';
import { Typography } from '../components/Typography';

export const AboutUs: React.FC = () => {
  return (
    <div className="bg-brand-surface min-h-[calc(100vh-88px)]">
       
       <section className="pt-24 pb-32 px-8 md:px-16 border-b border-brand-outline-variant/30">
          <div className="max-w-4xl mx-auto text-center">
             <Typography variant="label" className="text-brand-primary block mb-8">Studio Vivenza</Typography>
             <Typography variant="display" className="text-brand-on-surface mb-12">
               The Architecture of Light.
             </Typography>
             <Typography variant="body" className="text-brand-on-surface-variant max-w-2xl mx-auto text-lg leading-loose">
               We believe that textiles are not merely decorative elements but integral components of a room's architecture. Vivenza was founded on the principle that the manipulation of natural light through high-quality fabrics is the final, essential step in interior design.
             </Typography>
          </div>
       </section>

       <section className="py-32 px-8 md:px-16 bg-brand-surface-container-low">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
             <div className="flex flex-col justify-center">
                <Typography variant="headline" className="text-brand-on-surface mb-8">
                  A Curated Approach.
                </Typography>
                <div className="flex flex-col gap-6 text-brand-on-surface-variant font-functional leading-readable text-sm">
                   <p>
                     Every project presents a unique dialogue between the structure and its environment. Our process begins not with fabric swatches, but with an analysis of solar orientation, ceiling heights, and historical context.
                   </p>
                   <p>
                     We collaborate with European mills that honor centuries-old weaving techniques, bringing forward materials that possess both structural integrity and atmospheric softness.
                   </p>
                   <p>
                     From the initial consultation to the final precision installation, Studio Vivenza operates quietly, ensuring the end result looks as though it was always meant to be there.
                   </p>
                </div>
             </div>
             <div className="relative aspect-[3/4] shadow-ambient bg-brand-surface">
                <img 
                   src="https://images.unsplash.com/photo-1518136247453-74e7b5265980?q=80&w=2693&auto=format&fit=crop" 
                   alt="Textile weaving detail"
                   className="w-full h-full object-cover grayscale opacity-90 transition-opacity duration-[3s] hover:grayscale-0"
                />
             </div>
          </div>
       </section>

    </div>
  );
};
