import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: 'CCTV & Surveillance',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Contact Us | C&G Infotech';
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        serviceRequired: 'CCTV & Surveillance',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-4 space-y-3">
      {/* HERO BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <div className="max-w-3xl space-y-4">
            <span className="cg-pill-badge">Connect With Engineers</span>
            <h1 className="text-hero-title">
              Let's Talk About Your <br />
              Technology Needs.
            </h1>
            <p className="text-[#66635C] text-base md:text-lg leading-relaxed pt-2">
              Have questions about surveillance cameras, structured networking, hardware supply, AMC contracts, or custom software? Connect directly with our team.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & DETAILS BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* LEFT CONTACT CARDS */}
              <div className="lg:col-span-5 space-y-4">
                <div className="cg-white-card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDEEE9] text-[#E65100] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#181715]">Office Address</h4>
                    <p className="text-sm font-semibold text-[#181715] mt-1">{COMPANY_INFO.address.full}</p>
                  </div>
                </div>

                <div className="cg-white-card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDEEE9] text-[#E65100] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#181715]">Direct Phone Hotline</h4>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-base font-bold text-[#E65100] mt-1 inline-block">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="cg-white-card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDEEE9] text-[#E65100] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#181715]">Official E-mail</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-[#181715] hover:text-[#E65100] mt-1 inline-block">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="lg:col-span-7">
                <div className="cg-white-card p-6 md:p-10">
                  <h3 className="text-2xl font-bold text-[#181715] mb-6">Send an Inquiry</h3>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Thank you! Your message has been received. Our engineering team will contact you shortly.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Ltd"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#181715] mb-1">Service Required *</label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100] bg-white cursor-pointer"
                      >
                        <option value="CCTV & Surveillance">CCTV & Surveillance</option>
                        <option value="Networking Solutions">Networking Solutions</option>
                        <option value="IT Infrastructure">IT Infrastructure & Server Setup</option>
                        <option value="Cybersecurity">Enterprise Cybersecurity</option>
                        <option value="Computers & Laptops">Computers & Laptops Hardware Supply</option>
                        <option value="Attendance Software">Attendance Software</option>
                        <option value="Visitor Management">Visitor Management Software</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#181715] mb-1">Message *</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your site requirements or inquiry..."
                        className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100] resize-none"
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-orange w-full justify-center"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
};
