import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Lightbulb, Globe2, Users, Sun, Bot, Wheat, HeartPulse, GraduationCap, Microscope, Landmark, Briefcase, Zap, Car } from 'lucide-react';
import PageHero from '../components/PageHero';

const researchCenters = [
  {
    name: 'Center for Sustainable Energy Research',
    description: 'Focused on solar photovoltaics, wind energy optimization, biofuels from agricultural waste, and smart grid technologies relevant to rural Maharashtra.',
    areas: ['Solar PV Efficiency', 'Biogas from Agri-Waste', 'Smart Grid for Rural Areas', 'Carbon Credit Management'],
    Icon: Sun,
  },
  {
    name: 'AI & Emerging Technologies Lab',
    description: 'Cutting-edge research in artificial intelligence, machine learning applications, computer vision for agriculture, and natural language processing for Indian languages.',
    areas: ['AgriTech AI Solutions', 'Marathi NLP', 'Computer Vision', 'Predictive Analytics'],
    Icon: Bot,
  },
  {
    name: 'Marathwada Development Research Institute',
    description: 'Interdisciplinary research addressing socioeconomic challenges of the Marathwada region — drought management, farmer welfare, and rural skill development.',
    areas: ['Water Conservation', 'Rural Entrepreneurship', 'Farmer Welfare Studies', 'Drought-Resistant Agriculture'],
    Icon: Wheat,
  },
  {
    name: 'Healthcare Innovation Lab',
    description: 'Applied research in affordable healthcare technologies, telemedicine solutions for rural areas, and low-cost diagnostic tools.',
    areas: ['Telemedicine', 'Low-Cost Diagnostics', 'Rural Healthcare Access', 'Medical Device Innovation'],
    Icon: HeartPulse,
  },
];

const publications = [
  { title: 'Biogas Production from Agricultural Waste in Marathwada Region', journal: 'Indian Journal of Renewable Energy', year: 2025, authors: 'Dr. A. Patil, Dr. R. Sharma' },
  { title: 'AI-Powered Crop Yield Prediction Using Multi-Modal Satellite Data', journal: 'Journal of Agricultural Informatics', year: 2025, authors: 'Dr. S. Khan, Prof. M. Kulkarni' },
  { title: 'Impact of Skill-Based Education on Rural Youth Employment', journal: 'Maharashtra Economic Review', year: 2025, authors: 'Dr. P. Desai, Dr. A. Joshi' },
  { title: 'Telemedicine Adoption in Tier-3 Cities: Case Study from Latur', journal: 'Journal of Health Informatics', year: 2025, authors: 'Dr. N. More, Dr. V. Rao' },
];

const partners = [
  { name: 'IIT Bombay', type: 'Academic Partner', Icon: GraduationCap },
  { name: 'CSIR-NEERI', type: 'Research Partner', Icon: Microscope },
  { name: 'MNRE (Govt. of India)', type: 'Government Partner', Icon: Landmark },
  { name: 'NASSCOM', type: 'Industry Partner', Icon: Briefcase },
  { name: 'MAHAGENCO', type: 'Industry Partner', Icon: Zap },
  { name: 'Tata Motors', type: 'Industry Partner', Icon: Car },
];

export default function Research() {
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
        title="Research & Innovation"
        subtitle="Driving meaningful research that addresses real-world challenges in sustainability, AI, healthcare, and rural development — with a special focus on Marathwada."
        breadcrumbs={[{ label: 'Research' }]}
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="inline-block bg-forest-50 text-forest-DEFAULT text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">Research Philosophy</div>
              <h2 className="section-title mb-6">Research That Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                At PPSU, research is not an abstract pursuit — it is deeply connected to the lives and livelihoods of people in Marathwada and beyond. Our research centers focus on applied, translational research that creates tangible social and economic impact.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We encourage interdisciplinary collaboration between our five schools, ensuring that innovations in AI can inform environmental solutions, and business insights can improve healthcare delivery. This cross-pollination of ideas is at the heart of our research culture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Students at all levels are encouraged and supported to participate in research projects, publish papers, file patents, and contribute to a growing knowledge economy.
              </p>
              <Link to="/contact" className="btn-primary">
                Collaborate with Us <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              {[
                { icon: <FlaskConical size={24} />, title: '4 Research Centers', desc: 'Specialized labs for focused research' },
                { icon: <Lightbulb size={24} />, title: 'Innovation Hub', desc: 'Supporting student startups and IP' },
                { icon: <Globe2 size={24} />, title: 'International Partnerships', desc: 'Collaborations with global institutions' },
                { icon: <Users size={24} />, title: 'Interdisciplinary Teams', desc: 'Cross-school research collaboration' },
              ].map((item) => (
                <div key={item.title} className="card p-6 text-center">
                  <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-forest-DEFAULT">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mb-4">Research Centers</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Dedicated centers for focused, applied research addressing the most pressing challenges of our time.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {researchCenters.map((center, i) => (
              <div
                key={center.name}
                className="card p-8 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-forest-50">
                  <center.Icon size={26} className="text-forest-DEFAULT" />
                </div>
                <h3 className="text-xl font-bold text-forest-DEFAULT mb-3">{center.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{center.description}</p>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Research Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {center.areas.map(area => (
                      <span key={area} className="text-xs bg-forest-50 text-forest-DEFAULT px-3 py-1.5 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Startups */}
      <section className="py-20 bg-forest-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll text-white">
              <div className="inline-block bg-gold-DEFAULT/20 text-gold-light text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">Innovation Ecosystem</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">PPSU Innovation Hub</h2>
              <p className="text-white/80 leading-relaxed mb-5">
                The PPSU Innovation Hub is a dedicated space for student entrepreneurs, researchers, and innovators. From ideation to market-ready products, we support every stage of the innovation journey.
              </p>
              <ul className="space-y-4">
                {[
                  '5,000 sq ft maker space with fabrication tools',
                  'Pre-incubation and incubation support',
                  'Mentorship from 50+ industry experts',
                  'Seed funding up to ₹5 lakh for promising startups',
                  'IP filing assistance and patent support',
                  'Connections to VC networks and angel investors',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-gold-DEFAULT/30 border border-gold-DEFAULT/50 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-DEFAULT" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-3xl p-10 animate-on-scroll text-center border border-white/10">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-gold-DEFAULT/20">
                <Lightbulb size={40} className="text-gold-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Start Your Innovation Journey</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Have an idea? PPSU Innovation Hub provides the space, tools, mentorship, and funding to turn your vision into reality.
              </p>
              <Link to="/contact" className="btn-primary inline-flex">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Recent Publications</h2>
            <p className="section-subtitle max-w-2xl mx-auto">A selection of research published by PPSU faculty and students.</p>
          </div>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div
                key={pub.title}
                className="card p-6 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0 text-forest-DEFAULT font-bold text-sm">
                    {pub.year}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1.5">{pub.title}</h3>
                    <div className="text-xs text-gray-500">{pub.journal} • {pub.authors}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Research & Industry Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className="card p-5 text-center animate-on-scroll"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 bg-forest-50">
                  <partner.Icon size={20} className="text-forest-DEFAULT" />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{partner.name}</div>
                <div className="text-xs text-gray-500 mt-1">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
