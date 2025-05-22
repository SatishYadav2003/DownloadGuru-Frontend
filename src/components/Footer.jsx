import { motion } from "framer-motion";
import BlurryBallsBackground from "./BlurryBallsBackground";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <BlurryBallsBackground />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center">
          {/* Logo + Description */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                <img src="guru.png" alt="logo" width={35} />
              </div>
              <h2 className="text-xl font-semibold">DownloadGuru.com</h2>
            </div>
            <p className="text-gray-600 text-center md:text-left">
              Online video downloader that helps you save videos, photos, and
              audio from popular social media platforms.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-blue-200 pt-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DownloadGuru.com — All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
