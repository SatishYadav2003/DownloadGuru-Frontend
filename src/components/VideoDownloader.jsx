import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardCopy, Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import BlurryBallsBackground from "./BlurryBallsBackground";
import toast from "react-hot-toast";
import axios from "axios";
import VideoResultModal from "./VideoResultModal";
import { VITE_PYTHON_BACKEND_BASE_URL } from "../../config/configuration.js";

const resources = [
  {
    name: "Facebook.com",
    icon: <FaFacebook className="text-blue-600" />,
    url: "#",
  },
  {
    name: "Instagram.com",
    icon: <FaInstagram className="text-orange-500" />,
    url: "#",
  },
  { name: "TikTok.com", icon: <FaTiktok className="text-black" />, url: "#" },
  {
    name: "YouTube.com",
    icon: <FaYoutube className="text-red-500" />,
    url: "#",
  },
];

function VideoDownloader() {
  const mainRef = useRef(null);
  const supportRef = useRef(null);
  const [url, setUrl] = useState("");
  const [resultData, setResultData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const isMainInView = useInView(mainRef, { once: true, margin: "-100px" });
  const isSupportInView = useInView(supportRef, {
    once: true,
    margin: "-100px",
  });

  const bottomToTop = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const fadeUpDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
    },
  };

  const isValidYouTubeUrl = (link) => {
    const pattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}/;
    return pattern.test(link);
  };

  const handleDownload = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      toast.error("Please enter a valid URL.");
      return;
    }

    if (!isValidYouTubeUrl(url)) {
      toast.error("Please enter a valid YouTube link.");
      return;
    }

    toast.loading("Processing link...", { id: "loader" });

    try {
      const res = await axios.post(
        `${VITE_PYTHON_BACKEND_BASE_URL}/api/download`,
        {
          url,
        }
      );

      toast.success("Download link generated!", { id: "loader" });
      console.log("Response:", res.data);
      setResultData(res.data); // store response
      setShowModal(true);
    } catch (err) {
      toast.error("Failed to process the video.", { id: "loader" });
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4 relative overflow-hidden pt-10"
      id="videoDownload"
    >
      {/* Add the blurry balls background */}
      <BlurryBallsBackground />

      {/* Main Card - with relative z-index to appear above the background */}
      <motion.div
        ref={mainRef}
        className="w-full max-w-xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 border border-blue-300 relative z-10"
        variants={bottomToTop}
        initial="hidden"
        animate={isMainInView ? "visible" : "hidden"}
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 max-md:w-18 max-sm:w-15 h-20 max-md:h-18 max-sm:h-15 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <Download className="text-white" size={32} />
        </div>

        <h1 className="text-3xl font-semibold text-gray-900 text-center tracking-tight mt-6">
          Free Online Video Downloader
        </h1>

        <p className="text-lg text-gray-700 text-center">
          Download Photo & Video and save from any website.
        </p>

        <form
          className="w-full flex flex-col sm:flex-row gap-3"
          onSubmit={handleDownload}
        >
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <ClipboardCopy className="text-blue-600" size={22} />
            </span>
            <input
              type="text"
              placeholder="Paste the Link here"
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-300 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900 transition"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 sm:px-6 px-2 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all cursor-pointer"
          >
            <Download size={20} /> Download
          </button>
        </form>

        <div className="w-full mt-4 p-4 bg-blue-50 rounded-xl border border-blue-300">
          <h3 className="text-sm font-medium text-blue-800 mb-2">
            How it works:
          </h3>
          <ol className="text-sm text-gray-700 list-decimal pl-4 space-y-1">
            <li>Paste the URL of the video you want to download</li>
            <li>Click the Download button and wait for processing</li>
            <li>Choose your preferred quality and format</li>
            <li>Save the video to your device</li>
          </ol>
        </div>

        <p className="text-xs text-gray-600 text-center">
          By using our service you accept our{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </motion.div>

      {/* Supported Platforms with fade-in + delay - with z-index to appear above background */}
      <motion.div
        ref={supportRef}
        className="mt-10 w-full max-w-xl flex flex-col items-center relative z-10"
        variants={fadeUpDelayed}
        initial="hidden"
        animate={isSupportInView ? "visible" : "hidden"}
      >
        <span className="text-base font-semibold text-blue-700 mb-4">
          Supported Platforms
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          {resources.map((res) => (
            <a
              key={res.name}
              href={res.url}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 shadow-md hover:bg-blue-50 duration-300 transition-all text-base font-medium border border-blue-300"
            >
              {res.icon}
              {res.name}
            </a>
          ))}
        </div>
      </motion.div>
      {showModal && (
        <VideoResultModal
          data={resultData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default VideoDownloader;
