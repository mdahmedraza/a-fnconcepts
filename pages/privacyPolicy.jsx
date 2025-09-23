// components/PrivacyPolicy.js
import Footer from "@/components/footer/Footer";
const privacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-gray-300 px-6 py-12">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5651e5] mb-6">
          Privacy Policy
        </h1>
        <p className="mb-8">
          At <span className="font-semibold">FN Concepts</span>, your privacy is our top
          priority. This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, phone number,
          company details, and project requirements when you contact us or use our services.
          We also collect technical data like IP addresses, browser type, and usage statistics
          to improve our website performance.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
          <li>Provide and improve our IT services (web, app, software, AI, SEO).</li>
          <li>Respond to your inquiries and support requests.</li>
          <li>Send updates, proposals, and relevant service information.</li>
          <li>Ensure website functionality, security, and performance.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">3. Data Protection</h2>
        <p className="mb-4">
          We implement strict security measures to safeguard your personal information.
          While we strive to protect your data, no system is 100% secure. We cannot
          guarantee complete security of information transmitted electronically.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">4. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties.
          Information may be shared only with trusted service providers who assist us
          in operating our business, and only under confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">5. Cookies & Tracking</h2>
        <p className="mb-4">
          Our website may use cookies to enhance user experience, analyze traffic,
          and improve services. You can disable cookies through your browser settings,
          though some parts of the site may not function properly.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to request access, correction, or deletion of your personal
          data. You may also opt out of receiving promotional communications at any time.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">7. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party sites. FN Concepts is not responsible
          for the privacy practices or content of those external websites.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">8. Changes to Privacy Policy</h2>
        <p className="mb-4">
          FN Concepts may update this Privacy Policy from time to time. Any changes will be
          posted on this page with the updated effective date.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:  
          <br />
          <span className="font-semibold text-[#5651e5]">support@fnconcepts.com</span>
        </p>

        <p className="mt-10 text-gray-400 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default privacyPolicy;
