import React from "react";
import Link from "next/link";

export default function RefundPolicy() {
  const lastUpdated = "March 20, 2026";

  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Header Section */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Cancellation & Refund Policy
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
              At <strong>Healthy Wing's Physiotherapy & Holistic Wellness</strong>, we strive to provide the best possible care to our patients. To ensure smooth operations and fair practices for both our clinic and our patients, we have established the following Cancellation and Refund Policy. By booking an appointment or purchasing a service/package, you agree to these terms.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Appointment Cancellations & Rescheduling</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>24-Hour Notice:</strong> If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance.</li>
              <li><strong>Late Cancellations & No-Shows:</strong> Appointments canceled with less than 24 hours' notice, or instances where the patient fails to show up, are non-refundable. A cancellation fee may be applied to your next visit.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Consultation & Single Session Fees</h2>
            <p>
              Fees paid for a single consultation, assessment, or individual physiotherapy session are <strong>strictly non-refundable</strong> once the service has been provided. If you have pre-paid and cancel within the 24-hour window, the amount can be adjusted against a rescheduled appointment.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Therapy Packages & Treatment Plans</h2>
            <p className="mb-2">We offer discounted packages for long-term physiotherapy and rehabilitation. Refunds for packages are subject to the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If you decide to discontinue a treatment package due to medical reasons (supported by a valid medical certificate from a specialist), a pro-rata refund will be issued for the unutilized sessions.</li>
              <li>In the case of a pro-rata refund, the sessions already availed will be charged at the standard single-session rate, not the discounted package rate.</li>
              <li>Packages are valid for a specific duration (e.g., 30 or 60 days). Unused sessions after the expiry date are non-refundable and non-transferable.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Diet & Nutrition Plans</h2>
            <p>
              Customized diet and nutrition plans created by our Clinical Dietitian involve significant time, expertise, and personalized effort. Therefore, <strong>once a diet plan has been shared with the patient, no refunds will be issued</strong> under any circumstances.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Refund Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approved refunds will be processed using the original method of payment.</li>
              <li>Please allow <strong>5 to 7 business days</strong> for the refunded amount to reflect in your bank account or credit card statement.</li>
              <li>Cash payments will be refunded via UPI or bank transfer for documentation purposes.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-green-50 p-6 rounded-2xl border border-green-100 mt-10">
            <h2 className="text-xl font-bold text-green-800 mb-3">6. Contact Us</h2>
            <p className="text-green-700 mb-4">
              To request a cancellation, reschedule an appointment, or inquire about a refund, please contact our front desk at:
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