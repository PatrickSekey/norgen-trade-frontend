import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const OnboardingSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    if (showConfetti) {
      // Launch confetti on page load
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1a365d', '#d4af37', '#2d3748']
      });

      // Launch more confetti after a delay
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 200);

      setShowConfetti(false);
    }
  }, [showConfetti]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Just applied to Norgen Trade!',
        text: 'I just submitted my partner application to Norgen International Trade. Excited to start this journey!',
        url: window.location.origin,
      });
    } else {
      // Fallback - copy link to clipboard
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-accent via-primary to-accent"></div>

          <div className="p-8 md:p-12 text-center">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 animate-ping">
                <div className="w-8 h-8 bg-accent rounded-full opacity-75"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-ping">
                <div className="w-6 h-6 bg-primary rounded-full opacity-75"></div>
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Application Submitted!
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your interest in becoming a Norgen Trade partner
            </p>

            {/* Application ID */}
            <div className="bg-accent/10 rounded-2xl p-6 mb-8 inline-block">
              <p className="text-sm text-gray-600 mb-2">Application Reference</p>
              <p className="text-2xl font-mono font-bold text-primary">
                NOR-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                What happens next?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review Period</h3>
                    <p className="text-gray-600 text-sm">
                      Our team will review your application within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interview Call</h3>
                    <p className="text-gray-600 text-sm">
                      A partnership manager will contact you to discuss next steps
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Welcome Aboard!</h3>
                    <p className="text-gray-600 text-sm">
                      Upon approval, you'll get access to partner resources and support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Timeline */}
            <div className="bg-primary/5 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-primary">Estimated Timeline</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">24h</div>
                  <div className="text-xs text-gray-600">Initial Review</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">48h</div>
                  <div className="text-xs text-gray-600">Interview</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">3-5d</div>
                  <div className="text-xs text-gray-600">Final Decision</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go to Home
              </Link>

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Track Application
              </Link>

              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              You will receive a confirmation email shortly with your application details.
              <br />
              <span className="text-primary font-medium">Have questions?</span> Contact us at{' '}
              <a href="mailto:partners@norgentrade.com" className="text-accent hover:underline">
                partners@norgentrade.com
              </a>
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm mb-1">Partner Guide</h3>
            <p className="text-xs text-gray-600">Learn about partnership benefits</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm mb-1">FAQ</h3>
            <p className="text-xs text-gray-600">Common questions answered</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm mb-1">Contact Support</h3>
            <p className="text-xs text-gray-600">We're here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSuccess;