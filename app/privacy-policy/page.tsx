import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At Linkey, we value and respect your privacy. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our Saas-based URL Shortener service. By using our
          service, you consent to the terms outlined in this policy.
        </p>

        <p className="mb-4">
          We collect limited personal information, such as your email address,
          when you create an account or interact with our service. This
          information is used solely for providing and improving our service and
          will not be shared with third parties without your consent.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Information We Collect
        </h1>
        <p className="mb-4">
          1.1 Personal Information:
          <br /> When you create an account or interact with our service, we may
          collect certain personal information, such as your email address. This
          information is voluntarily provided by you and is used solely for the
          purpose of providing and improving our service.
          <br />
          <br />
          1.2 Log Data:
          <br /> Like many websites and services, we automatically collect
          certain information when you access or use our service. This
          information may include your IP address, browser type, operating
          system, referring/exit pages, and other usage details. We use this
          information to analyze trends, administer our service, track users'
          movements, and gather demographic information for aggregate use.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Use of Information
        </h1>
        <p className="mb-4">
          2.1 Personal Information: We use the personal information you provide
          to us for the following purposes:
          <br />
          <br />
          • To create and manage your account.
          <br />
          • To communicate with you regarding our service, including updates,
          announcements, and notifications.
          <br />
          • To respond to your inquiries, comments, or questions.
          <br />
          <br />
          2.2 Log Data: We use the log data collected to analyze trends, track
          usage patterns, monitor the performance of our service, and improve
          its functionality and user experience.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Information Sharing and Disclosure
        </h1>
        <p className="mb-4">
          3.1 Third-Party Service Providers: We may engage trusted third-party
          service providers to perform various functions on our behalf. These
          providers may have access to your personal information only to the
          extent necessary to perform their tasks and are obligated not to
          disclose or use it for any other purpose. <br />
          <br />
          3.2 Legal Requirements: We may disclose your personal information if
          required to do so by law or in response to valid legal requests, such
          as subpoenas, court orders, or government regulations.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Data Security
        </h1>
        <p className="mb-4">
          We are committed to protecting the security of your personal
          information and take reasonable precautions to prevent unauthorized
          access, disclosure, or alteration. However, please note that no method
          of transmission over the internet or electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Third-Party Links
        </h1>
        <p className="mb-4">
          Our service may contain links to third-party websites or services. We
          are not responsible for the privacy practices or the content of such
          websites or services. We encourage you to review the privacy policies
          of those third parties before providing any personal information or
          engaging in any transactions.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Children's Privacy
        </h1>
        <p className="mb-4">
          Our service is not intended for use by individuals under the age of
          13. We do not knowingly collect personal information from children
          under 13. If you become aware that a child has provided us with
          personal information without parental consent, please contact us, and
          we will take steps to remove such information from our systems.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Changes to the Privacy Policy
        </h1>
        <p className="mb-4">
          We reserve the right to modify or update this Privacy Policy at any
          time. Any changes will be effective upon posting the revised policy on
          our website. We encourage you to review this Privacy Policy
          periodically for any updates.
        </p>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h1>
        <p className="mb-4">
          If you have any questions, concerns, or suggestions regarding this
          Privacy Policy or our data practices, please contact us at{" "}
          <a className="underline" href="mailto:connect@antrikshdev.tech">
            connect@antrikshdev.tech
          </a>
          ..
        </p>
        <p className="mb-4">
          This Privacy Policy was last updated on 10-07-2023.
        </p>

        {/* Add more content and sections as needed */}

        <div className="mt-8">
          <Link className="text-blue-500 hover:text-blue-700" href="/">
            {/* <a >Back to Home</a> */}
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
