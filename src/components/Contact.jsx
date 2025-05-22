import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle, CheckCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlurryBallsBackground from "./BlurryBallsBackground";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    // Simulate async submission
    setTimeout(() => {
      // Here you would do your real API call
      setSubmitStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <section className="py-16 px-4 relative overflow-hidden">
        <BlurryBallsBackground />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions or need assistance? We're here to help! Fill out the
            form below or reach out through one of our contact channels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2  border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white cursor-pointer"
                    required
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Business Proposal">Business Proposal</option>
                    <option value="Report a Bug">Report a Bug</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className={`cursor-pointer flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition ${
                    submitStatus === "submitting"
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  {submitStatus === "submitting" && (
                    <Send size={16} className="animate-spin" />
                  )}
                  {submitStatus === "success" && <CheckCircle size={16} />}
                  {submitStatus === "error" && <AlertCircle size={16} />}
                  {submitStatus === "idle" && "Send Message"}
                  {submitStatus === "submitting" && "Sending..."}
                  {submitStatus === "success" && "Sent!"}
                  {submitStatus === "error" && "Error"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
