import Link from "next/link";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Terms of Use
        </h1>
        <p className="mb-4">
          Please read these Terms of Use ("Terms") carefully before using
          Linkey, our Saas-based URL Shortener service. These Terms outline the
          rules and guidelines for using Linkey.
        </p>

        <p className="mb-4">
          By accessing or using Linkey, you agree to be bound by these Terms. If
          you disagree with any part of these Terms, you may not access or use
          our service.
        </p>

        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Use of Service
          </h1>
          a. Linkey is provided for personal and non-commercial use. You may not
          use our service for any illegal or unauthorized purpose. <br />
          b. You agree to use Linkey in compliance with all applicable laws and
          regulations.
          <br />
          c. You are solely responsible for the URLs you input into Linkey. You
          must ensure that the URLs you shorten do not violate any intellectual
          property rights, contain malicious content, or violate any laws.
        </p>

        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Account Creation
          </h1>
          a. Creating an account is not required to use Linkey. However, certain
          features or functionalities may require account registration.
          <br /> b. When creating an account, you must provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your account credentials and are liable for any
          activities that occur under your account.
        </p>
        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          a. We respect your privacy and handle your personal information in
          accordance with our Privacy Policy. By using Linkey, you consent to
          the collection, use, and disclosure of your information as described
          in the Privacy Policy.
        </p>
        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Intellectual Property
          </h1>
          a. All intellectual property rights, including copyrights, trademarks,
          and logos, associated with Linkey are the property of our company.
          <br />
          b. You may not modify, reproduce, distribute, or create derivative
          works based on Linkey or any part thereof without our prior written
          consent.
        </p>
        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Limitation of Liability
          </h1>
          a. Linkey is provided on an "as is" and "as available" basis. We make
          no warranties or representations, express or implied, regarding the
          reliability, accuracy, or availability of our service.
          <br /> b. We shall not be liable for any direct, indirect, incidental,
          consequential, or exemplary damages arising out of your use of Linkey.
        </p>
        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Changes to Terms of Use
          </h1>
          a. We reserve the right to modify or update these Terms at any time.
          The updated Terms will be effective upon posting on our website.
          <br /> b. It is your responsibility to review these Terms
          periodically. By continuing to use Linkey after any modifications or
          updates, you agree to be bound by the revised Terms.
        </p>
        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Termination
          </h1>
          a. We may terminate or suspend your access to Linkey at any time and
          without prior notice if we believe you have violated these Terms.
          <br /> b. Upon termination, all provisions of these Terms that by
          their nature should survive termination will remain in effect.
        </p>
        <p className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Governing Law
          </h1>
          a. These Terms shall be governed by and construed in accordance with
          the laws of [Jurisdiction]. Any disputes arising out of or relating to
          these Terms shall be subject to the exclusive jurisdiction of the
          courts of [Jurisdiction].
        </p>
        <p className="mb-4">
          If you have any questions or concerns regarding these Terms, please
          contact us at{" "}
          <a className="underline" href="mailto:connect@antrikshdev.tech">
            connect@antrikshdev.tech
          </a>
          .
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

export default TermsOfUse;
