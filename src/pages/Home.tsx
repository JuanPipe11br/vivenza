import React from 'react';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FabricCarousel } from '../components/FabricCarousel';
import { Link } from 'react-router-dom';
import heroHome from '../assets/hero-home.jpeg';
import philosophyImg from '../assets/philosophy.jpg';

export const Home: React.FC = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2532&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop'
  ];

  const services = [
    { title: 'Interior Design', description: 'Full-service residential and commercial interior design' },
    { title: 'Curated Furnishings', description: 'Hand-picked furniture and decor from premium brands' },
    { title: 'Space Planning', description: 'Optimal layout design for functionality and flow' },
    { title: 'Material Selection', description: 'Premium fabrics, textures, and finishes' },
  ];

  const testimonials = [
    { quote: 'Vivenza transformed our space into something beyond our imagination.', author: 'Sarah M., Manhattan' },
    { quote: 'The attention to detail and tonal harmony is unparalleled.', author: 'James L., Brooklyn' },
    { quote: 'A truly elevated design experience from start to finish.', author: 'Elena R., Hamptons' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-88px)] pt-16 pb-16 px-8 md:px-16 flex flex-col justify-center bg-brand-surface border-b border-brand-surface-container-low transition-colors duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-1" />
          <div className="lg:col-span-5 z-10 flex flex-col gap-12">
            <Typography variant="display" className="text-brand-on-surface mt-12 md:mt-0 max-w-lg lg:-ml-12">
              The Curated Lens.
            </Typography>
            <Typography variant="body" className="text-brand-on-surface-variant max-w-sm ml-4 lg:ml-12 border-l border-brand-outline-variant/30 pl-6">
              Transforming your living spaces into a high-end editorial experience. We do not build catalogs; we design environments with tonal depth and profound texture.
            </Typography>
            <div className="ml-4 lg:ml-12 mt-4">
               <Link to="/quote">
                 <Button variant="primary">Request Consultation</Button>
               </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:mt-32 relative group">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto lg:-mr-12 xl:-mr-24 object-cover overflow-hidden bg-brand-surface-container-low">
                 <img 
                   src={heroHome}
                  alt="Elegant interior living space" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
             </div>
             <div className="absolute -bottom-12 -left-12 lg:-left-24 p-8 glass-panel shadow-ambient hidden md:block max-w-[280px]">
                <Typography variant="label" className="text-brand-outline text-[10px] mb-2 block">Texture Study 01</Typography>
                <Typography variant="body" className="text-brand-on-surface text-sm">Linen and light interaction across the western facade.</Typography>
             </div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-scale-24 px-8 md:px-16 bg-brand-surface-container-low relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
               <Typography variant="label" className="text-brand-primary mb-6 block">Philosophy</Typography>
               <Typography variant="headline" className="text-brand-on-surface mb-8">
                 Intentional Asymmetry.
               </Typography>
               <Typography variant="body" className="text-brand-on-surface-variant mb-12">
                 The interface must feel like a series of layered, high-quality paper stocks, shifting subtly in texture and tone rather than being divided by harsh lines. We abandon the flat web for atmospheric depth.
               </Typography>
               <Link to="/about">
                 <Button variant="secondary" className="w-fit">View Our Process</Button>
               </Link>
            </div>
            <Card className="order-1 lg:order-2 aspect-square relative shadow-ambient group" elevated>
               <img 
                 src={philosophyImg}
                 alt="Architectural details" 
                 className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-brand-surface-container-lowest/10"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fabric Carousel Full Bleed */}
      <section className="bg-brand-surface">
         <div className="py-24 text-center">
             <Typography variant="headline" className="text-brand-on-surface">The Collection</Typography>
         </div>
         <FabricCarousel images={carouselImages} />
         <div className="py-12 flex justify-center">
            <Link to="/catalog">
               <Button variant="secondary">View Full Catalog</Button>
            </Link>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 md:px-16 bg-brand-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <Typography variant="label" className="text-brand-primary mb-6 block">What We Do</Typography>
          <Typography variant="headline" className="text-brand-on-surface mb-16">Our Services</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-brand-surface border border-brand-outline-variant/20 hover:border-brand-primary/50 transition-colors">
                <Typography variant="headline" className="text-brand-on-surface mb-4 text-2xl">{service.title}</Typography>
                <Typography variant="body" className="text-brand-on-surface-variant">{service.description}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 md:px-16 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <Typography variant="label" className="text-brand-primary mb-6 block">Client Stories</Typography>
          <Typography variant="headline" className="text-brand-on-surface mb-16">Testimonials</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-brand-surface-container-low">
                <Typography variant="body" className="text-brand-on-surface italic mb-6">"{testimonial.quote}"</Typography>
                <Typography variant="label" className="text-brand-primary">— {testimonial.author}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
