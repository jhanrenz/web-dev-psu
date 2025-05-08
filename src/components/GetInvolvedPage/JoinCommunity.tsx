import React, { useState, useEffect } from "react";

const JoinCommunity: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Load checkbox state from localStorage on mount
  useEffect(() => {
    const savedAgreed = localStorage.getItem("agreed");
    if (savedAgreed !== null) {
      setAgreed(JSON.parse(savedAgreed));
    }
  }, []);

  // Save checkbox state to localStorage on change
  useEffect(() => {
    localStorage.setItem("agreed", JSON.stringify(agreed));
  }, [agreed]);

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => setSuccessMessage(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const handleCheckboxChange = () => {
    setAgreed((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const discordMessage = {
      content: `🌿 **New Community Join Submission**\n**Name**: ${name}\n**Email**: ${email}\n**Message**: ${message}`
    };

    try {
      const response = await fetch("https://discordapp.com/api/webhooks/1369790495903191122/M812HU6zDAcjXl4pucbOkJSobaZo3SEwDBrzgjM_0VLdcLe_Hal7HQBAUe6ZqF0P2qJV", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(discordMessage)
      });

      if (response.ok) {
        setSuccessMessage("🎉 Thank you for joining! We've received your message.");
        form.reset();
        setAgreed(false);
        localStorage.removeItem("agreed");
      } else {
        console.error("Discord response error:", await response.text());
        alert("❌ Failed to send message to Discord.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("❌ Error sending message: " + error);
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/get_background.jpg')" }}>
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
        <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Join Our Community</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Start Your Eco-Friendly Journey 🌱</h2>
        <p className="text-white text-lg">
          Be part of a growing movement. Share your green goals and help us make the world more sustainable!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="p-8 rounded-xl shadow-xl bg-white w-full max-w-4xl">
          {successMessage && (
            <div className="mb-4 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800 shadow-md transition-opacity duration-300">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-300 rounded-lg p-3 text-gray-800" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded-lg p-3 text-gray-800" />
            <textarea name="message" placeholder="Your Eco Goals or Message" rows={4} required className="w-full border border-gray-300 rounded-lg p-3 text-gray-800"></textarea>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/get-involved" />

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <span>
                I have read and agree to the{" "}
                <button type="button" onClick={() => setShowModal(true)} className="underline text-green-600 hover:text-green-800">
                  terms and conditions
                </button>.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed}
              className={`w-full py-3 rounded-lg text-white font-semibold transition-all shadow-md hover:shadow-lg ${
                agreed ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">Terms and Conditions</h3>
            <p className="text-sm text-gray-600 space-y-2">
              By joining our community, you agree to provide accurate details and follow our community guidelines.
              <br />
              Respect others, avoid spam, and contribute to a positive, eco-conscious environment.
              <br />
              Your information will be kept private and used solely for community-related updates.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinCommunity;
