import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  GlobeAltIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  RocketLaunchIcon,
  PaperAirplaneIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const shippingMethods = [
    {
      icon: <TruckIcon className="w-12 h-12" />,
      title: 'Sea Freight',
      description: 'Cost-effective shipping for bulk orders. Ideal for large shipments and heavy cargo.',
      time: '25-40 days',
      price: '$$',
      features: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'Port-to-port delivery', 'Customs clearance assistance']
    },
    {
      icon: <PaperAirplaneIcon className="w-12 h-12" />,
      title: 'Air Freight',
      description: 'Fastest shipping option for urgent deliveries. Perfect for time-sensitive goods.',
      time: '3-7 days',
      price: '$$$',
      features: ['Express service available', 'Real-time tracking', 'Door-to-door delivery', 'Priority handling']
    },
    {
      icon: <TruckIcon className="w-12 h-12" />,
      title: 'Rail Freight',
      description: 'Efficient land transport to Europe and Asia. Balanced speed and cost.',
      time: '18-25 days',
      price: '$$',
      features: ['Block train service', 'Customs bonded', 'Door-to-door options', 'Regular schedules']
    },
    {
      icon: <TruckIcon className="w-12 h-12" />,
      title: 'Road Freight',
      description: 'Last-mile delivery and overland transport within Asia and Europe.',
      time: '5-15 days',
      price: '$$',
      features: ['Cross-border transport', 'Temperature controlled', 'Express options', 'Real-time tracking']
    }
  ];

  const services = [
    {
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      title: 'Customs Clearance',
      description: 'We handle all documentation and customs procedures to ensure smooth clearance.'
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Extensive network of partners in over 50 countries for seamless delivery.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Cargo Insurance',
      description: 'Comprehensive insurance coverage for your valuable shipments.'
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'Competitive Rates',
      description: 'Best prices through consolidated shipping and volume discounts.'
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Real-time Tracking',
      description: 'Monitor your shipment 24/7 with our advanced tracking system.'
    },
    {
      icon: <MapIcon className="w-8 h-8" />,
      title: 'Warehousing',
      description: 'Secure storage facilities in Guangzhou for consolidation and distribution.'
    }
  ];

  const destinations = [
    { region: 'Africa', countries: ['Liberia', 'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Uganda', 'Tanzania', 'Rwanda'] },
    { region: 'Asia', countries: ['China', 'Japan', 'South Korea', 'Vietnam', 'Thailand', 'Malaysia', 'Singapore', 'Indonesia'] },
    { region: 'Europe', countries: ['UK', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Poland', 'Romania'] },
    { region: 'Americas', countries: ['USA', 'Canada', 'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia', 'Peru'] },
    { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Jordan', 'Israel', 'Turkey'] },
    { region: 'Oceania', countries: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'] }
  ];

  const process = [
    {
      step: 1,
      title: 'Inquiry & Quote',
      description: 'Contact us with your shipment details. We provide a competitive quote within 24 hours.'
    },
    {
      step: 2,
      title: 'Booking & Documentation',
      description: 'Confirm booking and submit necessary documentation. We handle customs paperwork.'
    },
    {
      step: 3,
      title: 'Pickup & Consolidation',
      description: 'Goods collected from suppliers and consolidated at our Guangzhou warehouse.'
    },
    {
      step: 4,
      title: 'Shipping & Transit',
      description: 'Your cargo is shipped via your chosen method. Track it in real-time.'
    },
    {
      step: 5,
      title: 'Customs Clearance',
      description: 'We manage customs clearance at destination port/airport.'
    },
    {
      step: 6,
      title: 'Final Delivery',
      description: 'Last-mile delivery to your doorstep or warehouse.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-primary-dark border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-accent hover:text-accent/80 transition"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-display font-bold text-accent">
              Shipping Services
            </h1>
          </div>
          <p className="text-gray-400 mt-2">
            Reliable cargo shipping from China to destinations worldwide
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4">
            Your Gateway to Global Trade
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in shipping goods from China to every corner of the world. 
            Whether you're importing electronics, vehicles, fashion, or any other products, 
            we provide end-to-end logistics solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-accent mb-8 text-center">
            Shipping Methods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingMethods.map((method, index) => (
              <div
                key={index}
                className="bg-primary-light p-6 rounded-xl border border-gray-700 hover:border-accent/50 transition group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">Transit: {method.time}</span>
                  <span className="text-accent font-bold">{method.price}</span>
                </div>
                <ul className="text-gray-400 text-xs space-y-1">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <span className="text-accent">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-accent mb-4 text-center">
            What We Offer
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive logistics solutions beyond just shipping
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition"
              >
                <div className="text-accent mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-accent mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-accent mb-4 text-center">
            How It Works
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Simple 6-step process from inquiry to delivery
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div
                key={step.step}
                className="bg-primary-light p-6 rounded-xl border border-gray-700 relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-accent mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-accent mb-4 text-center">
            We Ship Everywhere
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Serving businesses and individuals across the globe
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-primary p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-lg font-bold text-accent mb-3 flex items-center gap-2">
                  <GlobeAltIcon className="w-5 h-5" />
                  {dest.region}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {dest.countries.map((country, i) => (
                    <span key={i} className="text-gray-400 text-sm">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-accent mb-4 text-center">
            Why Choose Norgen Trade?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <div className="text-gray-400">Shipments Yearly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-display font-bold text-accent mb-4">
            Ready to Ship Your Goods?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free quote within 24 hours. No obligation, just expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-primary border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <PhoneIcon className="w-4 h-4 text-accent" />
            <span>+86 20 1234 5678</span>
          </div>
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <ChatBubbleLeftRightIcon className="w-4 h-4 text-accent" />
            <span>We speak English, Chinese, French, Arabic</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-accent" />
            <span>Mon-Fri: 9AM - 6PM (GMT+8)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;