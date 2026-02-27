import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Global Network',
      description:
        'Access markets across 20+ countries with our established trade routes and local partnerships.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Quality Assurance',
      description:
        'All products are verified and certified to meet international standards and regulations.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'Best Prices',
      description:
        'Competitive pricing with flexible payment terms and secure transaction processing.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: 'Logistics Support',
      description:
        'End-to-end shipping solutions with real-time tracking and customs assistance.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Market Insights',
      description:
        'Provide real-time market data and trends for our potential customers to make informed business decisions.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Partner Network',
      description:
        'Join a community of trusted partners and expand your business reach.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ];

  const stats = [
    { label: 'Countries Served', value: '20+' },
    { label: 'Active Partners', value: '40+' },
    { label: 'Annual Trade Volume', value: '$250K+' },
    { label: 'Years of Experience', value: '4+' },
  ];

  const products = [
    {
      name: 'Electronics',
      image:
        'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=300',
      items: ['Laptops', 'Tablets', 'Desktops', 'Cameras', 'Smartphones', 'Accessories'],
      link: '/electronics',
    },
    {
      name: 'Vehicles',
      image:
        'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=300',
      items: ['SUVs', 'Sedans', '3-Seated Keke', '10-Tire Trucks'],
      link: '/vehicles',
    },
    {
      name: 'Fashion',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300',
      items: ['Sneakers', 'Apparel', 'Accessories'],
      link: '/fashion',
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      company: 'Tech Solutions Ltd',
      position: 'CEO',
      content:
        'Norgen Trade has been instrumental in expanding our business globally. Their support and expertise are unmatched.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    },
    {
      name: 'Jane Smith',
      company: 'Global Imports Co',
      position: 'Director',
      content:
        'The quality of products and reliability of service has made them our go-to partner for international trade.',
      image:
        'https://images.unsplash.com/photo-1494790108777-283adc7e7c6e?auto=format&fit=crop&q=80&w=100',
    },
    {
      name: 'Mike Johnson',
      company: 'Fashion Hub International',
      position: 'Founder',
      content:
        'Outstanding network and support team. They helped us navigate complex international markets with ease.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    },
  ];

  const footerLinks = {
    quickLinks: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ],
    social: [
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Facebook', url: '#' },
      { name: 'Instagram', url: '#' }
    ]
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* HERO SECTION */}
      <section className="relative bg-primary text-accent overflow-hidden pb-40 md:pb-48">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Global Trade Solutions for{' '}
              <span className="text-white">Your Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Connect with international markets through our trusted trade
              network. Quality products, reliable service, and lasting
              partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/onboarding"
                    className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
                  >
                    Become a Partner
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/login"
                    className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent/10 transition"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  Go to Dashboard
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-24 md:h-32"
            preserveAspectRatio="none"
          >
            <path
              fill="#1a365d"
              d="M0,80L60,96C120,112,240,144,360,144C480,144,600,112,720,106.7C840,101,960,123,1080,138.7C1200,155,1320,165,1380,154.7L1440,144L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-accent">{s.value}</div>
              <div className="text-gray-400 uppercase text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-300 text-xl">
              Explore our wide range of quality products from global markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <Link
                key={i}
                to={product.link || '#'}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-2">
                      {product.name}
                    </h3>
                    <ul className="text-gray-300 space-y-1">
                      {product.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent mb-4">
              Why Choose Norgen Trade?
            </h2>
            <p className="text-gray-300 text-xl">
              We provide comprehensive solutions for all your international trade needs and fast delivery on every routes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-primary-light p-8 rounded-xl border border-gray-700 hover:-translate-y-2 transition"
              >
                <div
                  className={`${f.bgColor} ${f.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent mb-4">
              What Our Partners Say
            </h2>
            <p className="text-gray-300 text-xl">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-primary-light p-6 rounded-xl border border-gray-700"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-accent font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-400">
                      {t.position}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our network of successful partners and access global markets today.
          </p>
          <Link
            to="/onboarding"
            className="inline-flex items-center bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition gap-2"
          >
            Start Your Application
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-dark border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-display font-bold text-accent mb-4">
               Guangzhou Norgen Trade
              </h3>
              <p className="text-gray-400 text-sm">
                Your trusted partner in international trade since 2021. 
                Connecting businesses globally with quality products and reliable service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-accent mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  Guangzhou Trade Center, China
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  +86 20 1234 5678
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  info@norgentrade.com
                </li>
                <li className="flex items-center gap-2">
                  <span>🕒</span>
                  Mon-Fri: 9AM - 6PM (GMT+8)
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-accent mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-accent transition"
                  >
                    {social.name}
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-accent mb-2">
                  Stay Updated
                </h5>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm rounded-l-lg bg-primary border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-accent text-primary text-sm font-semibold rounded-r-lg hover:bg-accent/90 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Guangzhou Norgen International Trade. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-accent transition">Privacy</Link>
                <Link to="/terms" className="hover:text-accent transition">Terms</Link>
                <Link to="/sitemap" className="hover:text-accent transition">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;