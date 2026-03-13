import React, { useState } from 'react';
import { Typography } from '../components/Typography';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  return (
    <div className="bg-brand-surface min-h-[calc(100vh-88px)] pt-24 pb-32">
       
       <div className="max-w-7xl mx-auto px-8 md:px-16">
          <Typography variant="display" className="text-brand-on-surface mb-24 border-b border-brand-outline-variant/30 pb-12">
            Connect.
          </Typography>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
             
             {/* Contact Details */}
             <div className="lg:col-span-4 flex flex-col gap-16">
                <div>
                   <Typography variant="label" className="text-brand-primary block mb-6">General Inquiries</Typography>
                   <Typography variant="body" className="text-brand-on-surface-variant block">hello@studiovivenza.com</Typography>
                   <Typography variant="body" className="text-brand-on-surface-variant block">+57 318 219 9984</Typography>
                </div>

                <div>
                   <Typography variant="label" className="text-brand-primary block mb-6">Studio Location</Typography>
                   <Typography variant="body" className="text-brand-on-surface-variant block leading-loose">
                      124 West 24th Street<br/>
                      Floor 6, Suite B<br/>
                      New York, NY 10011
                   </Typography>
                   <Typography variant="label" className="text-brand-outline mt-4 block">By Appointment Only</Typography>
                </div>

                <div>
                   <Typography variant="label" className="text-brand-primary block mb-6">Press</Typography>
                   <Typography variant="body" className="text-brand-on-surface-variant block">press@studiovivenza.com</Typography>
                </div>
             </div>

              {/* Simple Form */}
              <div className="lg:col-span-8 bg-brand-surface-container-lowest p-8 md:p-16 shadow-ambient">
                 <Typography variant="headline" className="text-brand-on-surface mb-12">Reach Out.</Typography>
                 {isSubmitted && (
                   <div className="mb-8 p-4 bg-brand-primary/10 border border-brand-primary/30 rounded">
                     <Typography variant="body" className="text-brand-primary">Thank you! Your message has been sent. We'll be in touch soon.</Typography>
                   </div>
                 )}
                 <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <Input 
                          label="Name" 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                        {errors.name && <Typography variant="label" className="text-red-500 mt-1">{errors.name}</Typography>}
                      </div>
                      <div>
                        <Input 
                          label="Email" 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                        {errors.email && <Typography variant="label" className="text-red-500 mt-1">{errors.email}</Typography>}
                      </div>
                    </div>
                    
                    <div className="relative pt-5 mt-4">
                       <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="block w-full bg-transparent border-0 border-b border-brand-outline-variant py-2.5 text-brand-on-surface focus:outline-none focus:ring-0 focus:border-brand-primary transition-colors duration-300 peer resize-none"
                          rows={4}
                          placeholder=" "
                          id="message"
                          required
                       ></textarea>
                       <label 
                          htmlFor="message"
                          className="absolute text-brand-on-surface-variant font-functional text-xs tracking-blueprint uppercase duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-primary cursor-text"
                       >
                          Message
                       </label>
                       {errors.message && <Typography variant="label" className="text-red-500 mt-1">{errors.message}</Typography>}
                    </div>

                    <div className="mt-8">
                       <Button variant="primary" type="submit">Send Message</Button>
                    </div>
                 </form>
              </div>
          </div>
       </div>

    </div>
  );
};
