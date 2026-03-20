import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const lastUpdated = "March 20, 2026";

  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Header Section */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          {/* Introduction */}
          <section>
            <p>
              At <strong>Healthy Wing's Physiotherapy & Holistic Wellness</strong>, we are committed to protecting your privacy and ensuring that your personal and medical information is handled safely and responsibly. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or clinic.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information when you interact with us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, age, gender, email address, phone number, and residential address.</li>
              <li><strong>Medical Information:</strong> Past medical history, current health conditions, physiotherapy records, and dietary requirements necessary for your treatment.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and website usage data collected through cookies to improve our website experience.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use the collected information strictly for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, manage, and personalize your physiotherapy and diet consultation services.</li>
              <li>To schedule and confirm appointments, and send necessary clinic updates.</li>
              <li>To process payments and manage billing.</li>
              <li>To improve our website functionality and patient experience.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Data Security & Confidentiality</h2>
            <p>
              Your health and personal data is strictly confidential. We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect. Only authorized clinic staff have access to your medical records for the purpose of your treatment.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Sharing Your Information</h2>
            <p>
              <strong>We do not sell, trade, or rent your personal identification information to others.</strong> We may only share your information under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>With other healthcare professionals (only with your explicit consent) if referral or further medical opinion is required.</li>
              <li>To comply with legal obligations, court orders, or government regulations.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Your Rights</h2>
            <p>
              You have the right to request access to the personal and medical data we hold about you. You can also request corrections to any inaccurate data or ask us to delete your records, subject to legal and healthcare retention requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">6. Cookies Policy</h2>
            <p>
              Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. However, doing so may cause some parts of the site to function improperly.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-green-50 p-6 rounded-2xl border border-green-100 mt-10">
            <h2 className="text-xl font-bold text-green-800 mb-3">7. Contact Us</h2>
            <p className="text-green-700 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <div className="text-green-800 font-medium space-y-1">
              <p><strong>Healthy Wing's Physiotherapy & Holistic Wellness</strong></p>
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