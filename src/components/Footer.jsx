import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { universityInfo } from '../data/content';
import ppsuLogo from '../assets/ppsu-logo.png';

const quickLinks = [
  { label: 'About PPSU', path: '/about' },
  { label: 'Academic Programs', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campus Life', path: '/campus' },
  { label: 'Research', path: '/research' },
  { label: 'News & Events', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
];

const programs = [
  { label: 'B.Des (Sustainable Design)', path: '/academics#sustainability' },
  { label: 'B.Tech (Energy & Environment)', path: '/academics#sustainability' },
  { label: 'B.Tech (AI & ML)', path: '/academics#ai-datascience' },
  { label: 'B.Tech (Data Science)', path: '/academics#ai-datascience' },
  { label: 'BBA', path: '/academics#business' },
  { label: 'MBA', path: '/academics#business' },
  { label: 'Emergency Medicine', path: '/academics#healthcare' },
  { label: 'OT Assistant', path: '/academics#healthcare' },
  { label: 'Short Term Courses', path: '/academics#skill-education' },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* University info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={ppsuLogo}
                alt="PPSU Logo"
                className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-white/20"
              />
              <div>
                <div className="font-bold text-sm leading-tight">Pasha Patel</div>
                <div className="font-bold text-sm leading-tight">SkillTech University</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Empowering youth through skill-based education in sustainability, AI, business, healthcare, and emerging technologies. Established under Maharashtra Private Skills Universities Act, 2024.
            </p>
            <div className="text-xs font-medium text-gold-light mb-4">
              कौशल्य • तंत्रज्ञान • शिक्षण • करिअर • शाश्वत भविष्य
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {['f', 'in', 'yt', 'li', 'tw'].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-green-900 flex items-center justify-center transition-all duration-200 text-xs font-bold"
                  aria-label={`Social ${label}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold-light mb-5 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    <ArrowRight size={12} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-gold-light mb-5 text-sm tracking-wider uppercase">Programs</h3>
            <ul className="space-y-2.5">
              {programs.map((prog) => (
                <li key={prog.label}>
                  <Link
                    to={prog.path}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    <ArrowRight size={12} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                    {prog.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gold-light mb-5 text-sm tracking-wider uppercase">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-gold-DEFAULT flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/70 leading-relaxed">
                  Pasha Patel SkillTech University<br />
                  Lodga, Latur,<br />
                  Maharashtra - 413512
                </div>
              </div>
              <a href={`tel:${universityInfo.phone}`} className="flex gap-3 items-center text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-gold-DEFAULT flex-shrink-0" />
                {universityInfo.phone}
              </a>
              <a href={`mailto:${universityInfo.email}`} className="flex gap-3 items-center text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={16} className="text-gold-DEFAULT flex-shrink-0" />
                {universityInfo.email}
              </a>
              <a href={`mailto:${universityInfo.admissions}`} className="flex gap-3 items-center text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={16} className="text-gold-DEFAULT flex-shrink-0" />
                {universityInfo.admissions}
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Pasha Patel SkillTech University. All rights reserved.
          </div>
          <div className="text-center">
            Established under the <span className="text-white/70">Maharashtra Private Skills Universities (Establishment and Regulation) Act, 2024</span>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/about" className="hover:text-white transition-colors">RTI</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
