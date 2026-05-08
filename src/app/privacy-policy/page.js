export const metadata = {
  title: "Privacy Policy | Serene Heights Nathia Gali",
  description:
    "Privacy policy for Serene Heights Nathia Gali resort and real estate enquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-6 md:px-16 lg:px-36 py-20 text-[#222222]">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#37584F] inter">
          Serene Heights Nathia Gali
        </p>
        <h1 className="sm:text-5xl text-4xl font-bold text-[#37584F] gravesendSans mt-4">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[#475467] inter">
          Last updated: May 8, 2026
        </p>
      </div>

      <div className="mt-12 space-y-10 inter">
        <section className="bg-[#F3F2ED] rounded-2xl p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Overview
          </h2>
          <p className="mt-4">
            Serene Heights Nathia Gali is committed to protecting your privacy.
            This policy explains how we collect, use, and safeguard your
            information when you visit our website or submit an enquiry for our
            resort and real estate offerings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Information We Collect
          </h2>
          <p className="mt-4">
            We collect information to respond to your requests and improve the
            Serene Heights experience. This may include:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Contact details such as name, email, phone number, and city.</li>
            <li>Enquiry details like your interest area and preferences.</li>
            <li>Basic usage data such as browser type, pages viewed, and device information.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            How We Use Your Information
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>Respond to enquiries and provide requested information.</li>
            <li>Share updates about Serene Heights developments and offerings.</li>
            <li>Improve website content, layout, and user experience.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Information Sharing
          </h2>
          <p className="mt-4">
            We do not sell your personal information. We may share data with
            trusted service providers who assist with website operations and
            communications, or when required by law.
          </p>
        </section>

        <section className="bg-[#F3F2ED] rounded-2xl p-6 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Cookies and Analytics
          </h2>
          <p className="mt-4">
            We use cookies and analytics tools to understand website usage and
            improve performance. You can adjust your browser settings to manage
            cookies, but some features may not function properly without them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Data Retention and Security
          </h2>
          <p className="mt-4">
            We retain your information only as long as necessary for the purposes
            outlined here. We use reasonable administrative and technical
            safeguards to protect your data, but no system is completely secure.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Your Choices
          </h2>
          <p className="mt-4">
            You may request access, corrections, or deletion of your personal
            information by contacting us. We will respond within a reasonable
            timeframe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#37584F] gravesendSans">
            Contact Us
          </h2>
          <p className="mt-4">
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-4 space-y-1">
            <p>Phone: 042-111-111-744</p>
            <p>Phone: +92 300 8497999</p>
            <p>Email: info@sereneheightsnathiagali.com</p>
          </div>
        </section>

        <section className="text-sm text-[#475467]">
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated date.
          </p>
        </section>
      </div>
    </div>
  );
}
