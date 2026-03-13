import React from 'react';
import { Typography } from '../components/Typography';
import { Card } from '../components/Card';

export const ProductCatalog: React.FC = () => {
  const products = [
    { title: "Linen Voile - Alabaster", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2600&auto=format&fit=crop" },
    { title: "Heavy Silk - Obsidian", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2532&auto=format&fit=crop" },
    { title: "Woven Wool - Slate", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop" },
    { title: "Brushed Cotton - Sand", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop" },
    { title: "Velvet - Deep Forest", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2592&auto=format&fit=crop" },
    { title: "Sheer Organza - Pearl", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-brand-surface min-h-screen pt-24 pb-32 px-8 md:px-16">
       <div className="max-w-7xl mx-auto">
         
         <div className="mb-24 md:flex justify-between items-end border-b border-brand-outline-variant/30 pb-12">
            <div>
               <Typography variant="label" className="text-brand-primary block mb-6">Catalog</Typography>
               <Typography variant="display" className="text-brand-on-surface max-w-md">The Selected Textiles.</Typography>
            </div>
            <Typography variant="body" className="text-brand-on-surface-variant max-w-sm mt-8 md:mt-0">
               A meticulously curated collection of fabrics, chosen for their light-filtering properties, weight, and timeless elegance.
            </Typography>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {products.map((product, idx) => (
               <div key={idx} className="group cursor-pointer">
                  {/* Paper-on-Stone layering via Card */}
                  <Card className="aspect-[4/5] relative shadow-ambient mb-8 overflow-hidden bg-brand-surface-container-low" elevated>
                     <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-brand-surface-container-lowest/0 transition-colors duration-500 group-hover:bg-brand-surface-container-lowest/10"></div>
                  </Card>
                  <div className="flex justify-between items-baseline border-b border-brand-outline-variant/30 pb-4">
                     <Typography variant="headline" className="text-brand-on-surface text-xl">{product.title}</Typography>
                     <Typography variant="label" className="text-brand-outline">Explore</Typography>
                  </div>
               </div>
            ))}
         </div>

       </div>
    </div>
  );
};
