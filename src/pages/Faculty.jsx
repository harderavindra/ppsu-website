import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, GraduationCap, Laptop, Sun, HeartPulse, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';

const faculties = [
  {
    name: 'Dr. Anita Kulkarni',
    designation: 'Dean, School of Sustainability',
    qualification: 'Ph.D. Environmental Engineering, IIT Bombay',
    specialization: 'Renewable Energy Systems, Environmental Impact Assessment',
    school: 'Sustainability',
    color: 'from-green-400 to-emerald-600',
    publications: 45,
    experience: 18,
  },
  {
    name: 'Prof. Rajesh Sharma',
    designation: 'Dean, School of AI & Data Science',
    qualification: 'M.Tech AI, IISc Bangalore; Ph.D. (Pursuing)',
    specialization: 'Machine Learning, Computer Vision, NLP',
    school: 'AI & Data Science',
    color: 'from-blue-400 to-indigo-600',
    publications: 32,
    experience: 12,
  },
  {
    name: 'Dr. Meera Patil',
    designation: 'Dean, School of Business',
    qualification: 'MBA (Finance), XLRI; Ph.D. Management, Pune University',
    specialization: 'Corporate Finance, Strategic Management, Entrepreneurship',
    school: 'Business',
    color: 'from-amber-400 to-orange-600',
    publications: 28,
    experience: 20,
  },
  {
    name: 'Dr. Suresh Nair',
    designation: 'Dean, School of Healthcare',
    qualification: 'MBBS, MD (Emergency Medicine), AIIMS Delhi',
    specialization: 'Emergency Medicine, Trauma Care, Medical Education',
    school: 'Healthcare',
    color: 'from-red-400 to-rose-600',
    publications: 38,
    experience: 22,
  },
  {
    name: 'Prof. Kavita Deshmukh',
    designation: 'Dean, School of Skill Education',
    qualification: 'M.E. (Electronics), NIT Warangal; PGD Vocational Education',
    specialization: 'IoT, Automation, Vocational Training Design',
    school: 'Skill Education',
    color: 'from-purple-400 to-violet-600',
    publications: 15,
    experience: 16,
  },
  {
    name: 'Dr. Arun Jadhav',
    designation: 'Professor, Energy Technology',
    qualification: 'Ph.D. Solar Energy, University of Pune',
    specialization: 'Photovoltaic Systems, Smart Grid, Energy Auditing',
    school: 'Sustainability',
    color: 'from-green-400 to-teal-600',
    publications: 22,
    experience: 14,
  },
  {
    name: 'Dr. Priya Iyer',
    designation: 'Associate Professor, Data Science',
    qualification: 'Ph.D. Statistics, IIT Madras',
    specialization: 'Statistical Learning, Big Data, Biostatistics',
    school: 'AI & Data Science',
    color: 'from-cyan-400 to-blue-600',
    publications: 19,
    experience: 10,
  },
  {
    name: 'Prof. Vikram Rao',
    designation: 'Associate Professor, Management',
    qualification: 'MBA, IIM Ahmedabad; CA (ICAI)',
    specialization: 'Financial Modelling, Fintech, Corporate Governance',
    school: 'Business',
    color: 'from-yellow-400 to-amber-600',
    publications: 12,
    experience: 15,
  },
];

const schoolColors = {
  'Sustainability': 'bg-green-100 text-green-700',
  'AI & Data Science': 'bg-blue-100 text-blue-700',
  'Business': 'bg-amber-100 text-amber-700',
  'Healthcare': 'bg-red-100 text-red-700',
  'Skill Education': 'bg-purple-100 text-purple-700',
};

/* Industry expert panel icon map */
const expertPanelItems = [
  { sector: 'Technology & AI',    companies: 'TCS, Infosys, Wipro, Microsoft', Icon: Laptop },
  { sector: 'Renewable Energy',   companies: 'MAHAGENCO, Tata Solar, Greenko', Icon: Sun },
  { sector: 'Healthcare',         companies: 'Apollo, Fortis, Ruby Hall Clinic', Icon: HeartPulse },
  { sector: 'Finance & Business', companies: 'SBI, ICICI Bank, Deloitte',       Icon: Briefcase },
];

export default function Faculty() {
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
        title="Our Faculty"
        subtitle="Learn from the best — industry veterans, PhD scholars, and passionate educators who bring real-world expertise to every classroom."
        breadcrumbs={[{ label: 'Faculty' }]}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
            {[
              { n: '100+', l: 'Faculty Members', icon: <GraduationCap size={24} /> },
              { n: '60%+', l: 'PhD Holders', icon: <Award size={24} /> },
              { n: '500+', l: 'Research Publications', icon: <BookOpen size={24} /> },
              { n: '15+', l: 'Avg. Years Experience', icon: <Award size={24} /> },
            ].map(({ n, l, icon }) => (
              <div key={l} className="card p-6 text-center">
                <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-forest-DEFAULT">
                  {icon}
                </div>
                <div className="text-2xl font-bold text-forest-DEFAULT">{n}</div>
                <div className="text-sm text-gray-600 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty cards */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mb-4">Meet Our Faculty</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Our distinguished faculty bring together decades of academic and industry experience across all disciplines.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.map((faculty, i) => (
              <div
                key={faculty.name}
                className="card overflow-hidden animate-on-scroll group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${faculty.color}`} />
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${faculty.color} flex items-center justify-center text-white font-bold text-xl mb-4`}>
                    {faculty.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="font-semibold text-gray-800 leading-tight mb-1">{faculty.name}</h3>
                  <p className="text-xs text-forest-DEFAULT font-medium mb-1">{faculty.designation}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${schoolColors[faculty.school] || 'bg-gray-100 text-gray-600'} mb-3 inline-block`}>
                    {faculty.school}
                  </span>
                  <p className="text-xs text-gray-500 mb-3 leading-tight">{faculty.qualification}</p>
                  <p className="text-xs text-gray-600 mb-4">{faculty.specialization}</p>
                  <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                    <div>
                      <div className="font-bold text-forest-DEFAULT">{faculty.publications}</div>
                      <div>Papers</div>
                    </div>
                    <div>
                      <div className="font-bold text-forest-DEFAULT">{faculty.experience}+</div>
                      <div>Years Exp.</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-on-scroll">
            <p className="text-gray-500 text-sm mb-4">Join our growing team of dedicated educators and researchers.</p>
            <Link to="/contact" className="btn-outline inline-flex">
              Faculty Openings <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Experts */}
      <section className="py-20 bg-forest-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Expert Panel</h2>
            <p className="text-white/75 max-w-2xl mx-auto">In addition to our full-time faculty, PPSU engages 50+ industry experts who contribute as visiting faculty, mentors, and guest lecturers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertPanelItems.map((item, i) => (
              <div
                key={item.sector}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 mx-auto mb-3">
                  <item.Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{item.sector}</h3>
                <p className="text-white/60 text-xs">{item.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
