import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Car, Train, Plane } from 'lucide-react';
import PageHero from '../components/PageHero';
import { universityInfo } from '../data/content';

const departments = [
  { name: 'Admissions Office', email: 'admissions@ppsu.ac.in', phone: '+91 2382 XXXXXX', hours: 'Mon–Sat: 9 AM – 6 PM' },
  { name: 'Academic Affairs', email: 'academics@ppsu.ac.in', phone: '+91 2382 XXXXXX', hours: 'Mon–Fri: 9 AM – 5 PM' },
  { name: 'Placement Cell', email: 'placements@ppsu.ac.in', phone: '+91 2382 XXXXXX', hours: 'Mon–Fri: 10 AM – 5 PM' },
  { name: 'Research Office', email: 'research@ppsu.ac.in', phone: '+91 2382 XXXXXX', hours: 'Mon–Fri: 9 AM – 5 PM' },
  { name: 'Hostel Office', email: 'hostel@ppsu.ac.in', phone: '+91 2382 XXXXXX', hours: 'Mon–Sat: 8 AM – 8 PM' },
  { name: 'General Enquiry', email: 'info@ppsu.ac.in', phone: '+91 2382 XXXXXX', hours: 'Mon–Sat: 9 AM – 6 PM' },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', department: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will respond within 24–48 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-forest-DEFAULT hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Department</label>
          <select
            value={form.department}
            onChange={e => setForm({...form, department: e.target.value})}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors bg-white"
          >
            <option value="">Select Department</option>
            {departments.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Subject *</label>
          <input
            required
            type="text"
            placeholder="Brief subject"
            value={form.subject}
            onChange={e => setForm({...form, subject: e.target.value})}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Please describe your query in detail..."
          value={form.message}
          onChange={e => setForm({...form, message: e.target.value})}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest-DEFAULT focus:ring-1 focus:ring-forest-DEFAULT transition-colors resize-none"
        />
      </div>
      <button type="submit" className="w-full btn-primary justify-center text-base py-4">
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
}

export default function Contact() {
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
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for admissions, academic enquiries, campus visits, or any other questions."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Main contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8 animate-on-scroll">
              <div>
                <h2 className="section-title mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a prospective student, parent, researcher, industry partner, or member of the media — our team is here to assist you.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-forest-DEFAULT" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">Campus Address</div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      Pasha Patel SkillTech University<br />
                      Lodga, Latur,<br />
                      Maharashtra - 413512
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-forest-DEFAULT" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">Phone</div>
                    <a href={`tel:${universityInfo.phone}`} className="text-sm text-forest-DEFAULT hover:underline">{universityInfo.phone}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-forest-DEFAULT" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">Email</div>
                    <a href={`mailto:${universityInfo.email}`} className="text-sm text-forest-DEFAULT hover:underline block">{universityInfo.email}</a>
                    <a href={`mailto:${universityInfo.admissions}`} className="text-sm text-forest-DEFAULT hover:underline block">{universityInfo.admissions}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-forest-DEFAULT" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">Office Hours</div>
                    <div className="text-sm text-gray-600">
                      Mon – Sat: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-forest-50 rounded-2xl p-8 text-center border border-forest-100">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-forest-100">
                  <MapPin size={28} className="text-forest-DEFAULT" />
                </div>
                <h3 className="font-semibold text-forest-DEFAULT mb-2">Find Us on Map</h3>
                <p className="text-sm text-gray-600 mb-4">Lodga, Latur, Maharashtra - 413512</p>
                <a
                  href="https://maps.google.com/?q=Lodga,Latur,Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest-DEFAULT text-white text-sm px-5 py-2.5 rounded-full hover:bg-forest-light transition-colors"
                >
                  Open Google Maps
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-500 mb-6">We typically respond within 24 hours on working days.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Department contacts */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Department-wise Contacts</h2>
            <p className="section-subtitle max-w-xl mx-auto">Reach the right team directly for faster assistance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, i) => (
              <div
                key={dept.name}
                className="card p-6 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h3 className="font-semibold text-forest-DEFAULT mb-3">{dept.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 hover:text-forest-DEFAULT transition-colors">
                    <Mail size={14} className="text-forest-DEFAULT flex-shrink-0" />
                    {dept.email}
                  </a>
                  <a href={`tel:${dept.phone}`} className="flex items-center gap-2 hover:text-forest-DEFAULT transition-colors">
                    <Phone size={14} className="text-forest-DEFAULT flex-shrink-0" />
                    {dept.phone}
                  </a>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={14} className="text-gray-400 flex-shrink-0" />
                    {dept.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">How to Reach Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Car,
                title: 'By Road',
                desc: 'PPSU is located at Lodga on the Latur-Osmanabad highway. Easily accessible from Latur city (approx. 15 km) and well connected by state transport buses.',
              },
              {
                Icon: Train,
                title: 'By Rail',
                desc: 'Latur Railway Station is the nearest railhead (15 km). Regular trains connect Latur to Pune, Mumbai, Hyderabad, and Aurangabad.',
              },
              {
                Icon: Plane,
                title: 'By Air',
                desc: 'Latur Airport (civilian terminal) is operational with limited connectivity. Hyderabad (Rajiv Gandhi) Airport (225 km) is the nearest major international airport.',
              },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="card p-8 text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-forest-50">
                  <Icon size={28} className="text-forest-DEFAULT" />
                </div>
                <h3 className="text-xl font-bold text-forest-DEFAULT mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
