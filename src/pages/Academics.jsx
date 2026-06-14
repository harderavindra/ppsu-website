import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Users, BookOpen, Award, ChevronDown, ChevronUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import { schools } from '../data/content';

function CourseCard({ course, school }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${school.color}`} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="font-bold text-gray-800 text-lg leading-tight">{course.name}</h4>
            <p className="text-sm text-gray-500 mt-0.5">{course.fullName}</p>
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${school.tagColor}`}>
            {course.duration}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{course.description}</p>
        <div className="flex gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
          <span className="flex items-center gap-1"><Users size={12} /> {course.seats} seats</span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-forest-DEFAULT font-medium hover:text-forest-light transition-colors"
        >
          {expanded ? 'Show Less' : 'Course Details'}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Eligibility</h5>
              <p className="text-sm text-gray-700">{course.eligibility}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Highlights</h5>
              <div className="flex flex-wrap gap-2">
                {course.highlights.map(h => (
                  <span key={h} className="text-xs bg-forest-50 text-forest-DEFAULT px-3 py-1 rounded-full">{h}</span>
                ))}
              </div>
            </div>
            <Link to="/admissions" className="btn-primary text-sm inline-flex w-full justify-center mt-2">
              Apply for This Program <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function SchoolSection({ school }) {
  return (
    <section id={school.id} className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* School info */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className={`inline-flex items-center gap-3 bg-gradient-to-br ${school.color} text-white px-5 py-3 rounded-2xl mb-6`}>
              <span className="text-3xl">{school.icon}</span>
              <span className="font-bold text-sm">School {schools.indexOf(school) + 1}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-forest-DEFAULT mb-4 leading-tight">
              {school.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{school.longDescription}</p>

            {school.courseCategories && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 text-sm">Available Course Categories</h4>
                <div className="space-y-2">
                  {school.courseCategories.map(cat => (
                    <div key={cat} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-DEFAULT" />
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-gray-700 mb-3 text-sm">Career Prospects</h4>
              <div className="flex flex-wrap gap-2">
                {school.careerProspects.map(career => (
                  <span key={career} className={`text-xs px-3 py-1.5 rounded-full ${school.tagColor}`}>
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-700">Programs Offered</h3>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${school.tagColor}`}>
                {school.courses.length} program{school.courses.length > 1 ? 's' : ''}
              </span>
            </div>
            {school.courses.map(course => (
              <CourseCard key={course.name} course={course} school={school} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Academics() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [location]);

  return (
    <div>
      <PageHero
        title="Academic Programs"
        subtitle="Five specialized schools offering cutting-edge, industry-aligned programs in sustainability, AI, business, healthcare, and advanced skill education."
        breadcrumbs={[{ label: 'Academics' }]}
      />

      {/* Schools navigator */}
      <div className="sticky top-[72px] lg:top-[96px] z-40 bg-white/95 backdrop-blur-nav border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            {schools.map((school) => (
              <a
                key={school.id}
                href={`#${school.id}`}
                className="flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-forest-50 hover:text-forest-DEFAULT transition-colors"
              >
                <span>{school.icon}</span>
                <span className="hidden md:inline">{school.shortName}</span>
                <span className="md:hidden">{school.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overview cards */}
      <section className="py-16 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title mb-4">Our Schools at a Glance</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Each school is a center of excellence with specialized infrastructure, expert faculty, and direct industry connections.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {schools.map((school, i) => (
              <a
                key={school.id}
                href={`#${school.id}`}
                className={`card p-6 text-center group animate-on-scroll`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="text-4xl mb-3 block">{school.icon}</span>
                <div className="font-semibold text-gray-800 text-sm leading-tight mb-2 group-hover:text-forest-DEFAULT transition-colors">
                  {school.shortName}
                </div>
                <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${school.tagColor}`}>
                  {school.courses.length} program{school.courses.length > 1 ? 's' : ''}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="animate-on-scroll overflow-x-auto">
            <h2 className="section-title mb-8 text-center">All Programs Overview</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-forest-DEFAULT text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold rounded-tl-xl">Program</th>
                  <th className="text-left px-4 py-4 text-sm font-semibold">School</th>
                  <th className="text-left px-4 py-4 text-sm font-semibold">Duration</th>
                  <th className="text-left px-4 py-4 text-sm font-semibold">Seats</th>
                  <th className="text-left px-4 py-4 text-sm font-semibold rounded-tr-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {schools.flatMap((school, si) =>
                  school.courses.map((course, ci) => (
                    <tr
                      key={`${school.id}-${ci}`}
                      className={`border-b border-gray-100 hover:bg-forest-50 transition-colors ${si % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800 text-sm">{course.name}</div>
                        <div className="text-xs text-gray-500">{course.fullName}</div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${school.tagColor}`}>
                          {school.shortName}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">{course.duration}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{course.seats}</td>
                      <td className="px-4 py-4">
                        <Link
                          to="/admissions"
                          className="text-xs bg-forest-DEFAULT text-white px-4 py-2 rounded-full hover:bg-forest-light transition-colors inline-flex items-center gap-1"
                        >
                          Apply <ArrowRight size={12} />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual school sections */}
      {schools.map((school, i) => (
        <div key={school.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <div className={`h-1 bg-gradient-to-r ${school.color}`} />
          <SchoolSection school={school} />
        </div>
      ))}

      {/* Apply CTA */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/80 text-lg mb-8">Seats are limited. Secure your place in Maharashtra's most innovative skill university today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn-primary text-lg px-10 py-4">
              Start Application <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary text-lg px-10 py-4">
              Ask a Counsellor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
