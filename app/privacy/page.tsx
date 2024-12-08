import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Effective from January 1, 2024
        </p>

        <div className="space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <p className="mb-4">
              At ExamAura we recognize that privacy is important. We do not rent, sell, or share personal information about you with other people or nonaffiliated companies except to provide products or services you&apos;ve requested, when we have your permission. You have rights under this Privacy Policy, and all business or personal information provided to ExamAura is on a voluntary basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Information We Collect and How We Use It
            </h2>
            <p className="mb-4">
              In order to provide our services, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-semibold">Information you provide</span> - We may ask you for personal information (such as your name, email address, phone number and company) for certain services that we provide through our website.
              </li>
              <li>
                <span className="font-semibold">Cookies</span> - When you visit ExamAura, we may send one or more cookies to your computer that uniquely identifies your browser. We use these cookies to improve our service quality by storing user preferences and tracking user trends.
              </li>
              <li>
                <span className="font-semibold">Log information</span> - Our servers automatically record information that your browser sends whenever you visit our website, including your web request, IP address, browser type, and language.
              </li>
              <li>
                <span className="font-semibold">User communications</span> - We may retain communications you send to ExamAura to process inquiries and improve our services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Information Sharing
            </h2>
            <p className="mb-4">
              ExamAura only shares personal information with other companies or individuals outside of ExamAura in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>We have your consent</li>
              <li>We provide information to trusted partners who work on behalf of ExamAura under confidentiality agreements</li>
              <li>We need to comply with legal requirements or protect against potential harm</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Information Security
            </h2>
            <p className="mb-4">
              We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Accessing and Updating Personal Information
            </h2>
            <p className="mb-4">
              When you need to update your personal information, please contact us and we will make good faith efforts to correct this data if it is inaccurate or delete such data at your request if it is not otherwise required to be retained by law or for legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="mb-4">
              Please note that this Privacy Policy may change from time to time. We will not reduce your rights under this Policy without your explicit consent, and we expect most such changes will be minor. We will post any Policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about this Policy, please feel free to contact us at any time through this website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy; 