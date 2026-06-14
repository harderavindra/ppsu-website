import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { universityInfo } from '../data/content';
import ppsuLogo from '../assets/ppsu-logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About PPSU', path: '/about' },
      { label: 'Vision & Mission', path: '/about#vision' },
      { label: 'Leadership', path: '/about#leadership' },
      { label: 'Why PPSU', path: '/about#why' },
    ],
  },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'All Programs', path: '/academics' },
      { label: 'School of Sustainability', path: '/academics#sustainability' },
      { label: 'School of AI & Data Science', path: '/academics#ai-datascience' },
      { label: 'School of Business', path: '/academics#business' },
      { label: 'School of Healthcare', path: '/academics#healthcare' },
      { label: 'School of Skill Education', path: '/academics#skill-education' },
    ],
  },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campus', path: '/campus' },
  { label: 'Research', path: '/research' },
  // { label: 'News & Events', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navBg = 'bg-white shadow-sm border-b border-gray-100';
  const logoTextColor = 'text-forest-DEFAULT';
  const subTextColor = 'text-forest-light';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      {/* Top bar */}
      <div className="hidden lg:block border-b border-gray-100 bg-[#1a4a2e]">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs text-white/80">
          <span>Lodga, Latur, Maharashtra - 413512</span>
          <div className="flex gap-4">
            <a href={`tel:${universityInfo.phone}`} className="hover:text-gold-light transition-colors">📞 {universityInfo.phone}</a>
            <a href={`mailto:${universityInfo.email}`} className="hover:text-gold-light transition-colors">✉️ {universityInfo.email}</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={ppsuLogo}
              alt="Pasha Patel SkillTech University"
              className="w-20 h-20  rounded-full object-cover flex-shrink-0"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg lg:text-lg leading-tight text-[#1a4a2e]">
                <span className='text-3xl w-full block uppercase'>Pasha Patel</span> SkillTech University
              </div>
              {/* <div className="text-xs text-[#2d6a4f]">
                Lodga, Latur, Maharashtra
              </div> */}
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-forest-50 hover:text-forest-DEFAULT ${
                    location.pathname === item.path
                      ? 'text-forest-DEFAULT bg-forest-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-forest-50 hover:text-forest-DEFAULT transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden lg:inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: '#e9bb25', color: '#0d2818' }}
            >
              <GraduationCap size={16} />
              Apply Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                      location.pathname === item.path ? 'text-forest-DEFAULT' : 'text-gray-700'
                    }`}
                    onClick={() => !item.children && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="p-2 text-gray-500"
                    >
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block py-2 text-sm text-gray-600 hover:text-forest-DEFAULT transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="border-b border-gray-50" />
              </div>
            ))}
            <div className="pt-3">
              <Link
                to="/admissions"
                className="flex items-center justify-center gap-2 w-full bg-forest-DEFAULT text-white font-semibold py-3 rounded-xl transition-colors hover:bg-forest-light"
                onClick={() => setIsOpen(false)}
              >
                <GraduationCap size={18} />
                Apply Now — 2025-26w
              </Link>
            </div>
            <div className="pt-2 pb-2 text-center text-xs text-gray-400">
              📍 Lodga, Latur, Maharashtra - 413512
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
