import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { partnersAPI } from '../services/api';

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    // Step 1: Company Info
    company_name: '',
    business_type: '',
    year_established: '',
    employee_count: '',
    website: '',
    
    // Step 2: Contact Info
    contact_person: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    
    // Step 3: Business Details
    interested_products: [],
    annual_revenue: '',
    export_experience: false,
    certifications: [],
    additional_info: ''
  });

  const [selectedProducts, setSelectedProducts] = useState([]);

  const businessTypes = [
    'Retail',
    'Wholesale',
    'Distribution',
    'Manufacturing',
    'Import/Export',
    'E-commerce',
    'Services',
    'Other'
  ];

  const productCategories = [
    'Electronics',
    'Vehicles',
    'Fashion & Apparel',
    'CCTV & Security',
    'Mobile Phones',
    'Laptops & Computers',
    'Perfumes & Cosmetics',
    'Used Clothes',
    'Keke (Trikes)',
    'Spare Parts',
    'Agricultural Products',
    'Building Materials'
  ];

  const certificationOptions = [
    'ISO 9001',
    'CE Marking',
    'RoHS Compliant',
    'FCC Certified',
    'Organic Certified',
    'Fair Trade',
    'GMP Certified',
    'Halal Certified'
  ];

  const countries = [
    'China', 'Liberia', 'Nigeria', 'Ghana', 'Kenya', 
    'South Africa', 'Uganda', 'Tanzania', 'Rwanda', 
    'Ethiopia', 'Zambia', 'Mozambique', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (error) setError('');
  };

  const handleProductSelect = (product) => {
    const updated = selectedProducts.includes(product)
      ? selectedProducts.filter(p => p !== product)
      : [...selectedProducts, product];
    
    setSelectedProducts(updated);
    setFormData({
      ...formData,
      interested_products: updated
    });
  };

  const handleCertificationSelect = (cert) => {
    const updated = formData.certifications.includes(cert)
      ? formData.certifications.filter(c => c !== cert)
      : [...formData.certifications, cert];
    
    setFormData({
      ...formData,
      certifications: updated
    });
  };

  const validateStep = () => {
    switch(currentStep) {
      case 1:
        if (!formData.company_name) return 'Company name is required';
        if (!formData.business_type) return 'Business type is required';
        break;
      case 2:
        if (!formData.contact_person) return 'Contact person name is required';
        if (!formData.email) return 'Email is required';
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Invalid email format';
        if (!formData.phone) return 'Phone number is required';
        if (!formData.country) return 'Country is required';
        break;
      case 3:
        if (selectedProducts.length === 0) return 'Please select at least one product';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleNext = () => {
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    setError('');
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await partnersAPI.create(formData);
      if (response.data) {
        // ✅ Redirect to success page
        navigate('/onboarding/success');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-primary mb-2">
            Become a Partner
          </h1>
          <p className="text-gray-600">
            Join our global network of trusted partners
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step < currentStep
                        ? 'bg-green-500 text-white'
                        : step === currentStep
                        ? 'bg-accent text-primary'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step < currentStep ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                </div>
                <div className={`ml-3 flex-1 ${step === 3 ? 'pr-0' : 'pr-8'}`}>
                  <div className="text-sm font-medium text-gray-900">
                    {step === 1 && 'Company Info'}
                    {step === 2 && 'Contact Details'}
                    {step === 3 && 'Business Details'}
                  </div>
                  {step < 3 && (
                    <div className="hidden sm:block mt-1 w-full h-1 bg-gray-200 rounded">
                      <div
                        className="h-full bg-accent rounded transition-all duration-300"
                        style={{ width: step < currentStep ? '100%' : '0%' }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Company Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-primary mb-4">Company Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="e.g., ABC Trading Ltd"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="business_type"
                      value={formData.business_type}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      required
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year Established
                    </label>
                    <input
                      type="number"
                      name="year_established"
                      value={formData.year_established}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="e.g., 2020"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <select
                      name="employee_count"
                      value={formData.employee_count}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    >
                      <option value="">Select range</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-primary mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contact_person"
                      value={formData.contact_person}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="+1234567890"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      required
                    >
                      <option value="">Select country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="City"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder="Street address"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Business Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-primary mb-4">Business Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Interested Products * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productCategories.map(product => (
                      <label
                        key={product}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                          selectedProducts.includes(product)
                            ? 'bg-accent/10 border-accent'
                            : 'hover:bg-gray-50 border-gray-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selectedProducts.includes(product)}
                          onChange={() => handleProductSelect(product)}
                        />
                        <span className="text-sm">{product}</span>
                        {selectedProducts.includes(product) && (
                          <svg className="w-4 h-4 ml-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Revenue (USD)
                    </label>
                    <select
                      name="annual_revenue"
                      value={formData.annual_revenue}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    >
                      <option value="">Select range</option>
                      <option value="<50k">Less than $50,000</option>
                      <option value="50k-200k">$50,000 - $200,000</option>
                      <option value="200k-1M">$200,000 - $1,000,000</option>
                      <option value="1M-5M">$1,000,000 - $5,000,000</option>
                      <option value=">5M">More than $5,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Export Experience
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="export_experience"
                          value="true"
                          checked={formData.export_experience === true}
                          onChange={() => setFormData({...formData, export_experience: true})}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="export_experience"
                          value="false"
                          checked={formData.export_experience === false}
                          onChange={() => setFormData({...formData, export_experience: false})}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Certifications (Optional)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {certificationOptions.map(cert => (
                      <label
                        key={cert}
                        className={`flex items-center p-2 border rounded cursor-pointer text-sm ${
                          formData.certifications.includes(cert)
                            ? 'bg-accent/10 border-accent'
                            : 'hover:bg-gray-50 border-gray-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.certifications.includes(cert)}
                          onChange={() => handleCertificationSelect(cert)}
                        />
                        {cert}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleInputChange}
                    rows="4"
                    className="input-field w-full"
                    placeholder="Tell us more about your business, specific requirements, or any questions..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="ml-auto px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-xs text-gray-600">Secure Application</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-xs text-gray-600">24hr Response</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌍</div>
            <p className="text-xs text-gray-600">Global Network</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✓</div>
            <p className="text-xs text-gray-600">No Obligation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;