import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, GraduationCap, ChevronDown,
  MapPin, Phone, Mail, Plus, Minus, ArrowUpRight,
  Landmark, Handshake, Sun, FlaskConical,
  Trophy, Zap, Building2,
} from 'lucide-react';
import { schools, stats, newsEvents, universityInfo } from '../data/content';
import sustainabilityImg from '../assets/sustainability-img.jpg';
import aiDataImg from '../assets/ai-data-img.avif';
import businessImg from '../assets/businessman-img.avif';
import medicalImg from '../assets/medical-img.avif';
import skillsImg from '../assets/skills-img.jpg';
import campusImg from '../assets/students-campus-img.jpg';
import pashaPatelImg from '../assets/pashs-patel.avif';
import parvejPatelImg from '../assets/parevej-patel.JPG';
import sanjeevKarpeImg from '../assets/sanjeev-karpe.png';
import heroImg from '../assets/ppsu-logo.png';
const schoolImages = {
  'sustainability': sustainabilityImg,
  'ai-datascience': aiDataImg,
  'business': businessImg,
  'healthcare': medicalImg,
  'skill-education': skillsImg,
};

/* ─── Leadership data ─── */
const leaders = [
  {
    img: pashaPatelImg,
    name: 'Pasha Patel',
    title: 'Founder & Chancellor',
    vision: 'PPSU was born from the belief that every young person in Marathwada deserves world-class, skill-based education — education that opens real doors to real careers.',
  },
  {
    img: parvejPatelImg,
    name: 'Parvej Patel',
    title: 'Co-Founder & Managing Trustee',
    vision: 'Our mission is simple: transform passionate young minds into industry-ready professionals who contribute meaningfully to society and the nation.',
  },
  {
    img: sanjeevKarpeImg,
    name: 'Sanjeev Karpe',
    title: 'Vice Chancellor',
    vision: 'At PPSU, academic rigour meets practical innovation. We are building a culture where curiosity, collaboration, and craftsmanship thrive together.',
  },
];

/* ─── Leadership Slider ─── */
function LeadershipSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + leaders.length) % leaders.length);
  const next = () => setCurrent(c => (c + 1) % leaders.length);
  const leader = leaders[current];

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '560px' }}>
      {/* Full-height photo */}
      <img
        key={current}
        src={leader.img}
        alt={leader.name}
        className="w-full h-full object-cover object-top"
        style={{ transition: 'opacity 0.4s ease' }}
      />

      {/* Gradient — heavy at bottom for text, light at top */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d2818f0 0%, #0d281880 45%, transparent 100%)' }} />

      {/* Top badge */}
      <div className="absolute top-6 left-6">
        <span className="text-base font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border border-white/20 text-white/70 backdrop-blur-sm bg-white/5">
          Leadership &amp; Vision
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        {/* Opening quote mark */}
        <div className="text-6xl font-black leading-none mb-1" style={{ color: '#e4b312', lineHeight: 1 }}>"</div>

        {/* Vision text — big */}
        <p className="text-white text-xl leading-relaxed mb-6" style={{ fontWeight: 400 }}>
          {leader.vision}"
        </p>

        {/* Name + title */}
        <div className="text-white font-bold text-3xl leading-tight tracking-tight">{leader.name}</div>
        <div className="text-sm font-semibold mt-1" style={{ color: '#e4b312' }}>{leader.title}</div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-7">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={15} />
          </button>

          <div className="flex gap-2">
            {leaders.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-1 rounded-full transition-all duration-300"
                style={{ width: i === current ? 32 : 16, background: i === current ? '#e4b312' : 'rgba(255,255,255,0.3)' }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const n = parseInt(target);
    if (isNaN(n)) { setCount(target); return; }
    const step = Math.max(1, Math.ceil(n / 60));
    const t = setInterval(() => setCount(p => { if (p + step >= n) { clearInterval(t); return n; } return p + step; }), 25);
    return () => clearInterval(t);
  }, [started, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Scroll animation hook ─── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Marquee strip ─── */
const marqueeItems = ['Admissions Open 2025–26', 'School of AI & Data Science', 'School of Sustainability & Green Energy', 'School of Business & Management', 'School of Healthcare & Biotechnology', 'School of Advanced Skill Education', 'Maharashtra Private Skills University'];

function MarqueeStrip() {
  return (
    <div className="bg-[#e4b312] overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-[#fff] text-lg font-semibold tracking-wide px-6">
            <span className="w-1 h-1 rounded-full bg-[#0d2818]/40 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Program category icon map ─── */
const programCategoryIcons = {
  'Undergraduate Programmes': GraduationCap,
  'Postgraduate Programmes': Trophy,
  'Short-Term Courses': Zap,
};

/* ─── Program category cards ─── */
const programCategories = [
  {
    title: 'Undergraduate Programmes',
    count: '6 Programmes',
    desc: 'Four-year degree programmes in B.Tech, B.Des, and BBA across all five schools. Designed for school leavers aiming for professional careers.',
    link: '/academics',
    gradient: 'from-[#1a4a2e] to-[#2d6a4f]',
    items: ['B.Des', 'B.Tech (AIML)', 'B.Tech (Data Science)', 'B.Tech (Energy)', 'BBA', 'Emergency Medicine'],
  },
  {
    title: 'Postgraduate Programmes',
    count: '2 Programmes',
    desc: 'Advanced master-level programmes for professionals seeking leadership roles in business and management.',
    link: '/academics',
    gradient: 'from-[#e4b312] to-[#b8891a]',
    items: ['MBA', 'OT Assistant'],
  },
  {
    title: 'Short-Term Courses',
    count: '8+ Courses',
    desc: 'Industry-ready certification courses from 3 to 12 months. Gain job-ready skills in emerging technology domains.',
    link: '/academics#skill-education',
    gradient: 'from-[#1e3a5f] to-[#2563eb]',
    items: ['Drone Technology', 'Solar Installation', 'Cybersecurity', 'IoT & Automation', 'EV Technology', 'Cloud & DevOps'],
  },
];

/* ─── FAQ data ─── */
const faqs = [
  { q: 'What makes PPSU different from other universities in Maharashtra?', a: 'PPSU is one of Maharashtra\'s first private skill universities, established specifically under the Maharashtra Private Skills Universities Act, 2024. Our entire curriculum is designed around industry employability, practical training, and real-world problem solving — not just academic theory.' },
  { q: 'Does PPSU offer hostel accommodation on campus?', a: 'Yes. PPSU has separate, secure hostel facilities for boys and girls with 200 seats each. All rooms are Wi-Fi enabled with 24/7 security, in-house mess, and recreational amenities.' },
  { q: 'What undergraduate programmes are available at PPSU?', a: 'PPSU offers B.Des, B.Tech (AIML), B.Tech (Data Science), B.Tech (Energy & Environmental Management), BBA, and Emergency Medicine Technology programmes at the undergraduate level.' },
  { q: 'Does PPSU have placement support?', a: 'Yes, PPSU has a dedicated Career Development Cell with 50+ industry partners. We offer mandatory internships, campus recruitment drives, soft-skills training, and mentorship by industry professionals.' },
  { q: 'Are scholarships available at PPSU?', a: 'PPSU offers multiple scholarships: merit-based (up to 50% waiver), Marathwada region grant, girl child scholarship, EWS concession, sports excellence award, and full fee waiver for differently-abled students.' },
  { q: 'Is PPSU approved by the Government of Maharashtra?', a: 'Yes. PPSU is a statutory university established and approved under the Maharashtra Private Skills Universities (Establishment and Regulation) Act, 2024 by the Government of Maharashtra.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-gray-800 text-lg leading-snug pr-4">{faq.q}</span>
            <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
              {open === i ? <Minus size={14} /> : <Plus size={14} />}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-lg text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Accordion feature ─── */
const whyFeatures = [
  { title: 'Skill-First Curriculum', desc: 'Every programme is co-designed with industry partners to ensure graduates are job-ready from day one — no gap between classroom and workplace.' },
  { title: 'Two Intakes Per Year', desc: 'Flexible admission windows in January and July, allowing students to start their journey at a time that suits them.' },
  { title: 'Hands-On Learning Approach', desc: 'Minimum 40% of each programme is lab work, live projects, industrial visits, and internships. We learn by doing.' },
  { title: 'Gain Real Work Experience', desc: 'Mandatory semester-long industry internship and final-year capstone project with real organizations.' },
  { title: 'Sustainability at the Core', desc: 'Our solar-powered green campus embodies the sustainability principles we teach — every student lives the values they study.' },
];

function AccordionFeature() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {whyFeatures.map((f, i) => (
        <div key={i} className={`rounded-2xl border transition-all duration-300 cursor-pointer ${open === i ? 'bg-[#1a4a2e] border-[#1a4a2e] text-white' : 'bg-white border-gray-200 text-gray-800 hover:border-[#1a4a2e]/40'}`}
          onClick={() => setOpen(open === i ? -1 : i)}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className={`font-semibold text-sm ${open === i ? 'text-white' : 'text-gray-800'}`}>{f.title}</span>
            <Plus size={16} className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-45 text-[#e4b312]' : 'text-gray-400'}`} />
          </div>
          {open === i && (
            <div className="px-6 pb-5 text-white/80 text-sm leading-relaxed border-t border-white/10 pt-3">
              {f.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── News / Events ─── */
function NewsItem({ item }) {
  const catColor = {
    Announcement: 'bg-blue-50 text-blue-700 border-blue-200',
    Admissions: 'bg-green-50 text-green-700 border-green-200',
    Partnership: 'bg-purple-50 text-purple-700 border-purple-200',
    Event: 'bg-amber-50 text-amber-700 border-amber-200',
    Campus: 'bg-teal-50 text-teal-700 border-teal-200',
  }[item.category] || 'bg-gray-50 text-gray-700 border-gray-200';

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0 group cursor-pointer">
      <div className="flex-shrink-0 w-14 text-center">
        <div className="text-2xl font-bold text-[#1a4a2e] leading-none">
          {new Date(item.date).getDate()}
        </div>
        <div className="text-base text-gray-400 uppercase tracking-wide">
          {new Date(item.date).toLocaleString('en-IN', { month: 'short' })}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <span className={`inline-block text-base font-semibold px-2 py-0.5 rounded border mb-2 ${catColor}`}>
          {item.category}
        </span>
        <h4 className="text-sm font-semibold text-gray-800 leading-snug mb-1 group-hover:text-[#1a4a2e] transition-colors line-clamp-2">
          {item.title}
        </h4>
        <span className="inline-flex items-center gap-1 text-base text-[#1a4a2e] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read more <ArrowRight size={11} />
        </span>
      </div>
    </div>
  );
}

function EventItem({ item }) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-[#f0f7f4] transition-colors group cursor-pointer">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a4a2e] text-white flex flex-col items-center justify-center text-center">
        <div className="text-base font-bold leading-none">{new Date(item.date).getDate()}</div>
        <div className="text-[10px] uppercase tracking-wide opacity-80">
          {new Date(item.date).toLocaleString('en-IN', { month: 'short' })}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#1a4a2e] transition-colors line-clamp-2">
          {item.title}
        </p>
        <p className="text-base text-gray-500 mt-1">{item.category}</p>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen gradient-hero flex flex-col overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #e4b312 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #2d6a4f 0%, transparent 70%)' }} />

        <div className="relative flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 pb-12 flex">
            <div className="max-w-4xl min-w-4xl">
              {/* Badge */}
              <div className="reveal inline-flex items-center gap-2 border border-[#e4b312]/40 bg-[#e4b312]/10 text-[#e4b312] text-xs font-semibold px-4 py-2 rounded-full mb-7 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e4b312] animate-pulse" />
                Est. 2024 · Maharashtra Private Skills University · Lodga, Latur
              </div>

              {/* Title */}
              <h1 className="reveal reveal-delay-1 font-bold leading-[1.05] mb-7">
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[72px]">Where Future</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-[72px]" style={{ color: '#e4b312' }}>Innovators &</span>
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[72px]">Leaders Are Made</span>
              </h1>

              <p className="reveal reveal-delay-2 text-white/70 text-base sm:text-lg leading-relaxed mb-3 max-w-2xl">
                Pasha Patel SkillTech University is Maharashtra's pioneering skill university — combining cutting-edge technology education with real-world industry experience in the heart of Marathwada.
              </p>
              <p className="reveal reveal-delay-2 text-[#e4b312]/80 text-sm font-medium mb-10 tracking-wide">
                कौशल्य · तंत्रज्ञान · शिक्षण · करिअर · शाश्वत भविष्य
              </p>

              <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center gap-2.5 font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl"
                  style={{ background: '#e4b312', color: '#0d2818' }}
                >
                  <GraduationCap size={18} />
                  Apply for Admission 2025–26
                </Link>
                <Link
                  to="/academics"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[#1a4a2e] transition-all duration-200"
                >
                  Explore All Programmes
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Mini stats strip */}

            </div>
            <div className="hidden lg:flex items-center justify-center flex-1">
              <img
                src={heroImg}
                className='max-w-lg'
                alt="Pasha Patel" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative pb-8 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/40 text-base animate-bounce">
            <span>Scroll</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeStrip />

      {/* ── STATS ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 text-center">
            {stats.map((s) => (
              <div key={s.label} className="reveal">
                <div
                  className="text-[72px] lg:text-[88px] font-black leading-none tracking-tight mb-3"
                  style={{
                    color: '#1a2035',
                    textShadow: '4px 5px 0px #e4b312',
                    fontWeight: 500,
                  }}
                >
                  <AnimatedCounter target={s.number} suffix={s.suffix} />
                </div>
                <div className="text-sm font-bold text-[#1a2035] leading-snug uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${campusImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2, 4, 3, 0.78), rgba(13,40,24,0.68))' }} />

        <div className="relative z-10 mx-auto px-4 sm:px-6 text-center">
          {/* Label */}
          <div className="bg-white p-5 max-w-7xl mx-auto mb-8 rounded-lg">  
          <p className="reveal text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>
            About the University
          </p>

          {/* Heading */}
          <h2 className="reveal reveal-delay-1 text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight mb-6">
            A New Era of{' '}
            <span style={{ color: '#e4b312' }}>Skill-Based Education</span>
          </h2>

          {/* Description */}
          <p className="reveal reveal-delay-2 text-black/75 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
            Established under the <strong >Maharashtra Private Skills Universities (Establishment and Regulation) Act, 2024</strong>, PPSU is Marathwada's answer to the growing demand for skilled, industry-ready professionals. Located at Lodga, Latur, we bring international-standard skill education to the region.
          </p>
          <p className="reveal reveal-delay-2 text-black/60 text-base leading-relaxed mb-10 max-w-3xl mx-auto">
            Our five specialized schools cover Sustainability & Green Energy, AI & Data Science, Business & Finance, Healthcare & Biotechnology, and Advanced Skill Education — each co-designed with industry to ensure graduates are job-ready from day one.
          </p>

          {/* CTA */}
          <div className="reveal reveal-delay-3 mb-16">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full border-2 border-black/40 text-black hover:bg-black hover:text-[#fff] transition-all"
            >
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
</div>
          {/* 4 feature cards */}
          <div className="reveal reveal-delay-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: Landmark,      title: 'Statutory University', desc: 'Govt. of Maharashtra approved under Private Skills Universities Act, 2024' },
              { Icon: Handshake,    title: '50+ Partners',          desc: 'MoUs with leading companies for internship & placement' },
              { Icon: Sun,          title: 'Green Campus',          desc: '500 kW solar plant powering 80% of campus energy needs' },
              { Icon: FlaskConical, title: 'Research Driven',       desc: '4 dedicated research centers tackling real-world challenges' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 transition-all text-left">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#e4b312' }}>
                  <Icon size={19} style={{ color: '#0d2818' }} />
                </div>
                <div className="font-semibold text-white text-sm mb-1.5">{title}</div>
                <div className="text-base text-white/55 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOLS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>Academic Excellence</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#1a4a2e' }}>
              5 Schools of Excellence
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Specialized schools designed around the world's most in-demand sectors — each a center of innovation, research, and industry collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, i) => (
              <Link
                key={school.id}
                to={`/academics#${school.id}`}
                className="reveal group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Image top area */}
                <div className="relative h-52 overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={schoolImages[school.id]}
                    alt={school.shortName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* School number badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1a4a2e] text-base font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-sm">
                    School {i + 1}
                  </div>
                </div>

                {/* Content below image */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 group-hover:text-[#1a4a2e] transition-colors">
                    {school.shortName}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {school.description}
                  </p>

                  {/* Course tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {school.courses.map(c => (
                      <span
                        key={c.name}
                        className={`text-base font-medium px-3 py-1 rounded-full ${school.tagColor}`}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>

                  {/* Bottom link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#1a4a2e]">Explore School</span>
                    <div className="w-8 h-8 rounded-full bg-[#1a4a2e]/8 group-hover:bg-[#1a4a2e] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight size={15} className="text-[#1a4a2e] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#1a4a2e' }}>Programmes at PPSU</h2>
            <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
              Be a part of our world-class education with the combination of classroom and research programmes, at PPSU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programCategories.map((cat, i) => {
              const CatIcon = programCategoryIcons[cat.title];
              return (
                <Link
                  key={cat.title}
                  to={cat.link}
                  className={`reveal reveal-delay-${i + 1} group block rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Top gradient area */}
                  <div className={`bg-gradient-to-br ${cat.gradient} p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-between`}>
                    <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
                    <div>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 mb-3">
                        <CatIcon size={24} className="text-white" />
                      </div>
                      <div className="text-white/60 text-base font-semibold tracking-wider uppercase">{cat.count}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="bg-gray-50 p-6 border border-gray-100 border-t-0 rounded-b-3xl">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.items.slice(0, 4).map(item => (
                        <span key={item} className="text-base bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                      {cat.items.length > 4 && (
                        <span className="text-base text-[#1a4a2e] font-semibold px-2.5 py-1">+{cat.items.length - 4} more</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#1a4a2e]">
                      View Programmes <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY PPSU ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="reveal">
              <p className="text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>Study in Marathwada</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: '#1a4a2e' }}>
                Ready to Join Us on Campus in the Heart of Maharashtra?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                PPSU's Lodga campus offers a world-class learning environment with state-of-the-art labs, a solar-powered green campus, industry-connected programmes, and a vibrant student community — all in one place.
              </p>

              {/* Campus visual card */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-gradient-to-br from-[#f0f7f4] to-[#fdfbeb]">
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-[#1a4a2e]/5 to-[#e4b312]/10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4]">
                    <Building2 size={20} className="text-[#1a4a2e]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-lg font-bold text-[#1a4a2e] mb-1">PPSU Main Campus</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    Lodga, Latur, Maharashtra - 413512
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-base">
                    {[['10 Ac', 'Campus Area'], ['400+', 'Hostel Seats'], ['500 kW', 'Solar Power']].map(([n, l]) => (
                      <div key={l} className="bg-white rounded-xl p-3 border border-gray-100">
                        <div className="font-bold text-[#1a4a2e] text-sm">{n}</div>
                        <div className="text-gray-500 mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/campus" className="inline-flex items-center gap-2 text-sm font-semibold border-2 border-[#1a4a2e] text-[#1a4a2e] px-7 py-3 rounded-full hover:bg-[#1a4a2e] hover:text-white transition-all uppercase tracking-wide">
                  Discover Campus Life
                </Link>
              </div>
            </div>

            {/* Right — Accordion */}
            <div className="reveal reveal-delay-2">
              <AccordionFeature />

              {/* Quick contact */}
              <div className="mt-8 p-6 rounded-2xl bg-[#1a4a2e] text-white">
                <div className="font-semibold mb-4 text-sm">Speak with an Admissions Advisor</div>
                <div className="space-y-3">
                  <a href={`tel:${universityInfo.phone}`} className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={13} />
                    </div>
                    {universityInfo.phone}
                  </a>
                  <a href={`mailto:${universityInfo.admissions}`} className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={13} />
                    </div>
                    {universityInfo.admissions}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── STUDENT STORIES GRID ── */}
      <section className="py-20" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>Life at PPSU</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ color: '#1a4a2e' }}>
                Students Build Real Skills,<br />Real Careers
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                At PPSU, education extends beyond textbooks. Students work on live industry projects, intern with leading companies, participate in national competitions, and develop the confidence to lead.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { stat: '92%', desc: 'Placement rate across all programmes (2024)' },
                  { stat: '₹4.8L', desc: 'Average starting package for graduating students' },
                  { stat: '60+', desc: 'Companies recruiting from PPSU every year' },
                ].map(({ stat, desc }) => (
                  <div key={stat} className="flex items-center gap-4">
                    <span className="text-2xl font-bold flex-shrink-0" style={{ color: '#1a4a2e' }}>{stat}</span>
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm text-gray-600 flex-shrink-0 max-w-[200px] text-right">{desc}</span>
                  </div>
                ))}
              </div>
              <Link to="/campus" className="inline-flex items-center gap-2 font-semibold text-sm border-2 border-[#1a4a2e] text-[#1a4a2e] px-7 py-3 rounded-full hover:bg-[#1a4a2e] hover:text-white transition-all">
                Explore Campus Life <ArrowRight size={15} />
              </Link>
            </div>

            {/* Leadership Slider */}
            <div className="reveal reveal-delay-2">
              <LeadershipSlider />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR CAMPUS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <p className="text-base font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: '#e4b312' }}>Campus Life</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1a4a2e' }}>Our Campus</h2>
              <p className="text-gray-500 mt-2 text-base max-w-xl">
                A world-class learning environment spread across 10 acres in Lodga, Latur — built for innovation, sustainability, and student wellbeing.
              </p>
            </div>
            <div className="hidden sm:flex gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                <ArrowLeft size={16} />
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Campus cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: campusImg,         title: 'PPSU Main Campus',           sub: 'Lodga, Latur, Maharashtra' },
              { img: sustainabilityImg, title: 'School of Sustainability',    sub: 'Green Energy & Design Lab' },
              { img: aiDataImg,         title: 'AI & Data Science Centre',    sub: 'Innovation & Research Hub' },
              { img: medicalImg,        title: 'Healthcare Sciences Wing',    sub: 'Clinical Training Centre' },
            ].map(({ img, title, sub }, i) => (
              <div
                key={title}
                className="reveal group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="p-5 bg-white flex-1">
                  <div className="font-bold text-gray-900 text-base leading-snug mb-1.5">{title}</div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={13} style={{ color: '#1a4a2e' }} className="flex-shrink-0" />
                    {sub}
                  </div>
                </div>

                {/* Gold accent bar */}
                <div className="h-1 flex-shrink-0" style={{ background: '#e4b312' }} />
              </div>
            ))}
          </div>

          {/* View campus link */}
          <div className="mt-10 text-center reveal">
            <Link
              to="/campus"
              className="inline-flex items-center gap-2 font-semibold text-sm border-2 border-[#1a4a2e] text-[#1a4a2e] px-7 py-3 rounded-full hover:bg-[#1a4a2e] hover:text-white transition-all"
            >
              Explore Campus Life <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1a4a2e' }}>Frequently Asked Questions</h2>
          </div>
          <div className="reveal reveal-delay-1">
            <FAQ />
          </div>
          <div className="text-center mt-10 reveal">
            <p className="text-gray-500 text-sm mb-4">Still have questions? Our advisors are happy to help.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full text-white hover:opacity-90 transition-opacity" style={{ background: '#1a4a2e' }}>
              <Mail size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPLY CTA BANNER ── */}
      <section className="py-0" style={{ background: '#1a4a2e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left reveal">
              <div className="inline-flex items-center gap-2 mb-4 text-base font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-[#e4b312]/30 text-[#e4b312]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e4b312] animate-pulse" />
                Admissions Open — 2025–26
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Begin Your Transformation<br />at PPSU
              </h2>
              <p className="text-white/60 mt-3 text-sm max-w-xl">
                Seats are limited across all programmes. Apply early to secure your place at Maharashtra's most innovative skill university.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-2 flex-shrink-0">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2.5 font-bold text-sm px-9 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
                style={{ background: '#e4b312', color: '#0d2818' }}
              >
                <GraduationCap size={18} />
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-9 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[#1a4a2e] transition-all"
              >
                Talk to Counsellor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 reveal">
              <p className="text-base font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#e4b312' }}>Find Us</p>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a4a2e' }}>Visit Our Campus</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                PPSU is located at Lodga, Latur — easily accessible from Latur city and well-connected to Hyderabad, Pune, and Mumbai by road and rail.
              </p>
              <div className="space-y-4">
                {[
                  { Icon: MapPin, label: 'Lodga, Latur, Maharashtra - 413512' },
                  { Icon: Phone, label: universityInfo.phone },
                  { Icon: Mail, label: universityInfo.email },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#f0f7f4' }}>
                      <Icon size={16} style={{ color: '#1a4a2e' }} />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-sm border-2 border-[#1a4a2e] text-[#1a4a2e] px-7 py-3 rounded-full hover:bg-[#1a4a2e] hover:text-white transition-all">
                  Get Directions <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 reveal reveal-delay-2">
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-72 bg-gradient-to-br from-[#f0f7f4] to-[#fdfbeb] flex flex-col items-center justify-center text-center p-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mb-4">
                  <MapPin size={20} className="text-[#1a4a2e]" />
                </div>
                <div className="text-xl font-bold mb-1" style={{ color: '#1a4a2e' }}>Lodga, Latur</div>
                <div className="text-sm text-gray-500 mb-5">Maharashtra - 413512</div>
                <a
                  href="https://maps.google.com/?q=Lodga,Latur,Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{ background: '#1a4a2e' }}
                >
                  Open in Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
