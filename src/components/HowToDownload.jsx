import { motion } from "framer-motion"
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa"
import { Copy, Download, Link } from "lucide-react"
import BlurryBallsBackground from "./BlurryBallsBackground"

const steps = [
  {
    title: "Copy the Video URL",
    description:
      "Find the video or photo you want to download and copy the URL from social medias such as TikTok, Facebook, Instagram, YouTube etc.",
    image: (
      <div className="relative flex flex-col items-start gap-3 w-full max-w-sm md:max-w-md">
        <div className="flex gap-4 text-2xl md:text-3xl">
          <FaFacebook className="text-blue-600" />
          <FaTiktok className="text-black" />
          <FaInstagram className="text-blue-500" />
          <FaYoutube className="text-red-600" />
        </div>
        <div className="flex items-center bg-white rounded-xl shadow-md px-4 py-3 mt-3 w-full border border-blue-300">
          <Link className="text-blue-600 mr-3" size={20} />
          <span className="flex-1 text-gray-700 text-sm truncate">https://instagram.com/reel/PQj3F...</span>
          <button className="cursor-pointer ml-3 px-3 md:px-4 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700 flex items-center gap-1 shadow-md transition whitespace-nowrap">
            <Copy size={16} /> Copy Link
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Paste Link & Download",
    description: 'Visit DownloadGuru.com and paste the URL into the input field. Click the "Download" button.',
    image: (
      <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col items-center w-full max-w-sm md:max-w-md border border-blue-300">
        <div className="mb-3 text-blue-700 font-semibold text-sm md:text-base">DownloadGuru.com</div>
        <div className="flex items-center rounded-lg overflow-hidden border border-blue-300 w-full relative">
          <input
            className="px-3 py-3 text-sm md:text-base text-gray-900 focus:outline-none w-full"
            placeholder="Paste the Link here"
            disabled
          />
          <button className="cursor-pointer bg-blue-600 text-white px-3 md:px-4 py-3 absolute right-0 hover:bg-blue-700 flex items-center font-semibold transition rounded-md whitespace-nowrap">
            <Download size={18} />
            <span className="ml-1 hidden md:inline">Download</span>
          </button>
        </div>
        <button className="cursor-pointer mt-4 px-5 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
          Paste Link
        </button>
      </div>
    ),
  },
  {
    title: "Save your File. Enjoy!",
    description: "Your downloaded content is ready and will be saved in your device's designated download folder.",
    image: (
      <div className="relative w-full max-w-sm md:max-w-md h-28 mt-6 mx-auto">
        {/* Common container with relative positioning */}

        <motion.img
          src="first-image.webp"
          alt="Downloaded file 1"
          className="rounded-lg object-cover w-16 md:w-20 h-20 md:h-24 shadow absolute top-0 left-1/2 -translate-x-1/2"
          initial={{ x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ x: -60, y: -20, rotate: -15, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 0.7,
          }}
        />

        <motion.img
          src="second-image.jpeg"
          alt="Downloaded file 2"
          className="rounded-lg object-cover w-16 md:w-20 h-20 md:h-24 shadow absolute top-0 left-1/2 -translate-x-1/2"
          initial={{ x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ x: 0, y: -30, rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 1,
          }}
        />

        <motion.img
          src="third-image.jpeg"
          alt="Downloaded file 3"
          className="rounded-lg object-cover w-16 md:w-20 h-20 md:h-24 shadow absolute top-0 left-1/2 -translate-x-1/2"
          initial={{ x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ x: 60, y: -20, rotate: 15, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 1.3,
          }}
        />

        <button className="absolute bottom-3 max-md:bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 shadow hover:bg-blue-700 cursor-pointer text-xs md:text-sm whitespace-nowrap">
          <Download size={16} />
          DOWNLOAD
        </button>
      </div>
    ),
  },
]

function HowToDownload() {
  return (
    <section className="relative bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" id="how-to-download">
      {/* Add the blurry balls background */}
      <BlurryBallsBackground />

      {/* Your existing content with relative positioning to appear above the background */}
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          How To Download Videos Online?
        </motion.h2>
        <motion.p
          className="text-center max-w-xl mx-auto mb-14 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Download with DownloadGuru, which can quickly save videos in High Quality directly to your device. Follow
          these three easy steps to download videos online.
        </motion.p>

        <div className="space-y-16 sm:space-y-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, type: "spring", stiffness: 120 }}
            >
              <div className="md:w-1/2 mb-6 md:mb-0 px-2 md:px-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-extrabold text-blue-500">*</span>
                  <h3 className="text-xl sm:text-2xl font-semibold ">{step.title}</h3>
                </div>
                <p className=" text-base sm:text-lg leading-relaxed">{step.description}</p>
              </div>
              <div className="md:w-1/2 flex justify-center px-2 md:px-0">{step.image}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToDownload
