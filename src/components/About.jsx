import { motion } from "framer-motion";
import {
  Shield,
  Download,
  ChevronRight,
  Clock,
  Server,
  Award,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Blurry Ball Background Component
const BlurryBallsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blue gradient in the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>

      {/* Blurry balls/spheres */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-400 opacity-20 blur-3xl"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [-100, 50, -50],
          y: [-100, 50, -50],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"
        initial={{ right: -100, top: 300 }}
        animate={{
          right: [-100, 50, -50],
          top: [300, 400, 350],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl"
        initial={{ left: "50%", bottom: -100 }}
        animate={{
          left: ["50%", "40%", "60%"],
          bottom: [-100, 50, -50],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-300 opacity-20 blur-3xl"
        initial={{ right: "20%", top: "20%" }}
        animate={{
          right: ["20%", "25%", "15%"],
          top: ["20%", "25%", "15%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 px-4 relative overflow-hidden" id="about">
        <BlurryBallsBackground />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              DownloadGuru: Your All-in-One Online Downloader
            </h3>

            <p className="text-gray-700 mb-6">
              <span className="font-semibold">
                Save time and watch offline!
              </span>{" "}
              DownloadGuru.com is your one-stop platform for downloading photos,
              videos, and audio from all your favorite websites.
            </p>

            <div className="mb-8">
              <h4 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
                <Shield className="text-blue-600 mr-2" size={20} />
                Simple & Secure:
              </h4>
              <p className="text-gray-700">
                Our user-friendly platform makes downloading a breeze. Just copy
                and paste the URL of the content you want, and we'll handle the
                rest. Plus, your privacy is our top priority. We don't store any
                downloaded files on our servers.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Unbeatable Features:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">
                      Download from Anywhere:
                    </span>{" "}
                    DownloadGuru supports over 40+ platforms, including popular
                    social media sites like Instagram, TikTok, Facebook, and
                    YouTube.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">Multiple Formats:</span>{" "}
                    Choose from a variety of download formats, including MP4,
                    3GP, MP3, M4A, WEBM for videos and JPG, PNG, WEBP for
                    photos.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">
                      High-Quality Downloads:
                    </span>{" "}
                    Enjoy your favorite content in stunning quality, with
                    options for 8K, 4K, QHD, 1080p, and more on YouTube
                    downloads.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">Convert to MP3:</span>{" "}
                    Extract audio from videos and save them as MP3 files for
                    easy listening.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">Unlimited Downloads:</span>{" "}
                    Download as much as you want, whenever you want. No
                    limitations, no registration required.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">Blazing-Fast Speeds:</span>{" "}
                    Download your content at the highest possible speeds for a
                    seamless experience.
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                    size={18}
                  />
                  <div>
                    <span className="font-semibold">24/7 Support:</span> Our
                    dedicated team is always here to help with any questions you
                    may have.
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              How DownloadGuru.com Can Enhance Your Life
            </h3>

            <p className="text-gray-700 mb-6">
              DownloadGuru.com is a versatile online tool designed to streamline
              your content consumption experience. With our powerful platform,
              you can effortlessly download videos, photos, and audio from a
              wide range of popular social media platforms like Instagram,
              TikTok, Facebook, and YouTube.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Key Benefits of Using DownloadGuru.com:
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <Clock className="text-blue-600 mr-2" size={20} />
                  <h5 className="font-semibold">Save Time and Effort</h5>
                </div>
                <p className="text-sm text-gray-700">
                  Download your favorite content directly to your device without
                  the hassle of complicated procedures.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <Download className="text-blue-600 mr-2" size={20} />
                  <h5 className="font-semibold">Enjoy Offline Access</h5>
                </div>
                <p className="text-sm text-gray-700">
                  Enjoy your downloaded content anytime, anywhere, even without
                  an internet connection.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <Server className="text-blue-600 mr-2" size={20} />
                  <h5 className="font-semibold">
                    Build Your Personal Collection
                  </h5>
                </div>
                <p className="text-sm text-gray-700">
                  Curate your own collection of videos, photos, and audio files
                  for future reference or enjoyment.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <Award className="text-blue-600 mr-2" size={20} />
                  <h5 className="font-semibold">User-Friendly Interface</h5>
                </div>
                <p className="text-sm text-gray-700">
                  Our intuitive platform makes downloading a breeze, even for
                  beginners.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Discover the Power of DownloadGuru.com
              </h4>
              <p className="text-gray-700">
                Experience the convenience and efficiency of DownloadGuru.com.
                Download your favorite content, enjoy offline access, and
                simplify your digital life. Start using DownloadGuru.com today
                and unlock a world of possibilities!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;



