import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, Newspaper, CalendarDays, MailOpen, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { newsEvents } from '../data/content';

const upcomingEvents = [
  { title: 'SkillFest 2025 — National Skill Competition', date: '2025-05-15', venue: 'PPSU Campus, Lodga', category: 'Event' },
  { title: 'Industry Connect Day — AI & Data Science', date: '2025-04-20', venue: 'PPSU Auditorium', category: 'Industry' },
  { title: 'Open Day & Campus Tour', date: '2025-04-10', venue: 'PPSU Campus', category: 'Admissions' },
  { title: 'Annual Sports Meet 2025', date: '2025-03-25', venue: 'PPSU Sports Complex', category: 'Sports' },
  { title: 'Entrepreneurship Bootcamp — 3 Days', date: '2025-03-15', venue: 'PPSU Innovation Hub', category: 'Workshop' },
  { title: 'Guest Lecture: Renewable Energy Trends 2025', date: '2025-03-08', venue: 'PPSU Seminar Hall', category: 'Lecture' },
];

const categories = ['All', 'Announcement', 'Admissions', 'Partnership', 'Event', 'Campus'];
const categoryColors = {
  'All': 'bg-gray-100 text-gray-700',
  'Announcement': 'bg-blue-100 text-blue-700',
  'Admissions': 'bg-green-100 text-green-700',
  'Partnership': 'bg-purple-100 text-purple-700',
  'Event': 'bg-amber-100 text-amber-700',
  'Campus': 'bg-teal-100 text-teal-700',
};

function NewsCard({ item, size = 'normal' }) {
  const isLarge = size === 'large';
  return (
    <div className={`card overflow-hidden flex flex-col h-full ${isLarge ? '' : ''}`}>
      <div className={`bg-gradient-to-br from-forest-100 to-forest-50 flex items-center justify-center ${isLarge ? 'h-48' : 'h-32'}`}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4]">
          {item.type === 'news'
            ? <Newspaper size={20} className="text-[#1a4a2e]" />
            : <CalendarDays size={20} className="text-[#1a4a2e]" />
          }
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}>
            {item.category}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Calendar size={12} />
            {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
        </div>
        <h3 className={`font-semibold text-gray-800 leading-tight ${isLarge ? 'text-lg' : 'text-sm'}`}>
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.excerpt}</p>
        <button className="text-sm text-forest-DEFAULT font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto self-start">
          Read More <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? newsEvents
    : newsEvents.filter(n => n.category === activeCategory);

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
        title="News & Events"
        subtitle="Stay updated with the latest happenings at Pasha Patel SkillTech University — announcements, achievements, events, and milestones."
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Latest News</h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 animate-on-scroll">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-forest-DEFAULT text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <NewsCard item={item} size={i === 0 ? 'large' : 'normal'} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f0f7f4] mx-auto mb-4">
                <MailOpen size={20} className="text-[#1a4a2e]" />
              </div>
              <p>No news in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Upcoming Events</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Mark your calendar — exciting events, workshops, seminars, and competitions are coming up at PPSU.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <div
                key={event.title}
                className="card p-6 animate-on-scroll flex gap-4"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-forest-DEFAULT text-white rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-center">
                  <div className="text-xs font-medium leading-none">
                    {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
                  </div>
                  <div className="text-xl font-bold leading-tight">
                    {new Date(event.date).getDate()}
                  </div>
                </div>
                <div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[event.category] || 'bg-gray-100 text-gray-700'} mb-2 inline-block`}>
                    {event.category}
                  </span>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-1">{event.title}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin size={11} className="flex-shrink-0" />
                    {event.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-forest-DEFAULT">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center animate-on-scroll">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 mx-auto mb-6">
            <MailOpen size={20} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/75 mb-8">Subscribe to the PPSU newsletter and never miss an important update, event, or announcement.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold-DEFAULT text-sm"
            />
            <button className="bg-gold-DEFAULT hover:bg-gold-600 text-forest-dark font-semibold px-6 py-3 rounded-full text-sm transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
