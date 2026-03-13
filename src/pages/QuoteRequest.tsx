import React, { useState } from 'react';
import { Typography } from '../components/Typography';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  windows: string;
  requirements: string;
}

export const QuoteRequest: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    propertyType: '', windows: '', requirements: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@studiovivenza.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Phone': formData.phone,
          'Property Type': formData.propertyType,
          'Number of Windows': formData.windows,
          'Detailed Requirements': formData.requirements,
          'Form Type': 'Quote Request'
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', propertyType: '', windows: '', requirements: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-brand-surface min-h-[calc(100vh-88px)] flex flex-col justify-center py-24 px-8 md:px-16 relative overflow-hidden">
       
       {/* Background decorative element */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-surface-container-low/50 -z-10 twist opacity-50 hidden lg:block" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>

       <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
             <Typography variant="label" className="text-brand-primary">Consultation</Typography>
             <Typography variant="display" className="text-brand-on-surface">Let's discuss your space.</Typography>
             <Typography variant="body" className="text-brand-on-surface-variant">
                Every project begins with a conversation. Share the details of your architectural space, and our design team will construct a tailored approach to your window treatments.
             </Typography>
          </div>

           <Card className="lg:col-span-7 p-8 md:p-16 shadow-ambient w-full" elevated>
              {isSubmitted && (
                <div className="mb-8 p-4 bg-brand-primary/10 border border-brand-primary/30 rounded">
                  <Typography variant="body" className="text-brand-primary">Thank you! Your quote request has been sent. We'll be in touch soon.</Typography>
                </div>
              )}
              <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <Input label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                   <Input label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                 </div>
                 <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                 <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                 
                 <div className="pt-4 border-t border-brand-outline-variant/30 mt-4">
                    <Typography variant="label" className="text-brand-on-surface-variant mb-6 block">Project Scope</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <Input label="Property Type (e.g., Residential)" type="text" name="propertyType" value={formData.propertyType} onChange={handleChange} />
                       <Input label="Number of Windows" type="number" name="windows" value={formData.windows} onChange={handleChange} />
                    </div>
                 </div>

                 <div className="relative pt-5 mt-4">
                    <textarea 
                       name="requirements"
                       value={formData.requirements}
                       onChange={handleChange}
                       className="block w-full bg-transparent border-0 border-b border-brand-outline-variant py-2.5 text-brand-on-surface focus:outline-none focus:ring-0 focus:border-brand-primary transition-colors duration-300 peer resize-none"
                       rows={4}
                       placeholder=" "
                       id="project-details"
                    ></textarea>
                    <label 
                       htmlFor="project-details"
                       className="absolute text-brand-on-surface-variant font-functional text-xs tracking-blueprint uppercase duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-primary cursor-text"
                    >
                       Detailed Requirements
                    </label>
                 </div>

                 <div className="mt-8 flex justify-end">
                    <Button variant="primary" type="submit" className="w-full md:w-auto">Submit Request</Button>
                 </div>
              </form>
           </Card>
       </div>
    </div>
  );
};
