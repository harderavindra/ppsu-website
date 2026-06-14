import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumbs = [], children }) {
  return (
    <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-dark/30" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-gold-DEFAULT/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-shadow">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
