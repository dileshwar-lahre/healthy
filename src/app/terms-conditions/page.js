import React from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  const lastUpdated = "March 20, 2026";

  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Header Section */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Introduction</h2>
            <p>
              Welcome to <strong>Healthy Wing&apos;s Physiotherapy &amp; Holistic Wellness</strong>. These Terms and Conditions govern your use of our website and services. By accessing our clinic, booking an appointment, or using our website, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Medical Disclaimer</h2>
            <p>
              The content provided on our website, including text, graphics, images, and other materials, is for informational purposes only. It is <strong>not intended to be a substitute for professional medical advice, diagnosis, or treatment</strong>. Always seek the advice of our physiotherapists or other qualified health providers with any questions you may have regarding a medical condition. Results of physiotherapy and diet plans vary from person to person.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Appointments &amp; Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Appointments must be booked in advance through our website, via phone, or in person at our Bilaspur clinic.</li>
              <li>Please arrive at least 10 minutes before your scheduled appointment time.</li>
              <li>If you need to cancel or reschedule, please provide at least <strong>24 hours&apos; notice</strong>. Late cancellations or no-shows may be subject to a cancellation fee.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Payments &amp; Billing</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Payment for consultations, therapy sessions, and wellness programs is due at the time of service unless previously arranged.</li>
              <li>We accept cash, UPI, and major credit/debit cards.</li>
              <li>If you are using health insurance, it is your responsibility to verify coverage. You are ultimately responsible for any unpaid balances.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Patient Conduct</h2>
            <p>
              We strive to maintain a safe, healing, and respectful environment for all patients and staff. Any form of harassment, abusive language, or inappropriate behavior will result in immediate termination of services and may be reported to local authorities.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">6. Privacy &amp; Confidentiality</h2>
            <p>
              Your medical records and personal information are kept strictly confidential in accordance with applicable healthcare and data protection laws. We will not share your personal health information with third parties without your explicit written consent, except where required by law.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this website. Your continued use of our services constitutes your acceptance of the revised terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-green-50 p-6 rounded-2xl border border-green-100 mt-10">
            <h2 className="text-xl font-bold text-green-800 mb-3">8. Contact Us</h2>
            <p className="text-green-700 mb-4">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
            </p>
            <div className="text-green-800 font-medium space-y-1">
              <p><strong>Healthy Wing&apos;s Physiotherapy &amp; Holistic Wellness</strong></p>
              <p>H2/24 Narmada Nagar Chowk,</p>
              <p>Nehru Nagar Rd, Beside Shiv Mandir,</p>
              <p>Bilaspur, Chhattisgarh – 495001</p>
            </div>
          </section>

        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}