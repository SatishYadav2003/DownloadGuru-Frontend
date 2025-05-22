import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurryBallsBackground from "./BlurryBallsBackground";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is DownloadGuru free?",
      answer: (
        <p>
          Completely free! You can download any videos, audio, photo without
          register, login to your account or pay for downloads.
        </p>
      ),
    },
    {
      question: "Where is my videos stored after downloading?",
      answer: (
        <p>
          Videos are usually stored in the <strong>"Downloads"</strong> folder
          on <strong>Android Mobile</strong> and <strong>PC</strong> and{" "}
          <strong>Photos App</strong> on <strong>iOS</strong>.
        </p>
      ),
    },
    {
      question: "Does DownloadGuru store downloaded assets?",
      answer: (
        <p>
          No! DownloadGuru does not store any videos, audios, photo and download
          history on its server. We provide privacy for our users.
        </p>
      ),
    },
    {
      question: "Can I use DownloadGuru on PC or mobile?",
      answer: (
        <p>
          Yes, it can be accessed from any computer or mobile device with an
          internet connection. Simply go to DownloadGuru.com in your browser.
        </p>
      ),
    },
    {
      question:
        "Is there a limit on the number of videos that can be downloaded?",
      answer: (
        <p>
          No! You can download as many videos as you wish using
          DownloadGuru.com.
        </p>
      ),
    },
    {
      question: "How to download videos online?",
      answer: (
        <div>
          <p className="mb-2">Snapping 1, 2, 3:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Copy an video URL from any website you want.</li>
            <li>
              Go back to DownloadGuru.com and paste it into the field, and press
              Download
            </li>
            <li>
              Shortly, you will see the results, pick the quality you need, and
              download.
            </li>
          </ol>
          <p className="mt-3">
            Read about how to download from each website:{" "}
            <a
              href="#how-to-download"
              className="text-blue-600 hover:underline"
            >
              How to Download?
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden" id="faq">
      <BlurryBallsBackground />

      {/* Main FAQ Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FAQs
        </motion.h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-blue-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-blue-200 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none group cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-800 flex-1 ">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  } w-6 h-6 flex-shrink-0`}
                />
              </button>

              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="text-gray-600 pt-2">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
