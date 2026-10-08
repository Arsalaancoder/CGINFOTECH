import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/company';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';

export const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    solutionCategory: 'CCTV Surveillance & Security',
    projectDescription: '',
    preferredContact: 'Phone Call',
    estimatedTimeline: 'Immediate (1-2 Weeks)'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Get A Custom Quote | C&G Infotech';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="py-4 space-y-3">
      {/* HERO BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <div className="max-w-3xl space-y-4">
            <span className="cg-pill-badge">Commercial Proposal</span>
            <h1 className="text-hero-title">
              Request A Customized <br />
              Project Quote.
            </h1>
            <p className="text-[#66635C] text-base md:text-lg leading-relaxed pt-2">
              Fill out your project parameters below to receive an itemized proposal for CCTV, networking, hardware procurement, or custom software.
            </p>
          </div>
        </div>
      </section>

      {/* FORM BLOCK */}
      <section className="cg-master-canvas">
        <div className="cg-section-block">
          <FadeUp>
            <div className="max-w-3xl mx-auto">
              <div className="cg-white-card p-6 sm:p-10 md:p-12">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#FDEEE9] text-[#E65100] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#181715]">
                      Quote Request Received!
                    </h2>
                    <p className="text-sm text-[#66635C] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#181715]">{formData.name}</strong>. Our senior network and security engineers are evaluating your specifications and will send an itemized commercial proposal shortly.
                    </p>
                    <div className="pt-4">
                      <Link to="/" className="btn-primary-orange">
                        <span>Return to Homepage</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-black/10 pb-4">
                      <h3 className="text-lg font-bold text-[#181715]">1. Contact Information</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Company Pvt Ltd"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100]"
                        />
                      </div>
                    </div>

                    <div className="border-b border-black/10 pb-4 pt-2">
                      <h3 className="text-lg font-bold text-[#181715]">2. Scope & Timeline</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Solution Category *</label>
                        <select
                          value={formData.solutionCategory}
                          onChange={(e) => setFormData({ ...formData, solutionCategory: e.target.value })}
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100] bg-white cursor-pointer"
                        >
                          <option value="CCTV Surveillance & Security">CCTV Surveillance & Security</option>
                          <option value="Networking & Fiber Cabling">Networking & Fiber Cabling</option>
                          <option value="Server & IT Hardware Procurement">Server & IT Hardware Supply</option>
                          <option value="Enterprise Cybersecurity">Enterprise Cybersecurity</option>
                          <option value="Visitor / Attendance Software">Visitor / Attendance Software</option>
                          <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#181715] mb-1">Estimated Timeline</label>
                        <select
                          value={formData.estimatedTimeline}
                          onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                          className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100] bg-white cursor-pointer"
                        >
                          <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="Planning Phase">Planning Phase</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#181715] mb-1">Project Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Specify site floor count, camera quantity, rack requirements or software features..."
                        className="w-full p-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:border-[#E65100] resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary-orange w-full justify-center">
                      <span>Submit Quote Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
};
