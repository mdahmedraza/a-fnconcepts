// components/TermsAndConditions.js
import Footer from "@/components/footer/Footer";
const termsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-gray-300 px-6 py-12">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5651e5] mb-6">
          Terms & Conditions
        </h1>
        <p className="mb-8">
          Welcome to <span className="font-semibold">FN Concepts</span>. By accessing 
          or using our website, products, or services, you agree to comply with the 
          following Terms and Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">1. Company Overview</h2>
        <p className="mb-4">
          FN Concepts is an Information Technology company providing services in 
          web development, mobile app development, custom software solutions, 
          Artificial Intelligence, SEO, and digital transformation consulting.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">2. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our services, you confirm that you are at least 18 years old and 
          legally capable of entering into a binding agreement. If you do not agree 
          with these terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">3. Services</h2>
        <p className="mb-4">
          Our services include but are not limited to website design & development, 
          mobile applications, AI-powered solutions, search engine optimization, 
          and IT consulting. The scope of each project will be defined in a 
          separate agreement or proposal.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">4. Intellectual Property</h2>
        <p className="mb-4">
          All content, logos, graphics, software, and materials provided by 
          FN Concepts remain the intellectual property of the company unless 
          otherwise stated. Clients retain rights to their own content delivered 
          for projects.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">5. Payment & Billing</h2>
        <p className="mb-4">
          Payments for services must be made as per the agreed schedule in the 
          proposal or invoice. Delayed payments may lead to suspension of services. 
          All fees are non-refundable unless otherwise specified.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">6. Limitation of Liability</h2>
        <p className="mb-4">
          FN Concepts is not responsible for any direct, indirect, incidental, or 
          consequential damages arising from the use of our services, including but 
          not limited to loss of data, profits, or business opportunities.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">7. Privacy</h2>
        <p className="mb-4">
          We respect your privacy. Any personal information you provide will be 
          handled according to our Privacy Policy and will not be shared with 
          third parties without your consent, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">8. Termination</h2>
        <p className="mb-4">
          FN Concepts reserves the right to suspend or terminate services at any 
          time in case of violation of these terms, non-payment, or misuse of our 
          services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">9. Governing Law</h2>
        <p className="mb-4">
          These Terms and Conditions shall be governed by and construed in 
          accordance with the laws of India. Any disputes will be subject to the 
          exclusive jurisdiction of the courts in India.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-3">10. Updates to Terms</h2>
        <p className="mb-4">
          FN Concepts reserves the right to update or modify these Terms and 
          Conditions at any time. Continued use of our services after such changes 
          will constitute acceptance of the revised terms.
        </p>

        <p className="mt-10 text-gray-400 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default termsAndConditions;
