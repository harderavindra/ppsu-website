import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, Heart, Award, BookOpen, Users,
  GraduationCap, Landmark, MapPin, Handshake, Leaf, Lightbulb,
  Globe, UserCircle, Star, ClipboardList, ScrollText,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { leadership, universityInfo } from '../data/content';

const values = [
  { Icon: Target,       title: 'Excellence',           description: 'We pursue academic and professional excellence in everything we do, setting the highest standards for skill-based education.' },
  { Icon: Handshake,    title: 'Integrity',             description: 'Honesty, transparency, and ethical conduct guide every decision and interaction at PPSU.' },
  { Icon: Leaf,         title: 'Sustainability',         description: 'We integrate sustainability into our curriculum, campus, and community practices.' },
  { Icon: Lightbulb,   title: 'Innovation',             description: 'We foster a culture of creativity, entrepreneurship, and technological innovation.' },
  { Icon: Globe,        title: 'Inclusion',              description: 'We welcome students from all backgrounds, ensuring education is accessible to all.' },
  { Icon: Users,        title: 'Industry Partnership',   description: 'Deep, meaningful partnerships with industry drive our curriculum and placement success.' },
];

const milestones = [
  { year: '2022', event: 'Conceptualization of PPSU — Vision to create skill-focused university in Marathwada' },
  { year: '2023', event: 'Draft proposal submitted to Government of Maharashtra under proposed Skills University Act' },
  { year: '2024', event: 'Maharashtra Private Skills Universities (Establishment and Regulation) Act, 2024 enacted' },
  { year: '2024', event: 'Official approval granted — PPSU becomes one of first private skills universities in Maharashtra' },
  { year: '2024', event: 'Campus development begins at Lodga, Latur; faculty recruitment initiated' },
  { year: '2025', event: 'Inaugural batch commences across all 5 schools; MoUs signed with 50+ industry partners' },
];

const accreditations = [
  { name: 'Govt. of Maharashtra', detail: 'Established under Maharashtra Private Skills Universities Act, 2024', Icon: Landmark },
  { name: 'AICTE Compliant',      detail: 'All technical programs comply with AICTE norms and guidelines',         Icon: ClipboardList },
  { name: 'UGC Guidelines',       detail: 'Adhering to UGC regulations for university governance and academics',    Icon: ScrollText },
  { name: 'NAAC Aspirant',        detail: 'Working towards NAAC accreditation for quality assurance',              Icon: Star },
];

/* Overview info cards icon map */
const overviewCards = [
  { Icon: Landmark,      title: 'Statutory University',  desc: 'Established by Government of Maharashtra Act, 2024' },
  { Icon: MapPin,        title: 'Strategic Location',    desc: 'Lodga, Latur — gateway to Marathwada education' },
  { Icon: GraduationCap, title: '5 Schools',             desc: 'Specialized schools across key sectors' },
  { Icon: Handshake,     title: '50+ Partners',          desc: 'Industry collaborations for real-world exposure' },
  { Icon: UserCircle,    title: 'Expert Faculty',         desc: 'Industry veterans and academic scholars' },
  { Icon: Leaf,          title: 'Green Campus',          desc: 'Solar-powered sustainable campus infrastructure' },
];

export default function About() {
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
        title="About PPSU"
        subtitle="Pioneering skill-based education in Maharashtra, empowering youth with the knowledge and expertise to thrive in the 21st century economy."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="inline-block bg-forest-50 text-forest-DEFAULT text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                Our Story
              </div>
              <h2 className="section-title mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Pasha Patel SkillTech University (PPSU) is a pioneering private skills university established under the <strong className="text-forest-DEFAULT">Maharashtra Private Skills Universities (Establishment and Regulation) Act, 2024</strong>. Located at Lodga, Latur in the Marathwada region of Maharashtra, we are dedicated to transforming skill-based higher education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our university was conceived with a singular mission: to provide high-quality, industry-relevant education that prepares students not just for jobs, but for meaningful careers and entrepreneurial ventures. The Marathwada region, historically underserved in higher education, now has a world-class institution that brings global standards of skill education to its doorstep.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With 5 specialized schools, 12+ programs, a modern campus, and partnerships with 50+ industry leaders, PPSU represents a new paradigm in Indian higher education — one where skills, employability, and sustainability are at the center of every academic endeavor.
              </p>
              <Link to="/admissions" className="btn-primary">
                Join PPSU <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              {overviewCards.map((item) => (
                <div key={item.title} className="p-5 bg-gradient-radial from-forest-50 to-white rounded-2xl border border-forest-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mb-2">
                    <item.Icon size={20} className="text-[#1a4a2e]" />
                  </div>
                  <div className="font-semibold text-forest-DEFAULT text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-block bg-forest-50 text-forest-DEFAULT text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Our Purpose
            </div>
            <h2 className="section-title">Vision, Mission & Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Eye size={32} />,
                title: 'Vision',
                content: 'To be India\'s leading skills university, recognized globally for transforming young men and women into skilled, ethical, and entrepreneurial professionals who contribute to sustainable national development.',
                color: 'from-forest-700 to-forest-DEFAULT',
              },
              {
                icon: <Target size={32} />,
                title: 'Mission',
                content: 'To provide accessible, high-quality, industry-integrated skill education that empowers students with technical competence, professional values, and entrepreneurial mindset — preparing them for a rapidly evolving global economy.',
                color: 'from-blue-700 to-blue-600',
              },
              {
                icon: <Heart size={32} />,
                title: 'Philosophy',
                content: 'We believe education should be transformative — not merely informative. Every student who enters PPSU should emerge as a skilled, confident, and responsible professional ready to make a positive difference in the world.',
                color: 'from-gold-700 to-gold-500',
              },
            ].map((item) => (
              <div key={item.title} className={`bg-gradient-to-br ${item.color} text-white rounded-3xl p-8 animate-on-scroll`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/85 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-10 animate-on-scroll">
            <h3 className="text-2xl font-bold text-forest-DEFAULT">Core Values</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all animate-on-scroll"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mx-auto mb-3">
                  <value.Icon size={20} className="text-[#1a4a2e]" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{value.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-block bg-forest-50 text-forest-DEFAULT text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Leadership
            </div>
            <h2 className="section-title">Meet Our Leaders</h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-4">
              Guided by visionary leaders with decades of experience in academia, industry, and public service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <div
                key={leader.name}
                className="card p-8 text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-forest-200 to-forest-400 flex items-center justify-center mx-auto mb-5 text-3xl text-white font-bold">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-forest-DEFAULT mb-1">{leader.name}</h3>
                <p className="text-sm text-gold-600 font-medium mb-4">{leader.designation}</p>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic">
                  "{leader.message}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-forest-DEFAULT">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-DEFAULT/30 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 animate-on-scroll ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                      <span className="text-gold-light font-bold text-lg">{m.year}</span>
                      <p className="text-white/80 text-sm mt-2 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-DEFAULT border-4 border-forest-DEFAULT mt-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section id="why" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title">Recognition & Approvals</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((item, i) => (
              <div
                key={item.name}
                className="card p-6 text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mx-auto mb-4">
                  <item.Icon size={20} className="text-[#1a4a2e]" />
                </div>
                <h3 className="font-semibold text-forest-DEFAULT mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
