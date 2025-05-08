import { Footer } from "../Footer/Footer";

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Terms of Service & Privacy Policy
        </h1>

        <section className="space-y-12">
          {/* Terms of Service Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Terms of Service
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              By accessing and using this website, you agree to the following
              terms and conditions. If you do not agree with these terms, you are
              prohibited from using the website.
            </p>

            <ul className="list-inside list-disc text-lg text-gray-600">
              <li className="mb-4">
                <strong>1. User Responsibilities:</strong> Users are responsible for
                ensuring the information they provide is accurate and truthful.
              </li>
              <li className="mb-4">
                <strong>2. Prohibited Activities:</strong> Users must refrain from
                engaging in illegal activities, including but not limited to
                hacking, spamming, or distributing malware.
              </li>
              <li className="mb-4">
                <strong>3. Liability:</strong> We are not liable for any damages or
                losses resulting from the use of this site.
              </li>
              <li className="mb-4">
                <strong>4. Modification of Terms:</strong> We reserve the right to
                update or modify the terms at any time. Changes will be effective as
                soon as they are posted.
              </li>
            </ul>
          </div>

          {/* Separator */}
          <hr className="border-t-2 border-gray-300 my-8" />

          {/* Privacy Policy Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Privacy Policy
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Your privacy is important to us. This Privacy Policy outlines how we
              collect, use, and protect your personal information.
            </p>

            <ul className="list-inside list-disc text-lg text-gray-600">
              <li className="mb-4">
                <strong>1. Information Collection:</strong> We collect information
                when you use our services, such as your name, email address, and
                usage data.
              </li>
              <li className="mb-4">
                <strong>2. Use of Information:</strong> The information we collect
                is used to provide and improve our services, respond to inquiries,
                and send updates.
              </li>
              <li className="mb-4">
                <strong>3. Data Security:</strong> We implement appropriate security
                measures to protect your personal data from unauthorized access,
                alteration, or destruction.
              </li>
              <li className="mb-4">
                <strong>4. Sharing Information:</strong> We do not sell, trade, or
                rent your personal information to third parties.
              </li>
              <li className="mb-4">
                <strong>5. Cookies:</strong> We may use cookies to enhance your
                experience on our site. You can opt-out of cookies through your
                browser settings.
              </li>
            </ul>
          </div>
        </section>

        {/* Separator */}
        <hr className="border-t-2 border-gray-300 my-8" />
      </div>

      {/* Footer Section Outside Content */}
      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;
