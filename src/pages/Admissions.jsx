import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, AlertCircle, Download, Calendar, FileText,
  User, Mail, Phone, Send, Trophy, Globe, GraduationCap, Handshake,
  Heart, Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { admissionProcess, schools, universityInfo } from '../data/content';

const feeStructure = [
  { program: 'B.Des', annual: '₹80,000', total: '₹3,20,000', duration: '4 Years' },
  { program: 'B.Tech (Energy & Environment)', annual: '₹85,000', total: '₹3,40,000', duration: '4 Years' },
  { program: 'B.Tech (AIML)', annual: '₹90,000', total: '₹3,60,000', duration: '4 Years' },
  { program: 'B.Tech (Data Science)', annual: '₹90,000', total: '₹3,60,000', duration: '4 Years' },
  { program: 'BBA', annual: '₹60,000', total: '₹1,80,000', duration: '3 Years' },
  { program: 'MBA', annual: '₹1,20,000', total: '₹2,40,000', duration: '2 Years' },
  { program: 'Emergency Medicine', annual: '₹55,000', total: '₹1,10,000', duration: '2 Years' },
  { program: 'OT Assistant', annual: '₹50,000', total: '₹1,00,000', duration: '2 Years' },
  { program: 'Short Term Courses', annual: 'Varies', total: '₹15,000–₹50,000', duration: '3–12 Months' },
];

const scholarships = [
  { name: 'Merit Scholarship',              desc: 'Up to 50% fee waiver for students with 90%+ in 10+2',                                  Icon: Trophy },
  { name: 'Marathwada Empowerment Grant',   desc: 'Special scholarship for students from Latur, Osmanabad, Nanded districts',             Icon: Globe },
  { name: 'Girl Child Education Scholarship', desc: '25% fee waiver for female students in technical programs',                           Icon: GraduationCap },
  { name: 'Economically Weaker Section (EWS)', desc: 'Fee concession for EWS students as per government norms',                          Icon: Handshake },
  { name: 'Sports Excellence Award',         desc: 'Scholarships for state/national level sports achievers',                              Icon: Trophy },
  { name: 'Differently-Abled Support',       desc: 'Full fee waiver + special accommodation for differently-abled students',             Icon: Heart },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600 text-sm">Your enquiry has been received. Our admissions team will contact you within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-forest-DEFAULT hover:underline">Submit another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
          <input
            required
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
          <input
            required
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
        <input
          required
          type="email"
          placeholder="your.email@example.com"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Program of Interest *</label>
        <select
          required
          value={form.program}
          onChange={e => setForm({...form, program: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors bg-white"
        >
          <option value="">Select a program</option>
          {schools.flatMap(s => s.courses.map(c => (
            <option key={`${s.id}-${c.name}`} value={c.name}>{c.name} — {s.shortName}</option>
          )))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message / Questions</label>
        <textarea
          rows={3}
          placeholder="Any specific questions about admissions, eligibility, fees, etc."
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full btn-primary justify-center text-base py-3.5"
      >
        <Send size={18} />
        Submit Enquiry
      </button>
      <p className="text-xs text-gray-400 text-center">We respect your privacy. Your information will only be used for admission-related communication.</p>
    </form>
  );
}

export default function Admissions() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <PageHero
        title="Admissions 2025-26"
        subtitle="Begin your journey at Pasha Patel SkillTech University. Applications are open for all programs for the academic year 2025-26."
        breadcrumbs={[{ label: 'Admissions' }]}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#apply" className="btn-primary text-base px-8 py-3.5">
            Apply Online <ArrowRight size={18} />
          </a>
          <a href="#process" className="btn-secondary text-base px-8 py-3.5">
            Admission Process
          </a>
        </div>
      </PageHero>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="animate-on-scroll bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Admissions Open — Act Fast!</h3>
              <p className="text-amber-700 text-sm">Seats are limited across all programs. Early applicants may receive preference. Contact us for exact application deadlines.</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { event: 'Application Open', date: 'January 2025', icon: <FileText size={20} /> },
              { event: 'Entrance Test / Interview', date: 'March–April 2025', icon: <Calendar size={20} /> },
              { event: 'Merit List Declaration', date: 'April 2025', icon: <CheckCircle size={20} /> },
              { event: 'Classes Commence', date: 'July 2025', icon: <User size={20} /> },
            ].map((item, i) => (
              <div
                key={item.event}
                className="card p-5 text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-forest-DEFAULT">
                  {item.icon}
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{item.event}</div>
                <div className="text-xs text-gold-600 font-medium">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 gradient-section scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mb-4">How to Apply</h2>
            <p className="section-subtitle max-w-xl mx-auto">A simple, transparent, and student-friendly admission process in 6 steps.</p>
          </div>

          <div className="space-y-4">
            {admissionProcess.map((step, i) => (
              <div
                key={step.step}
                className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-forest-DEFAULT text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Scholarships & Financial Aid</h2>
            <p className="section-subtitle max-w-2xl mx-auto">PPSU is committed to making quality education accessible to all deserving students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((s, i) => (
              <div
                key={s.name}
                className="card p-6 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mb-4">
                  <s.Icon size={20} className="text-[#1a4a2e]" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="apply" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <div className="inline-block bg-forest-50 text-forest-DEFAULT text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                Get In Touch
              </div>
              <h2 className="section-title mb-6">Apply / Enquire Now</h2>
              <p className="section-subtitle mb-8">
                Have questions? Our admissions counsellors are ready to help you choose the right program and guide you through the application process.
              </p>
              <div className="space-y-5">
                {[
                  { Icon: Phone, label: 'Admissions Helpline', value: universityInfo.phone },
                  { Icon: Mail, label: 'Admissions Email', value: universityInfo.admissions },
                  { Icon: Calendar, label: 'Office Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center text-forest-DEFAULT flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">{label}</div>
                      <div className="text-sm font-semibold text-gray-800">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-forest-50 rounded-2xl border border-forest-100">
                <h3 className="font-semibold text-forest-DEFAULT mb-3 text-sm">Documents Required</h3>
                <ul className="space-y-2">
                  {[
                    '10th Mark Sheet & Certificate',
                    '12th Mark Sheet & Certificate',
                    'School / College Transfer Certificate',
                    'Aadhaar Card / ID Proof',
                    'Passport-size Photographs (6)',
                    'Caste Certificate (if applicable)',
                    'Income Certificate (for scholarships)',
                  ].map(doc => (
                    <li key={doc} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-forest-DEFAULT flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Admissions Enquiry Form</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
