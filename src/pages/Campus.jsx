import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, BookOpen, TreePine, UtensilsCrossed,
  Dumbbell, Theater, Sun, Droplets, Leaf, Recycle, Zap, Construction,
  Home, Shield,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { facilities } from '../data/content';

const campusLife = [
  {
    title: 'Student Clubs & Societies',
    description: 'Over 20 active student clubs spanning technology, arts, sports, culture, and entrepreneurship.',
    Icon: Theater,
    items: ['Tech Club', 'Entrepreneurs Club', 'Green Earth Society', 'Cultural Association', 'Sports Council', 'Drama Club', 'Photography Club', 'NSS & NCC'],
  },
  {
    title: 'Sports & Fitness',
    description: 'Modern sports infrastructure encouraging physical fitness and competitive excellence.',
    Icon: Dumbbell,
    items: ['Cricket Ground', 'Football & Volleyball Courts', 'Basketball Court', 'Indoor Badminton', 'Modern Gymnasium', 'Yoga & Meditation Center', 'Table Tennis', 'Athletics Track'],
  },
  {
    title: 'Cultural Activities',
    description: 'Vibrant cultural calendar celebrating Maharashtra\'s rich heritage and India\'s diversity.',
    Icon: Theater,
    items: ['Annual Cultural Fest', 'Classical & Folk Dance', 'Music Concerts', 'Literary Events', 'Art Exhibitions', 'Independence Day Celebrations', 'Ganesh Festival', 'Annual Day'],
  },
];

const housing = [
  {
    type: 'Boys Hostel',
    capacity: '200 students',
    features: ['Separate blocks with 24/7 security', 'Wi-Fi enabled rooms', 'Common room & recreation area', 'In-house mess with nutritious meals', 'Laundry facilities', 'Medical room'],
    Icon: Home,
  },
  {
    type: 'Girls Hostel',
    capacity: '200 students',
    features: ['Warden-supervised secure premises', 'Wi-Fi enabled rooms', 'Common room & recreation area', 'In-house mess with nutritious meals', 'Laundry facilities', 'CCTV surveillance'],
    Icon: Shield,
  },
];

const sustainability = [
  { title: '500 kW Solar Power Plant',   desc: 'Meeting 80% of campus energy needs through renewable solar energy',              Icon: Sun },
  { title: 'Rainwater Harvesting',       desc: 'Campus-wide rainwater collection and groundwater recharge systems',               Icon: Droplets },
  { title: 'Organic Campus Garden',      desc: 'Student-maintained organic garden producing fresh vegetables for the mess',       Icon: Leaf },
  { title: 'Zero Single-Use Plastic',    desc: 'Campus-wide ban on single-use plastics with biodegradable alternatives',         Icon: Recycle },
  { title: 'EV Charging Infrastructure', desc: 'Electric vehicle charging points across campus for students and staff',           Icon: Zap },
  { title: 'Green Building Standards',   desc: 'All campus buildings designed to GRIHA (Green Rating) standards',                Icon: Construction },
];

/* Campus overview grid items */
const campusOverviewItems = [
  { Icon: Building2,        label: 'Academic Blocks',   sub: 'Modern classrooms & labs' },
  { Icon: BookOpen,         label: 'Central Library',   sub: '50,000+ volumes' },
  { Icon: TreePine,         label: 'Green Spaces',      sub: 'Parks & gardens' },
  { Icon: UtensilsCrossed,  label: 'Student Cafeteria', sub: 'Multi-cuisine food court' },
  { Icon: Dumbbell,         label: 'Sports Complex',    sub: 'Indoor & outdoor facilities' },
  { Icon: Theater,          label: 'Auditorium',        sub: '500-seat air-conditioned' },
];

/* Facilities icon map (content.js uses string icons) */
import { Laptop, HeartPulse, Wrench, Radio } from 'lucide-react';

const facilityIconMap = {
  '💻': Laptop,
  '🌞': Sun,
  '🏥': HeartPulse,
  '🔧': Wrench,
  '📡': Radio,
  '📚': BookOpen,
  '⚽': Dumbbell,
  '🏠': Home,
};

export default function Campus() {
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
        title="Campus Life"
        subtitle="Experience a vibrant, modern, and sustainable campus designed to nurture your holistic development — academically, socially, and personally."
        breadcrumbs={[{ label: 'Campus' }]}
      />

      {/* Campus overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="inline-block bg-forest-50 text-forest-DEFAULT text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                Our Campus
              </div>
              <h2 className="section-title mb-6">A Campus Built for the Future</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Spread across a lush 10-acre campus in Lodga, Latur, PPSU offers a world-class learning environment that seamlessly blends modern infrastructure with ecological sustainability. Every building, lab, and open space has been thoughtfully designed to inspire innovation and foster community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our campus is not just a place to study — it's a living laboratory where the concepts of sustainability, technology, and design that we teach are put into practice every day.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '10', u: 'Acres Campus' },
                  { n: '8+', u: 'Academic Buildings' },
                  { n: '500 kW', u: 'Solar Capacity' },
                  { n: '400+', u: 'Hostel Seats' },
                ].map(({ n, u }) => (
                  <div key={u} className="text-center p-4 bg-forest-50 rounded-2xl">
                    <div className="text-2xl font-bold text-forest-DEFAULT">{n}</div>
                    <div className="text-xs text-gray-600 mt-1">{u}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              {campusOverviewItems.map((item) => (
                <div key={item.label} className="card p-5 text-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mx-auto mb-2">
                    <item.Icon size={20} className="text-[#1a4a2e]" />
                  </div>
                  <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mb-4">World-Class Facilities</h2>
            <p className="section-subtitle max-w-2xl mx-auto">State-of-the-art infrastructure designed to support cutting-edge learning and research across all disciplines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, i) => {
              const FacilityIcon = facilityIconMap[facility.icon] || BookOpen;
              return (
                <div
                  key={facility.name}
                  className="card p-6 animate-on-scroll"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mb-4">
                    <FacilityIcon size={20} className="text-[#1a4a2e]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mb-4">Student Life at PPSU</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Beyond the classroom, PPSU offers a rich tapestry of activities, clubs, sports, and cultural experiences.</p>
          </div>
          <div className="space-y-12">
            {campusLife.map((section, i) => (
              <div
                key={section.title}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-on-scroll ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mb-4">
                    <section.Icon size={20} className="text-[#1a4a2e]" />
                  </div>
                  <h3 className="text-2xl font-bold text-forest-DEFAULT mb-4">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{section.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map(item => (
                      <span key={item} className="text-sm bg-forest-50 text-forest-DEFAULT px-3 py-1.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-forest-50 to-gold-50 rounded-3xl p-10 text-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#f0f7f4] mx-auto mb-4">
                    <section.Icon size={32} className="text-[#1a4a2e]" />
                  </div>
                  <div className="text-xl font-bold text-forest-DEFAULT">{section.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="section-title mb-4">Student Housing</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Safe, comfortable, and well-equipped residential facilities for students from across India.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {housing.map((h, i) => (
              <div
                key={h.type}
                className="card p-8 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4]">
                    <h.Icon size={20} className="text-[#1a4a2e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-DEFAULT">{h.type}</h3>
                    <span className="text-sm text-gold-600 font-medium">{h.capacity}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {h.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-forest-DEFAULT" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-forest-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-block bg-gold-DEFAULT/20 text-gold-light text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Green Campus
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Living Our Values</h2>
            <p className="text-white/75 max-w-2xl mx-auto">Our campus is a living demonstration of the sustainability principles we teach — every initiative embodies our commitment to the environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainability.map((item, i) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 mb-4">
                  <item.Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center animate-on-scroll">
          <h2 className="section-title mb-6">Come Visit Our Campus</h2>
          <p className="section-subtitle mb-8">Experience the PPSU campus in person. Schedule a campus visit and see our facilities, meet faculty, and get your questions answered.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Schedule a Campus Visit <ArrowRight size={18} />
            </Link>
            <Link to="/admissions" className="btn-outline text-base px-8 py-4">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
