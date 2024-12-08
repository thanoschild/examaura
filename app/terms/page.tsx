import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Effective from January 1, 2024
        </p>

        <div className="space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Disclaimer
            </h2>
            <p className="mb-4">
              Please read these terms and conditions carefully. By accessing ExamAura, you acknowledge that you have read and agree to be bound by these terms and conditions. Your agreement shown by accessing and using this website is legally binding. If you do not agree to all these terms and conditions, please do not access this website.
            </p>
            <p className="mb-4">
              ExamAura and its affiliates may change these terms and conditions, and you are responsible for regularly reviewing and complying with them. Your continued use of this website constitutes your agreement to all these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Service Description
            </h2>
            <p className="mb-4">
              ExamAura is an online testing and education service that carries out assessment of subscribers and provides guidance and analysis of their performance. A poor score in such assessment is not meant to discourage the Subscriber or indicate likely results in any actual examination. Similarly, a high score does not guarantee success in subsequent examinations. ExamAura accepts no liability on this account.
            </p>
            <p className="mb-4">
              The information provided on this Site is on "as is" basis. Though every care has been taken to provide correct and up-to-date information, ExamAura does not warrant the accuracy, completeness and timely availability of the information provided on the Site and accepts no responsibility or liability for any error or omission in any information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              User Account Responsibilities
            </h2>
            <p className="mb-4">
              Subscribers will be provided with a unique User ID and password. You are entirely responsible for maintaining the confidentiality of your password and account. You must ensure that you exit from your account at the end of each session by signing out. ExamAura takes no responsibility for any unauthorized use of your account.
            </p>
            <p className="mb-4">
              You agree to immediately notify us of any unauthorized use of your password or account or any other breach of security. You agree to provide current, complete, and accurate registration information and to maintain and update this information as required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Intellectual Property Rights
            </h2>
            <p className="mb-4">
              All content, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of ExamAura or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of ExamAura.
            </p>
            <p className="mb-4">
              Any copy and/or reproduction in any form will amount to infringement of copyright laws and international treaty provisions. You must not republish, sell, rent, or sub-license material from the website, reproduce, duplicate or copy any material from the website, or redistribute content from ExamAura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="mb-4">
              Under no circumstances will ExamAura be liable for any damages, including but not limited to loss of data, lost time or opportunities, profits, or for any direct, indirect, incidental, consequential, special or exemplary damages arising from the subject matter of this agreement, regardless of the type of claim and even if ExamAura has been advised of the possibility of such damages.
            </p>
            <p className="mb-4">
              ExamAura offers no warranty that the contents of the Site are free from viruses or any other infection which has contaminating or destructive properties. The Site provides links to other websites hosted by third parties over which the Site has no control. ExamAura accepts no responsibility for their content or any loss arising from their use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Governing Law
            </h2>
            <p className="mb-4">
              This Agreement shall be governed by the Laws of India. The Courts of law at New Delhi shall have exclusive jurisdiction over any disputes arising under this Agreement. These Terms of Service constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior agreements.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms; 